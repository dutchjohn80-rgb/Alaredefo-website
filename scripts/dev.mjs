import { spawn } from 'node:child_process'

const commands = [
  { name: 'client', command: 'npm run dev:client', color: '\x1b[36m' },
  { name: 'server', command: 'npm run dev:server', color: '\x1b[32m' },
]

const children = []

function log(prefix, color, message) {
  process.stdout.write(`${color}[${prefix}]\x1b[0m ${message}`)
}

for (const item of commands) {
  const child = spawn(item.command, {
    shell: true,
    stdio: ['inherit', 'pipe', 'pipe'],
    env: process.env,
  })

  child.stdout.on('data', (data) => log(item.name, item.color, data.toString()))
  child.stderr.on('data', (data) => log(item.name, item.color, data.toString()))

  child.on('exit', (code) => {
    log(item.name, item.color, `process exited with code ${code}\n`)
    for (const running of children) {
      if (running !== child && !running.killed) {
        running.kill()
      }
    }
  })

  children.push(child)
}

function shutdown() {
  for (const child of children) {
    if (!child.killed) {
      child.kill()
    }
  }
  process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
