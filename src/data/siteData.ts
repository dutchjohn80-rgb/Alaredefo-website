export const siteName = 'ALAREDEFO Tanzania'

export const organization = {
  fullName: 'ALAVEMASI Relief and Development Foundation (ALAREDEFO) Tanzania',
  registrationNumber: '00NGO/R/7231',
  registrationDate: '11 August 2024',
  email: 'alaredefo24@yahoo.com',
  phone: '+255769095036',
  website: 'https://www.alaredefo.org',
  poBox: 'P.O. Box 12986',
  region: 'Arusha',
  district: 'Arumeru',
  ward: 'Akheri',
  street: 'Nguruma',
  houseNumber: '116',
  nearby: 'Nguruma njiapanda',
}

export const preamble =
  'ALAREDEFO seeks to advocate for climate change, environmental degradation, food security and nutrition, women, youth and children protection and justice, poverty, illiteracy, diseases in order to ensure that the community is self-sufficient and have access to a reasonable standard of living and ultimately achieve socio-economic development.'

export const vision =
  'ALAREDEFO envisions a world where every individual, regardless of their circumstances, has access to the resources and opportunities necessary to thrive.'

export const mission =
  'Our mission is to provide comprehensive relief efforts, implement impactful development projects, and advocate for systemic change through strategic partnerships, capacity-building initiatives, and a people-centered approach. We strive to empower individuals, strengthen communities, and create lasting positive transformations.'

export const thematicAreas = [
  {
    title: 'Economic Empowerment',
    description:
      'Supporting livelihoods, microenterprise, and practical economic opportunities that strengthen self-reliance.',
  },
  {
    title: 'Educational Empowerment',
    description:
      'Promoting literacy, vocational training, skills development, and inclusive access to learning opportunities.',
  },
  {
    title: 'Psychological Empowerment',
    description:
      'Promoting dignity, resilience, mental well-being, and supportive environments for vulnerable people.',
  },
  {
    title: 'Political Empowerment',
    description:
      'Advocating for justice, civic participation, rights awareness, and stronger inclusion in public life.',
  },
  {
    title: 'Social Empowerment',
    description:
      'Strengthening social protection, community cohesion, and support for women, youth, and children.',
  },
]

export const objectives = [
  'Promote the achievement of sustainable development goals and the Africa We Want Agenda 2063.',
  'Empower the community with economic and social resources that unleash their capacities and liberate them from the entanglements of poverty and underdevelopment.',
  'Enhance the realization of cross-cutting issues.',
  'Raise awareness on self-supporting communities through creation of viable economic growth interventions like vocational trainings, skills development programmes, microenterprises and the microfinance sector.',
  'Establish charity profitable projects of the foundation so as to ensure sustainability of the projects and other services to the community.',
]

export const portfolioItems = [
  {
    slug: 'climate-awareness',
    filter: 'climate',
    title: 'Climate Awareness',
    category: 'Climate & Environment',
    description: 'Community engagement around environmental responsibility and climate action.',
    image: '/images/portfolio/portfolio-portrait-5.jpeg',
    details:
      'ALAREDEFO supports climate awareness initiatives that help communities understand environmental risks, adaptation needs, and practical stewardship of natural resources.',
  },
  {
    slug: 'relief-outreach',
    filter: 'community',
    title: 'Relief Outreach',
    category: 'Community Support',
    description: 'Supporting households and communities through responsive relief-focused initiatives.',
    image: '/images/portfolio/portfolio-11.jpeg',
    details:
      'Our relief outreach work focuses on responding to pressing community needs with dignity, timely support, and people-centered coordination.',
  },
  {
    slug: 'youth-and-women-empowerment',
    filter: 'empowerment',
    title: 'Youth and Women Empowerment',
    category: 'Empowerment',
    description: 'Strengthening participation, dignity, and opportunity for vulnerable groups.',
    image: '/images/portfolio/portfolio-3.jpeg',
    details:
      'This work area supports participation, confidence, skills, and opportunity for women and youth through advocacy, awareness, and empowerment activities.',
  },
  {
    slug: 'environmental-protection',
    filter: 'climate',
    title: 'Environmental Protection',
    category: 'Climate & Environment',
    description: 'Promoting sustainable practices that reduce degradation and protect shared resources.',
    image: '/images/portfolio/portfolio-4.jpeg',
    details:
      'ALAREDEFO promotes environmental protection by encouraging local responsibility, sustainable practices, and long-term care for shared community resources.',
  },
  {
    slug: 'community-resilience',
    filter: 'community',
    title: 'Community Resilience',
    category: 'Community Support',
    description: 'Building stronger, self-supporting communities through local participation and care.',
    image: '/images/portfolio/portfolio-portrait-8.jpeg',
    details:
      'Community resilience activities strengthen social support, preparedness, and self-supporting systems that help local families adapt and recover.',
  },
  {
    slug: 'skills-development',
    filter: 'empowerment',
    title: 'Skills Development',
    category: 'Empowerment',
    description: 'Equipping communities with practical skills for self-reliance and economic growth.',
    image: '/images/portfolio/portfolio-7.jpeg',
    details:
      'Skills development programs focus on practical learning, vocational pathways, and improved economic participation for sustainable self-reliance.',
  },
  {
    slug: 'food-security-support',
    filter: 'community',
    title: 'Food Security Support',
    category: 'Community Support',
    description: 'Encouraging nutrition awareness and sustainable responses to household food insecurity.',
    image: '/images/portfolio/portfolio-11.jpeg',
    details:
      'Food security initiatives promote household nutrition awareness, agricultural resilience, and equitable access to nutritious food resources.',
  },
  {
    slug: 'education-and-leadership',
    filter: 'empowerment',
    title: 'Education and Leadership',
    category: 'Empowerment',
    description: 'Opening pathways for literacy, leadership, awareness, and active participation.',
    image: '/images/portfolio/portfolio-7.jpeg',
    details:
      'Educational and leadership programs build literacy, confidence, and civic engagement for active community participation.',
  },
  {
    slug: 'sustainable-development-action',
    filter: 'climate',
    title: 'Sustainable Development Action',
    category: 'Climate & Environment',
    description: 'Linking local initiatives to long-term sustainability and responsible development goals.',
    image: '/images/portfolio/portfolio-4.jpeg',
    details:
      'Sustainable development efforts connect local action to global goals, ensuring lasting positive impact on communities and the environment.',
  },
]

export const membershipTypes = ['Honorary Members', 'Founder Members', 'Ordinary Members']

export interface NewsItem {
  id: string
  title: string
  titleSw: string
  excerpt: string
  excerptSw: string
  image: string
  date: string
  category: string
  categorySw: string
  attribution: string
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'ALAREDEFO Empowers Women Through Community Bicycle Initiative in Arusha',
    titleSw: 'ALAREDEFO Inawezesha Wanawake Kupitia Mpango wa Baiskeli Arusha',
    excerpt: 'ALAREDEFO continues to uplift women in northern Tanzania through practical skills, mobility programs, and economic empowerment that build lasting self-reliance.',
    excerptSw: 'ALAREDEFO inaendelea kuinua wanawake kaskazini mwa Tanzania kupitia ujuzi wa vitendo na uwezeshaji wa kiuchumi unaokuza kujitegemea.',
    image: 'https://images.pexels.com/photos/34185223/pexels-photo-34185223.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'April 2025',
    category: 'Women Empowerment',
    categorySw: 'Uwezeshaji wa Wanawake',
    attribution: 'Speak Media Uganda on Pexels',
  },
  {
    id: 'news-2',
    title: 'Youth Education Programs Reach Hundreds of Students in Arumeru District',
    titleSw: 'Programu za Elimu Zinafikia Wanafunzi Mia Kadhaa Wilayani Arumeru',
    excerpt: 'ALAREDEFO\'s educational empowerment initiative has supported access to quality learning for hundreds of young people across Arumeru and surrounding areas.',
    excerptSw: 'Mpango wa uwezeshaji wa elimu wa ALAREDEFO umesaidia ufikiaji wa elimu bora kwa vijana wengi katika Arumeru na maeneo jirani.',
    image: 'https://images.pexels.com/photos/32719717/pexels-photo-32719717.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'March 2025',
    category: 'Education',
    categorySw: 'Elimu',
    attribution: 'Saeed Chembea on Pexels',
  },
  {
    id: 'news-3',
    title: 'Food Security Initiative Supports Smallholder Farmers Across Northern Tanzania',
    titleSw: 'Mpango wa Usalama wa Chakula Unasaidia Wakulima Wadogo Kaskazini mwa Tanzania',
    excerpt: 'In partnership with local communities, ALAREDEFO supports smallholder farmers with agricultural knowledge, nutrition awareness, and sustainable food production practices.',
    excerptSw: 'Kwa ushirikiano na jamii za ndani, ALAREDEFO inasaidia wakulima wadogo kwa ujuzi wa kilimo na uzalishaji endelevu wa chakula.',
    image: 'https://images.pexels.com/photos/13042951/pexels-photo-13042951.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 2025',
    category: 'Food Security',
    categorySw: 'Usalama wa Chakula',
    attribution: 'Joseph K. Masonda on Pexels',
  },
]

export const testimonials = [
  {
    id: 't1',
    quote:
      'ALAREDEFO changed our village — they trained women in small business and helped us build a savings group that transformed our incomes.',
    name: 'Alfonce M.',
    role: 'Community Leader, Arusha',
image: '/images/portfolio/portfolio-portrait-5.jpeg',
  },
  {
    id: 't2',
    quote:
      'The youth training program gave me skills to start a tailoring business. Now I support my family and employ others.',
    name: 'Juma K.',
    role: 'Program Participant',
    image: '/images/portfolio/portfolio-portrait-8.jpeg',
  },
  {
    id: 't3',
    quote:
      'ALAREDEFO partners with local schools to improve nutrition education — the results have been visible and lasting.',
    name: 'Fatima R.',
    role: 'Teacher, Arumeru',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
]

export const socialLinks = [
  { platform: 'Facebook', url: 'https://facebook.com/alaredefo', icon: 'Facebook' },
  { platform: 'Twitter', url: 'https://twitter.com/alaredefo', icon: 'Twitter' },
  { platform: 'Instagram', url: 'https://instagram.com/alaredefo', icon: 'Instagram' },
  { platform: 'YouTube', url: 'https://youtube.com/@alaredefo', icon: 'Youtube' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/alaredefo', icon: 'Linkedin' },
]

export const footerColumns = [
  {
    heading: 'Get to Know ALAREDEFO',
    headingSw: 'Jifunze Kuhusu ALAREDEFO',
    links: [
      { label: 'About Us', labelSw: 'Kuhusu Sisi', href: '/#about' },
      { label: 'Vision & Mission', labelSw: 'Dira na Dhamira', href: '/#about' },
      { label: 'Annual Report', labelSw: 'Ripoti ya Mwaka', href: '/resources' },
      { label: 'Meet the Team', labelSw: 'Timu Yetu', href: '/profile' },
    ],
  },
  {
    heading: 'Our Work',
    headingSw: 'Kazi Zetu',
    links: [
      { label: 'Thematic Areas', labelSw: 'Maeneo ya Kazi', href: '/#services' },
      { label: 'Portfolio', labelSw: 'Picha', href: '/#portfolio' },
      { label: 'Programs', labelSw: 'Programu', href: '/programs' },
      { label: 'Publications', labelSw: 'Machapisho', href: '/resources' },
    ],
  },
  {
    heading: 'Get Involved',
    headingSw: 'Shiriki',
    links: [
      { label: 'Donate', labelSw: 'Changia', href: '/donate' },
      { label: 'Become a Member', labelSw: 'Kuwa Mwanachama', href: '/membership' },
      { label: 'Partner With Us', labelSw: 'Shirikiana Nasi', href: '/#contact' },
      { label: 'Events', labelSw: 'Matukio', href: '/#contact' },
    ],
  },
  {
    heading: 'Connect',
    headingSw: 'Wasiliana',
    links: [
      { label: 'Contact Us', labelSw: 'Wasiliana Nasi', href: '/#contact' },
      { label: 'Resources', labelSw: 'Rasilimali', href: '/resources' },
      { label: 'Privacy Policy', labelSw: 'Sera ya Faragha', href: '/privacy' },
      { label: 'Terms of Use', labelSw: 'Masharti ya Matumizi', href: '/terms' },
    ],
  },
]

export const sw = {
  nav: {
    Home: 'Nyumbani',
    About: 'Kuhusu',
    'Thematic Areas': 'Maeneo ya Kazi',
    Portfolio: 'Picha',
    Objectives: 'Malengo',
    Members: 'Wanachama',
    Contact: 'Mawasiliano',
    Programs: 'Programu',
    Profile: 'Wasifu',
    Membership: 'Uanachama',
    Donate: 'Changia',
    Privacy: 'Faragha',
    Terms: 'Masharti',
  },
  home: {
    registered: 'NGO Iliyosajiliwa Na.',
    learnMore: 'Jifunze Zaidi',
    contactUs: 'Wasiliana Nasi',
    registrationDate: 'Tarehe ya Usajili',
    headOffice: 'Ofisi Kuu',
    thematicAreas: 'Maeneo ya Kazi',
    aboutEyebrow: 'Kuhusu',
    aboutTitle: 'Dira, dhamira, na matokeo yanayowalenga watu',
    missionTitle: 'Dhamira',
    registration: 'Usajili',
    registeredOn: 'Imesajiliwa tarehe',
    focus: 'Mwelekeo',
    focusText: 'Kujitegemea kwa jamii na maendeleo ya kijamii na kiuchumi',
    reach: 'Wanaofikiwa',
    reachText: 'Wanawake, vijana, watoto, na jamii zilizo katika mazingira magumu',
    servicesEyebrow: 'Maeneo ya Kazi',
    servicesTitle: 'Maeneo makuu yanayoongoza programu za ALAREDEFO',
    servicesDescription: 'Maeneo haya yanaongoza miradi, utetezi, na ushirikiano wa muda mrefu na jamii.',
    portfolioEyebrow: 'Picha',
    portfolioTitle: 'Muonekano wa vipaumbele vya ALAREDEFO',
    portfolioDescription: 'Picha zinazoonyesha maeneo ya kazi na simulizi ya huduma kwa jamii.',
    objectivesEyebrow: 'Malengo',
    objectivesTitle: 'ALAREDEFO inalenga kufanikisha nini',
    objectivesDescription: 'Malengo ya taasisi yamejengwa katika utu, uwezeshaji, uendelevu, na vitendo vya vitendo.',
    membersEyebrow: 'Uanachama',
    membersTitle: 'Aina za wanachama',
    membersDescription: 'Uanachama hujenga umiliki, mwendelezo, na ushiriki imara wa jamii.',
    buildTitle: 'Jenga taasisi pamoja nasi',
    buildText: 'Uanachama huimarisha mwendelezo, uwajibikaji, na umiliki wa ndani wa programu zinazohudumia wanawake, vijana, watoto, na jamii pana.',
    contactEyebrow: 'Mawasiliano',
    contactTitle: 'Fikia ofisi yetu kuu Arusha, Tanzania',
    postal: 'Anwani ya Posta',
    physical: 'Mahali Ilipo',
    email: 'Barua Pepe',
    phone: 'Simu',
    website: 'Tovuti',
    impactTitle: 'Matokeo Yetu Kulingana na Namba',
    impactDescription: 'Matokeo ya jibu tunayoifanya kwa jamii mjini Arusha na mikoa mingine',
  },
  common: {
    dark: 'Giza',
    light: 'Mwanga',
    language: 'SW',
    moreDetails: 'Maelezo Zaidi',
    backToPortfolio: 'Rudi Kwenye Picha',
    viewPrograms: 'Tazama Programu',
  },
}

export const localized = {
  en: {
    preamble,
    vision,
    mission,
    thematicAreas,
    objectives,
    portfolioItems,
    membershipTypes,
  },
  sw: {
    preamble:
      'ALAREDEFO inalenga kutetea masuala ya mabadiliko ya tabianchi, uharibifu wa mazingira, usalama wa chakula na lishe, ulinzi na haki kwa wanawake, vijana na watoto, kupunguza umaskini, ujinga na magonjwa ili jamii iweze kujitegemea na kupata kiwango bora cha maisha.',
    vision:
      'ALAREDEFO inaona dunia ambayo kila mtu, bila kujali hali yake, anapata rasilimali na fursa zinazohitajika ili kustawi.',
    mission:
      'Dhamira yetu ni kutoa huduma za msaada, kutekeleza miradi yenye matokeo, na kutetea mabadiliko ya mfumo kupitia ushirikiano wa kimkakati, kujenga uwezo, na mbinu inayomweka mtu katikati.',
    thematicAreas: [
      { title: 'Uwezeshaji wa Kiuchumi', description: 'Kusaidia maisha, biashara ndogo, na fursa za kiuchumi zinazoongeza kujitegemea.' },
      { title: 'Uwezeshaji wa Kielimu', description: 'Kukuza kusoma na kuandika, mafunzo ya ufundi, ujuzi, na fursa jumuishi za kujifunza.' },
      { title: 'Uwezeshaji wa Kisaikolojia', description: 'Kukuza utu, ustahimilivu, afya ya akili, na mazingira salama kwa watu walio hatarini.' },
      { title: 'Uwezeshaji wa Kisiasa', description: 'Kutetea haki, ushiriki wa kiraia, uelewa wa haki, na ujumuishaji katika maisha ya umma.' },
      { title: 'Uwezeshaji wa Kijamii', description: 'Kuimarisha ulinzi wa jamii, mshikamano, na msaada kwa wanawake, vijana na watoto.' },
    ],
    objectives: [
      'Kuchochea utekelezaji wa Malengo ya Maendeleo Endelevu na Ajenda ya Afrika Tunayoitaka 2063.',
      'Kuwezesha jamii kwa rasilimali za kiuchumi na kijamii zinazofungua uwezo na kupunguza umaskini na maendeleo duni.',
      'Kuimarisha utekelezaji wa masuala mtambuka.',
      'Kuongeza uelewa wa jamii zinazojitegemea kupitia mafunzo ya ufundi, ujuzi, biashara ndogo na sekta ya mikopo midogo.',
      'Kuanzisha miradi yenye tija ya taasisi ili kudumisha programu na huduma kwa jamii.',
    ],
    portfolioItems: portfolioItems.map((item) => ({
      ...item,
      category:
        item.filter === 'climate' ? 'Tabianchi na Mazingira' : item.filter === 'community' ? 'Msaada wa Jamii' : 'Uwezeshaji',
      title:
        item.slug === 'climate-awareness'
          ? 'Uelewa wa Tabianchi'
          : item.slug === 'relief-outreach'
            ? 'Huduma za Msaada'
            : item.slug === 'youth-and-women-empowerment'
              ? 'Uwezeshaji wa Vijana na Wanawake'
              : item.slug === 'environmental-protection'
                ? 'Ulinzi wa Mazingira'
                : item.slug === 'community-resilience'
                  ? 'Ustahimilivu wa Jamii'
                  : item.slug === 'skills-development'
                    ? 'Maendeleo ya Ujuzi'
                    : item.slug === 'food-security-support'
                      ? 'Msaada wa Usalama wa Chakula'
                      : item.slug === 'education-and-leadership'
                        ? 'Elimu na Uongozi'
                        : 'Hatua za Maendeleo Endelevu',
      description: 'Kazi ya jamii inayolenga utu, ushiriki, na maendeleo endelevu.',
      details: 'Eneo hili linaonyesha namna ALAREDEFO inavyounganisha vitendo vya vitendo, ushiriki wa jamii, na matokeo endelevu Tanzania.',
    })),
    membershipTypes: ['Wanachama wa Heshima', 'Wanachama Waanzilishi', 'Wanachama wa Kawaida'],
  },
}
