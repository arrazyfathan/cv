import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ar Razy Fathan Rabbani",
  initials: "AFR",
  location: "Yogyakarta, Indonesia 🇮🇩",
  locationLink: "https://www.google.com/maps/place/Yogyakarta",
  about: "Android Engineer",
  description:
    "Ar Razy Fathan Rabbani – Android Engineer based in Yogyakarta, Indonesia 🇮🇩. With 3 years of experience in mobile app development, proficient in Kotlin/Java, and always open to learning new technologies. Skilled in both individual and team collaboration.",
  summary: (
    <>
      Android Engineer with 3 years of experience in developing mobile
      applications. Open to learn new things and up to any challenges. Able to
      work individually and team work. Proficient in various modern technologies
      of android development with Kotlin/Java.
    </>
  ),
  avatarUrl: "/profile-image.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "arrazy.rabbani266@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/arrazyfahan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arrazyfathan/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/arrazyfathann",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universitas Islam Indonesia",
      degree: "Bachelor's Degree in Computer Science",
      start: "2017",
      end: "2021 (GPA: 3.68)",
    },
  ],
  work: [
    {
      company: "Gamatechno Indonesia",
      link: "https://www.gamatechno.com/",
      badges: ["Hybrid", "Android", "Kotlin", "Java"],
      title: "Mobile Engineer",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description: (
        <>
          I work as an Android Engineer in the Digital Solutions division. I am
          involved in the development of various applications, which range from
          product-based to project-based. My primary focus is on developing
          project-based applications for government entities, with the aim of
          enhancing their productivity.
          <ul className="list-disc pl-4 pt-6">
            <li>
              Collaborated with a team of developers to design and implement
              Android applications, ensuring optimal performance and user
              experience
            </li>
            <li className="pt-2">
              Developed and maintained code for new features, enhancements, and
              bug fixes in alignment with project requirements
            </li>
            <li className="pt-2">
              Worked closely with UX/UI designers to implement visually
              appealing and intuitive interfaces
            </li>
            <li className="pt-2">
              Stayed current with the latest Android development trends and
              technologies, integrating them into projects for continuous
              improvement.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Remote", "Android"],
      title: "Android Developer",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          As a freelance Android Developer, I work independently to design,
          develop, and maintain Android applications for various clients. I
          focus on building high-quality, user-friendly, and scalable mobile
          solutions tailored to clients needs.
          <ul className="list-disc pl-4 pt-6">
            <li>
              Designed and implemented Android applications, ensuring optimal
              performance and smooth user experience.
            </li>
            <li className="pt-2">
              Developed and maintained features, enhancements, and bug fixes
              based on project requirements.
            </li>
            <li className="pt-2">
              Worked closely with clients to understand their needs and
              translate them into functional mobile applications.
            </li>
            <li className="pt-2">
              Stayed up to date with the latest Android development trends and
              best practices to deliver cutting-edge solutions.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: {
    programmingLanguages: [
      "Kotlin",
      "Java",
      "Dart",
      "JavaScript",
      "TypeScript",
    ],
    mobile: [
      "Android Native",
      "Jetpack Compose",
      "KMP",
      "Compose Multiplatform",
      "Flutter",
      "Android Jetpack",
      "XML",
      "CI/CD",
      "MVVM",
      "MVI",
      "MVP",
      "Clean Architecture",
      "Coroutines",
    ],
    toolbox: [
      "Android Studio",
      "Firebase",
      "Gradle",
      "Git",
      "Android SDK",
      "Jenkins",
      "Gitlab CI/CD",
      "VS Code",
      "Intellij IDEA",
      "Postman",
      "Figma",
      "Xcode",
    ],
  },
  projects: [
    {
      title: "JakLingko App",
      techStack: [
        "Android Native",
        "Kotlin & Java",
        "Firebase",
        "NFC",
        "Room Database",
        "Google Maps SDK",
        "Coroutines",
        "MVVM",
      ],
      description:
        "Jak Lingko is a public transport integration program designed to integrate payment and physical connection between transport modes in Jakarta.",
      logo: MonitoLogo,
      link: {
        label: "JakLingko",
        href: "https://play.google.com/store/apps/details?id=com.jaklingkoindonesia.app&pcampaignid=web_share",
      },
    },
    {
      title: "Kosmo Kominfo",
      techStack: [
        "Android Native",
        "Kotlin",
        "RxJava",
        "MVP",
        "Firebase",
        "MLKit",
      ],
      description:
        "Kosmo Kominfo is a productivity companion app designed for\n" +
        "the members of the Ministry of Communication and\n" +
        "Informatics.",
      logo: ConsultlyLogo,
      link: {
        label: "Kosmo Komdigi",
        href: "https://play.google.com/store/apps/details?id=com.kosmokominfo&pcampaignid=web_share",
      },
    },
    {
      title: "Notes Agent ( Voice to Text )",
      techStack: ["Android Native", "Kotlin", "Firebase", "MVI"],
      description:
        "This app assists agents in creating notes using voice-to-text technology, allowing\n" +
        "them to transcribe their thoughts either in real time or from recordings.",
      logo: MonitoLogo,
      link: {
        label: "Notes Agent",
        href: "",
      },
    },
    {
      title: "Lerun",
      techStack: [
        "Android Native",
        "Kotlin",
        "Firebase",
        "MVVM",
        "Room Database",
        "Coroutines",
        "Google Maps",
        "Dagger Hilt",
      ],
      description:
        "Lerun is a running tracking application based on modern Android tech-stacks and MVVM architecture.",
      logo: MonitoLogo,
      link: {
        label: "Lerun",
        href: "https://github.com/arrazyfathan/Lerun",
      },
    },
    {
      title: "BeVoucher - Berau Coal HSE Automation",
      techStack: ["Android Native", "Java", "Firebase", "MVP", "Room Database"],
      description:
        "Implemented a voucher system that enhances user experience by offering additional benefits and rewards, driving user engagement and loyalty within the app.",
      logo: MonitoLogo,
      link: {
        label: "BeVoucher",
        href: "",
      },
    },
    {
      title: "Panic Button",
      techStack: [
        "Android Native",
        "Kotlin",
        "Firebase",
        "MVI",
        "Google Maps",
        "Coroutines",
      ],
      description:
        "This app enables agents to quickly send emergency alerts or SOS messages, along with their current location, text, and video. It is designed to provide a swift and reliable way to communicate urgent situations, ensuring that help can be dispatched promptly.",
      logo: MonitoLogo,
      link: {
        label: "Panic Button",
        href: "",
      },
    },
  ],
} as const;
