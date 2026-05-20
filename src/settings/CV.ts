import { type Timeline } from '@/interface/timeline';

const matriculation = {
  heading: 'Matriculated (Abitur)',
  description: 'I matriculated December 1989 in Pretoria, South Africa at Silverton High School',
  startYear: 1989,
  elaboration: ['Best performance in maths, accountancy, and science'],
  mapDetails: {
    marker: [-25.73689712936625, 28.30159599695999],
    name: 'Silverton Highschool'
  }
};

const programmingTraining = {
  heading: 'Programmer Training',
  description:
    'The years 1991 to 1992 I completed my training as Software Developer at the department of Central Statistical Services in Pretoria, South Africa',
  startYear: 1991,
  endYear: 1992,
  elaboration: [
    'Qualified best in class',
    'Training included Pascal, Cobol, Natural, Adabas, Construct'
  ],
  mapDetails: {
    marker: [-25.744841581023152, 28.18647619696029],
    name: 'Central Statistical Services'
  }
};

const missionary = {
  heading: 'Missionary',
  startYear: 1993,
  endYear: 1997,
  elaboration: ['Traveled Africa south of the equator'],
  mapDetails: {
    rectangle: [
      [-11.939001483912847, 10.69196151310048],
      [-34.981988293889124, 40.442936354762395]
    ],
    name: 'Africa south of the equator'
  }
};

const softwareDeveloperOakfields = {
  heading: 'Business Informatics Specialist – Oakfield Farm',
  description:
    'I planned, developed and implemented the whole digitalization of an extensive wedding venue from analogue',
  startYear: 1999,
  endYear: 2001,
  elaboration: [
    'I developed the whole IT-infrastructure starting from online marketing, through booking and planning, until the scheduling of the waiters'
  ],
  mapDetails: {
    marker: [-26.03460976113052, 27.874143661298145],
    name: 'Oakfield Farm'
  }
};

const baDegree = {
  heading: 'Bachelor of Arts (B.A.)',
  description: 'Bachelor of Arts awarded by the University of South Africa (UNISA).',
  startYear: 1998,
  endYear: 2001,
  elaboration: ['UNISA, South Africa'],
  mapDetails: {
    marker: [-25.768, 28.191],
    name: 'UNISA, Pretoria'
  }
};

const pastorTeacher = {
  heading: 'Miscellaneous',
  description: 'Pastor in England, English teacher in Germany',
  startYear: 2003,
  endYear: 2008,
  elaboration: [
    'This time includes web development, linux development, as well as digital marketing'
  ],
  mapDetails: {
    marker: [54.69288736519534, -1.2122021240786767],
    name: 'Hartlepool UK'
  }
};

const maTheology = {
  heading: 'M.A. in Systematic Theology & Philosophy',
  description: 'Master of Arts awarded by the University of South Africa (UNISA).',
  startYear: 2003,
  endYear: 2006,
  elaboration: ['UNISA, South Africa'],
  mapDetails: {
    marker: [-25.768, 28.191],
    name: 'UNISA, Pretoria'
  }
};

const softwareDeveloperEC = {
  heading: "Business informatics and sponsorship support for 'Entschieden für Christus' (EC) e.V.",
  description:
    'I planned, developed and implemented the whole digitalization of an extensive sponsorship program in India.',
  startYear: 2008,
  endYear: 2010,
  elaboration: ['SQL', 'SharePoint', 'Web Development', 'Visual Basic'],
  mapDetails: {
    marker: [51.29183699299385, 9.458187241761452],
    name: 'Deutscher EC-Verband'
  }
};

const softwareConsultant = {
  heading: "Software Consultant for 'Entschieden für Christus' (EC) e.V.",
  description: `Support and maintenance of the IT infrastructure for a sponsorship program (Deutscher EC-Verband).
     Support of the update of IT processes: development of a MySQL database and transfer of data from MSSQL to MySQL`,
  startYear: 2010,
  endYear: 2016,
  elaboration: ['MySQL', 'Web Development'],
  mapDetails: {
    marker: [51.29183699299385, 9.458187241761452],
    name: 'Deutscher EC-Verband'
  }
};

const dthPhd = {
  heading: 'Doctorate (DTh / Ph.D.) in Systematic Theology & Philosophy',
  description: 'Doctorate awarded by the University of South Africa (UNISA).',
  startYear: 2010,
  endYear: 2012,
  elaboration: ['UNISA, South Africa'],
  mapDetails: {
    marker: [-25.768, 28.191],
    name: 'UNISA, Pretoria'
  }
};

const docent = {
  heading: 'Software Application Technologist – Vielfach',
  description:
    'Development of online educational software and curricula; leadership training, teaching, and external examination for the University of South Africa (M.A. and D.Th.).',
  startYear: 2016,
  endYear: 2020,
  elaboration: ['Web Development', 'C++'],
  mapDetails: {
    marker: [51.179499092367024, 9.413111884061781],
    name: 'Deute, Gudensberg, Hesse, Germany'
  }
};

const softwareDeveloperDAA = {
  heading: 'PBX App Developer – InBeQ / DAA',
  description:
    'I developed a PBX waiting-queue app in both C++ with Qt5 and in vanilla JavaScript',
  startYear: 2020,
  endYear: 2021,
  elaboration: [
    'JavaScript / TypeScript',
    'Kotlin',
    'Tensorflow',
    'C++',
    'Qt5',
    'PBX waiting queue app in both C++ and vanilla JavaScript'
  ],
  mapDetails: {
    marker: [51.322407507978895, 9.472359566902004],
    name: 'DAA Kassel'
  }
};

const softwareDeveloperSHIFT = {
  heading: 'JavaScript / TypeScript Frontend Developer – SHIFT GmbH',
  description:
    'Development of the ONCE-Framework in Agile Scrumming. Development, documentation, and training of OOP with Bash. JavaScript, TypeScript and Nuxt3 training and development. Conceptualizing and development of virtual machines in VirtualBox for different development environments. Conceptualizing and development of Nuxt3 starter templates. Conceptualizing and development of a Strapi backend. Development of Nuxt3 components connecting with backends (RESTful API and GraphQL).',
  startYear: 2021,
  endYear: 2023,
  elaboration: [
    'Vue 3',
    'Nuxt 3',
    'TailwindCss',
    'Vuetify',
    'GraphQL',
    'Strapi',
    'Agile scrumming',
    'Bash',
    'OOP'
  ],
  mapDetails: {
    marker: [51.07125736801148, 9.395899539904004],
    name: 'SHIFT GmbH'
  }
};

const alfatrainingHTML = {
  heading: 'Alfatraining',
  description: 'Intensive and extensive course/modules over 44 weeks',
  startYear: 2023,
  endYear: 2024,
  elaboration: [
    'HTML, CSS, JavaScript and TypeScript',
    'C/C++ and Qt',
    'JavaScript / TypeScript',
    'Python',
    'Statistics',
    'Machine Learning',
    'Deep Learning',
    'Analytics'
  ],
  mapDetails: {
    marker: [51.61984692674821, 8.895881498197118],
    name: 'Lichtenau Wesfalen, Germany'
  }
};

const ceruleancircleHTML = {
  heading: 'AI Specialist & Agentic Coding – Cerulean Circle GmbH',
  description:
    'Working as an AI Specialist and Data Scientist, applying Agentic Coding to full-stack development and AI engineering. Develop Web4x serverless JavaScript / TypeScript components in ONCE with the WODA IDE; current main focus is oosh, a Bash framework; engineer local AI servers hosting offline models; build Python AI applications and intelligent agents for real-world use cases. Provide AI development consulting. Extensive and proficient Vibe programming.',
  startYear: 2024,
  endYear: 'present',
  elaboration: [
    'AI Specialist & Data Scientist',
    'Agentic Coding',
    'Full-stack development',
    'Local AI server hosting offline models',
    'Python AI applications and intelligent agents',
    'Web4x / ONCE / WODA IDE / oosh (Bash framework)',
    'Vibe programming',
    'AI development consulting'
  ],
  mapDetails: {
    marker: [48.143540087423816, 11.575464554035177],
    name: 'Wittelsbacherplatz 1, München, Germany'
  }
};


export const timeline: Timeline[] = [
  matriculation,
  programmingTraining,
  missionary,
  softwareDeveloperOakfields,
  baDegree,
  pastorTeacher,
  maTheology,
  softwareDeveloperEC,
  softwareConsultant,
  dthPhd,
  docent,
  softwareDeveloperDAA,
  softwareDeveloperSHIFT,
  alfatrainingHTML,
  ceruleancircleHTML
];
