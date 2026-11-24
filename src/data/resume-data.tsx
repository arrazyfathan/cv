import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ar Razy Fathan Rabbani",
  initials: "AR",
  location: "Surakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/Surakarta",
  about: "Mobile Engineer · Android & iOS",
  availability: "Open for mobile engineering roles & collaborations",
  description:
    "Mobile Engineer in Surakarta, Indonesia — 4+ years shipping Android and iOS apps with Kotlin, Jetpack Compose, Flutter, and KMP.",
  ogDescription:
    "Resume of Ar Razy Fathan Rabbani — Mobile Engineer shipping Android & iOS apps with Kotlin, Compose, and Flutter.",
  summary:
    "Mobile Engineer with 4+ years of experience building and shipping reliable applications for Android and iOS. Proficient in modern native Android development with Kotlin, Java, and Jetpack Compose, as well as cross-platform development with Kotlin Multiplatform (KMP) and Flutter. Comfortable owning end-to-end features independently or collaborating closely with designers and backend teams.",
  avatarUrl: "/profile-image.jpg",
  personalWebsiteUrl: "https://arrazyfathan.com",
  contact: {
    email: "hello@arrazyfathan.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        handle: "arrazyfathan",
        url: "https://github.com/arrazyfathan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        handle: "in/arrazyfathan",
        url: "https://www.linkedin.com/in/arrazyfathan/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universitas Islam Indonesia",
      degree: "Bachelor's Degree in Computer Science",
      gpa: "3.68 / 4.00",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Gamatechno Indonesia",
      link: "https://www.gamatechno.com/",
      location: "Remote",
      badges: ["Android", "Kotlin", "Java", "Flutter"],
      title: "Mobile Engineer",
      start: "2022",
      end: null,
      description:
        "Android Engineer in the Digital Solutions division, building product-based and project-based mobile applications — with a primary focus on public-sector and enterprise apps that improve operational productivity.",
      highlights: [
        "Collaborated with cross-functional engineering teams to architect and ship Android applications focused on smooth performance and reliable user experience.",
        "Developed and maintained new features, architectural enhancements, and production bug fixes aligned with evolving product requirements.",
        "Partnered closely with UI/UX designers to translate complex workflows into clean, intuitive mobile interfaces.",
        "Evaluated and adopted modern Android tooling and architectural patterns across ongoing client and internal projects.",
      ],
    },
    {
      company: "Freelance",
      link: "",
      location: "Remote",
      badges: ["Android", "Flutter", "iOS"],
      title: "Mobile Developer",
      start: "2024",
      end: null,
      description:
        "Independent mobile engineer partnering directly with clients to design, build, and maintain scalable Android and cross-platform applications tailored to business goals.",
      highlights: [
        "Designed and implemented end-to-end mobile applications with attention to runtime performance, offline resilience, and polish.",
        "Delivered iterative features, enhancements, and ongoing maintenance directly against client milestones.",
        "Worked closely with stakeholders to turn open-ended requirements into shippable mobile products.",
      ],
    },
  ],
  skills: {
    programmingLanguages: [
      "Kotlin",
      "Java",
      "Dart",
      "TypeScript",
      "JavaScript",
    ],
    mobile: [
      "Android Native",
      "Jetpack Compose",
      "Kotlin Multiplatform (KMP)",
      "Compose Multiplatform",
      "Flutter",
      "Android Jetpack",
      "XML",
      "Coroutines",
      "Clean Architecture",
      "MVVM",
      "MVI",
      "MVP",
      "CI/CD",
    ],
    toolbox: [
      "Android Studio",
      "IntelliJ IDEA",
      "Xcode",
      "VS Code",
      "Zed",
      "Firebase",
      "Gradle",
      "Git",
      "GitLab CI/CD",
      "Jenkins",
      "Postman",
      "Figma",
    ],
  },
  projects: [
    {
      title: "JakLingko App",
      techStack: [
        "Android Native",
        "Kotlin & Java",
        "NFC",
        "Google Maps SDK",
        "Room",
        "Coroutines",
        "Firebase",
        "MVVM",
      ],
      description:
        "Public transport integration app unifying ticketing, NFC card payments, and multi-modal transit routes across Jakarta.",
      link: {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.jaklingkoindonesia.app&pcampaignid=web_share",
      },
    },
    {
      title: "HiiGeek",
      techStack: ["Flutter", "Dart", "Bloc", "Firebase", "Android", "iOS"],
      description:
        "Official mobile app for GIK UGM — a creative hub connecting students, lecturers, industry professionals, artists, and public sectors.",
      link: {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=id.hiigeek&pcampaignid=web_share",
      },
    },
    {
      title: "Kosmo Kominfo",
      techStack: [
        "Android Native",
        "Kotlin",
        "RxJava",
        "ML Kit",
        "Firebase",
        "MVP",
      ],
      description:
        "Productivity companion app built for members of Indonesia's Ministry of Communication and Informatics.",
      link: {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.kosmokominfo&pcampaignid=web_share",
      },
    },
    {
      title: "Lerun",
      techStack: [
        "Android Native",
        "Kotlin",
        "Google Maps",
        "Dagger Hilt",
        "Room",
        "Coroutines",
        "Firebase",
        "MVVM",
      ],
      description:
        "Open-source running tracker built with modern Android architecture, live route mapping, and offline run history.",
      link: {
        label: "GitHub",
        href: "https://github.com/arrazyfathan/Lerun",
      },
    },
    {
      title: "Panic Button",
      techStack: [
        "Android Native",
        "Kotlin",
        "Google Maps",
        "Coroutines",
        "Firebase",
        "MVI",
      ],
      description:
        "Emergency response app enabling field agents to dispatch instant SOS alerts with live GPS coordinates, text, and video.",
      link: {
        label: "Internal",
        href: "",
      },
    },
    {
      title: "Notes Agent (Voice to Text)",
      techStack: ["Android Native", "Kotlin", "Firebase", "MVI"],
      description:
        "Voice-to-text field note companion allowing agents to capture and transcribe observations in real time or from recordings.",
      link: {
        label: "Internal",
        href: "",
      },
    },
    {
      title: "BeVoucher — Berau Coal HSE Automation",
      techStack: ["Android Native", "Java", "Room", "Firebase", "MVP"],
      description:
        "Rewards and voucher module for Berau Coal's HSE automation suite to encourage safety reporting and employee engagement.",
      link: {
        label: "Internal",
        href: "",
      },
    },
  ],
} as const;
