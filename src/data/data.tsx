import {
    Award,
    Code,
    Database,
    FileText,
    GraduationCap,
    Globe,
    Server,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialId: string;
    skills: string[];
    icon: React.ReactNode;
    logo?: string;
}

interface SkillCategory {
    id: string;
    name: string;
    icon: React.ReactNode;
    skills: { name: string; level: number }[];
}

const experience = [
    { number: "2+", text: "Years of Full Stack Development" },
    { number: "10+", text: "Certifications Achieved" },
    { number: "4+", text: "Products Developed" },
];

const testimonials = [
    {
        text: "Developing interactive and user-friendly web applications.",
        author: "Utilizing technologies like",
        position: ".NET MVC, Bootstrap, HTML, CSS, JavaScript"
    },
    {
        text: "Building robust and scalable backend systems.",
        author: "Demonstrated in",
        position: "Automated Email Service, Document OCR Automation"
    },

    {
        text: "Automating processes and extracting information from documents.",
        author: "Leveraging expertise in",
        position: "OCR, Python, Text Processing"
    },
    {
        text: "Designing and managing SQL Server databases.",
        author: "Experienced with",
        position: "Data Storage, Retrieval, and Management"
    },
    {
        text: "Applying Agile methodologies for efficient project delivery.",
        author: "Practiced across projects",
        position: "Automated Email Service, Web Application, Document OCR Automation"
    },
    {
        text: "Integrating and developing Web APIs for seamless communication.",
        author: "Key aspect of",
        position: "Document OCR Automation, Web Application"
    },
];

const certifications: Certification[] = [
    {
        id: "c1",
        title: "C# (Basic)",
        issuer: "HackerRank",
        date: "Dec 2024",
        credentialId: "065CFDB4FE48",
        skills: [
            "Optical Character Recognition (OCR)",
            "Artificial Intelligence (AI)",
            "C#",
            "WinForms",
            "Internet Message Access Protocol (IMAP)",
        ],
        icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
        id: "c2",
        title: "SQL (Basic)",
        issuer: "HackerRank",
        date: "Nov 2024",
        credentialId: "EF92ED38C3CF",
        skills: ["SQL Server Management Studio"],
        icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
        id: "c3",
        title: "Software Engineer",
        issuer: "HackerRank",
        date: "Oct 2024",
        credentialId: "D754AFCAEA21",
        skills: ["Python (Programming Language)", "C#", "Agile Methodologies"],
        icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
        id: "c4",
        title: "Python Zero to Hero",
        issuer: "GUVI Geek Networks, IITM Research Park",
        date: "Sep 2024",
        credentialId: "60211b22yLRH57688k",
        skills: [
            "Optical Character Recognition (OCR)",
            "Python (Programming Language)",
            "Artificial Intelligence (AI)",
            "Pandas (Software)",
        ],
        icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
        id: "c5",
        title: "HTML and CSS",
        issuer: "GUVI Geek Networks, IITM Research Park",
        date: "Sep 2024",
        credentialId: "iN1769765u20rD9vmy",
        skills: [
            "Cascading Style Sheets (CSS)",
            "HTML",
            "ASP.NET MVC",
            "Bootstrap (Framework)",
        ],
        icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
        id: "c6",
        title: "JavaScript",
        issuer: "GUVI Geek Networks, IITM Research Park",
        date: "Sep 2024",
        credentialId: "6O7i1v7V3GF8b92673",
        skills: ["Artificial Intelligence (AI)", "ASP.NET MVC", "jQuery"],
        icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
        id: "c7",
        title: "SaWiT.AI Challenge",
        issuer: "GUVI Geek Networks, IITM Research Park",
        date: "Sep 2024",
        credentialId: "324P4265uv71758xq1",
        skills: ["Python (Programming Language)", "Artificial Intelligence (AI)"],
        icon: <GraduationCap className="h-10 w-10 text-primary" />,
    },
];



const contactInfo = [
    {
        icon: <Mail className="h-5 w-5 text-primary" />,
        title: "Email",
        value: "nazerhussain1999@gmail.com",
        link: "mailto:nazerhussain1999@gmail.com",
    },
    {
        icon: <Phone className="h-5 w-5 text-primary" />,
        title: "Phone",
        value: "+91 86677 53339",
        link: "+91 86677 53339",
    },
    {
        icon: <MapPin className="h-5 w-5 text-primary" />,
        title: "Location",
        value: "Chennai TamilNadu",
        link: "#",
    },
];

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const programmingLanguages = [
    { name: "C#", color: "bg-gradient-to-r from-purple-500 to-blue-600" },
    { name: "MVC", color: "bg-gradient-to-r from-blue-500 to-cyan-400" },
    { name: "Python", color: "bg-gradient-to-r from-blue-600 to-green-500" },
    { name: "React", color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
    { name: "JavaScript", color: "bg-gradient-to-r from-yellow-400 to-amber-500" },
    { name: "TypeScript", color: "bg-gradient-to-r from-blue-400 to-indigo-500" },
    { name: "Node.js", color: "bg-gradient-to-r from-green-500 to-emerald-600" },
    { name: "HTML", color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { name: "CSS", color: "bg-gradient-to-r from-blue-400 to-indigo-400" },
    { name: "SQL", color: "bg-gradient-to-r from-sky-500 to-blue-600" },
];

const projects = [
    {
        title: "Document OCR Automation",
        subtitle: "Backend Development & API Integration",
        period: "Dec 2023 - Present",
        company: "SCMCube Technologies",
        description:
            "A backend-focused project for document processing with OCR capabilities, involving file format conversion, text processing, and web API development.",
        features: [
            "File Format Conversion: Converting various document formats for processing.",
            "OCR Processing: Extracting text from images and documents using EasyOCR.",
            "Text Analysis: Processing extracted text for structured data.",
            "API Development: Creating web APIs for document processing workflows."
        ],
        technologies: [
            "Python",
            "Pandas",
            "AI",
            "OCR",
            "EasyOCR",
            "C#",
            "SQL Server"
        ],
        icon: FileText,
    },

    {
        title: "Web Application",
        subtitle: "Import/Export Management System",
        period: "Jan 2024 - Present",
        company: "SCMCube Technologies",
        description:
            "A web application designed to streamline and manage processes involved in import and export operations with intuitive interface and robust functionalities.",
        features: [
            "Import Management: Efficient tracking of incoming shipments, inventory updates, and supplier coordination.",
            "Export Management: Manages outgoing shipments with proper documentation and compliance to regulations.",
            "Data Integration: Integration with third-party systems like shipping carriers and customs platforms.",
            "Reporting and Analytics: Detailed reports on trade performance and shipment status.",
            "User Roles and Permissions: Secure access control for various stakeholders."
        ],
        technologies: [
            ".NET Framework",
            "ASP.NET MVC",
            "Bootstrap",
            "HTML",
            "jQuery",
            "C#",
            "CSS",
            "XML",
            "SQL Server"
        ],
        icon: Code,
    },
    {
        title: "Automated Email Service",
        subtitle: "Windows Application",
        period: "Dec 2024 - Present",
        company: "SCMCube Technologies",
        description:
            "An automated email service designed to streamline email management by reading incoming emails, extracting relevant information, and storing it in a SQL Server database.",
        features: [
            "Email Retrieval: Automatically reads emails from a specified mailbox, filtering messages from designated senders or based on predefined criteria.",
            "Data Extraction and Storage: Extracts key information from emails and stores it in a SQL Server database.",
            "Query Analysis: Analyzes email content to identify sender's query using rule-based logic or NLP.",
            "Automated Response: Generates and sends tailored replies addressing queries effectively."
        ],
        technologies: [
            ".NET Framework",
            "C#",
            "Python",
            "IMAP",
            "WinForms",
            "AI",
            "SQL Server"
        ],
        icon: Mail,
    },
];

const skillCategories = [
    {
        id: "frontend",
        name: "Frontend",
        icon: <Globe className="h-5 w-5" />,
        skills: [
            { name: "React.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "HTML/CSS", level: 95 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Next.js", level: 80 },
            { name: "Redux", level: 75 },
        ],
    },
    {
        id: "backend",
        name: "Backend",
        icon: <Server className="h-5 w-5" />,
        skills: [
            { name: "Node.js", level: 85 },
            { name: ".NET Core", level: 90 },
            { name: "Express.js", level: 80 },
            { name: "Python", level: 75 },
            { name: "RESTful APIs", level: 90 },
            { name: "GraphQL", level: 70 },
        ],
    },
    {
        id: "database",
        name: "Database",
        icon: <Database className="h-5 w-5" />,
        skills: [
            { name: "SQL Server", level: 90 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Redis", level: 70 },
            { name: "Firebase", level: 75 },
            { name: "ORM Tools", level: 85 },
        ],
    },

    {
        id: "other",
        name: "Other",
        icon: <Code className="h-5 w-5" />,
        skills: [
            { name: "UI/UX Design", level: 70 },
            { name: "Agile/Scrum", level: 85 },
            { name: "Testing", level: 75 },
            { name: "Performance Optimization", level: 80 },
            { name: "SEO", level: 65 },
            { name: "Cybersecurity", level: 70 },
        ],
    },
];

const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// import { contactInfo, socialLinks, personalInfo, emailJsConfig } from "@/data/data"; 
// to import data in other components 

export {
    experience,
    testimonials,
    certifications,
    contactInfo,
    navLinks,
    programmingLanguages,
    projects,
    skillCategories,
    emailConfig,
};

