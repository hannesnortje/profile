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
    'The years 1991 to 1992 I completed my training as Software Developer at the department of Central Statical Services in Pretoria, South Africa',
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
  heading: 'Business informatics at Oakfield Farm South Africa',
  description:
    'I planned, developed and implemented the whole digitalization of an extensive wedding venue from analogue',
  startYear: 1998,
  endYear: 2001,
  elaboration: [
    'I developed the whole IT-infrastructure starting from online marketing, through booking and planning, until the scheduling of the waiters'
  ],
  mapDetails: {
    marker: [-26.03460976113052, 27.874143661298145],
    name: 'Oakfield Farm'
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
    name: 'Hardlepool UK'
  }
};

const softwareDeveloperEC = {
  heading: "Business informatics and sponsorship support for 'Entschieden für Christus“ (EC) e.V.'",
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
  heading: "Software Consultant for 'Entschieden für Christus“ (EC) e.V.'",
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

const docent = {
  heading: 'Miscellaneous',
  description:
    'Software development, Leadership trainer, teacher, and external examiner for the University of South Africa (Ms and Ds).',
  startYear: 2016,
  endYear: 2020,
  elaboration: ['Web Development', 'C++'],
  mapDetails: {
    marker: [51.179499092367024, 9.413111884061781],
    name: 'Deute, Gudensberg, Hesse, Germany'
  }
};

const softwareDeveloperDAA = {
  heading: 'Software Developer with Deutsche Angestellten-Akademie',
  description:
    'I developed a pbx waiting queue app in both in C++ with Qt5 and in vanilla JavaScript',
  startYear: 2020,
  endYear: 2021,
  elaboration: [
    'JavaScript',
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
  heading: 'Software Developer at SHIFT GmbH',
  description:
    'Development of the ONCE-Framework in Agile Scrumming. Development, documentation, and the training of OOP with Bash. JavaScript, TypeScript und Nuxt3 training and development. Conceptualizing and development of virtual machines in VirtualBox for different development environments. Conceptualizing and development of Nuxt3 starter templates. Conceptualizing and development of a Strapi backend. Development of Nuxt3 components connecting with Backends (RESTful Api and GraphQL)',
  startYear: 2021,
  endYear: 2023,
  elaboration: [
    'Vue 3',
    'Nuxt 3',
    'TailwindCss',
    'Vuetify',
    'GraphQL',
    'Strapi',
    'Achilles scrumming',
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
  description: 'Intensive and exstensive course/modules over 44 weeks',
  startYear: 2023,
  endYear: 2024,
  elaboration: [
    'HTML, CSS and JavaScript',
    'C/C++ and Qt',
    'JavaScript',
    'Python',
    'Statics',
    'Machine Learning',
    'Deep Learning',
    'Anyletics'
  ],
  mapDetails: {
    marker: [51.61984692674821, 8.895881498197118],
    name: 'Lichtenau Wesfalen, Germany'
  }
};

const ceruleancircleHTML = {
  heading: 'Cerulean Circle GmbH',
  description: 'Developing Web4x serverless JavaScript components in ONCE with the WODA IDE. Engineered local AI server hosting offline models, as well as creating several Python AI applications. Creating intelligent AI agents for real-world use cases and provided AI development consulting services. Extensive and proficient Vibe programming',
  startYear: 2024,
  endYear: 'present',
  elaboration: [
    'HTML, CSS and JavaScript',
    'JavaScript',
    'Python',
    'PyTorch',
    'TensorFlow',
    'Keras',
    'ONCE',
    'Vibe programming'
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
  pastorTeacher,
  softwareDeveloperEC,
  softwareConsultant,
  docent,
  softwareDeveloperDAA,
  softwareDeveloperSHIFT,
  alfatrainingHTML,
  ceruleancircleHTML
];
