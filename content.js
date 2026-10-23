/* Edit project details, photo paths, experience, skillGroups and contact links here.
 * See EDITING_GUIDE.md for examples. Paths start from the repository root.
 */
window.PORTFOLIO = {
  "portrait": {
    "src": "assets/images/portrait.webp",
    "alt": "Ibrahim Feknous seated in a vehicle wearing a helmet",
    "position": "50% 38%"
  },
  "aboutPhotos": [],
  "intro": "BS/MS electrical engineering student at NJIT, focused on power electronics and embedded hardware.",
  "about": "I’m pursuing a BS/MS in electrical engineering at NJIT. My experience includes robotics electronics, solar and energy storage design, and research in the NJIT UNICS Lab. I lead the Solar Car Team and help organize technical projects and events through IEEE.",
  "email": "ibrahimfeknous1@gmail.com",
  "linkedin": "https://www.linkedin.com/in/ibrahim-feknous/",
  "github": "",
  "projects": [
    {
      "id": "motor-controller",
      "image": "assets/images/coming-soon.webp",
      "imageAlt": "Project photograph coming soon",
      "imagePosition": "center",
      "gallery": [],
      "title": "Regenerative motor controller",
      "category": "power",
      "label": "POWER ELECTRONICS / CAPSTONE",
      "status": "In development",
      "date": "Aug 2026 – present",
      "art": "inverter",
      "color": "sage",
      "tags": [
        "72 V / 3 kW",
        "STM32",
        "Altium"
      ],
      "summary": "A 72 V, 3 kW three-phase inverter with STM32 control and regenerative braking.",
      "overview": "Developing an STM32-based traction inverter to drive a 3 kW BLDC motor from a 72 V battery pack, with a focus on regenerative control and student electric vehicle applications.",
      "details": [
        "Designing the inverter in Altium around field-oriented control (FOC) and space vector PWM (SVPWM).",
        "Implementing PWM generation, current sensing, protection logic, and fault detection.",
        "Working on CAN/Ethernet communication and an interface for current limits, telemetry, operating parameters, fault reporting, and automatic shutdown."
      ],
      "note": "Senior capstone project · Current focus: control, sensing, protection, and power-stage development.",
      "imageFit": "contain"
    },
    {
      "id": "robotics-motherboard",
      "image": "assets/images/coming-soon.webp",
      "imageAlt": "Project photograph coming soon",
      "imagePosition": "center",
      "gallery": [],
      "title": "Embedded robotics motherboard",
      "category": "embedded",
      "label": "EMBEDDED HARDWARE / ROBOTICS",
      "status": "Internship work",
      "date": "Apr – Aug 2026",
      "art": "board",
      "color": "blue",
      "tags": [
        "PCB design",
        "Teensy",
        "Relay control"
      ],
      "summary": "A Teensy-based motherboard with sensor interfaces, relay control, and power distribution.",
      "overview": "Designed and routed a custom embedded robotics motherboard during my internship at Human Friendly Robotics, supporting autonomous robots for construction.",
      "details": [
        "Integrated Teensy-based control, RJ45 sensor interfaces, opto-isolated relay channels, and power distribution.",
        "Implemented transistor-driven relay control with flyback protection for switching reliability and noise immunity.",
        "Developed an architecture to centralize wiring and simplify debugging, with scalability for a projected fleet of more than 80 robots.",
        "Used oscilloscopes, probing techniques, power supplies, and multimeters during development."
      ],
      "note": "Personal contribution: motherboard design and routing, relay interfaces, and hardware development. Fleet size is projected.",
      "imageFit": "contain"
    },
    {
      "id": "buck-converter",
      "image": "assets/images/buck-converter.webp",
      "imageAlt": "Synchronous buck converter PCB layout",
      "imagePosition": "center",
      "gallery": [],
      "title": "Synchronous buck converter",
      "category": "power",
      "label": "POWER ELECTRONICS / CIRCUIT DESIGN",
      "status": "Designed & simulated",
      "date": "Apr – May 2026",
      "art": "buck",
      "color": "sand",
      "tags": [
        "KiCad",
        "LTspice",
        "Gate driving"
      ],
      "summary": "An open-loop synchronous buck converter designed in KiCad and simulated in LTspice.",
      "overview": "Developed an open-loop, hardware-controlled synchronous DC-DC buck converter as the final project for ECE 371.",
      "details": [
        "Used PWM duty-cycle control, bootstrap high-side gate driving, and dual MOSFET switching for step-down conversion.",
        "Designed and routed the PCB in KiCad.",
        "Evaluated output ripple, load behavior, and switching performance through LTspice simulation across multiple current loads."
      ],
      "note": "Validation described here is simulation-based.",
      "imageFit": "contain"
    },
    {
      "id": "solar-car",
      "image": "assets/images/solar-car.webp",
      "imageAlt": "NJIT Solar Car display with a team member",
      "imagePosition": "50% 45%",
      "gallery": [
        {
          "src": "assets/images/solar-car-design.webp",
          "alt": "Collage of NJIT Solar Car electrical and mechanical designs",
          "caption": "Electrical and mechanical design work for NJIT Solar Car.",
          "fit": "contain"
        }
      ],
      "title": "NJIT Solar Car",
      "category": "systems",
      "label": "VEHICLE SYSTEMS / TEAM LEADERSHIP",
      "status": "Ongoing",
      "date": "Feb 2025 – present",
      "art": "solar",
      "color": "sage",
      "tags": [
        "System integration",
        "Power distribution",
        "Leadership"
      ],
      "summary": "Vehicle development, power distribution, and team leadership for NJIT Solar Car.",
      "overview": "Re-founded and lead NJIT’s Solar Car Team as President, coordinating vehicle development across electrical and mechanical disciplines.",
      "details": [
        "Manage more than 20 board members and over 60 development team members across sub-teams.",
        "Coordinate work across battery management, low- and high-voltage power distribution, central controls, embedded displays, autonomy, and vehicle structure.",
        "Developed sponsorship and university engagement strategy contributing to more than $120,000 in sponsorships for the program.",
        "Built project structures supporting capstone work, research credit, and cross-functional engineering development."
      ],
      "note": "Team project · My focus includes leadership, system coordination, sponsorship, and program development."
    },
    {
      "id": "edge-cloud",
      "image": "assets/images/research.webp",
      "imageAlt": "Autonomous research vehicle with onboard electronics",
      "imagePosition": "center",
      "gallery": [],
      "title": "Edge-to-cloud autonomous systems",
      "category": "embedded",
      "label": "AUTONOMOUS SYSTEMS / RESEARCH",
      "status": "Research experience",
      "date": "May 2025 – Aug 2026",
      "art": "network",
      "color": "blue",
      "tags": [
        "CARLA",
        "Edge computing",
        "Research"
      ],
      "summary": "Edge-to-cloud computation for a TRAXXAS vehicle platform, evaluated in CARLA.",
      "overview": "Undergraduate research in the NJIT UNICS Lab, using a TRAXXAS vehicle platform to investigate edge-to-cloud computing.",
      "details": [
        "Engineered an edge-to-cloud pipeline to reduce latency and computation cost.",
        "Validated performance through CARLA simulations demonstrating a 70% improvement in response time.",
        "Collaborated with PhD researchers, faculty, and Siemens research leadership.",
        "Presented work at a research symposium through NJIT summer research internship programs."
      ],
      "note": "The response-time improvement refers to CARLA simulation results."
    },
    {
      "id": "balloon",
      "image": "assets/images/weather-balloon.webp",
      "imageAlt": "Weather balloon and payload suspended against a blue sky",
      "imagePosition": "center",
      "gallery": [],
      "title": "High-altitude balloon payload",
      "category": "systems",
      "label": "REMOTE SENSING / STUDENT RESEARCH",
      "status": "In development",
      "date": "Jan 2026 – present",
      "art": "balloon",
      "color": "lilac",
      "tags": [
        "Atmospheric sensing",
        "Custom PCB",
        "GRSS"
      ],
      "summary": "A weather balloon payload with a custom PCB for atmospheric sensing and remote sensing research.",
      "overview": "Leading a high-altitude weather balloon project through NJIT IEEE GRSS, combining geoscience, remote sensing, and custom payload electronics.",
      "details": [
        "Develop a custom PCB for payload sensing and atmospheric data collection.",
        "Develop a research component connected to the 2027 solar eclipse.",
        "Pursue a NASA-funded New Jersey consortium grant opportunity to support the work."
      ],
      "note": "Student research project · Payload preparation and funding applications are ongoing.",
      "imageFit": "contain"
    },
    {
      "id": "battery-pack",
      "image": "assets/images/coming-soon.webp",
      "imageAlt": "Project photograph coming soon",
      "imagePosition": "center",
      "gallery": [],
      "title": "Custom battery management",
      "category": "power",
      "label": "BATTERY SYSTEMS / PERSONAL PROJECT",
      "status": "In development",
      "date": "Sep 2026 – present",
      "art": "battery",
      "color": "sand",
      "tags": [
        "Battery pack",
        "BMS",
        "Personal project"
      ],
      "summary": "A personal power-tool battery pack project centered on a custom battery management system.",
      "overview": "Developing a power-tool battery pack with a custom battery management system as a personal project.",
      "details": [
        "Focus: battery pack development and custom battery management.",
        "The project is in progress; design specifications and test results will be added as the work develops."
      ],
      "note": "In development.",
      "imageFit": "contain"
    },
    {
      "id": "moisture",
      "image": "assets/images/moisture-meter.webp",
      "imageAlt": "Moisture monitoring project with electronics and a display",
      "imagePosition": "center",
      "gallery": [],
      "title": "Connected moisture monitoring",
      "category": "embedded",
      "label": "SENSING / FIRST-YEAR DESIGN",
      "status": "Showcase project",
      "date": "Sep 2024 – Feb 2025",
      "art": "sensor",
      "color": "sage",
      "tags": [
        "ESP32",
        "Sensors",
        "Web interface"
      ],
      "summary": "An automated humidity-control system with a soil moisture sensor and ESP32 web interface.",
      "overview": "Developed an automated humidity-control system for Fundamentals of Engineering Design, combining sensing with a web-based interface.",
      "details": [
        "Integrated a soil moisture sensor and an ESP32 web interface.",
        "Selected to present at the Newark College of Engineering First-Year Design Showcase, earning second place."
      ],
      "note": "Course project · Newark College of Engineering First-Year Design Showcase."
    }
  ],
  "experience": [
    {
      "company": "Pure Power Engineering",
      "role": "Electrical Engineer I Intern",
      "date": "JUN – AUG 2026",
      "points": [
        "Designed and supported commercial solar PV and energy storage systems ranging from 100 kW to 20 MW.",
        "Developed AutoCAD drawings and construction documents; supported utility interconnection, permitting, PVsyst modeling, and field visits."
      ]
    },
    {
      "company": "Human Friendly Robotics",
      "role": "Robotics Engineer Intern",
      "date": "APR – AUG 2026",
      "points": [
        "Worked on autonomous construction robots and designed a custom embedded robotics motherboard.",
        "Integrated sensor interfaces, relay control, and power distribution to centralize wiring and simplify debugging."
      ]
    },
    {
      "company": "NJIT UNICS Lab",
      "role": "Undergraduate Researcher",
      "date": "MAY 2025 – AUG 2026",
      "points": [
        "Developed an edge-to-cloud computing pipeline on a TRAXXAS platform and evaluated it in CARLA.",
        "Collaborated with researchers and faculty and presented findings at a research symposium."
      ]
    },
    {
      "company": "NJIT",
      "role": "FED 101 TA & IEEE-HKN Tutor",
      "date": "SEP – DEC 2025",
      "points": [
        "Supported five sections with more than 150 students through lab instruction, grading, and technical demonstrations.",
        "Tutored circuits, Arduino programming, and electronics fundamentals using lab instrumentation."
      ]
    }
  ],
  "leadership": [
    {
      "title": "IEEE Student Branch",
      "role": "Vice President",
      "text": "Lead student programming, technical activities, and branch initiatives at NJIT.",
      "image": "assets/images/ieee.webp",
      "imageAlt": "Photograph at an IEEE event",
      "imageFit": "contain"
    },
    {
      "title": "2027 IEEE Region 1 & 2 Student Branch Summit",
      "role": "Executive Chair",
      "text": "Lead planning for the 2027 summit, including workshops, competitions, logistics, and sponsorship."
    },
    {
      "title": "MakeNJIT Hardware Hackathon",
      "role": "Executive Chair",
      "text": "Direct logistics, outreach, marketing, finance, and sponsor relations for the hardware hackathon.",
      "image": "assets/images/makenjit.webp",
      "imageAlt": "Participants collaborating on hardware at MakeNJIT",
      "imageFit": "cover"
    },
    {
      "title": "IEEE GRSS",
      "role": "President",
      "text": "Lead geoscience and remote sensing activities, including a weather balloon project and a custom payload PCB.",
      "projectId": "balloon"
    },
    {
      "title": "IEEE CASS",
      "role": "Secretary",
      "text": "Support the chapter’s first student-led tapeout project and its PCB and FPGA groups."
    }
  ],
  "skillGroups": [
    {
      "title": "Programming languages",
      "items": [
        "C",
        "C++",
        "Python",
        "Java"
      ]
    },
    {
      "title": "Electronics & simulation",
      "items": [
        "Altium",
        "KiCad",
        "LTspice",
        "NI Multisim",
        "MATLAB",
        "Simulink",
        "Siemens PSS/E",
        "PVsyst"
      ]
    },
    {
      "title": "CAD & software",
      "items": [
        "AutoCAD",
        "Fusion 360",
        "SolidWorks",
        "Onshape",
        "Revit",
        "Altair",
        "Bluebeam",
        "Arduino IDE",
        "CARLA",
        "Ubuntu",
        "Microsoft Office"
      ]
    },
    {
      "title": "Hardware & technical areas",
      "items": [
        "PCB design",
        "Power electronics",
        "Embedded systems",
        "Solar PV",
        "IoT",
        "Robotics",
        "Computer vision",
        "CNC machining",
        "Soldering",
        "RISC-V"
      ]
    }
  ]
};
