import { 
  KanbanSquare, 
  GitBranch, 
  Clock, 
  Shield, 
  Zap, 
  Layout, 
  Users, 
  BarChart3, 
  Puzzle,
  GitGraph,
  Box,
  Layers
} from 'lucide-react';
import { Plan, FeatureItem } from './types';
import productOne from "./public/assets/images/product-one.png";
import productTwo from "./public/assets/images/product-two.png";
import productThree from "./public/assets/images/product-three.png";
import productCreate from "./public/assets/images/product-create.png";

export const NAV_ITEMS = [
  { label: 'Product', path: '/product' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// Flat pricing model updates
export const SMALL_BUSINESS_PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceBase: 499, // Flat price per month
    features: ['Up to 5 Team Members', '3 Active Projects', '1GB Storage', 'Community Support', 'Basic Kanban'],
  },
  {
    id: 'pro',
    name: 'Pro',
    priceBase: 1499,
    features: ['Up to 15 Team Members', 'Unlimited Projects', 'Backlog & Sprint Planning', 'Time Tracking', 'GitHub Integration', 'Priority Email Support'],
    isPopular: true,
  },
  {
    id: 'business',
    name: 'Business',
    priceBase: 2999,
    features: ['Up to 50 Team Members', 'Advanced Automations', 'Roadmap & Timeline', 'Custom Workflows', 'Slack & Discord Integration', 'Dedicated Success Manager'],
  },
];

export const ENTERPRISE_PLANS: Plan[] = [
  {
    id: 'ent_std',
    name: 'Corporate',
    priceBase: 5999,
    features: ['Up to 100 Users', 'SSO Enforcement', 'Audit Logs', 'Advanced Permissions', '99.9% Uptime SLA'],
  },
  {
    id: 'ent_plus',
    name: 'Enterprise',
    priceBase: 9999,
    features: ['Unlimited Users', 'On-premise Option', '24/7 Phone Support', 'Unlimited API Access', 'Custom Data Retention'],
    isPopular: true,
  },
  {
    id: 'ent_elite',
    name: 'Custom',
    priceBase: 14999,
    features: ['Dedicated Infrastructure', 'White Labeling', 'Custom Development', 'Quarterly Business Reviews', 'On-site Training'],
  },
];

export const FEATURES_LIST: FeatureItem[] = [
 { id: '1', title: 'Smart Kanban', description: 'Fluid, drag-and-drop boards with AI-powered sorting.', icon: KanbanSquare, image: productOne },
  { id: '2', title: 'Sprint Planning', description: 'Manage backlogs and sprints with velocity tracking.', icon: GitGraph, image: productTwo },
  { id: '3', title: 'Roadmaps', description: 'Visualize product journey with timeline views.', icon: Layout, image: productThree },
  { id: '4', title: 'Issues & Tasks', description: 'Deep issue tracking with custom fields.', icon: Box },
  { id: '5', title: 'Code Sync', description: 'Link Git commits directly to your cards.', icon: GitBranch },
  { id: '6', title: 'Time Tracking', description: 'Built-in timers and detailed timesheets.', icon: Clock },
  { id: '7', title: 'Team Roles', description: 'Granular permissions and access control.', icon: Users },
  { id: '8', title: 'Analytics', description: 'Real-time burnup, burndown, and throughput charts.', icon: BarChart3 },
  { id: '9', title: 'Automations', description: 'No-code "If-This-Then-That" rule builder.', icon: Zap },
  { id: '10', title: 'Enterprise Security', description: 'SSO, 2FA, and comprehensive audit logs.', icon: Shield },
  { id: '11', title: 'Integrations', description: 'Connect with 50+ tools including Slack & Jira.', icon: Puzzle },
  { id: '12', title: 'Workflows', description: 'Customizable states and transitions.', icon: Layers },
];

export const BLOG_POSTS = [
  {
    id: '1',
    slug: 'introducing-flownyx-2-0',
    title: "Introducing Flownyx 2.0: The Future of Project Management",
    excerpt: "We've completely rebuilt our engine from the ground up to deliver 10x faster performance and AI-powered workflows.",
    image: productOne,
    author: "Alex Rivera",
    role: "CEO",
    date: "Mar 10, 2024",
    readTime: "5 min read",
    tag: "Product",
    content: `
      <p>We are thrilled to announce the general availability of Flownyx 2.0, a complete reimagining of what project management software can be. For the past year, we've been listening to you—our users—and one thing became clear: you want tools that get out of the way.</p>
      
      <h3>Speed as a Feature</h3>
      <p>The new Flownyx engine is built on Rust and WebAssembly, delivering sub-30ms interaction times for almost every action. Whether you're moving a card, loading a backlog of 10,000 items, or searching through archived projects, it feels instant.</p>

      <h3>AI that actually helps</h3>
      <p>We didn't just slap a chatbot on the side. Flownyx 2.0 integrates Generative AI directly into your workflow:</p>
      <ul>
        <li><strong>Smart Sorting:</strong> Automatically prioritizes your backlog based on deadlines and dependencies.</li>
        <li><strong>Auto-Summaries:</strong> Generates standup updates based on your completed tasks.</li>
        <li><strong>Spec Generator:</strong> Turns a one-line feature idea into a full technical specification.</li>
      </ul>

      <h3>What's next?</h3>
      <p>This is just the beginning. In the coming weeks, we will be rolling out enhanced mobile apps and a new API for deep custom integrations. Thank you for building with us.</p>
    `
  },
  {
    id: '2',
    slug: 'effective-sprint-retrospectives',
    title: "How to run effective sprint retrospectives",
    excerpt: "Learn the secrets behind high-performing engineering teams and how they iterate on their process.",
    image: productTwo,
    author: "Sarah Chen",
    role: "Head of Product",
    date: "Mar 05, 2024",
    readTime: "8 min read",
    tag: "Engineering",
    content: `
      <p>The retrospective is arguably the most important ceremony in agile development. It's the dedicated time for a team to look back and continuously improve. However, too often, retrospectives become repetitive complaint sessions with no actionable outcomes.</p>
      
      <h3>The Prime Directive</h3>
      <p>Norman Kerth's Prime Directive states: "Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand."</p>

      <h3>Structuring the Session</h3>
      <p>To keep engagement high, try rotating formats. Instead of the standard "Start, Stop, Continue", try:</p>
      <ul>
        <li><strong>The Sailboat:</strong> What is propelling us forward (wind)? What is holding us back (anchors)?</li>
        <li><strong>Glad, Sad, Mad:</strong> Focuses on emotional response to the sprint events.</li>
      </ul>
    `
  },
  {
    id: '3',
    slug: 'state-of-remote-work-2024',
    title: "The state of remote work in 2024",
    excerpt: "Insights from over 500 engineering leaders on how distributed teams are changing the software landscape.",
    image: productThree,
    author: "Marcus Johnson",
    role: "Lead Architect",
    date: "Feb 28, 2024",
    readTime: "6 min read",
    tag: "Culture",
    content: `
      <p>Remote work is no longer an experiment; it's the standard for modern software engineering. We surveyed 500 CTOs and VPs of Engineering to understand how they are adapting.</p>
      
      <h3>Key Findings</h3>
      <p>78% of respondents said their teams are fully distributed or remote-first. The biggest challenge cited was not productivity, but <strong>connection</strong> and <strong>alignment</strong>.</p>
    `
  },
  {
    id: '4',
    slug: 'optimizing-react-performance',
    title: "Optimizing React performance at scale",
    excerpt: "A deep dive into how we reduced our bundle size by 40% and improved TTI.",
    image: productCreate,
    author: "David Kim",
    role: "Senior Engineer",
    date: "Feb 15, 2024",
    readTime: "12 min read",
    tag: "Engineering",
    content: `
      <p>Performance monitoring is critical. At Flownyx, we noticed our TTI (Time to Interactive) creeping up as we added more enterprise features. Here is how we tackled it.</p>
      
      <h3>Code Splitting</h3>
      <p>We moved from route-based splitting to component-based splitting for heavy widgets like the Gantt chart and Code Editor.</p>
    `
  },
];

export const JOB_OPENINGS = [
  {
    id: '1',
    slug: 'senior-frontend-engineer',
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for a Senior Frontend Engineer to lead the development of our core Kanban interface. You will work closely with design and product to ship a world-class user experience.",
    responsibilities: [
      "Architect and build scalable UI components using React and TypeScript.",
      "Optimize application performance for handling thousands of DOM elements.",
      "Mentor junior engineers and conduct code reviews.",
      "Collaborate with the design team to maintain our design system."
    ],
    requirements: [
      "5+ years of experience with modern JavaScript/TypeScript and React.",
      "Deep understanding of the DOM, browser rendering, and web performance.",
      "Experience with state management libraries (Redux, Zustand, or Recoil).",
      "Strong eye for design and attention to detail."
    ],
    benefits: [
      "Competitive salary and equity package.",
      "Remote-first culture with flexible hours.",
      "$2,000 annual learning stipend.",
      "Top-tier health, dental, and vision insurance."
    ]
  },
  {
    id: '2',
    slug: 'staff-backend-engineer',
    title: "Staff Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our core infrastructure team to build the high-performance engine that powers Flownyx. You will deal with real-time syncing, distributed systems, and massive scale.",
    responsibilities: [
      "Design and implement high-availability microservices in Go and Rust.",
      "Optimize database queries and schema design for PostgreSQL.",
      "Ensure system reliability and scalability.",
      "Lead technical decision making for backend architecture."
    ],
    requirements: [
      "7+ years of backend engineering experience.",
      "Proficiency in Go, Rust, or C++.",
      "Experience with event-driven architecture (Kafka, RabbitMQ).",
      "Knowledge of Kubernetes and cloud infrastructure (AWS/GCP)."
    ],
    benefits: [
      "Competitive salary and equity package.",
      "Remote-first culture with flexible hours.",
      "$2,000 annual learning stipend.",
      "Top-tier health, dental, and vision insurance."
    ]
  },
  {
    id: '3',
    slug: 'devops-specialist',
    title: "DevOps Specialist",
    department: "Engineering",
    location: "Remote / NY",
    type: "Full-time",
    description: "We need a DevOps expert to streamline our CI/CD pipelines and manage our cloud infrastructure. You will empower our engineering team to ship code faster and safer.",
    responsibilities: [
      "Manage and improve CI/CD pipelines using GitHub Actions.",
      "Orchestrate containerized applications using Kubernetes.",
      "Monitor system health and set up alerting using Prometheus/Grafana.",
      "Automate infrastructure provisioning with Terraform."
    ],
    requirements: [
      "4+ years of DevOps or SRE experience.",
      "Strong experience with Docker and Kubernetes.",
      "Familiarity with IaC tools like Terraform or Ansible.",
      "Scripting skills in Bash or Python."
    ],
    benefits: [
      "Competitive salary and equity package.",
      "Remote-first culture with flexible hours.",
      "$2,000 annual learning stipend.",
      "Top-tier health, dental, and vision insurance."
    ]
  },
  {
    id: '4',
    slug: 'senior-product-designer',
    title: "Senior Product Designer",
    department: "Product & Design",
    location: "Remote",
    type: "Full-time",
    description: "As a Senior Product Designer, you will own the end-to-end design process for major features. You will translate complex user needs into intuitive and beautiful interfaces.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity mockups in Figma.",
      "Conduct user research and usability testing.",
      "Contribute to and evolve our design system.",
      "Work closely with engineers to ensure high-quality implementation."
    ],
    requirements: [
      "5+ years of product design experience for SaaS applications.",
      "Strong portfolio demonstrating UX thinking and UI craft.",
      "Proficiency in Figma and prototyping tools.",
      "Ability to communicate design decisions effectively."
    ],
    benefits: [
      "Competitive salary and equity package.",
      "Remote-first culture with flexible hours.",
      "$2,000 annual learning stipend.",
      "Top-tier health, dental, and vision insurance."
    ]
  },
  {
    id: '5',
    slug: 'product-manager',
    title: "Product Manager",
    department: "Product & Design",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for a data-driven Product Manager to lead our growth initiatives. You will identify opportunities to improve user acquisition and retention.",
    responsibilities: [
      "Define product strategy and roadmap for growth.",
      "Analyze user data to identify friction points.",
      "Run A/B tests and experiments.",
      "Collaborate with marketing and engineering teams."
    ],
    requirements: [
      "3+ years of product management experience.",
      "Experience with product analytics tools (Mixpanel, Amplitude).",
      "Strong analytical and problem-solving skills.",
      "Excellent communication and leadership abilities."
    ],
    benefits: [
      "Competitive salary and equity package.",
      "Remote-first culture with flexible hours.",
      "$2,000 annual learning stipend.",
      "Top-tier health, dental, and vision insurance."
    ]
  },
  {
    id: '6',
    slug: 'account-executive',
    title: "Account Executive",
    department: "Go-to-Market",
    location: "London / Remote",
    type: "Full-time",
    description: "Join our sales team to bring Flownyx to enterprise customers. You will manage the full sales cycle from prospecting to closing.",
    responsibilities: [
      "Identify and qualify enterprise leads.",
      "Conduct product demos and presentations.",
      "Negotiate contracts and close deals.",
      "Maintain accurate records in our CRM."
    ],
    requirements: [
      "3+ years of B2B SaaS sales experience.",
      "Proven track record of exceeding quotas.",
      "Strong presentation and negotiation skills.",
      "Self-motivated and results-oriented."
    ],
    benefits: [
      "Competitive base salary + uncapped commission.",
      "Remote-first culture with flexible hours.",
      "$2,000 annual learning stipend.",
      "Top-tier health, dental, and vision insurance."
    ]
  },
  {
    id: '7',
    slug: 'developer-advocate',
    title: "Developer Advocate",
    department: "Go-to-Market",
    location: "SF / Remote",
    type: "Full-time",
    description: "We are looking for a Developer Advocate to build and nurture our developer community. You will create content, speak at conferences, and gather feedback.",
    responsibilities: [
      "Create technical content (blog posts, videos, tutorials).",
      "Engage with the community on Discord, Twitter, and forums.",
      "Speak at developer conferences and meetups.",
      "Provide feedback to the product team based on community insights."
    ],
    requirements: [
      "Experience as a software engineer or developer advocate.",
      "Strong communication and public speaking skills.",
      "Passion for developer tools and communities.",
      "Ability to explain complex technical concepts simply."
    ],
    benefits: [
      "Competitive salary and equity package.",
      "Remote-first culture with flexible hours.",
      "$2,000 annual learning stipend.",
      "Top-tier health, dental, and vision insurance."
    ]
  }
];
