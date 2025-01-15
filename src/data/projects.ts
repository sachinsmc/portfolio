import reasonlabsImage from "../assets/reasonlabs-logo.jpeg"
import fkImage from "../assets/fk-logo.jpeg"
import osImage from "../assets/online-security.webp"
import vpnImage from "../assets/vpn.webp"
import saferwebImage from "../assets/saferweb.webp"

export const projects = [
  {
    title: "Online Security",
    description: "The Online Security secure browser extension & app brings all the elements of a next-generation antivirus solution to the web, allowing you to surf the web confidently. This includes Credit score monitoring, Digital Footprint cleanup, harmful and suspicious website blocker, identity theft protection and torrent inspection and many more.",
    technologies: ["Browser Extension", "Cybersecurity", "Node.js",  "AWS", "PostgreSQL"],
    image: osImage,
    live: "https://onlinesecurityext.com/"
  },
  {
    title: "RAV Antivirus",
    description: "RAV Endpoint Protection platform is a multilayered next-generation antivirus solution that combines real-time monitoring of endpoints against the widest possible range of cyber threats.",
    technologies: ["Antivirus", "Cybersecurity", "Node.js",  "AWS", "PostgreSQL"],
    image: reasonlabsImage,
    live: "https://reasonlabs.com/platform/products/endpoint-protection"
  },
  {
    title: "FamilyKeeper Parental Control",
    description: "A Parental control application comprising separate parent and child apps. Key features include real-time child location tracking, screen time and schedule management, usage monitoring, and DNS-based content filtering.",
    technologies: ["Parental Control", "Mobile App", "Node.js",  "AWS", "PostgreSQL"],
    image: fkImage,
    live: "https://apps.apple.com/us/app/familykeeper-parental-control/id1637350511"
  },
  {
    title: "RAV VPN",
    description: "RAV VPN provides a higher level of privacy and security for your online activities. All transferred data is 100% encrypted and is never shared with any third parties.",
    technologies: ["VPN", "Cybersecurity", "Node.js",  "AWS", "PostgreSQL"],
    image: vpnImage,
    live: "https://play.google.com/store/apps/details?id=com.reasonsecurity.vpn"
  },
  {
    title: "SaferWeb",
    description: "Safer Web easily filters all your internet content according to your needs! Control your device's internet connection and choose what to block: advertising, trackers, malicious sites, data and privacy leaks, adult and inappropriate content for children, and much more.",
    technologies: ["Internet Filtering", "Cybersecurity", "Privacy", "Node.js",  "AWS", "PostgreSQL"],
    image: saferwebImage,
    live: "https://reasonlabs.com/platform/products/safer-web"
  },
  {
    title: "Ouikar - Car Parts & Equipments Marketplace",
    description: "Car Parts & Equipments marketplace from garage partners, thousands of original spare parts.",
    technologies: ["Go", "AWS", "TecDoc (TecAlliance)"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800&h=500",
    github: "https://github.com/sachinsmc",
    live: "https://ouikar.com"
  },
  {
    title: "Softsolutions Inc - ETCD Cluster API",
    description: "ETCD is an open source, distributed, consistent key-value store for shared configuration, service discovery, and scheduler coordination of distributed systems or clusters of machines. Wrote APIs on top of the ETCD cluster.",
    technologies: ["Go", "ETCD"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=500",
    github: "https://github.com/sachinsmc/softsolutions-inc"
  },
  {
    title: "WINNOWPRO - Online Marketing Automated",
    description: "WinnowPro offers digital sales and marketing solutions, including search engine marketing and social media marketing for auto dealerships, healthcare, etc. Built Backend API Microservices using AWS Serverless Services.",
    technologies: ["Go", "Node.js", "AWS", "MySQL", "ElasticSearch"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
    live: "https://winnowpro.com"
  },
  {
    title: "Willu - Hashtag Messaging App",
    description: "Willu allows you to send updates, promotions or alerts using hashtags and get measurable feedback from your followers, without all the noise of clutter. Built Authentication, payments, notifications, automatic bill generation API Module.",
    technologies: ["Go", "Node.js", "Vue.js", "AWS", "DynamoDB", "ElasticSearch"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800&h=500",
    live: "https://willu.app"
  },
  {
    title: "Al Ansari Exchange - Foreign Exchange Company",
    description: "Banking Project - Which is used for Foreign Exchange in UAE. Al Ansari Exchange is a leading global remittance and foreign exchange company with branches across the UAE. Worked as a Backend developer for their App.",
    technologies: ["Java", "Spring", "Hibernate", "Oracle", "AWS EC2", "Python"],
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800&h=500",
    live: "https://alansariexchange.com"
  }
];