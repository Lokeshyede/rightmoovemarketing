export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: "CREATE" | "GROW" | "BUILD";
  shortDescription: string;
  longDescription: string;
  deliverables: string[];
  metricsHighlight: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  tagline: string;
  problem: string;
  strategy: string;
  creative: string;
  campaign: string;
  result: string;
  stats: { label: string; value: string }[];
  tags: string[];
}

export interface IndustryItem {
  name: string;
  slug: string;
  challenge: string;
  solution: string;
  growthDriver: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  output: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metric: string;
}

export const BRAND_INFO = {
  name: "RightMove",
  legalName: "RightMove Performance Marketing & Strategy",
  tagline: "Smart Moves. Real Results.",
  promise: "We help businesses get noticed, generate leads and grow — through creative, advertising, strategy and technology.",
  corePhilosophy: "CONTENT → ADVERTISING → ATTENTION → LEADS → CUSTOMERS → GROWTH",
  colors: {
    deep: "#050608",
    navy: "#07111F",
    surface: "#0B1220",
    bluePrimary: "#0B5CFF",
    blueCyan: "#00BFFF",
    white: "#FFFFFF",
  },
  contact: {
    email: "growth@rightmovemarketing.com",
    phone: "+1 (800) 840-MOVE",
    location: "Global Growth Operations",
    hours: "24/7 Campaign Command",
  }
};

export const CORE_PILLARS = [
  {
    pillar: "01",
    code: "CREATE",
    title: "High-Impact Content & Creative",
    subtitle: "We create ads and content people actually want to watch.",
    description: "In a world of infinite scrolls, attention is the scarcest currency. We produce cinematic ad creative, viral-engineered reels, and pristine brand design engineered to break thumb inertia.",
    badge: "Attention Engine",
    color: "from-blue-500/20 via-cyan-500/10 to-transparent",
    services: [
      { name: "Advertisement Video Creation", desc: "Commercial-grade video ads engineered for conversion." },
      { name: "Reels & Short-Form Content", desc: "High-retention vertical videos optimized for algorithmic reach." },
      { name: "Social Media Content Creation", desc: "High-frequency, brand-aligned visual assets." },
      { name: "Brand Creative & Design", desc: "Cohesive visual identity systems that build undeniable authority." },
      { name: "High-Converting Ad Angles", desc: "Psychological hook design and iterative scriptwriting." }
    ]
  },
  {
    pillar: "02",
    code: "GROW",
    title: "Performance Marketing & Advertising",
    subtitle: "We don't just run ads. We build customer acquisition systems.",
    description: "Paid media without rigorous strategy is an expense. With RightMove, it's a predictable revenue engine. We execute multi-stage conversion funnels across Meta and Google with continuous optimization.",
    badge: "Revenue Engine",
    color: "from-cyan-500/20 via-blue-600/10 to-transparent",
    services: [
      { name: "Meta Ads (Instagram & Facebook)", desc: "Precision demographic and interest-targeted campaign architectures." },
      { name: "Google Search & YouTube Ads", desc: "High-intent buyer capture and omni-channel remarketing." },
      { name: "Qualified Lead Generation", desc: "Automated qualification funnels delivering sales-ready prospects." },
      { name: "Performance Marketing & ROAS", desc: "Data-led testing matrices maximizing return on ad spend." },
      { name: "Social Media Management", desc: "Active community management, scheduled deployment and audience nurturing." }
    ]
  },
  {
    pillar: "03",
    code: "BUILD",
    title: "Technology & Scale Infrastructure",
    subtitle: "When marketing needs technology to convert and scale.",
    description: "Marketing creates the demand; robust technology converts and captures it. We build the high-speed websites, automated CRMs, and custom software that empower scaling businesses to operate flawlessly.",
    badge: "Scale Infrastructure",
    color: "from-blue-600/20 via-cyan-400/10 to-transparent",
    services: [
      { name: "High-Performance Websites", desc: "Sub-second load times, cinematic aesthetics, and high conversion." },
      { name: "Landing Pages & Funnels", desc: "A/B tested conversion pages designed for paid traffic." },
      { name: "CRM & Management Systems", desc: "Custom lead pipelines with automated routing and status tracking." },
      { name: "Business Dashboards", desc: "Real-time visibility into ad spend, leads, and conversion metrics." },
      { name: "WhatsApp & AI Automation", desc: "Instant response bots and conversational lead qualification." }
    ]
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "ad-video-creation",
    number: "01",
    title: "Advertisement Video Creation",
    category: "CREATE",
    shortDescription: "Cinematic commercial video ads designed to stop the scroll and drive action.",
    longDescription: "We script, direct, edit, and sound-design high-performing video advertisements that capture curiosity in the first 2 seconds and guide viewers to high-intent conversions.",
    deliverables: ["Dynamic Hook Variations", "Direct-Response Scripts", "Motion Graphics & VFX", "Multi-Format Export (9:16, 1:1, 16:9)", "A/B Creative Cuts"],
    metricsHighlight: "Average +42% CTR uplift over static ads",
    iconName: "Video"
  },
  {
    id: "social-media-management",
    number: "02",
    title: "Social Media Management",
    category: "GROW",
    shortDescription: "End-to-end community stewardship, content scheduling, and organic momentum.",
    longDescription: "We transform dormant social profiles into vibrant brand ecosystems. We manage daily publishing, community moderation, growth tactics, and cross-platform consistency.",
    deliverables: ["Monthly Content Calendars", "Active Community Engagement", "Weekly Performance Audits", "Hashtag & Audio Research", "Competitor Monitoring"],
    metricsHighlight: "Consistent 3x organic reach acceleration",
    iconName: "Share2"
  },
  {
    id: "social-media-content-creation",
    number: "03",
    title: "Social Media Content Creation",
    category: "CREATE",
    shortDescription: "High-frequency, thumb-stopping visual assets crafted for brand dominance.",
    longDescription: "Never run out of content again. Our studio crafts high-aesthetic carousels, graphic posts, infographic breakdowns, and dynamic story templates tailored to your brand.",
    deliverables: ["Carousels & Infographics", "Story Sequence Templates", "High-Resolution Static Assets", "Copywriting & Caption Strategy", "Brand Typography Standards"],
    metricsHighlight: "20+ tailored assets delivered monthly",
    iconName: "Sparkles"
  },
  {
    id: "meta-ads",
    number: "04",
    title: "Meta Ads (Instagram & Facebook)",
    category: "GROW",
    shortDescription: "Full-funnel campaign structures designed for predictable, scalable acquisition.",
    longDescription: "Our core competency. We architect multi-tier Meta campaigns utilizing broad targeting, lookalikes, dynamic creative optimization (DCO), and aggressive remarketing funnels.",
    deliverables: ["Campaign Hierarchy Architecture", "Custom Audience Segmentation", "CBO/ABO Budget Allocations", "Pixel & CAPI Server Tracking", "Rapid Angle Testing"],
    metricsHighlight: "Target ROAS benchmark: 3.5x - 7.0x",
    iconName: "Target"
  },
  {
    id: "google-ads",
    number: "05",
    title: "Google Ads & YouTube Advertising",
    category: "GROW",
    shortDescription: "Capture high-intent buyers at the exact moment of search demand.",
    longDescription: "Target commercial search intent with precision Google Search, Performance Max, and YouTube in-stream video ads that intercept active purchasers looking for your solution.",
    deliverables: ["Search Campaign Architecture", "Negative Keyword Scrubbing", "Performance Max Setup", "YouTube Pre-Roll Campaigns", "Conversion Value Tracking"],
    metricsHighlight: "Lowest cost-per-acquisition search structures",
    iconName: "Search"
  },
  {
    id: "lead-generation",
    number: "06",
    title: "Qualified Lead Generation",
    category: "GROW",
    shortDescription: "Automated pipelines that turn anonymous traffic into booked appointments.",
    longDescription: "Stop wasting sales team hours on dead-end leads. We engineer multi-step qualification forms and instant CRM sync to deliver warmed, ready-to-buy inquiries.",
    deliverables: ["Multi-Step Qualification Forms", "Instant Lead Notifications", "Pre-Screening Questionnaires", "Spam & Fraud Filtering", "Automated Lead Scoring"],
    metricsHighlight: "Average 68% lead-to-call conversion rate",
    iconName: "Users"
  },
  {
    id: "performance-marketing",
    number: "07",
    title: "Performance Marketing",
    category: "GROW",
    shortDescription: "Omni-channel data-driven acquisition focused entirely on net profit growth.",
    longDescription: "We look beyond vanity metrics. Performance marketing at RightMove unites media spend, cost per acquisition (CPA), customer lifetime value (LTV), and bottom-line margin.",
    deliverables: ["CAC & LTV Modeling", "Cross-Channel Attribution", "Creative Fatigue Alerts", "Incrementality Testing", "Weekly Executive Briefings"],
    metricsHighlight: "100% accountable to bottom-line ROI",
    iconName: "TrendingUp"
  },
  {
    id: "campaign-management",
    number: "08",
    title: "Campaign Management",
    category: "GROW",
    shortDescription: "Daily monitoring, algorithmic budget shifts, and rapid creative rotation.",
    longDescription: "Paid advertising is not a set-it-and-forget-it endeavor. Our media buyers monitor campaign pacing hourly, trimming underperforming ads and scaling breakout winners.",
    deliverables: ["Hourly Ad Spend Pacing", "Bid Strategy Optimization", "Seasonal Promo Sprints", "Creative Swaps & Refreshes", "Transparent Real-Time Portal"],
    metricsHighlight: "Zero wasted budget on fatigued creative",
    iconName: "Sliders"
  },
  {
    id: "brand-creative-design",
    number: "09",
    title: "Brand Creative & Design",
    category: "CREATE",
    shortDescription: "Iconic visual identity, typography, and guidelines that command premium pricing.",
    longDescription: "Your creative is your brand's digital storefront. We produce striking visual identities, advertising templates, and motion graphic packages that elevate perceived brand value.",
    deliverables: ["Visual Identity Systems", "Digital Brand Guidelines", "Campaign Style Guides", "Typography & Color Matrix", "Ready-to-Deploy Ad Toolkits"],
    metricsHighlight: "Transforms commodity brands into market leaders",
    iconName: "Palette"
  },
  {
    id: "marketing-strategy",
    number: "10",
    title: "Marketing Strategy",
    category: "GROW",
    shortDescription: "The master blueprint: positioning, messaging, funnel mechanics, and unit economics.",
    longDescription: "Before spending a dollar on media, we architect your commercial moat: who we are targeting, why they must buy from you now, and what offer structure converts them effortlessly.",
    deliverables: ["Competitive Landscape Audit", "Customer Avatar Synthesis", "Offer Engineering & Pricing", "Go-To-Market Timeline", "Growth Milestone Forecasts"],
    metricsHighlight: "Clear 90-day actionable roadmap",
    iconName: "Compass"
  },
  {
    id: "business-websites",
    number: "11",
    title: "High-Performance Business Websites",
    category: "BUILD",
    shortDescription: "Sub-second load speeds, cinematic dark aesthetics, and seamless conversion paths.",
    longDescription: "We build websites that look like award-winning digital experiences and convert like direct-response machines. Engineered with Next.js, Tailwind, and high-performance animation.",
    deliverables: ["Custom Next.js Engineering", "Mobile-First UX/UI Design", "SEO Architecture & Meta", "Micro-Interactions & 60fps Motion", "CMS Integration"],
    metricsHighlight: "98+ Google Lighthouse Performance Score",
    iconName: "Globe"
  },
  {
    id: "landing-pages",
    number: "12",
    title: "Direct-Response Landing Pages",
    category: "BUILD",
    shortDescription: "Laser-focused single-purpose conversion machines built for paid media traffic.",
    longDescription: "Every campaign needs a dedicated destination. We craft hyper-relevant landing pages that align message with ad hooks, boosting quality scores and slashing customer acquisition costs.",
    deliverables: ["Persuasive Direct Copywriting", "Dynamic Content Personalization", "Fast-Loading Mobile Layouts", "A/B Testing Harness", "Scroll Depth & Heatmap Tracking"],
    metricsHighlight: "Proven conversion rates between 8% to 24%",
    iconName: "FileText"
  },
  {
    id: "mobile-applications",
    number: "13",
    title: "Mobile Applications",
    category: "BUILD",
    shortDescription: "Sleek iOS and Android applications providing sticky customer experiences.",
    longDescription: "Empower your customers or field workforce with custom mobile apps. Built using React Native / Flutter for native speed, offline caching, and instant push notifications.",
    deliverables: ["iOS & Android Builds", "Intuitive Mobile UX Design", "Push Notification Pipelines", "Secure User Auth & Biometrics", "App Store Submission Support"],
    metricsHighlight: "Seamless cross-platform performance",
    iconName: "Smartphone"
  },
  {
    id: "crm-systems",
    number: "14",
    title: "Custom CRM Systems",
    category: "BUILD",
    shortDescription: "Zero-leak sales pipelines engineered specifically around your sales workflow.",
    longDescription: "Never lose another lead between spreadsheets. We build or configure bespoke CRM pipelines that automatically capture inquiries, assign reps, and trigger follow-up sequences.",
    deliverables: ["Visual Kanban Sales Boards", "Automated Lead Routing", "Customer History Timeline", "Custom Field Architecture", "Email & SMS Sync"],
    metricsHighlight: "100% elimination of manual data entry",
    iconName: "Database"
  },
  {
    id: "management-systems",
    number: "15",
    title: "Business Management Systems",
    category: "BUILD",
    shortDescription: "Centralized internal portals for project tracking, staff, and order processing.",
    longDescription: "Streamline back-office friction. We engineer internal management systems that track operations, dispatch jobs, manage inventory, and coordinate team workflows.",
    deliverables: ["Role-Based Access Control", "Order & Inventory Tracking", "Automated Invoice Generation", "Task Scheduling Portals", "Audit Logs & Security"],
    metricsHighlight: "Saves up to 15 hours per team member weekly",
    iconName: "Layers"
  },
  {
    id: "business-dashboards",
    number: "16",
    title: "Executive Business Dashboards",
    category: "BUILD",
    shortDescription: "Real-time visibility into marketing ROAS, sales velocity, and revenue KPIs.",
    longDescription: "One single screen for your entire company's pulse. Unify Google Ads, Meta Ads, CRM data, and Stripe/bank revenues into an ultra-clean executive command dashboard.",
    deliverables: ["Real-Time API Integrations", "Interactive Charting & Filters", "Automated Slack/Email Alerts", "Custom KPI Formulas", "Secure Executive Login"],
    metricsHighlight: "Single source of truth for business leadership",
    iconName: "BarChart3"
  },
  {
    id: "custom-software",
    number: "17",
    title: "Custom Software Solutions",
    category: "BUILD",
    shortDescription: "Tailored web applications and APIs solving unique commercial bottlenecks.",
    longDescription: "When off-the-shelf SaaS doesn't fit your business model, we build custom web applications with rock-solid backends, modern databases, and clean modern interfaces.",
    deliverables: ["Modern Full-Stack Architecture", "Robust REST/GraphQL APIs", "Scalable Cloud Hosting", "Enterprise Data Encryption", "Comprehensive Documentation"],
    metricsHighlight: "Custom IP built exclusively for your business",
    iconName: "Code2"
  },
  {
    id: "business-automation",
    number: "18",
    title: "Business Workflow Automation",
    category: "BUILD",
    shortDescription: "Connect disjointed apps and eliminate repetitive manual busywork forever.",
    longDescription: "We link your ad platforms, email services, accounting software, and internal databases into self-driving automated workflows that execute flawlessly 24/7.",
    deliverables: ["Webhook & API Automations", "Multi-Step Trigger Logic", "Error-Handling & Fallbacks", "Cross-Platform Syncing", "Process Documentation"],
    metricsHighlight: "Reduces human processing errors to zero",
    iconName: "Zap"
  },
  {
    id: "whatsapp-automation",
    number: "19",
    title: "WhatsApp Business Automation",
    category: "BUILD",
    shortDescription: "Instant conversational qualification and automated messaging on WhatsApp.",
    longDescription: "Engage leads where they are most responsive. Official WhatsApp Cloud API integration with instant auto-responders, catalog browsing, appointment booking, and live agent handoff.",
    deliverables: ["Official WhatsApp API Setup", "Interactive Button Messages", "Automated Booking Flows", "Broadcast Campaign Sprints", "Live Chat Agent Portal"],
    metricsHighlight: "98% message open rate within 5 minutes",
    iconName: "MessageCircle"
  },
  {
    id: "ai-solutions",
    number: "20",
    title: "AI-Powered Business Solutions",
    category: "BUILD",
    shortDescription: "Custom intelligent agents for customer support, copy generation, and data insights.",
    longDescription: "Harness modern LLMs and intelligent workflow agents to answer customer inquiries 24/7, analyze consumer sentiment, and automate internal content preparation.",
    deliverables: ["Fine-Tuned AI Assistant Bots", "Document & Knowledge Base Q&A", "Automated Lead Scoring AI", "Dynamic Content Generation", "Secure Guardrails & Auditing"],
    metricsHighlight: "24/7 immediate customer query resolution",
    iconName: "Cpu"
  }
];

export const FUNNEL_STAGES = [
  {
    stage: "01",
    name: "AD CREATIVE",
    sub: "Stopping the scroll",
    description: "Cinematic, hook-optimized video & dynamic visual ads engineered to arrest attention.",
    metric: "2.8s avg thumb-stop rate",
    color: "border-blue-500/40 text-blue-400"
  },
  {
    stage: "02",
    name: "ATTENTION",
    sub: "Holding interest",
    description: "Compelling narrative angles that transform casual viewers into engaged prospects.",
    metric: "64% video completion rate",
    color: "border-blue-400/50 text-cyan-300"
  },
  {
    stage: "03",
    name: "CLICK & ENGAGE",
    sub: "High-intent traffic",
    description: "Targeted landing pages and micro-experiences that match ad expectations seamlessly.",
    metric: "3.4% - 6.8% link CTR",
    color: "border-cyan-400/60 text-cyan-200"
  },
  {
    stage: "04",
    name: "LEAD CAPTURE",
    sub: "Pre-qualified inquiry",
    description: "Multi-step qualification forms that filter tire-kickers and capture rich buyer data.",
    metric: "18.5% page conversion",
    color: "border-blue-500/80 text-blue-300"
  },
  {
    stage: "05",
    name: "CUSTOMER",
    sub: "Sales conversion",
    description: "Automated instant follow-up via WhatsApp, SMS, and CRM alerts to close the sale.",
    metric: "Under 60s response time",
    color: "border-cyan-300 text-white"
  },
  {
    stage: "06",
    name: "COMPOUNDING GROWTH",
    sub: "Profitable scaling",
    description: "LTV expansion, retargeting matrices, and automated referral loops that multiply ROI.",
    metric: "4.8x average account ROAS",
    color: "border-blue-400 text-cyan-400"
  }
];

export const COMMAND_CENTER_MODULES = [
  {
    id: "strategy",
    title: "Campaign Strategy & Architecture",
    category: "Strategic Direction",
    status: "ACTIVE",
    stat: "Multi-Tier Funnel",
    description: "Holistic full-funnel media architecture synchronizing top-of-funnel discovery, mid-funnel consideration, and bottom-of-funnel retargeting."
  },
  {
    id: "audiences",
    title: "Algorithmic Audience Research",
    category: "Targeting Matrix",
    status: "STREAMING",
    stat: "12 Custom Clusters",
    description: "Dynamic synthesis of first-party customer lists, lookalike audiences, and broad contextual affinity mapping across Meta & Google networks."
  },
  {
    id: "creative-testing",
    title: "Creative Matrix & Hook Testing",
    category: "Creative Engine",
    status: "ITERATING",
    stat: "18 Angles Tested / Wk",
    description: "Systematic multi-variant testing of 3-second hooks, visual styles, text overlays, and audio tracks to identify low-CPA breakthrough winners."
  },
  {
    id: "ab-testing",
    title: "Landing Page A/B Testing",
    category: "Conversion Rate Opt",
    status: "LIVE SPLIT",
    stat: "Statistical Confidence 99%",
    description: "Continuous split testing of headlines, call-to-action styling, form friction, and social proof elements to drive down cost-per-lead."
  },
  {
    id: "retargeting",
    title: "Omni-Channel Retargeting Matrix",
    category: "Audience Retention",
    status: "ENFORCING",
    stat: "0-7d & 8-30d Sequences",
    description: "Exclusion-filtered remarketing addressing common customer hesitations, social proof showcases, and limited-time conversion catalysts."
  },
  {
    id: "budget-opt",
    title: "Algorithmic Budget Optimization",
    category: "Capital Efficiency",
    status: "AUTO-SCALING",
    stat: "Dynamic Pacing",
    description: "Real-time reallocation of media capital towards highest-performing creative ad sets while capping diminishing return thresholds."
  },
  {
    id: "tracking",
    title: "Server-Side CAPI & Pixel Tracking",
    category: "Data Hygiene",
    status: "VERIFIED",
    stat: "100% Attribution Match",
    description: "First-party Conversion API (CAPI) infrastructure bypassing iOS privacy drops and cookie degradation for accurate revenue tracking."
  },
  {
    id: "reporting",
    title: "Executive Profit & ROAS Reporting",
    category: "Business Intelligence",
    status: "SYNCHRONIZED",
    stat: "Real-Time Portal",
    description: "Transparent live reporting stripping away vanity impressions to display net acquisition cost, pipeline volume, and realized revenue."
  }
];

export const ECOSYSTEM_NODES = [
  { id: "rightmove", label: "RIGHTMOVE", type: "core", x: 50, y: 50, desc: "The Central Growth & Marketing Command Core" },
  { id: "content", label: "CONTENT", type: "creative", x: 20, y: 22, desc: "Cinematic commercial videos, viral reels, and creative design." },
  { id: "ads", label: "ADS", type: "growth", x: 50, y: 15, desc: "High-yield Meta & Google Ads campaign architectures." },
  { id: "social", label: "SOCIAL", type: "growth", x: 80, y: 22, desc: "Active community management, scheduled deployment & engagement." },
  { id: "leads", label: "LEADS", type: "growth", x: 85, y: 50, desc: "Pre-qualified lead capture and automated validation funnels." },
  { id: "website", label: "WEBSITE", type: "tech", x: 78, y: 78, desc: "Sub-second Next.js web platforms built to convert cold traffic." },
  { id: "crm", label: "CRM", type: "tech", x: 50, y: 85, desc: "Zero-leak sales pipelines and automated opportunity assignment." },
  { id: "automation", label: "AUTOMATION", type: "tech", x: 22, y: 78, desc: "WhatsApp & cross-app automations eliminating human lag." },
  { id: "analytics", label: "ANALYTICS", type: "intel", x: 15, y: 50, desc: "Server-side attribution, LTV forecasting, and live KPI feeds." },
];

export const ECOSYSTEM_CONNECTIONS = [
  { from: "rightmove", to: "content" },
  { from: "rightmove", to: "ads" },
  { from: "rightmove", to: "social" },
  { from: "rightmove", to: "leads" },
  { from: "rightmove", to: "website" },
  { from: "rightmove", to: "crm" },
  { from: "rightmove", to: "automation" },
  { from: "rightmove", to: "analytics" },
  { from: "content", to: "ads" },
  { from: "ads", to: "leads" },
  { from: "leads", to: "crm" },
  { from: "crm", to: "automation" },
  { from: "website", to: "leads" },
  { from: "analytics", to: "ads" },
  { from: "social", to: "content" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Deep Commercial Diagnostic",
    description: "We analyze your existing marketing, unit economics, buyer psychology, and competitive battlefield to identify the fastest path to outsized growth.",
    activities: ["Customer Avatar Archetyping", "Past Campaign Spend Audits", "Competitor Ad Creative Intelligence", "Unit Economics & CAC Tolerances"],
    output: "Comprehensive Growth Strategy Brief"
  },
  {
    step: "02",
    title: "STRATEGIZE",
    subtitle: "Architecture & Funnel Design",
    description: "We construct the mathematical and creative blueprint: campaign architectures, offer structures, audience segmentation, and tech requirements.",
    activities: ["Full-Funnel Media Blueprint", "Offer Positioning & Messaging Angles", "Landing Page Wireframing", "Tracking & Attribution Architecture"],
    output: "90-Day Execution Roadmap"
  },
  {
    step: "03",
    title: "CREATE",
    subtitle: "High-Impact Asset Production",
    description: "Our creative studio goes into production: scripting, filming, graphic designing, and coding the high-converting ad assets and digital systems.",
    activities: ["Commercial Video & Reel Production", "Direct-Response Ad Copywriting", "Landing Page Development", "CRM & WhatsApp Setup"],
    output: "Ready-to-Deploy Creative & Tech Assets"
  },
  {
    step: "04",
    title: "LAUNCH",
    subtitle: "Controlled Market Deployment",
    description: "Campaigns go live under strict initial testing parameters. We monitor real-time engagement, hook retention, and early conversion signals.",
    activities: ["Server-Side Pixel Verification", "Audience Variant Deployment", "Initial Hook Testing Sprints", "Real-Time Tracking Calibration"],
    output: "Live Campaigns Generating Attention"
  },
  {
    step: "05",
    title: "OPTIMIZE",
    subtitle: "Continuous Performance Tuning",
    description: "We cut unprofitable ads without hesitation and double down on breakout winners. We test new iterations to continuously lower acquisition cost.",
    activities: ["Creative Fatigue Diagnostics", "Bid & Budget Algorithmic Shifts", "Landing Page Split Tests", "Lead Quality Feedback Loops"],
    output: "Compounding ROAS & Lower CPA"
  },
  {
    step: "06",
    title: "GROW",
    subtitle: "Predictable, Scaled Expansion",
    description: "With proven unit economics in place, we scale spend aggressively across new audiences and omni-channel platforms while maintaining profitability.",
    activities: ["Horizontal Channel Expansion (Meta + Google)", "Higher Budget Scaling Thresholds", "Automated Backend Retention", "Executive Performance Review"],
    output: "Market-Leading Market Share"
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    name: "Real Estate & Development",
    slug: "real-estate",
    challenge: "High cost-per-lead and low buyer qualification on traditional listing portals.",
    solution: "Cinematic drone & architectural walkthrough ads paired with multi-step pre-qualification forms.",
    growthDriver: "High-ticket investor & homebuyer pipelines directly to sales agents."
  },
  {
    name: "Retail & E-Commerce",
    slug: "retail",
    challenge: "Rising ad costs and fierce competition cutting into gross product margins.",
    solution: "Dynamic product ads, UGC-style viral TikTok/Reels hooks, and automated cart abandonment flows.",
    growthDriver: "Predictable ROAS scaling and higher repeat customer purchase frequency."
  },
  {
    name: "Restaurants & Hospitality",
    slug: "restaurants",
    challenge: "Seasonal slow periods and heavy reliance on third-party delivery apps with huge commissions.",
    solution: "Mouth-watering geo-targeted video ads with WhatsApp reservation booking integration.",
    growthDriver: "Packed dining rooms and direct customer database ownership."
  },
  {
    name: "Healthcare & Clinics",
    slug: "healthcare",
    challenge: "Strict advertising regulations and patients needing deep trust before booking consultations.",
    solution: "Educational authority video campaigns, verified patient testimonials, and secure booking funnels.",
    growthDriver: "Consistent high-value patient appointment booking."
  },
  {
    name: "Education & Academies",
    slug: "education",
    challenge: "Long enrollment cycles and high drop-off during inquiry phases.",
    solution: "Course preview reels, student success stories, and instant WhatsApp consultation workflows.",
    growthDriver: "Full batch enrollments ahead of academic terms."
  },
  {
    name: "Fashion & Lifestyle",
    slug: "fashion",
    challenge: "Visual saturation and difficulty turning casual social followers into paying customers.",
    solution: "Editorial brand films, influencer-style lookbooks, and targeted seasonal drops.",
    growthDriver: "Instant sell-outs on collection launches."
  },
  {
    name: "Manufacturing & Industrial",
    slug: "manufacturing",
    challenge: "Old-school sales methods and low visibility among modern procurement managers.",
    solution: "B2B Google search capture, factory capability showcases, and custom quotation portals.",
    growthDriver: "High-value bulk supply contracts and commercial RFQs."
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    challenge: "Commoditized services competing on price instead of expertise and authority.",
    solution: "Thought-leadership video snippets, case study breakdowns, and executive appointment funnels.",
    growthDriver: "Attracting premium retainer clients willing to pay higher fees."
  },
  {
    name: "Startups & Emerging Tech",
    slug: "startups",
    challenge: "Need for rapid market validation, investor traction, and swift user acquisition on tight timelines.",
    solution: "Hyper-targeted digital sprint campaigns, cinematic product demos, and frictionless waitlists.",
    growthDriver: "Rapid CAC validation and exponential early adopter growth."
  },
  {
    name: "Local Service Businesses",
    slug: "local-businesses",
    challenge: "Unpredictable word-of-mouth revenue and low online discovery.",
    solution: "Hyper-local geo-targeted Meta & Google ads ensuring top-of-mind local dominance.",
    growthDriver: "Full weekly service booking schedules."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lumina-real-estate",
    client: "Lumina Signature Residences",
    industry: "Luxury Real Estate",
    tagline: "Generating 240+ High-Net-Worth Inquiries in 60 Days",
    problem: "A luxury waterfront development was struggling with slow lead velocity and generic leads from traditional property aggregator portals who lacked the purchasing power.",
    strategy: "Shifted focus from generic listing features to an emotional cinematic lifestyle campaign targeting verified high-net-worth investors across key financial hubs.",
    creative: "Produced 4 cinematic 4K video ads featuring architectural details, private marina access, and sunset views, paired with aspirational editorial typography.",
    campaign: "Multi-tiered Meta and Google Ads campaign featuring private VIP viewing invites and an interactive 3-step qualifying quiz filtering by liquid budget.",
    result: "Achieved a 4.6x increase in qualified lead volume while cutting cost-per-qualified-inquiry by 51%, culminating in $18M in contracted sales within 60 days.",
    stats: [
      { label: "Contracted Volume", value: "$18.2M" },
      { label: "Qualified Inquiries", value: "240+" },
      { label: "Cost Per Lead Reduction", value: "-51%" }
    ],
    tags: ["Video Production", "Meta Ads", "Lead Generation", "Landing Page"]
  },
  {
    id: "apex-fitness",
    client: "Apex Performance Club",
    industry: "Fitness & Lifestyle",
    tagline: "Transforming New Studio Launch into 1,200 Pre-Sold Memberships",
    problem: "Opening a 20,000 sq ft performance club in a competitive metropolitan market with zero existing brand recognition and a strict 90-day launch runway.",
    strategy: "Engineered a high-urgency VIP Founding Member campaign with viral referral mechanics and automated WhatsApp booking reminders.",
    creative: "High-octane reels and short-form video ads showcasing world-class coaching, custom equipment, and community culture with high-contrast motion graphics.",
    campaign: "Geo-fenced Meta campaigns within a 7-mile radius, driving to a sub-second landing page with real-time countdown timer and instant WhatsApp checkout.",
    result: "Over 1,200 founding memberships pre-sold before opening day, generating profitability in month 1 and establishing local market leadership.",
    stats: [
      { label: "Pre-Sold Memberships", value: "1,248" },
      { label: "Launch ROAS", value: "5.8x" },
      { label: "WhatsApp Conversion", value: "34%" }
    ],
    tags: ["Ad Video Creation", "Reels", "WhatsApp Automation", "Meta Ads"]
  },
  {
    id: "strata-cloud",
    client: "Strata B2B Enterprise Solutions",
    industry: "Technology & Software",
    tagline: "Building a Predictable Inbound Pipeline for Enterprise Contracts",
    problem: "Enterprise sales team was reliant on sluggish cold outreach with a 6-month sales cycle and inconsistent quarterly pipeline coverage.",
    strategy: "Combined high-intent Google Search interception with educational video case studies and a custom CRM lead routing architecture.",
    creative: "Executive explainer videos breaking down complex operational bottlenecks, paired with sleek interactive ROI comparison calculators.",
    campaign: "Omni-channel strategy uniting Google Search ads on high-intent competitor keywords with LinkedIn & Meta remarketing displaying client validation.",
    result: "Delivered 82 enterprise discovery calls with Fortune 1000 decision-makers, resulting in $3.4M in added pipeline value in the first two quarters.",
    stats: [
      { label: "Pipeline Added", value: "$3.4M" },
      { label: "Cost Per Discovery Call", value: "$285" },
      { label: "CRM Routing Speed", value: "< 2 min" }
    ],
    tags: ["Google Ads", "Custom CRM", "Web Applications", "Marketing Strategy"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "RightMove completely flipped our marketing from a cost center into our biggest revenue driver. Their video creative alone stopped our audience in their tracks, and their Meta campaigns scaled our customer acquisition to levels we couldn't achieve in 3 years with other agencies.",
    author: "Marcus Vance",
    role: "Chief Marketing Officer",
    company: "Vance Horizon Holdings",
    industry: "Real Estate & Assets",
    metric: "4.8x ROAS Sustained"
  },
  {
    id: "2",
    quote: "What sets RightMove apart is that they don't just dump raw leads on your sales reps. They built us a custom pre-qualification funnel and instant WhatsApp automation that warmed our prospects before our team even dialed. Our close rate doubled.",
    author: "Elena Rostova",
    role: "Managing Director",
    company: "Aura Premium Care",
    industry: "Specialty Healthcare",
    metric: "68% Close Rate on Leads"
  },
  {
    id: "3",
    quote: "Finding an agency that excels equally at commercial-grade creative, performance media buying, AND modern web technology is virtually impossible. RightMove did all three flawlessly. They are our unfair advantage.",
    author: "Tariq Al-Mansoor",
    role: "Founder & CEO",
    company: "OmniRetail Group",
    industry: "Omni-Channel Commerce",
    metric: "+320% Revenue in 6 Months"
  }
];

export const STATEMENTS = [
  "GOOD BUSINESSES DESERVE ATTENTION.",
  "ATTENTION CREATES INTEREST.",
  "INTEREST CREATES LEADS.",
  "LEADS CREATE GROWTH.",
  "THAT'S WHERE RIGHTMOVE COMES IN."
];
