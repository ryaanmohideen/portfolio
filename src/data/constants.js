import agincourtLogo from "../images/agincourt logo.png";
import waterlooLogo from "../images/waterloo logo.svg";
import uwFeLogo from "../images/uw formula electric logo.png";
import pythonGame from "../images/python game.jpeg";
import teng from "../images/teng.jpeg";
import textRecognition from "../images/text recognition.jpeg";
import movieCatalogue from "../images/movie catalogue.jpeg";
import cert from "../images/co2cert_logo.jpg";
import uoft from "../images/uoft logo.png";
import cantire from "../images/canadian tire logo.png";
import cdse from "../images/cdse qds.jpeg";
import testCart from "../images/test cart.jpeg";
import ftir from "../images/ftir-atr.jpeg";
import zener from "../images/zener.jpeg";
import mis from "../images/mis.png";

export const Bio = {
  name: "Ryaan Mohideen",
  roles: [
    "Future Engineer",
    "Problem Solver",
    "Tech Enthusiast",
    "Sports Fan",
  ],
  description:
    "I’m a Nanotechnology Engineering student at the University of Waterloo interested in electronics, hardware, and emerging technologies. I enjoy building things, working on hands-on projects, playing sports, and constantly learning new skills along the way.",
  github: "https://github.com/ryaanmohideen",
  resume:
    "https://docs.google.com/document/d/1S91xhN-2fbmD75a9wcCfkMqEsZtCbcr7Xf4MkwVptnY/edit?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/ryaan-mohideen/",
  email: "mailto: ryaan.mohideen@uwaterloo.ca",
};

export const skills = [
  {
    title: "⚙️ Semiconductor and Microfab",
    skills: [

      {
        name: "PECVD"
      },
      {
        name: "Photolithography"
      },
      {
        name: "RIE"
      },
      {
        name: "Thin-Film Deposition"
      },
      {
        name: "C-V/I-V Characterization"
      },
      {
        name: "Four-Point Probe"
      },
      {
        name: "Ellipsometry"
      },
    ],
  },
  {
    title: "🔋 Energy & Electrochemistry",
    skills: [
      {
        name: "EIS/PEIS"
      },
      {
        name: "BioLogic EC-Lab"
      },
      {
        name: "Potentiostat/Galvanostat"
      },
      {
        name: "CO₂ Electrolysis"
      },
      {
        name: "Electrolyzer Testing"
      },
      {
        name: "Battery Testing"
      },
      {
        name: "Catalyst Coating/Electrode Preparation"
      },
    ],
  },
  {
    title: "🔬 Materials Characterization",
    skills: [
      {
        name: "SEM"
      },
      {
        name: "XRD"
      },
      {
        name: "FTIR/ATR"
      },
      {
        name: "Raman Spectroscopy"
      },
      {
        name: "UV-Vis"
      },
      {
        name: "DSC/TGA"
      },
      {
        name: "Mechanical Testing"
      },
    ],
  },
  {
    title: "⚡ Electronics & Instrumentation",
    skills: [
      {
        name: "Oscilloscope"
      },
      {
        name: "LabVIEW"
      },
      {
        name: "Arduino"
      },
      {
        name: "Data Acquisition (DAQ)"
      },
      {
        name: "Circuit Analysis"
      },
      {
        name: "Sensor/Thermocouple Interfacing"
      },
    ],
  },
  {
    title: "💻 Programming & Data",
    skills: [
      {
        name: "Python"
      },
      {
        name: "Matlab"
      },
      {
        name: "C++"
      },
      {
        name: "NumPy/Pandas"
      },
      {
        name: "SQL"
      },
      {
        name: "Git"
      },
    ],
  },
  {
    title: "📐 Simulation & CAD",
    skills: [
      {
        name: "COMSOL"
      },
      {
        name: "LTspice"
      },
      {
        name: "Solidworks"
      },
      {
        name: "Autocad"
      },
      {
        name: "3D Printing"
      },
      {
        name: "Minitab"
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cert,
    role: "Electrochemical Engineering Intern",
    company: "CERT Systems",
    date: "Sep 2025 - Apr 2026",
    desc: "Improved CO₂ electrolyzer performance through experimental optimization, hardware development, and electrochemical data analysis.",
    skills: [
      "Electrolyzer Testing",
      "Matlab",
      "Electrochemistry",
      "Circuit Analysis",
    ],
  },
  {
    id: 0,
    img: uoft,
    role: "Battery Research Assistant",
    company: "University of Toronto",
    date: "Jan 2025 - Apr 2025",
    desc: "Optimized electrochemical impedance spectroscopy circuits, analyzed cycling data in Python, and implemented machine learning models for enhanced electrolyte performance evaluation.",
    skills: [
      "Battery Testing",
      "Python",
      "Arduino",
      "Circuit Analysis",
    ],
  },
  {
    id: 0,
    img: cantire,
    role: "Data and Software Engineering Co-op",
    company: "Canadian Tire/Ness Digital Engineering",
    date: "May 2024 - Apr 2025",
    desc: "Enhanced data workflows, led automation projects, and ensured seamless system integration for Canadian Tire.",
    skills: [
      "SQL",
      "Python"
    ],
  },
  {
    id: 1,
    img: uwFeLogo,
    role: "Accumulator Engineer",
    company: "UW Formula Electric",
    date: "Sep 2023 - May 2024",
    desc: "Engineered the power system for a high-performance competition vehicle.",
    skills: [
      "Battery Testing",
      "Arduino",
      "Circuit Analysis",
      "Solidworks",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: waterlooLogo,
    school: "University of Waterloo, Ontario, Canada",
    date: "Sep 2023 - May 2028",
    grade: "3.6 GPA",
    desc: "Pursuing a Bachelor of Applied Science in Nanotechnology Engineering at the University of Waterloo, with hands-on experience in nanoelectronics, nanomaterials, and nanofabrication.",
    degree: "Bachelor of Applied Science, Honours Nanotechnology Engineering  (Nanoelectronics Specialization)",
  },
  {
    id: 1,
    img: agincourtLogo,
    school: "Agincourt Collegiate Institute, Ontario, Canada",
    date: "Sep 2019 - May 2023",
    grade: "91.88%",
    desc: "Completed high school with a strong focus on mathematics, physics, and chemistry, laying a solid foundation for advanced studies in engineering.",
    degree: "Ontario Scholar, Certificate of Bilingual Studies (Extended French)",
  },
];

export const projects = [
  {
  id: 4,
  title: "Nanomaterials Synthesis & Device Fabrication",
  date: "Aug 2026",
  description:
  "Synthesized and characterized SPIONs, CdSe quantum dots, and mechanoluminescent phosphors while fabricating a QD-LED to investigate nanoscale material properties and optoelectronic applications.",
  image:
  cdse,
  tags: [
  "Quantum Dots",
  "SPIONs",
  "QD-LED",
  "Nanomaterials",
  ],
  category: "hardware",
  },
  {
  id: 3,
  title: "MIS Capacitor Fabrication & Characterization",
  date: "Jul 2026",
  description:
  "Fabricated MIS capacitors using PECVD, photolithography, reactive ion etching, and metallization, then performed C-V and I-V measurements to evaluate dielectric and electrical device performance.",
  image:
  mis,
  tags: [
  "PECVD",
  "Photolithography",
  "RIE",
  "C-V / I-V",
  ],
  category: "hardware",
  },
  {
    id: 7,
    title: "CO₂ Electrolyzer Test Cart & 100 cm² Cell",
    date: "Mar 2026",
    description:
    "Built and integrated major parts of a CO₂ electrolyzer test cart with tubing, wiring, sensors, fluid handling, and LabVIEW-based monitoring, while designing the 100 cm² cell and flow fields for integration into the system with proper geometry, reactant distribution, and mass transport.",
    image:
    testCart,
    tags: [
    "CO₂ Electrolysis",
    "LabVIEW",
    "Sensors & DAQ",
    "Flow Field Design",
    "System Integration",
    ],
    category: "hardware",
    },
  {
  id: 6,
  title: "FTIR/ATR Materials Identification",
  date: "Jul 2025",
  description:
  "Characterized an unknown compound using FTIR/ATR spectroscopy, interpreting vibrational peaks and functional groups to identify the unknown compound and evaluate spectral measurement conditions.",
  image:
  ftir,
  tags: [
  "FTIR",
  "ATR",
  "Spectroscopy",
  "Materials Characterization",
  ],
  category: "hardware",
  },
  {
  id: 5,
  title: "Zener Diode Electrical Characterization",
  date: "Jun 2025",
  description:
  "Characterized Zener diode behavior through forward- and reverse-bias I-V measurements, analyzing breakdown voltage, rectification characteristics, and device performance under varying electrical conditions.",
  image:
  zener,
  tags: [
  "Semiconductors",
  "I-V Characterization",
  "Zener Diode",
  "Circuit Analysis",
  ],
  category: "hardware",
  },
  {
  id: 9,
  title: "Text Recognition App",
  date: "May 2024",
  description:
  "Developed a Python-based text extraction application that leverages EasyOCR for precise optical character recognition and OpenCV for effective image processing, enabling users to extract text from images seamlessly.",
  image:
  textRecognition,
  tags: [
  "Python",
  "OpenCV",
  "Git",
  ],
  category: "software",
  github: "https://github.com/ryaanmohideen/text-detect",
  webapp: "",
  },
  {
  id: 1,
  title: "Triboelectric Nanogenerator",
  date: "Dec 2023",
  description:
  "Developed a triboelectric nanogenerator at the University of Waterloo Nano Ideas Clinic 2023, effectively harnessing triboelectric properties to convert wind energy into 10 volts of electricity, highlighting significant potential for sustainable energy innovation.",
  image:
  teng,
  tags: [
  "Circuit Analysis",
  "Energy Harvesting",
  ],
  category: "hardware",
  },
  {
  id: 2,
  title: "Street Fighter Clone",
  date: "Dec 2023",
  description:
  "Collaboratively crafted an immersive 2-player fighting game featuring dynamic special kill animations, captivating sound effects, and precise scorekeeping.",
  image:
  pythonGame,
  tags: ["Python", "Pygame", "Git"],
  category: "software",
  github: "https://github.com/ryaanmohideen/python-street-fighter",
  webapp: "",
  },
  {
  id: 0,
  title: "API Movie Catalogue",
  date: "Jun 2023",
  description:
  "Developed a dynamic movie catalog website and leveraged TMDB’s API to fetch trending movies and enable user-friendly search functionalities.-Developed a dynamic movie catalog website and leveraged TMDB’s API to fetch trending movies and enable user-friendly search functionalities.",
  image:
  movieCatalogue,
  tags: ["HTML", "CSS", "Vue Js", "Git"],
  category: "software",
  github: "https://github.com/ryaanmohideen/TMDB-API-Movie-Catalogue",
  webapp: "",
  },
  ];

