// components/UserData.jsx

// import profile picture directly from the images folder
import profile_picture from "../images/profile-picture.jpg";

// create user object
const user = {
  profilePicture: profile_picture,
  name: "Jediah Jireh Naicker",
  title: "Aspiring Full Stack Web Developer & Software Engineer",
  about: {
    lifelongLearner: `From an early age, I have immersed myself into exploring the world of technology and the endless possibilities that it has to offer. It all started with a fondness for problem-solving and expanded into a deep-rooted passion, ignited by the potential of technology to effect meaningful change in society. The realm of technology is ever-evolving and I'm committed to staying at the forefront of advancements. Such as the journey of life, the journey of someone in the tech industry is anchored in continuous learning and development, which I embrace. It is an integral part of my growth as a developer and I welcome challenges that push me to constantly refine my craft.`,
    debuggingTheWorld: `The intersection of technology and social impact can drive meaningful change. Beyond building cutting-edge applications, my true passion lies in using my skills to combat social injustice. My primary goal is to leverage my skills in order to make a tangible difference in the world. My dream is to contribute my abilities to the fight against the heinous crime of human trafficking, using technology to empower anti-trafficking organisations and to aid them in the mission to rescue and support survivors.`,
    visionForFuture: `Looking ahead, my vision is to establish myself as a proficient software engineer/web developer in the industry. Whether it's creating innovative web solutions, optimising user experiences or developing scalable applications and platforms, I'm driven to bring about meaningful change. Technology, when wielded responsibly, can be a catalyst for social progress. It can serve as a powerful tool to empower the vulnerable, raise awareness and drive sustainable solutions.`,
    techToolbox: `
      JavaScript
      • TypeScript
      • CSS/SCSS
      • HTML
      • Java
      • MySQL
      • Git and GitHub version control
      • MERN Stack (MongoDB, Express, React.js, Node.js)
      • Mongoose
      • Vite.js
      • PHP
      • Laravel
      • WordPress
      • Technical Documentation
      • Delphi 2010
      • Next.js
      • Tailwind CSS
  `,
  },
  experience: [
    {
      company: "HyperionDev",
      role: "Full Stack Web Development & Software Engineering Bootcamp Student: Information Technology (Systems Development), NQF Level 5",
      duration: "Jan - Jul 2024",
      description: (
        <>
          <ul>
            <li>
              I have created real applications, websites and programmes using a
              variety of languages and technologies in the form of content-based
              tasks that have enabled me to develop a deep and broad
              understanding of both web development and software engineering.
            </li>
            <li>
              Being exposed to industry standards from the kick-off, I am
              appreciative of the technique of code review.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "D&S Music & Promotions CC",
      role: "Web Developer",
      duration: "Nov 2023 - Present",
      description: (
        <>
          <ul>
            <li>
              Engaged in sponsored upskilling by D&S Music in November 2023,
              which commenced in January 2024, marking the start of the
              project&rsquo;s conceptual phase.
            </li>
            <li>
              Gathered ideas for the website design starting in January 2024,
              laying the foundation for a user-friendly and effective e-commerce
              platform.
            </li>
            <li>
              Conducted thorough research and finalised the development approach
              in July 2024, ensuring the website meets both technical standards
              and client needs.
            </li>
            <li>
              Currently developing the website, having started in August 2024,
              selecting appropriate technologies and refining the project based
              on ongoing client discussions.
            </li>
            <li>
              Designing and implementing a robust inventory management system
              that includes an online store with product listings, shopping cart
              functionality, and secure payment processing.
            </li>
            <li>
              Developing a user-friendly point-of-sale (POS) interface for
              managing in-person sales, including features for product search,
              order processing, and receipt generation.
            </li>
            <li>
              Implementing comprehensive inventory management features for stock
              level management, product addition and removal, and report
              generation to support informed business decisions.
            </li>
            <li>
              Enhancing the system with advanced features such as role-based
              permissions, a dynamic dashboard for real-time insights into
              inventory status and sales performance, and visual reports and
              charts for data analysis and decision-making.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Multipotentialite",
    "Programming",
    "English Writing",
    "Research Skills",
    "Analytical Skills",
    "Presentations",
    "Creativity and Innovation",
    "Challenge Driven",
    "Problem Solving",
    "Photography",
    "Videography",
    "Literature",
    "Painting",
    "Faux Calligraphy",
  ],
  courses: [
    "Polaris's Human Trafficking 101 Training",
    "Modern Next.js & TypeScript Fullstack Course",
  ],
  languages: [
    { name: "Afrikaans", proficiency: "Limited working proficiency" },
    { name: "English", proficiency: "Native proficiency" },
  ],
  organisations: [
    {
      name: "D&S Family Centre",
      role: "Media Coordinator",
      duration: "Dec 2020 - Present",
      description: (
        <>
          <ul>
            <li>
              Manage and coordinate all visual media on appropriate systems for
              church services, ensuring seamless projection and high-quality
              content delivery, aligned with service themes.
            </li>
            <li>
              Develop and produce visual and promotional materials for events
              and initiatives.
            </li>
            <li>
              Oversee the organisation&rsquo;s social media strategy, curating
              and editing content to enhance engagement and outreach.
            </li>
            <li>
              Maintain a cohesive and professional visual identity across all
              media platforms and social channels.
            </li>
            <li>Primary digital media tools: Canva, CapCut, VideoPsalms</li>
          </ul>
        </>
      ),
    },
  ],
  causes: [
    "Economic Empowerment",
    "Human Rights",
    "Technology",
    "Tech Against Trafficking",
    "Social Services",
  ],
  contact: {
    mobile: "0826363910",
    email: "jediahnaicker@gmail.com",
    linkedIn: "https://www.linkedin.com/in/jediahnaicker",
    github: "https://github.com/jediahjireh",
    hyperiondev: "https://www.hyperiondev.com/portfolio/JN23110012577/",
  },
};

// export user object
export default user;
