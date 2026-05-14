import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { Heart } from 'lucide-react'

const monthlyAmounts = [120_000, 100_000, 80_000, 70_000, 40_000, 25_000]
const oneTimeAmounts = [700_000, 250_000, 150_000, 120_000, 90_000, 70_000]

function formatTzs(value: number | string) {
  if (typeof value === 'number') {
    return value.toLocaleString('en-US')
  }
  return value
}

export function DonatePage() {
  const { language } = useAppContext()
  const location = useLocation()
  const isSw = language === 'sw'
  const [step, setStep] = useState<'select' | 'payment'>('select')
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'google' | 'bank'>('card')
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly')
  const [selectedAmount, setSelectedAmount] = useState<number>(70_000)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [dedicate, setDedicate] = useState(false)
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvc, setCardCvc] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const query = useMemo(() => new URLSearchParams(location.search), [location.search])
  const sourceParam = query.get('source')?.toLowerCase()
  const sourceTitle = query.get('title')

  const sourceInfo = useMemo(() => {
    if (sourceParam === 'climate') {
      return {
        heading: isSw ? 'Tabianchi na Mazingira' : 'Climate & Environment',
        description: isSw
          ? 'Mchango wako unasaidia miradi ya tabianchi na huduma za mazingira zinazolinda rasilimali za jamii.'
          : 'Your gift supports climate and environment initiatives that protect community resources and resilience.',
        image: '/images/portfolio/portfolio-portrait-5.jpeg',
        buttonLabel: isSw ? 'Changia Tabianchi' : 'Donate for climate',
      }
    }

    if (sourceParam === 'community') {
      return {
        heading: isSw ? 'Msaada wa Jamii' : 'Community Support',
        description: isSw
          ? 'Mchango wako unasaidia kusaidia familia na jamii kupitia huduma za uendelevu na uwajibikaji.'
          : 'Your support helps fund community support programs for resilient families and neighborhoods.',
        image: '/images/portfolio/portfolio-11.jpeg',
        buttonLabel: isSw ? 'Changia Jamii' : 'Donate for community',
      }
    }

    if (sourceParam === 'empowerment') {
      return {
        heading: isSw ? 'Uwezeshaji' : 'Empowerment',
        description: isSw
          ? 'Mchango wako unaweka nguvu kwa wanawake, vijana, na jamii kujenga uwezo na nafasi.'
          : 'Your gift empowers women, youth, and communities with skills, confidence, and opportunity.',
        image: '/images/portfolio/portfolio-3.jpeg',
        buttonLabel: isSw ? 'Changia Uwezeshaji' : 'Donate for empowerment',
      }
    }

    return {
      heading: isSw ? 'Msaada wa ALAREDEFO' : 'Support ALAREDEFO',
      description: isSw
        ? 'Chagua mchango unayopendelea ili kusaidia miradi ya maendeleo, ulinzi wa mazingira, na biashara za jamii.'
        : 'Choose your preferred gift to support development, environmental protection, and community livelihood programs.',
      image: '/images/portfolio/portfolio-3.jpeg',
      buttonLabel: isSw ? 'Changia Sasa' : 'Donate now',
    }
  }, [sourceParam, isSw])

  const bankDetails = useMemo(
    () => ({
      accountName: 'ALAVEMASI RELIEF AND DEVELOPMENT FOUNDATION (ALAREDEFO) TANZANIA',
      accountNumber: '057172000568',
      bankName: 'NBC Bank',
      branch: 'Tanzania',
      swift: 'N/A',
    }),
    [],
  )

  const amounts = frequency === 'monthly' ? monthlyAmounts : oneTimeAmounts
  const displayAmount = customAmount ? Number(customAmount.replace(/[^0-9]/g, '')) : selectedAmount

  const hasValidCard =
    cardName.trim().length > 1 &&
    /^\d{12,19}$/.test(cardNumber.replace(/\s/g, '')) &&
    /^\d{2}\/\d{2}$/.test(cardExpiry) &&
    /^\d{3,4}$/.test(cardCvc)

  const copyBankDetails = async () => {
    const text = `${bankDetails.bankName}\n${bankDetails.branch}\n${bankDetails.accountName}\n${bankDetails.accountNumber}`
    try {
      await navigator.clipboard.writeText(text)
      window.alert(isSw ? 'Maelezo ya benki yamekopiwa' : 'Bank details copied to clipboard')
    } catch {
      window.alert(isSw ? 'Haitaki kunakili. Tafadhali itumie kwa mkono.' : 'Unable to copy. Please copy manually.')
    }
  }

  const handlePaymentSubmit = () => {
    if (paymentMethod === 'card' && !hasValidCard) {
      window.alert(isSw ? 'Tafadhali jaza taarifa sahihi za kadi.' : 'Please enter valid card details.')
      return
    }

    setPaymentSuccess(true)
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] bg-slate-950/95 p-8 text-white shadow-2xl shadow-emerald-950/20">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-200">
            <Heart className="h-4 w-4 text-emerald-300" />
            {isSw ? 'Mchango Salama' : 'Secure donation'}
          </div>

          <div className="mt-10 space-y-6">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              {sourceTitle
                ? isSw
                  ? `Changia ${sourceTitle}`
                  : `Donate to ${sourceTitle}`
                : sourceInfo.heading}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              {sourceTitle
                ? sourceInfo.description
                : sourceInfo.description}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{isSw ? 'Nchi' : 'Country'}</p>
                <p className="mt-3 text-xl font-semibold">Tanzania</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{isSw ? 'Kundi' : 'Designation'}</p>
                <p className="mt-3 text-xl font-semibold">{isSw ? 'Mchango wa Jumla' : 'General donation'}</p>
              </div>
            </div>
            <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-slate-900">
              <img src={sourceInfo.image} alt={sourceInfo.heading} className="h-80 w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-300/20">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {isSw ? 'Anza hapa' : 'Start here'}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  {isSw ? 'Chagua njia ya kuchangia' : 'Choose a payment method'}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-2">
              {[
                { label: isSw ? 'Mara moja' : 'Give once', value: 'once' },
                { label: isSw ? 'Kila mwezi' : 'Monthly', value: 'monthly' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFrequency(option.value as 'once' | 'monthly')}
                  className={`cursor-pointer rounded-3xl border px-4 py-3 text-sm font-semibold transition focus:outline-none ${
                    frequency === option.value
                      ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                      : 'border-transparent bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {step === 'select' ? (
              <>
                <div className="grid gap-3 sm:grid-cols-3">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount('')
                      }}
                      className={`cursor-pointer rounded-3xl border px-4 py-3 text-sm font-semibold transition focus:outline-none ${
                        displayAmount === amount
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {formatTzs(amount)} K
                    </button>
                  ))}
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <label htmlFor="customAmount" className="block text-sm font-semibold text-slate-700">
                    {isSw ? 'Weka kiasi kingine' : 'Enter a custom amount'}
                  </label>
                  <div className="mt-3 flex items-center gap-3">
                    <input
                      id="customAmount"
                      type="text"
                      inputMode="numeric"
                      value={customAmount}
                      onChange={(event) => {
                        const rawValue = event.target.value.replace(/[^0-9]/g, '')
                        setCustomAmount(rawValue)
                      }}
                      placeholder={isSw ? 'Kiasi (TZS)' : 'Amount (TZS)'}
                      className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-lg font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    />
                    <span className="text-sm font-semibold text-slate-500">TZS</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                  <input
                    id="dedicate"
                    type="checkbox"
                    checked={dedicate}
                    onChange={() => setDedicate((prev) => !prev)}
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="dedicate" className="text-sm text-slate-700">
                    {isSw ? 'Nifanyie mchango huu' : 'Dedicate this donation'}
                  </label>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-slate-600">{isSw ? 'Jumla' : 'Total'}</p>
                    <p className="text-lg font-bold text-slate-900">{formatTzs(displayAmount)} TZS{frequency === 'monthly' ? '/month' : ''}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep('payment')}
                  className="cursor-pointer w-full rounded-3xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                >
                  {frequency === 'monthly'
                    ? isSw ? 'Changia kila mwezi' : 'Donate monthly'
                    : isSw ? 'Changia mara moja' : 'Donate once'}
                </button>
              </>
            ) : (
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{isSw ? 'Chagua njia ya malipo' : 'Choose a payment method'}</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {isSw
                      ? 'Chagua kwa urahisi kati ya kadi, Google Pay, au uhamisho wa benki.'
                      : 'Choose easily between card, Google Pay, or bank transfer.'}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      { key: 'card', label: isSw ? 'Kadi' : 'Credit card' },
                      { key: 'google', label: 'Google Pay' },
                      { key: 'bank', label: isSw ? 'Benki' : 'Bank transfer' },
                    ].map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => setPaymentMethod(option.key as 'card' | 'google' | 'bank')}
                        className={`cursor-pointer rounded-3xl border px-4 py-4 text-sm font-semibold transition focus:outline-none ${
                          paymentMethod === option.key
                            ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{isSw ? 'Jaza taarifa za kadi' : 'Enter card details'}</p>
                    </div>
                    <div className="grid gap-4">
                      <label className="block text-sm font-semibold text-slate-700">
                        {isSw ? 'Jina kwenye kadi' : 'Name on card'}
                        <input
                          value={cardName}
                          onChange={(event) => setCardName(event.target.value)}
                          placeholder={isSw ? 'Jina lako kama lilivyo kwenye kadi' : 'Your name as shown on card'}
                          className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                        />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        {isSw ? 'Namba ya kadi' : 'Card number'}
                        <input
                          value={cardNumber}
                          onChange={(event) => setCardNumber(event.target.value.replace(/[^0-9]/g, ''))}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          inputMode="numeric"
                          className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                        />
                      </label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          {isSw ? 'Tarehe ya kutokea' : 'Expiry'}
                          <input
                            value={cardExpiry}
                            onChange={(event) => setCardExpiry(event.target.value.replace(/[^0-9/]/g, ''))}
                            placeholder="MM/YY"
                            maxLength={5}
                            className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                          />
                        </label>
                        <label className="block text-sm font-semibold text-slate-700">
                          CVC
                          <input
                            value={cardCvc}
                            onChange={(event) => setCardCvc(event.target.value.replace(/[^0-9]/g, ''))}
                            placeholder="123"
                            maxLength={4}
                            inputMode="numeric"
                            className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'google' && (
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="mt-3 text-sm text-slate-600">
                      {isSw
                        ? 'Chagua Google Pay kwa malipo ya haraka kupitia simu yako au kivinjari.'
                        : 'Choose Google Pay for a fast payment using your phone or browser wallet.'}
                    </p>
                    <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
                      {isSw ? 'Bonyeza ili uendelee na Google Pay.' : 'Tap to continue with Google Pay.'}
                    </div>
                  </div>
                )}

                {paymentMethod === 'bank' && (
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{isSw ? 'Akaunti ya benki' : 'Bank account details'}</h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {isSw
                        ? 'Tuma malipo kwa akaunti hii ya NBC kwa kipindi hiki au usimamizi wa mchango.'
                        : 'Send payment to this NBC account for the organization donation.'}
                    </p>
                    <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                      <div>
                        <p className="font-semibold text-slate-900">{isSw ? 'Benki' : 'Bank'}</p>
                        <p>{bankDetails.bankName}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{isSw ? 'Tawi' : 'Branch'}</p>
                        <p>{bankDetails.branch}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{isSw ? 'Akaunti' : 'Account'}</p>
                        <p>{bankDetails.accountNumber}</p>
                      </div>
                    </div>
                    <div className="mt-4 rounded-3xl bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-500">{isSw ? 'Jina la Akaunti' : 'Account Name'}</p>
                      <p className="mt-1 font-semibold text-slate-900">{bankDetails.accountName}</p>
                    </div>
                    <button
                      type="button"
                      onClick={copyBankDetails}
                      className="mt-4 cursor-pointer w-full rounded-3xl border border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                    >
                      {isSw ? 'Nakili maelezo ya benki' : 'Copy bank details'}
                    </button>
                  </div>
                )}

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-slate-600">{isSw ? 'Jumla' : 'Total'}</p>
                    <p className="text-lg font-bold text-slate-900">{formatTzs(displayAmount)} TZS{frequency === 'monthly' ? '/month' : ''}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePaymentSubmit}
                  className="cursor-pointer w-full rounded-3xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                >
                  {paymentMethod === 'google'
                    ? isSw ? 'Endelea na Google Pay' : 'Continue with Google Pay'
                    : paymentMethod === 'bank'
                    ? isSw ? 'Tumia maelezo ya benki' : 'Use bank details'
                    : isSw
                    ? 'Thibitisha malipo ya kadi'
                    : 'Confirm card payment'}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('select')}
                  className="cursor-pointer w-full rounded-3xl bg-slate-900 px-6 py-4 text-base font-bold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
                >
                  {isSw ? 'Rudi kuchagua tena' : 'Edit donation details'}
                </button>
              </div>
            )}

            <p className="text-sm text-slate-500">
              {isSw
                ? 'Mchango wako unasaidia kufadhili miradi ya jamii, elimu, na afya kwa walio maskini Arusha na mikoa jirani.'
                : 'Your support helps fund community, education, and health programs for vulnerable people in Arusha and neighboring regions.'}
            </p>
          </div>
        </section>
      </div>
      {paymentSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <div className="w-full max-w-xl rounded-[2rem] bg-white p-8 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-white">
                ✓
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{isSw ? 'Malipo yamefanikiwa' : 'Payment Successful'}</h2>
                <p className="mt-3 text-sm text-slate-600">
                  {isSw
                    ? 'Mchango wako umepokelewa. Asante kwa kusaidia ALAREDEFO.'
                    : 'Your gift has been received. Thank you for supporting ALAREDEFO.'}
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-3xl bg-slate-50 p-5 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">{isSw ? 'Kiasi Kilicholipwa' : 'Amount paid'}</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{formatTzs(displayAmount)} TZS{frequency === 'monthly' ? '/month' : ''}</p>
              <p className="mt-4 text-sm text-slate-600">{isSw ? 'Taarifa hii ni uthibitisho wa malipo yako.' : 'This is a confirmation of your payment.'}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setPaymentSuccess(false)
                  setStep('select')
                  setPaymentMethod('card')
                }}
                className="cursor-pointer flex-1 rounded-3xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              >
                {isSw ? 'Rudi kwenye Mchango' : 'Back to donation'}
              </button>
              <button
                type="button"
                onClick={() => setPaymentSuccess(false)}
                className="cursor-pointer flex-1 rounded-3xl border border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                {isSw ? 'Funga' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
