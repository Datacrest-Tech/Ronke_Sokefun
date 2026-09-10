// Central content module for the Ronke Sokefun executive platform.
// All biographical claims here are sourced from TEMPLARS' partner
// announcement, Oando PLC's board disclosures, and public reporting
// on her NDIC and Ogun State government appointments.

export const statusBar = {
  text: "Board Leadership & Governance Advisory | Lagos",
};

export const nav = {
  brand: "Ronke Sokefun",
  pillars: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "more", href: "/impact" },
  ],
  cta: { label: "Book a Consultation", href: "/contact" },
};

// Services dropdown — reflects the two service groupings actually
// published on the site (see governance/policy below), plus a link
// to the full Services page. Not a new taxonomy — just organized
// for the nav.
export const servicesMenu = {
  label: "Services",
  viewAllHref: "/services",
  items: [
    {
      name: "Governance & Boards",
      description: "Board directorship, fiduciary oversight, ESG integration.",
      href: "/services#governance",
    },
    {
      name: "Leadership & Public Policy",
      description: "Institutional modernization and regulatory strategy.",
      href: "/services#policy",
    },
  ],
};

// Secondary pages — kept fully live at their existing routes, just
// moved out of the top-level nav and into the footer to keep the
// header uncluttered.
export const secondaryLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Impact", href: "/impact" },
  { label: "Media & Speaking", href: "/media" },
];

export const moreMenu = {
  label: "more",
  items: [
    {
      name: "Impact",
      description: "Programs, influence, and measurable outcomes.",
      href: "/impact",
    },
    {
      name: "Media & Speaking",
      description: "Interviews, thought leadership, and public commentary.",
      href: "/media",
    },
    {
      name: "Blog",
      description: "Governance, entrepreneurship, and legal insights.",
      href: "/blog",
    },
  ],
};

export const hero = {
  eyebrow: "Governance. Leadership. Law. Impact.",
  headline: "Bridging Governance, Law, and Institutional Leadership.",
  subhead:
    "Advising leading African institutions and enterprise boards on regulatory resilience, fiduciary integrity, and sustainable growth.",
  primaryAction: { label: "Direct Inquiries", href: "/contact" },
  secondaryAction: { label: "Explore Insights", href: "/insights" },
};

export const credibility = [
  { name: "TEMPLARS", role: "Partner" },
  { name: "Oando PLC", role: "Independent Non-Executive Director" },
  { name: "NDIC", role: "Former Chairman, Governing Board" },
  { name: "Ogun State Government", role: "Former Commissioner" },
  { name: "Harvard Business School", role: "Executive Education" },
  { name: "INSEAD", role: "Executive Education" },
];

export const about = {
  heading: "About Ronke",
  paragraphs: [
    "Ronke Sokefun brings nearly four decades of experience across corporate law, financial services, public administration, and board governance. She is a Partner at TEMPLARS, one of Nigeria's foremost business law firms, where she advises senior executives, boards of directors, and public authorities on complex governance, legal, and regulatory matters.",
    "She previously served as Chief Legal Officer of Oando PLC, a leading integrated energy group, and currently sits on Oando's board as an Independent Non-Executive Director. In January 2019, she was appointed Chairman of the Governing Board of the Nigeria Deposit Insurance Corporation, becoming the first woman to hold the position, a role she held for four years.",
    "Her public service career includes appointments in the Ogun State Government as Commissioner for Urban & Physical Planning, Commissioner for Agriculture, and Special Adviser and Director-General of the Bureau of Lands & Survey.",
    "She is a Fellow of the Chartered Institute of Directors Nigeria and the Institute of Chartered Secretaries and Administrators, and holds a Global Competent Boards Designation in ESG from the Competent Boards Institute, Canada. She has completed executive education programmes at Harvard Business School, Kellogg School of Management, Cambridge Judge Business School, INSEAD, and Lagos Business School.",
  ],
  credentials: [
    "Fellow, Chartered Institute of Directors Nigeria (F.CIoD)",
    "Fellow, Institute of Chartered Secretaries and Administrators (FCIS)",
    "GCB.D — ESG, Competent Boards Institute, Canada",
    "Executive Education: Harvard Business School, Kellogg, Cambridge Judge, INSEAD, Lagos Business School",
  ],
};

export const journey = [
  {
    index: "01",
    title: "Legal Partner",
    org: "TEMPLARS",
    body: "Advises boards, senior executives, and public authorities on governance, regulatory, and transactional matters across West Africa's most complex mandates.",
  },
  {
    index: "02",
    title: "Board Leader",
    org: "Oando PLC",
    body: "Serves as Independent Non-Executive Director, having previously led the company's legal function as Chief Legal Officer.",
  },
  {
    index: "03",
    title: "Regulatory Governance",
    org: "NDIC — Governing Board",
    body: "Chaired the Nigeria Deposit Insurance Corporation's Governing Board for four years, the first woman to hold the position.",
  },
  {
    index: "04",
    title: "Public Policy Leader",
    org: "Ogun State Government",
    body: "Held ministerial-level appointments spanning urban planning, agriculture, and land administration.",
  },
];

export const governance = {
  heading: "Governance & Boards",
  body: "Ronke's board work spans financial services, energy, and not-for-profit governance, with a consistent focus on fiduciary discipline and effective oversight.",
  points: [
    "Independent Non-Executive Director, Oando PLC",
    "Chairperson, Comercio Partners — the firm's first female board chair",
    "Former Chairman, Governing Board, Nigeria Deposit Insurance Corporation",
    "Chair, Women's Group, Chartered Institute of Directors Nigeria",
  ],
};

export const policy = {
  heading: "Leadership & Public Policy",
  body: "Her public service record reflects sustained institutional modernization work within Nigerian regulatory and sub-national government structures.",
  points: [
    "Commissioner for Urban & Physical Planning, Ogun State",
    "Commissioner for Agriculture, Ogun State",
    "Director-General, Bureau of Lands & Survey, Ogun State",
  ],
};

export const services = [
  {
    title: "Board Directorship & Governance Advisory",
    description:
      "Advising boards and executive teams on fiduciary oversight, governance architecture, and strategic decision-making across complex corporate and public sector mandates.",
    credibility: [
      { label: "Oando PLC NED seat", href: "#about" },
      { label: "Former NDIC chairmanship", href: "#about" },
      { label: "TEMPLARS advisory practice", href: "#about" },
    ],
    accent: "#1B4332",
  },
  {
    title: "Regulatory & Public Policy Advisory",
    description:
      "Supporting institutions as they navigate policy change, regulatory engagement, and the operational realities of public-private accountability.",
    credibility: [
      { label: "Ogun State appointments", href: "#about" },
      { label: "NDIC governance leadership", href: "#about" },
      { label: "Public sector institutional reform", href: "#about" },
    ],
    accent: "#B45309",
  },
  {
    title: "ESG & Boardroom Effectiveness",
    description:
      "Strengthening boardroom performance through governance discipline, ESG alignment, and accountability frameworks that elevate long-term value creation.",
    credibility: [
      { label: "GCB.D — ESG designation", href: "#about" },
      { label: "Boardroom effectiveness leadership", href: "#about" },
      { label: "Women in governance leadership", href: "#about" },
    ],
    accent: "#1B4332",
  },
  {
    title: "Keynote & Speaking Engagements",
    description:
      "Delivering executive-level commentary on governance, public policy, ESG, and leadership in institutions that are shaping Africa's future.",
    credibility: [
      { label: "Board leadership perspective", href: "#media" },
      { label: "Public sector insight", href: "#media" },
      { label: "Governance thought leadership", href: "#media" },
    ],
    accent: "#B45309",
  },
];

export const insightCategoryGroups = [
  {
    title: "Business & Growth",
    items: [
      "Startup Advice",
      "Business Operations",
      "Growth & Scaling",
      "Marketing",
    ],
  },
  {
    title: "Strategy & Finance",
    items: ["Finance", "Industry Insights", "Technology & Innovation", "CRM"],
  },
  {
    title: "People & Leadership",
    items: ["Personal Development"],
  },
  {
    title: "Law & Governance",
    items: ["Legal"],
  },
];

export const insights = [
  {
    title:
      "AI Governance: What Nigerian Boards Need to Understand About Emerging AI Regulation.",
    excerpt:
      "A framework for directors on where AI oversight intersects with existing fiduciary and risk duties.",
    tag: "Governance",
  },
  {
    title:
      'The Independent Director: Moving from "Independence in Name" to "Independence in Practice."',
    excerpt:
      "On what genuine independence requires of board members beyond the formal criteria.",
    tag: "Board Effectiveness",
  },
  {
    title:
      "ESG Accountability: Moving Governance from the Boardroom to the Balance Sheet.",
    excerpt:
      "Why ESG commitments only hold weight once they are reflected in reporting and capital allocation.",
    tag: "ESG",
  },
];

export const impact = {
  heading: "Beyond the Boardroom",
  subtitle: "Building Institutions. Advancing People. Creating Lasting Impact.",
  body: "Ronke Sokefun’s impact extends beyond the positions she has held. Across law, business, public service and corporate governance, she has consistently contributed to building stronger institutions, developing people and promoting responsible leadership.",
  paragraphs: [
    "From serving in senior government positions to becoming the first woman to chair the Board of the Nigeria Deposit Insurance Corporation, her career reflects a commitment to service, accountability and meaningful institutional leadership.",
    "Through mentorship and professional leadership, she continues to support the development of emerging leaders, particularly women, while championing the values of integrity, excellence and responsible governance.",
  ],
  points: [
    "Institutional Leadership",
    "Public Service",
    "Mentorship",
    "Governance",
    "Community & Social Impact",
  ],
  quote:
    "Leadership is not only about the positions we hold, but about the institutions we strengthen and the people we empower.",
};

// Full blog archive migrated from the original ronkesokefun.com
// (WordPress/Elementor) site, oldest to newest by original publish
// date. Images are referenced directly from the original site's
// media library (ronkesokefun.com/wp-content/uploads/...) since
// they were never downloaded into this project — see SETUP.md for
// how to swap in locally-hosted copies later.
export const blog = {
  heading: "Blog",
  intro:
    "The original archive from ronkesokefun.com — building solid business foundations, one law at a time.",
  posts: [
    {
      slug: "10-essential-tips-to-kickstart-your-small-business",
      title: "10 Essential Tips to Kickstart Your Small Business",
      date: "May 5, 2024",
      author: "Bayo Babatunde",
      categories: [
        "Branding and Brand Development",
        "Budgeting and Forecasting",
        "Building Customer Loyalty",
        "Business Operations",
        "Business Planning",
      ],
      image:
        "https://ronkesokefun.com/wp-content/uploads/2024/06/1550032875240.jpeg",
      excerpt:
        "Ten foundational moves for a new business — from the business plan through funding, customer service, and continuous learning.",
      body: `Starting a small business is an exciting journey that demands creativity, strategic planning, and perseverance. As an aspiring entrepreneur, you need to equip yourself with the right tools and knowledge to succeed. Here are ten essential tips to help you kickstart your small business and set it on the path to success.

### 1. Develop a Solid Business Plan
A well-crafted business plan serves as the blueprint for your venture. It should outline your business goals, target audience, market analysis, and financial projections. A clear plan not only guides you but also attracts potential investors.

### 2. Understand Your Target Market
Conduct thorough market research to understand your potential customers' needs, preferences, and behaviours. This insight helps you tailor your products or services to meet market demands effectively.

### 3. Create a Strong Online Presence
In today's digital age, having a strong online presence is crucial. Develop a professional website, engage on social media platforms, and leverage SEO techniques to increase your visibility and attract customers.

### 4. Network with Other Entrepreneurs
Building relationships with other entrepreneurs can provide valuable insights and opportunities. Attend industry events, join online forums, and participate in local business groups to expand your network.

### 5. Secure Adequate Funding
Whether through savings, loans, or investors, ensure you have sufficient capital to cover initial costs and sustain operations until your business becomes profitable. Explore various funding options and choose the one that best suits your needs.

### 6. Focus on Customer Service
Excellent customer service can set your business apart from competitors. Prioritize customer satisfaction by addressing inquiries promptly, resolving issues efficiently, and seeking feedback to improve your offerings.

### 7. Stay Adaptable and Flexible
The business landscape is constantly changing. Be prepared to adapt your strategies and operations to meet new challenges and seize emerging opportunities.

### 8. Invest in Marketing
Effective marketing is essential for attracting and retaining customers. Utilize various marketing channels such as social media, email campaigns, and content marketing to promote your business and build brand awareness.

### 9. Monitor Your Finances Closely
Keep a close eye on your finances to ensure your business remains solvent. Use accounting software to track expenses, manage cash flow, and prepare for taxes.

### 10. Keep Learning and Growing
Continuous learning is vital for long-term success. Stay updated on industry trends, seek mentorship, and invest in professional development.

### Conclusion
Embarking on the entrepreneurial journey is both challenging and rewarding. By following these essential tips, you can lay a strong foundation for your small business and navigate the path to success with confidence.`,
    },
    {
      slug: "naijagro-scaling-a-nigerian-startup-nationally",
      title:
        "How a Nigerian Startup Scaled Up Nationally: The Journey of NaijaGro",
      date: "June 1, 2024",
      author: "admin",
      categories: [
        "Branding and Brand Development",
        "Business Operations",
        "Marketing",
        "Startup Advice",
      ],
      image:
        "https://ronkesokefun.com/wp-content/uploads/2024/06/Ronke-scale.jpeg",
      excerpt:
        "How an agritech startup that began in Ibadan went on to connect thousands of farmers with markets across more than 20 Nigerian states.",
      body: `In the bustling entrepreneurial ecosystem of Nigeria, many startups struggle to transition from a local enterprise to a national powerhouse. One success story that stands out is NaijaGro, an agritech startup that began as a small local business and rapidly scaled up to become a national player in the Nigerian market. Here's how NaijaGro navigated the challenging path of scaling up in Nigeria's dynamic environment.

### Identifying a Unique Market Need
NaijaGro started in 2017 in Ibadan, Oyo State, founded by Chinedu Obi. Recognizing the inefficiencies in the agricultural supply chain, Chinedu saw an opportunity to connect small-scale farmers directly with urban markets using technology. This solution addressed the critical issue of post-harvest losses, which plagued many farmers and led to significant financial losses.

### Building a Strong Local Foundation
Before expanding nationally, NaijaGro focused on solidifying its local presence, working closely with local farmers and tailoring their services accordingly. By building a robust network of local suppliers and ensuring high-quality produce, NaijaGro established trust and reliability in the local market.

### Leveraging Technology for Growth
One of NaijaGro's key strategies was the use of technology to streamline operations. They developed a user-friendly mobile app that allowed farmers to list their produce and buyers to place orders seamlessly, and the app's success in Ibadan encouraged NaijaGro to replicate the model in other cities.

### Securing Strategic Partnerships
To scale nationally, NaijaGro formed strategic partnerships with logistics companies and local governments, ensuring smooth transportation of goods across states. Collaborations with financial institutions also provided farmers with access to microloans.

### Adapting to Regional Differences
Nigeria's diverse regions presented both opportunities and challenges. NaijaGro adapted its business model to cater to regional differences in crop types, farming practices, and consumer preferences.

### Marketing and Brand Building
Effective marketing played a pivotal role in NaijaGro's national expansion — social media awareness, testimonials from farmers and customers, and participation in agricultural fairs all provided visibility and credibility.

### Managing Scaling Challenges
Scaling up wasn't without challenges. NaijaGro faced issues related to logistics, supply chain management, and regulatory compliance, addressed through staff training programs and continuous improvement of their technology infrastructure.

### Achieving National Presence
Today, NaijaGro operates in over 20 states across Nigeria, connecting thousands of farmers with markets nationwide — a testament to the potential of Nigerian entrepreneurship.

### Conclusion
The story of NaijaGro provides valuable lessons for other Nigerian startups aspiring to scale nationally: solve local problems with innovative solutions, build strong foundations, leverage technology, and adapt to regional variations.`,
    },
    {
      slug: "recent-changes-in-nigerian-business-laws",
      title:
        "Recent Changes in Nigerian Business Laws: What Entrepreneurs and Small Business Owners Need to Know",
      date: "June 2, 2024",
      author: "Bayo Babatunde",
      categories: [
        "Finance",
        "Industry Insights",
        "Legal",
        "Personal Development",
        "Small Business Accounting",
        "Startup Advice",
      ],
      image: "https://ronkesokefun.com/wp-content/uploads/2024/06/ronke.jpeg",
      excerpt:
        "A rundown of CAMA 2020, the Finance Acts, the Nigerian Startup Act 2022, and the Petroleum Industry Act — and what each means for small business owners.",
      body: `Nigeria's business landscape is undergoing significant transformation, driven by recent changes in its legal framework. For aspiring entrepreneurs and existing small business owners, staying informed about these developments is crucial to navigating the evolving regulatory environment effectively. Here's a rundown of the key changes and what they mean for businesses.

### The Companies and Allied Matters Act (CAMA) 2020
The most notable legislative overhaul is CAMA 2020, which replaces the 1990 version and aims to improve the ease of doing business in Nigeria. Key features include single-shareholder companies, an online CAC registration system, reduced minimum share capital requirements, and an exemption for small companies from mandatory company secretary and auditor appointments.

### Finance Act 2020 and 2021
These Acts introduced several tax reforms: small companies with an annual turnover of less than ₦25 million are now exempt from Companies Income Tax; VAT rose from 5% to 7.5%; and new provisions target the taxation of digital services and goods.

### The Nigerian Startup Act 2022
This legislation provides a legal framework to support the establishment and growth of startups, including registration incentives, a Startup Investment Seed Fund, and stronger support for IP protection such as patents and trademarks.

### The Petroleum Industry Act (PIA) 2021
Though focused on oil and gas, the PIA has broader implications — mandating greater local content participation and emphasizing environmental sustainability and community development, which affects businesses across the supply chain.

### Conclusion
These legal reforms reflect a concerted government effort to create a more conducive environment for entrepreneurship and small business growth. Understanding them is essential to leverage new opportunities and ensure compliance.`,
    },
    {
      slug: "how-to-launch-a-profitable-small-business-from-scratch",
      title: "How to Launch a Profitable Small Business from Scratch",
      date: "June 5, 2024",
      author: "Bayo Babatunde",
      categories: [
        "Branding and Brand Development",
        "Budgeting and Forecasting",
        "Building Customer Loyalty",
        "Business Law Basics",
        "Business Operations",
        "Business Planning",
      ],
      image:
        "https://ronkesokefun.com/wp-content/uploads/2024/06/Benefits-of-Small-Business-Consulting-Services.jpg",
      excerpt:
        "Ten steps from identifying a profitable niche to launch day — business plan, funding, registration, brand, website, and team.",
      body: `Launching a profitable small business from scratch is a challenging yet rewarding endeavour. Follow these steps to set your business on the path to success.

### 1. Identify a Profitable Niche
Start by identifying a niche with high demand and low competition. Conduct market research to understand customer needs and preferences.

### 2. Develop a Business Plan
Create a detailed business plan outlining your goals, target market, competitive analysis, marketing strategies, and financial projections.

### 3. Secure Funding
Determine how much capital you need to start and run your business. Explore various funding options such as savings, loans, or investors.

### 4. Register Your Business
Choose a business name and legal structure, then register your business with the appropriate government authorities.

### 5. Build Your Brand
Develop a strong brand identity with a unique logo, colour scheme, and messaging that resonates with your target audience.

### 6. Create a Website
A professional website is essential for any business — user-friendly, mobile-optimized, and SEO-friendly.

### 7. Implement Marketing Strategies
Use a mix of social media marketing, content marketing, email campaigns, and search engine optimization to promote your business.

### 8. Set Up Accounting Systems
Keep track of your finances from the start with accounting software to manage expenses, track revenue, and prepare for tax season.

### 9. Hire the Right Team
As your business grows, hire employees who share your vision and are committed to helping you achieve your goals.

### 10. Launch and Promote Your Business
Plan a launch event or campaign to generate buzz, leveraging social media, email lists, and local media to spread the word.

### Conclusion
Launching a profitable small business from scratch requires careful planning and execution. By following these steps, you can build a strong foundation for long-term success.`,
    },
    {
      slug: "top-10-strategies-for-small-business-success-in-2024",
      title: "Top 10 Strategies for Small Business Success in 2024",
      date: "June 5, 2024",
      author: "Bayo Babatunde",
      categories: [
        "Budgeting and Forecasting",
        "Market Research",
        "Market Trends and Analysis",
        "Technology and Innovation",
        "Time Management and Productivity",
      ],
      image:
        "https://ronkesokefun.com/wp-content/uploads/2024/06/top-10-low-cost-small-business-marketing-strategies-in-2024.jpg",
      excerpt:
        "From digital transformation to financial health — the strategies every small business owner should consider this year.",
      body: `Starting a small business in 2024 can be both exciting and challenging. To help you navigate the path to success, here are the top 10 strategies every small business owner should consider.

### 1. Embrace Digital Transformation
Digital transformation is no longer optional. Invest in the latest technologies to streamline operations, enhance customer experiences, and stay competitive.

### 2. Focus on Customer Experience
Providing exceptional customer experience can set your business apart. Personalize interactions, respond promptly to queries and go the extra mile.

### 3. Leverage Social Media Marketing
Create engaging content, run targeted ads, and interact with your followers regularly.

### 4. Optimize Your Website for SEO
Focus on keyword research, quality content, and technical SEO to improve your search engine rankings.

### 5. Implement Data-Driven Decision Making
Use data analytics to inform your business decisions — track key metrics, analyze customer behaviour, and adjust strategies based on insights.

### 6. Build a Strong Brand Identity
Develop a consistent brand message, visual style, and voice that resonates with your audience.

### 7. Invest in Employee Development
Your employees are your greatest asset — provide training and development opportunities to enhance their skills.

### 8. Foster Community Engagement
Participate in local events, support local causes, and collaborate with other businesses.

### 9. Adapt to Market Changes
Stay flexible and be ready to pivot your business model as needed.

### 10. Monitor Financial Health
Regularly review your financial statements, use accounting software to track expenses, manage cash flow, and plan for taxes.

### Conclusion
By implementing these strategies, you can position your small business for success in 2024. Stay proactive, embrace change, and continuously seek ways to improve.`,
    },
    {
      slug: "essential-tools-every-entrepreneur-needs-for-startup-success",
      title: "Essential Tools Every Entrepreneur Needs for Startup Success",
      date: "June 5, 2024",
      author: "Bayo Babatunde",
      categories: [
        "Branding and Brand Development",
        "Budgeting and Forecasting",
        "Building Customer Loyalty",
        "Business Operations",
        "Business Planning",
        "Business Tools and Software",
      ],
      image:
        "https://ronkesokefun.com/wp-content/uploads/2024/06/Entrepreneurship-copy.webp",
      excerpt:
        "Ten categories of software every founder should have in their stack, from project management to legal and compliance.",
      body: `Equipping yourself with the right tools can significantly impact the success of your startup. Here are the essential tools every entrepreneur needs.

#### 1. Project Management Software
Keep your projects organized and on track with tools like Trello, Asana, or Monday.com.

#### 2. Accounting Software
Manage your finances effectively with tools such as QuickBooks, Xero, or FreshBooks.

#### 3. Customer Relationship Management (CRM) Systems
Maintain and improve customer relationships with CRM systems like Salesforce, HubSpot, or Zoho CRM.

#### 4. Email Marketing Platforms
Create and manage email campaigns with platforms like Mailchimp, Constant Contact, or Sendinblue.

#### 5. Social Media Management Tools
Manage your social media presence with tools like Hootsuite, Buffer, or Sprout Social.

#### 6. Website Builders
Create a professional website with builders such as WordPress, Wix, or Squarespace.

#### 7. Analytics Tools
Track and analyze your website traffic and marketing efforts with Google Analytics, SEMrush, or Ahrefs.

#### 8. Collaboration Tools
Facilitate team collaboration with Slack, Microsoft Teams, or Zoom.

#### 9. E-commerce Platforms
If you're selling products online, use platforms like Shopify, WooCommerce, or BigCommerce.

#### 10. Legal and Compliance Tools
Ensure your business complies with legal requirements using tools like LegalZoom, DocuSign, or Rocket Lawyer.

### Conclusion
Using the right tools can streamline your operations and enhance your startup's productivity. Invest in these essential tools to set your business up for success.`,
    },
    {
      slug: "the-essentials-of-starting-a-small-business-in-nigeria",
      title: "The Essentials of Starting a Small Business in Nigeria",
      date: "June 5, 2024",
      author: "admin",
      categories: [
        "Business Law Basics",
        "Business Operations",
        "Business Planning",
        "Startup Advice",
      ],
      image: "https://ronkesokefun.com/wp-content/uploads/2024/05/R.png",
      excerpt:
        "Nine steps — from market research to staying compliant — with worked examples for founders across different industries.",
      body: `Starting a small business in Nigeria requires careful planning, strategic execution, and an understanding of the local business environment. This article outlines the essential steps to guide aspiring entrepreneurs and small business owners through the process, with illustrative examples for each step.

### 1. Conduct Market Research
The first step is to conduct thorough market research: identify your target audience, understand their needs, and analyze your competitors. If you plan to open a bakery in Lagos, visit other bakeries and survey customers; for a mobile-app startup, research app trends and engage potential users online.

### 2. Write a Business Plan
Your business plan outlines your business goals, strategies, target market, financial projections, and operational plans — whether that's a fashion boutique's marketing strategy or an agricultural business's crop selection and processing plans.

### 3. Secure Financing
Depending on the nature of your business, you may need financing through personal savings, loans, investors, or grants — from a bank loan for a restaurant to microfinance for an online retail business.

### 4. Register Your Business
Registering with the Corporate Affairs Commission (CAC) gives your business formal identity and legal backing, whether as a sole proprietorship or a Limited Liability Company.

### 5. Choose a Suitable Location
Location can significantly affect success — consider accessibility, foot traffic, and proximity to suppliers, whether you're opening a retail electronics store or a daycare center.

### 6. Develop a Marketing Strategy
Utilize both online and offline methods: social media showcases for a catering business, or SEO and industry networking for a software firm.

### 7. Build a Strong Team
Hire individuals who share your vision and possess the necessary skills, whether experienced bakers for a bakery or SEO and content specialists for a digital marketing agency.

### 8. Establish Financial Management Systems
Set up systems for bookkeeping, invoicing, and financial reporting — accounting software for a retail shop, or a simple budget and spreadsheet for a freelance business.

### 9. Stay Compliant and Adapt
Ensure compliance with local laws and regulations, and monitor and adapt to changes in the market or industry, from food safety permits to data protection laws for an online tutoring service.

### Conclusion
Starting a small business in Nigeria involves careful planning, strategic execution, and financial management. Whether opening a bakery or launching a tech startup, these fundamentals are essential for success.`,
    },
    {
      slug: "hello-fams-here-is-exciting-news",
      title: "Hello, Fams!!! Here is exciting news",
      date: "June 6, 2024",
      author: "Ibro Zion",
      categories: [
        "Branding and Brand Development",
        "Building Customer Loyalty",
        "Business Operations",
        "Business Planning",
      ],
      image:
        "https://ronkesokefun.com/wp-content/uploads/2024/06/IMG-20240528-WA0015.jpg",
      excerpt:
        'The announcement post — the birth of the blog, "Building Solid Business Foundations; One Law at a Time."',
      body: `🎉 Exciting News! 🎉

Dear Friends and Family,

I'm thrilled to announce the "birth" of my new blog, focused on "Building Solid Business Foundations; One Law at a Time!"

After months of dreaming, planning, and procrastination, I've finally taken the plunge into the blogosphere. Ronkesokefun.com will be my little corner of the internet where I'll be sharing my thoughts, experiences, and passions about entrepreneurship and small businesses.

Why a blog, you ask? I wanted a space to connect, inspire, and share my insights and experiences over the years — whether you're looking for a guide on how to start your business, what specific laws guide your business, what your legal obligations are, or tips on marketing and growing your business.

I would be thrilled if you could join me on this journey. Your support and feedback mean the world to me, and I'd love to hear your thoughts on my posts.

Here's to new beginnings and countless tips to come!

With love and gratitude,
Ronke`,
    },
    {
      slug: "introduction-to-small-business-law-in-nigeria",
      title: "Introduction to Small Business Law in Nigeria",
      date: "June 6, 2024",
      author: "Bayo Babatunde",
      categories: [
        "Branding and Brand Development",
        "Building Customer Loyalty",
        "Business Operations",
        "Business Planning",
        "Finance",
      ],
      image:
        "https://ronkesokefun.com/wp-content/uploads/2024/06/business-law-quiz.webp",
      excerpt:
        "A clear overview of the legal aspects every small business owner should know — structure, registration, tax, employment, IP, contracts, and consumer protection.",
      body: `Starting a small business in Nigeria is an exciting endeavour filled with promise and opportunity. However, amidst the excitement of launching a new venture, it's crucial to understand the legal landscape that governs small businesses in the country. This introduction aims to provide a clear overview of key legal aspects that every small business owner should be aware of.

- **Business Structure:** One of the first decisions you'll make is choosing a business structure. Common options include sole proprietorship, partnership, limited liability company (LLC), and corporation, each with its own implications for liability, taxation, and management.
- **Registration and Licensing:** Registering your business with the Corporate Affairs Commission (CAC) and obtaining any required industry-specific licenses or permits is mandatory and protects your business from legal repercussions.
- **Tax Obligations:** Nigeria's taxation system includes corporate income tax, value-added tax (VAT), and personal income tax. Compliance avoids penalties and facilitates smooth operations.
- **Employment Law:** If you hire employees, adhere to Nigerian labour laws governing recruitment, employment contracts, working conditions, and termination procedures.
- **Intellectual Property Protection:** Trademarks, patents, and copyrights are legal mechanisms available in Nigeria to protect your business's innovations, brand identity, and creative works.
- **Contractual Agreements:** Understanding contract law principles and ensuring contracts are properly drafted, reviewed, and executed can prevent misunderstandings and legal disputes.
- **Consumer Protection:** Nigerian consumer protection laws safeguard the rights of consumers and regulate business-consumer relationships.

In conclusion, navigating the legal framework of creating a small business in Nigeria requires diligence and awareness. By familiarizing yourself with these fundamental legal principles, you can mitigate risks, protect your business interests, and lay a solid foundation for future growth.`,
    },
    {
      slug: "now-lets-have-some-fun-and-test-our-knowledge",
      title: "Now, let's have some fun and test our knowledge!",
      date: "June 6, 2024",
      author: "Bayo Babatunde",
      categories: [
        "Branding and Brand Development",
        "Business Operations",
        "Business Planning",
        "Compliance and Regulations",
        "Content Marketing",
      ],
      image:
        "https://ronkesokefun.com/wp-content/uploads/2024/06/channels4_profile.jpg",
      excerpt:
        "🇳🇬 How well do you know Nigerian business regulations? Take the quiz.",
      body: `🇳🇬 How Well Do You Know Nigerian Business Regulations? 📝 Take this quiz to test your knowledge and learn more about navigating the legal landscape of doing business in Nigeria!

1) What is the primary regulatory body overseeing business operations in Nigeria?
a) Federal Inland Revenue Service (FIRS)  b) Nigerian Customs Service (NCS)  c) Corporate Affairs Commission (CAC)  d) Securities and Exchange Commission (SEC)

2) What is the minimum required number of shareholders to register a private limited company in Nigeria?
a) 1  b) 2  c) 5  d) 10

3) Which of the following is NOT a requirement for registering a business name in Nigeria?
a) Availability of the proposed business name  b) Filing of annual returns  c) Payment of prescribed fees  d) Submission of a business name registration form

4) What is the maximum percentage of foreign ownership allowed in a Nigerian company in certain sectors?
a) 25%  b) 49%  c) 51%  d) 100%

5) Which regulatory body oversees consumer protection and fair competition in Nigeria?
a) Nigerian Communications Commission (NCC)  b) National Agency for Food and Drug Administration and Control (NAFDAC)  c) Consumer Protection Council (CPC)  d) Standards Organisation of Nigeria (SON)

6) True or False: Value Added Tax (VAT) registration is mandatory for businesses with an annual turnover of ₦5 million and above.

7) Which of the following is NOT a tax payable by businesses operating in Nigeria?
a) Company Income Tax (CIT)  b) Value Added Tax (VAT)  c) Personal Income Tax (PIT)  d) Withholding Tax (WHT)

8) How often are companies required to file their annual returns with the Corporate Affairs Commission?
a) Annually  b) Bi-annually  c) Quarterly  d) Once every two years

9) Which regulatory body is responsible for overseeing labor-related issues in Nigeria?
a) Federal Ministry of Labor and Employment  b) National Industrial Court  c) Nigerian Labour Congress (NLC)  d) National Directorate of Employment (NDE)

10) What is the penalty for late filing of annual returns with the Corporate Affairs Commission?
a) ₦5,000  b) ₦10,000  c) ₦50,000  d) ₦100,000

Comment your answers below and let's see how well you know Nigerian business regulations! 💼✨

#NaijaBizQuiz #NaijaBusinessStart-UpBlueprint`,
    },
  ],
};

// Audio feature originally embedded on the homepage via SoundCloud.
export const audioFeature = {
  heading: "Listen",
  title: "Featured audio",
  embedUrl:
    "https://w.soundcloud.com/player/?visual=false&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F36701924&show_artwork=true&maxheight=300&maxwidth=790&auto_play=false&buying=true&liking=true&download=true&sharing=true&show_comments=true&show_playcount=true&show_user=true",
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/gJUZob8kXXyrxzc3/?mibextid=qi2Omg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ronkesokefun?igsh=ZHNqZXV3ZXNncGo=",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ronkesokefun?si=kuBNvocHPyLUvFsl",
  },
];

export const contact = {
  heading: "Executive Inquiries",
  body: "For board appointments, speaking engagements, governance advisory, or press inquiries, reach the office directly.",
  engagementTypes: [
    "Board Appointment / Directorship",
    "Keynote / Speaking",
    "Governance Advisory",
    "Media / Press",
  ],
};

export const footer = {
  // Remove the repeated status text from the footer (shown in header previously)
  status: "",
  copyright: `© ${new Date().getFullYear()} Ronke Sokefun. All rights reserved.`,
};
