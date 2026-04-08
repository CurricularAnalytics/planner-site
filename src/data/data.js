/* Dummy data to be later replaced by backend */

export const studentProfile = {
  name: 'Student Name',
  degree: 'Bachelor of Science — Computer Science',
  studentId: '123456789',
  estimatedGraduation: '05/2028',
}

export const requirementBars = [
  { bold: 'GENERAL', rest: 'EDUCATION',  fillClass: 'gened',        width: '45%'  },
  { bold: 'MAJOR',   rest: 'COURSES',    fillClass: 'majorprog',    width: '65%'  },
  { bold: 'ELECTIVE',rest: 'COURSES',    fillClass: 'electiveprog', width: '100%' },
]

export const advisor = {
  initials: 'DSS',
  name: 'Dr. Sarah Smith',
  role: 'Computer Science Academic Advisor',
  email: 's.smith@arizona.edu',
  office: 'Gould-Simpson 701',
  officeHours: [
    'Monday & Wednesday: 10:00 AM – 3:00 PM',
    'Tuesday & Thursday: 1:00 PM – 4:00 PM',
    'Friday: By appointment only',
  ],
}

export const majorOptions = [
  { code: 'B.S. CS',  name: 'Computer Science',                  focus: 'General programming, systems, theory', credits: 120, enrolled: true  },
  { code: 'B.S. ECE', name: 'Electrical & Computer Engineering', focus: 'Hardware, embedded systems, circuits',  credits: 128, enrolled: false },
  { code: 'B.S. DS',  name: 'Data Science',                      focus: 'ML, statistics, data visualization',   credits: 120, enrolled: false },
  { code: 'B.S. CYB', name: 'Cyber Operations',                  focus: 'Security, networks, cryptography',     credits: 122, enrolled: false },
]

export const planDefaults = {
  credits: '15',
  classes: '5',
  gradYear: '2028',
  location: 'inperson',
  hasMinor: false,
}

export const professors = {
  'CSC 252':    { name: 'Dr. John Miller',  availability: 'Mon & Wed: 11:00 AM – 1:00 PM'  },
  'CSC 345':    { name: 'Dr. Sarah Smith',  availability: 'Tue & Thu: 10:00 AM – 12:00 PM' },
  'MCB 181R':   { name: 'Prof. Karen Lee',  availability: 'Mon: 2:00 PM – 4:00 PM'         },
  'CLAS 150C1': { name: 'Dr. Robert Cruz',  availability: 'Fri: 10:00 AM – 12:00 PM'       },
  'ECON 200':   { name: 'Prof. Amy Chen',   availability: 'Wed: 3:00 PM – 5:00 PM'         },
}

export const studentStats = {
  creditsCompleted: 37,
  creditsRequired: 120,
  gpa: 3.9,
}

export const currentSemesterTitle = 'SPRING 2026'

export const semesters = [
  {
    title: 'FALL 2024',
    totalCredits: 14,
    courses: [
      { code: 'CSC 110',    name: 'Introduction to Programming I',                   credits: 4, type: 'majorclass' },
      { code: 'MATH 122B',  name: 'First Semester Calculus',                         credits: 3, type: 'majorclass' },
      { code: 'UNIV 101',   name: 'Introduction to the General Education Experience', credits: 1, type: 'gened'      },
      { code: 'ASTRO 170A', name: 'Alien Earths',                                    credits: 3, type: 'gened'      },
      { code: 'ENGL 101',   name: 'First-Year Composition',                          credits: 3, type: 'language'   },
    ],
  },
  {
    title: 'SPRING 2025',
    totalCredits: 13,
    courses: [
      { code: 'CSC 120',  name: 'Introduction to Programming II', credits: 4, type: 'majorclass' },
      { code: 'MATH 129B',name: 'Calculus II',                    credits: 3, type: 'majorclass' },
      { code: 'CSC 144',  name: 'Discrete Mathematics I',         credits: 3, type: 'majorclass' },
      { code: 'ENGL 102', name: 'First Year Composition',         credits: 3, type: 'language'   },
    ],
  },
  {
    title: 'FALL 2025',
    totalCredits: 13,
    courses: [
      { code: 'CSC 210',   name: 'Software Development',    credits: 4, type: 'majorclass' },
      { code: 'CSC 244',   name: 'Discrete Mathematics II', credits: 3, type: 'majorclass' },
      { code: 'MATH 129',  name: 'Calculus II',             credits: 3, type: 'majorclass' },
      { code: 'GEOG150C1', name: 'Environment and Society', credits: 3, type: 'gened'      },
    ],
  },
  {
    title: 'SPRING 2026',
    totalCredits: 16,
    courses: [
      { code: 'CSC 252',    name: 'Computer Organization',           credits: 4, type: 'majorclass' },
      { code: 'CSC 345',    name: 'Analysis of Discrete Structures', credits: 3, type: 'majorclass' },
      { code: 'MCB 181R',   name: 'Molecular and Cellular Biology', credits: 3, type: 'majorclass' },
      { code: 'CLAS 150C1', name: 'Pyramids & Mummies',              credits: 3, type: 'gened'      },
      { code: 'ECON 200',   name: 'Basic Economic Issues',           credits: 3, type: 'elective'   },
    ],
  },
  {
    title: 'FALL 2026',
    totalCredits: 16,
    courses: [
      { code: 'CSC 335',  name: 'Object Oriented Programming',  credits: 3, type: 'majorclass' },
      { code: 'CSC 352',  name: 'Systems Programming and Unix', credits: 3, type: 'majorclass' },
      { code: 'DNC 101',  name: 'Dance Appreciation',           credits: 3, type: 'gened'      },
      { code: 'FREN249',  name: 'Images of Africa',             credits: 3, type: 'elective'   },
      { code: 'SPAN 101', name: 'First Semester Spanish',       credits: 4, type: 'language'   },
    ],
  },
  {
    title: 'SPRING 2027',
    totalCredits: 13,
    courses: [
      { code: 'CSC 380',  name: 'Principles of Data Science',  credits: 3, type: 'majorclass'    },
      { code: 'CSC 445',  name: 'Theory of Algorithms',        credits: 3, type: 'majorelective' },
      { code: 'CSC 425',  name: 'Computer Networking',         credits: 3, type: 'majorelective' },
      { code: 'SPAN 102', name: 'Second Semester Spanish',     credits: 4, type: 'language'      },
    ],
  },
  {
    title: 'FALL 2027',
    totalCredits: 15,
    courses: [
      { code: 'ECOL 182', name: 'Introductory Biology II',              credits: 3, type: 'majorclass'    },
      { code: 'CSC 337',  name: 'Web Programming',                      credits: 3, type: 'majorelective' },
      { code: 'CSC 372',  name: 'Comparative Programming Languages',    credits: 3, type: 'majorelective' },
      { code: 'EDP 200',  name: 'Evolution and Human Development',      credits: 3, type: 'gened'         },
      { code: 'FTV 325',  name: 'German Cinema',                        credits: 3, type: 'elective'      },
    ],
  },
  {
    title: 'SPRING 2028',
    totalCredits: 13,
    courses: [
      { code: 'CSC 452',  name: 'Principles of Operating Systems', credits: 3, type: 'majorelective' },
      { code: 'CSC 436',  name: 'Software Engineering',            credits: 3, type: 'majorelective' },
      { code: 'MIC 204',  name: 'Microbes and Society',            credits: 3, type: 'gened'         },
      { code: 'LAS 337',  name: 'Mexican Music and Culture',       credits: 3, type: 'gened'         },
      { code: 'UNIV 301', name: 'General Education Portfolio',     credits: 1, type: 'gened'         },
    ],
  },
]

export const auditSummary = [
  { label: 'Credits Completed',   stat: studentStats.creditsCompleted,             sub: `of ${studentStats.creditsRequired} required` },
  { label: 'Cumulative GPA',      stat: studentStats.gpa,                          sub: 'out of 4.0'      },
  { label: 'Expected Graduation', stat: '2028',      sub: 'Spring Semester' },
  { label: 'Academic Standing',   stat: 'Sophomore', sub: 'Year 2'          },
]

export const auditSections = [
  {
    bold: 'MAJOR', rest: 'REQUIREMENTS',
    earned: 24, required: 66,
    fillClass: 'majorprog', fillWidth: '36%',
    type: 'course',
    rows: [
      { code: 'CSC 110',   name: 'Intro to Programming I',           credits: 4, typeClass: 'majorclass',    typeLabel: 'Core',    grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'    },
      { code: 'MATH 122B', name: 'First Semester Calculus',          credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'    },
      { code: 'CSC 120',   name: 'Intro to Programming II',          credits: 4, typeClass: 'majorclass',    typeLabel: 'Core',    grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'    },
      { code: 'MATH 129B', name: 'Calculus II',                      credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'    },
      { code: 'CSC 144',   name: 'Discrete Mathematics',             credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'    },
      { code: 'CSC 210',   name: 'Software Development',             credits: 4, typeClass: 'majorclass',    typeLabel: 'Core',    grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'    },
      { code: 'MATH 129',  name: 'Calculus II',                      credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: 'B', statusClass: 'complete',   statusLabel: 'Complete'    },
      { code: 'CSC 252',   name: 'Computer Organization',            credits: 4, typeClass: 'majorclass',    typeLabel: 'Core',    grade: '—', statusClass: 'inprogress', statusLabel: 'In Progress' },
      { code: 'CSC 345',   name: 'Analysis of Discrete Structures',  credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: '—', statusClass: 'inprogress', statusLabel: 'In Progress' },
      { code: 'MCB 181R',  name: 'Molecular & Cellular Biology',     credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: '—', statusClass: 'inprogress', statusLabel: 'In Progress' },
      { code: 'CSC 335',   name: 'Object Oriented Programming',      credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { code: 'CSC 352',   name: 'Systems Programming',              credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { code: 'CSC 380',   name: 'Principles of Data Science',       credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { code: 'ECOL 182',  name: 'Introductory Biology II',          credits: 3, typeClass: 'majorclass',    typeLabel: 'Core',    grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { code: 'CSC 445',   name: 'Theory of Algorithms',             credits: 3, typeClass: 'majorelective', typeLabel: 'Elective',grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { code: 'CSC 425',   name: 'Computer Networking',              credits: 3, typeClass: 'majorelective', typeLabel: 'Elective',grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { code: 'CSC 337',   name: 'Web Programming',                  credits: 3, typeClass: 'majorelective', typeLabel: 'Elective',grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { code: 'CSC 372',   name: 'Comparative Programming Languages', credits: 3, typeClass: 'majorelective', typeLabel: 'Elective',grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { code: 'CSC 452',   name: 'Principles of Operating Systems',  credits: 3, typeClass: 'majorelective', typeLabel: 'Elective',grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { code: 'CSC 436',   name: 'Software Engineering',             credits: 3, typeClass: 'majorelective', typeLabel: 'Elective',grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
    ],
  },
  {
    bold: 'GENERAL', rest: 'EDUCATION',
    earned: 7, required: 14,
    fillClass: 'gened', fillWidth: '50%',
    type: 'req',
    rows: [
      { req: 'Natural Scientist',       credits: 3, course: 'ASTRO 170A', grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'    },
      { req: 'Social Scientist',        credits: 3, course: 'GEOG 150C1', grade: 'B', statusClass: 'complete',   statusLabel: 'Complete'    },
      { req: 'Building Connections I',  credits: 1, course: 'UNIV 101',   grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'    },
      { req: 'Humanist',                credits: 3, course: 'CLAS 150C1', grade: '—', statusClass: 'inprogress', statusLabel: 'In Progress' },
      { req: 'Artist',                  credits: 3, course: 'DNC 101',    grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { req: 'Building Connections II', credits: 1, course: 'UNIV 301',   grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
    ],
  },
  {
    bold: 'LANGUAGE', rest: 'REQUIREMENTS',
    earned: 6, required: 14,
    fillClass: 'langprog', fillWidth: '43%',
    type: 'req',
    rows: [
      { req: 'First-Year Composition', credits: 3, course: 'ENGL 101', grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'   },
      { req: 'Second Writing',         credits: 3, course: 'ENGL 102', grade: 'A', statusClass: 'complete',   statusLabel: 'Complete'   },
      { req: 'Foreign Language I',     credits: 4, course: 'SPAN 101', grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete' },
      { req: 'Foreign Language II',    credits: 4, course: 'SPAN 102', grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete' },
    ],
  },
  {
    bold: 'FREE', rest: 'ELECTIVES',
    earned: 0, required: 9,
    fillClass: 'electiveprog', fillWidth: '0%',
    type: 'req',
    rows: [
      { req: 'Free Elective', credits: 3, course: 'ECON 200', grade: '—', statusClass: 'inprogress', statusLabel: 'In Progress' },
      { req: 'Free Elective', credits: 3, course: 'FREN 249', grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
      { req: 'Free Elective', credits: 3, course: 'FTV 325',  grade: '—', statusClass: 'incomplete', statusLabel: 'Incomplete'  },
    ],
  },
]
