export interface BasicInfo {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  links: {
    linkedin: string;
    portfolio: string;
    iciciLombard?: string;
    icraLimited?: string;
    kotakBank?: string;
    dirtexmah?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  dates: string;
  duration: string;
  location: string;
  client?: string;
  project?: string;
  companyLink?: string;
  bullets: string[];
  metrics: string[];
}

export interface Achievement {
  id: string;
  title: string;
  context: string;
  type: 'win' | 'metric' | 'leadership' | 'award';
  value?: string;
}

export interface Project {
  title: string;
  stack: string[];
  bullets: string[];
  link?: string;
  client?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  location?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface ResumeData {
  basics: BasicInfo;
  experience: Experience[];
  achievements: Achievement[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
  awards: { name: string; issuer?: string; date?: string; context?: string }[];
  extra: { key: string; value: string | string[] }[];
}

export const resumeData: ResumeData = {
  basics: {
    name: "Anil Rathod",
    title: "Senior Software Engineer (.NET) | Full Stack Developer",
    summary: "Senior Software Engineer (.NET) with 5+ years of experience in designing, developing, and maintaining secure, scalable, and high-performance enterprise applications across banking, insurance, and financial domains. I specialize in C#, .NET Core, .NET Framework, ASP.NET Web API, and Angular full-stack development, with strong expertise in building RESTful APIs, enterprise backend systems, and scalable distributed applications. I have hands-on experience delivering end-to-end solutions including API development, UI integration, system enhancements, and production support in enterprise environments. I have strong experience in SQL Server, Oracle, PostgreSQL, and Sybase, along with SSIS and SSRS, working on ETL workflows, stored procedures, query optimization, and financial data processing systems.",
    location: "Pune District, Maharashtra, India",
    email: "anilrathod.ar716@gmail.com",
    phone: "", // No phone supplied in resume image/OCR
    links: {
      linkedin: "https://www.linkedin.com/in/anil-rathod-981bb612a",
      portfolio: "https://anilarr.github.io/Anil-Rathod-Portfolio/",
      iciciLombard: "https://www.linkedin.com/company/icici-lombard/",
      icraLimited: "https://www.linkedin.com/company/icralimited/",
      kotakBank: "https://www.linkedin.com/company/kotak-mahindra-bank/",
      dirtexmah: "http://www.dirtexmah.gov.in/"
    }
  },
  experience: [
    {
      id: "exp-1",
      company: "Intellias",
      role: "Senior .NET Engineer",
      dates: "September 2025 - Present",
      duration: "10 months",
      location: "Pune, Maharashtra, India",
      client: "BLME (UK-based banking client)",
      bullets: [
        "Supporting a UK-based banking client (BLME), contributing to mission-critical systems using .NET Core, Web API, Azure Cloud, SSIS, and SSRS.",
        "Responsibilities include backend development, ETL processing, reporting, production support, and integration with Dynamics 365 APIs.",
        "Work with SQL Server, Sybase, GitLab, IIS, and PowerShell on financial data processing workflows."
      ],
      metrics: ["UK-Based Banking Support", "Dynamics 365 API Integration", "Azure Cloud Contributions"]
    },
    {
      id: "exp-2",
      company: "Pinnacle Technology",
      role: "Dot Net Core Developer / .NET Full Stack Developer",
      dates: "April 2024 - August 2025",
      duration: "1 year 5 months",
      location: "Mumbai, Maharashtra, India",
      project: "ICICI Lombard BANCA",
      companyLink: "https://www.linkedin.com/company/icici-lombard/",
      bullets: [
        "Developed enterprise insurance applications using .NET Core 8 and .NET Framework 4.8.",
        "Implemented secure JWT authentication alongside AES and RSA encryption models for financial data protection.",
        "Designed and worked on Kafka-based event-driven architecture, API integrations, and system communications.",
        "Executed full migration of legacy enterprise components from .NET Framework to current .NET Core standards.",
        "Contributed to robust CI/CD pipelines using Jenkins, and oversaw relational data storage on Oracle and PostgreSQL databases."
      ],
      metrics: [".NET Core 8 & JWT Auth", "AES/RSA Security", "Kafka Event-Driven Architecture", "Framework to Core Migration"]
    },
    {
      id: "exp-3",
      company: "Paramatrix Technologies Limited",
      role: "Software Engineer",
      dates: "July 2022 - April 2024",
      duration: "1 year 10 months",
      location: "Airoli, Navi Mumbai, Maharashtra, India",
      project: "CRISP Rating System (Client: ICRA)",
      companyLink: "https://www.linkedin.com/company/icralimited/",
      bullets: [
        "Worked as a Full Stack Developer contributing to robust frontend (Angular) and modular backend (.NET Web API, SQL Server).",
        "Engineered automated CI/CD deployment pipelines using GitHub Actions.",
        "Configured AWS cloud services for hosting ratings application workloads.",
        "Implemented modern OAuth 2.0 authentication models and system-wide Single Sign-On (SSO)."
      ],
      metrics: ["Angular Full-Stack", "GitHub Actions CI/CD", "AWS Cloud Deployment", "OAuth 2.0 & SSO Security"]
    },
    {
      id: "exp-4",
      company: "Paramatrix Technologies Limited",
      role: "Associate Software Engineer",
      dates: "July 2021 - June 2022",
      duration: "1 year",
      location: "Goregaon, Maharashtra, India",
      client: "Kotak Mahindra Bank",
      companyLink: "https://www.linkedin.com/company/kotak-mahindra-bank/",
      bullets: [
        "Worked as a Full Stack .NET Developer handling high-scale API development and customized Angular frontend modules.",
        "Designed and maintained SSIS ETL pipelines alongside complex SQL Server and Sybase stored procedures for financial data routing.",
        "Integrated Oracle/BODS pipelines, managed automated IIS web servers deployment, and structured JWT-based user security layers."
      ],
      metrics: ["Kotak Mahindra Integration", "SSIS ETL Pipelines", "Sybase & SQL Server Stored Procedures", "BODS Integration", "IIS Deployment", "JWT-based Security"]
    },
    {
      id: "exp-5",
      company: "Paramatrix Technologies Limited",
      role: "Trainee Software Engineer",
      dates: "January 2021 - June 2021",
      duration: "6 months",
      location: "Goregaon, Maharashtra, India",
      client: "Kotak Mahindra Bank",
      companyLink: "https://www.linkedin.com/company/kotak-mahindra-bank/",
      bullets: [
        "Acquired foundational exposure to API development on .NET and structured SQL procedures.",
        "Assisted full stack development lifecycle teams on Kotak Mahindra Bank integrations, code snippets writing, and server environment setups."
      ],
      metrics: ["Foundational .NET API Development", "SQL Schema Support"]
    },
    {
      id: "exp-6",
      company: "ESankalp IT Solution",
      role: "Web Developer",
      dates: "March 2019 - July 2019",
      duration: "5 months",
      location: "Nagpur, Maharashtra",
      bullets: [
        "Designed and engineered responsive client landing spaces and structural web layout templates.",
        "Implemented interactive frontend components using responsive web protocols and CSS methodologies."
      ],
      metrics: ["Web Layout Architecture", "Nagpur Local Engagements"]
    },
    {
      id: "exp-7",
      company: "Embedded Creations",
      role: "Web Developer",
      dates: "February 2019 - March 2019",
      duration: "2 months",
      location: "Nagpur, Maharashtra, India",
      bullets: [
        "Worked on web pages development and contributed in developing snippet code in form of short HTML/CSS modules.",
        "Partnered with the core technical team of Embedded Creation to design features for: http://www.dirtexmah.gov.in/"
      ],
      metrics: ["Government Portal snippet development (dirtexmah.gov.in)", "HTML/CSS Custom Snippets"]
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Para Star Award Winner",
      context: "Honored with the Para Star Award at Paramatrix Technologies for exceptional performance, commitment and technical contributions.",
      type: "award"
    },
    {
      id: "ach-2",
      title: "5+ Years of Certified Enterprise Experience",
      context: "Extensive development history spanning mission-critical applications across high-security Banking, Insurance, and Financial domains.",
      type: "metric",
      value: "5+ Yrs"
    },
    {
      id: "ach-3",
      title: "Legacy to Modern .NET Core Migration",
      context: "Successfully ported heavy, complex business logic from legacy .NET Framework 4.8 to .NET Core 8 on high-priority insurance projects.",
      type: "win"
    },
    {
      id: "ach-4",
      title: "Financial ETL & Data Optimization Leader",
      context: "Engineered high-performance SSIS ETL pipelines, Sybase, Postgres and Oracle procedures handling millions of rating and banking records.",
      type: "leadership"
    }
  ],
  projects: [
    {
      title: "ICICI Lombard BANCA Integration",
      stack: [".NET Core 8", ".NET Framework 4.8", "JWT Authentication", "AES & RSA Encryption", "Kafka", "Oracle", "PostgreSQL", "Jenkins"],
      bullets: [
        "Developed full-scale insurance integrations under .NET Core 8 and .NET Framework 4.8.",
        "Built event-driven modules utilizing Apache Kafka for high-throughput messaging.",
        "Ensured maximum compliance and data privacy with robust AES and RSA cryptographic implementations."
      ],
      client: "ICICI Lombard"
    },
    {
      title: "CRISP Rating System",
      stack: ["Angular", ".NET Web API", "SQL Server", "GitHub Actions", "AWS Cloud", "OAuth 2.0", "SSO"],
      bullets: [
        "Implemented dynamic credit ratings workflows for client ICRA.",
        "Designed stateful single-page system with Angular coupled with robust RESTful Web APIs.",
        "Setup secure OAuth 2.0 tokens alongside localized Single Sign-On policies for external advisors."
      ],
      client: "ICRA"
    },
    {
      title: "Kotak Mahindra Bank Integration Service",
      stack: [".NET API Development", "Angular", "SSIS ETL", "SQL Server", "Sybase", "BODS", "IIS", "JWT Security"],
      bullets: [
        "Integrated critical banking modules with SSIS ETL pipelines for seamless data migration.",
        "Authorized transactions with secured JWT layers and automated deployment overheads across clustered IIS nodes."
      ],
      client: "Kotak Mahindra Bank"
    }
  ],
  skills: [
    {
      category: "Backend Engineering",
      skills: ["C#", ".NET Core", ".NET Framework", "ASP.NET Core Web API", "ASP.NET Web API", "RESTful APIs", "MVC", "ADO", "Dapper", "EF (Entity Framework)", ".NET Microservices"]
    },
    {
      category: "Database & ETL Processing",
      skills: ["MS SQL Server", "Sybase", "Oracle SQL", "PostgreSQL", "SSIS (Integration Services)", "SSRS (Reporting Services)", "BODS Integration", "Stored Procedures", "Query Optimization"]
    },
    {
      category: "DevOps & Cloud Systems",
      skills: ["Azure Cloud", "AWS Deployment", "Docker", "CI/CD Pipelines", "GitLab", "GitHub Actions", "Jenkins", "IIS Deployment", "PowerShell Automation"]
    },
    {
      category: "Frontend & Architecture",
      skills: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Kafka Event-Driven Architecture", "Generative AI", "JWT Security", "OAuth 2.0", "SSO", "AES/RSA Encryption"]
    }
  ],
  education: [
    {
      institution: "S.B. Jain Institute of Technology, Management & Research, Nagpur",
      degree: "Bachelor's degree, Computer Science",
      dates: "2016 - 2020",
      location: "Nagpur, Maharashtra, India"
    },
    {
      institution: "VITTHALRAO CHAMAT H.S. & JR COLLEGE NAGPUR",
      degree: "HSC, Science",
      dates: "June 2015 - January 2016",
      location: "Nagpur, Maharashtra, India"
    },
    {
      institution: "TRIMURTI VISYALAYA, DUDHALA",
      degree: "SSC, Semi English",
      dates: "June 2013 - January 2014",
      location: "Nagpur, Maharashtra, India"
    }
  ],
  certifications: [
    { name: "Advanced SQL" },
    { name: "The Complete Android App Development Masterclass" },
    { name: "SQL (Intermediate)" },
    { name: "SQL (Advanced)" },
    { name: ".NET Microservices for Azure Developers" }
  ],
  awards: [
    {
      name: "Para Star Award",
      issuer: "Paramatrix Technologies Limited",
      context: "Recognizing outstanding engineering achievements and dedicated enterprise assistance."
    }
  ],
  extra: [
    {
      key: "Target Opportunities",
      value: [
        ".NET Backend Development",
        ".Net Engineer",
        "Full Stack .NET (Angular)",
        "Azure Cloud Engineering",
        "Enterprise Architecture"
      ]
    },
    {
      key: "Core Focus",
      value: "Building secure, scalable, and high-performance distributed systems with strong performance and reliability."
    }
  ]
};
