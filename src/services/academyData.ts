import type {
  AcademyLocation,
  AcademyMessage,
  AchievementItem,
  AttendanceRecord,
  CourseProgram,
  FaqItem,
  OpportunityItem,
  PaymentRecord,
  RosterStudent,
  ScheduleSession,
  StudentProfile,
  UserRole,
} from '../types/academy'

export const OFFICIAL_CONTACT = {
  academyName: 'Yantra Robotics Academy',
  email: 'contactus@yantrabots.com',
  phone: '201-673-2418',
  website: 'https://portal.yantrabots.com',
  regions: 'Ashburn & Chantilly, Virginia · Online',
}

export const ROLE_DEMO_CREDENTIALS: Record<
  UserRole,
  { email: string; password: string; displayName: string }
> = {
  Parent: {
    email: 'anjali.sharma@familydemo.org',
    password: 'YantraDemo2026',
    displayName: 'Anjali Sharma',
  },
  Student: {
    email: 'aarav.sharma@student.yantrabots.com',
    password: 'YantraDemo2026',
    displayName: 'Aarav Sharma',
  },
  Instructor: {
    email: 'priya.nair@yantrabots.com',
    password: 'YantraDemo2026',
    displayName: 'Ms. Priya Nair',
  },
}

export const DEMO_STUDENTS: StudentProfile[] = [
  {
    id: 'aarav',
    initials: 'AS',
    firstName: 'Aarav',
    lastName: 'Sharma',
    fullName: 'Aarav Sharma',
    age: 10,
    grade: 'Grade 5',
    school: 'Moorefield ES',
    program: 'FLL Challenge Workshops',
    scheduleSummary: 'Today 4:30 PM · Ashburn – HQ',
    experience: '2 yrs (Discoverer & Explorer)',
    status: 'Enrolled',
    medicalNote: 'Allergy: Mild peanut sensitivity (No EpiPen required)',
  },
  {
    id: 'diya',
    initials: 'DS',
    firstName: 'Diya',
    lastName: 'Sharma',
    fullName: 'Diya Sharma',
    age: 7,
    grade: 'Grade 2',
    school: 'Moorefield ES',
    program: 'Discoverer Robotics',
    scheduleSummary: 'Sat 10:00 AM · Ashburn – HQ',
    experience: '1 yr (Discoverer Robotics)',
    status: 'Enrolled',
    medicalNote: 'No allergies or medical restrictions on file',
  },
]

export const COURSE_PROGRAMS: CourseProgram[] = [
  {
    id: 'explorer-robotics',
    title: 'Explorer Robotics',
    ageRange: 'Ages 8–11',
    grades: 'Grades 3–5',
    level: 'Intermediate',
    price: 295,
    priceLabel: 'Demo / qtr',
    description:
      'Build autonomous LEGO SPIKE Prime models with color, distance, and gyro sensors.',
    curriculum: [
      'Chassis engineering & gear-ratio torque fundamentals',
      'Color, ultrasonic distance & gyro sensor calibration',
      'Autonomous navigation & precision turns with Word Blocks',
      'End-of-quarter mini robotics showcase',
    ],
    platform: 'LEGO Education SPIKE Prime',
    duration: '10 Weeks · 90 min / session',
    scheduleOptions: ['Saturdays 10:00 AM – 11:30 AM (Ashburn – HQ)', 'Wednesdays 5:00 PM – 6:30 PM (Ashburn – HQ)'],
    instructor: 'Ms. Priya Nair',
    tags: ['LEGO SPIKE Prime', '10 Weeks', 'Ashburn – HQ · Sat 10 AM'],
    categories: ['Ashburn', 'Robotics'],
    imageWebp: '/assets/images/courses/explorer-robotics.webp',
    imageFallback: '/assets/images/courses/explorer-robotics.png',
    imageAlt: 'Children building LEGO robots in Explorer Robotics',
    extraNote: '+ Yearly registration fee (where applicable)',
  },
  {
    id: 'fll-challenge',
    title: 'FLL Challenge Workshops',
    ageRange: 'Ages 9–14',
    grades: 'Grades 4–8',
    level: 'Competition',
    price: 340,
    priceLabel: 'Demo / qtr',
    description:
      'Robot game strategy, modular attachments, and Innovation Project coaching for FIRST LEGO League.',
    curriculum: [
      'FIRST LEGO League Robot Game mission strategy & scoring',
      'Quick-swap passive & motorized attachment design',
      'Gyro PID line following & proportional control',
      'Innovation Project research, Core Values & Judging prep',
    ],
    platform: 'LEGO SPIKE Prime + FLL Official Field',
    duration: '10 Weeks · 90 min / session',
    scheduleOptions: ['Wednesdays 4:30 PM – 6:00 PM (Ashburn – HQ)', 'Saturdays 1:00 PM – 2:30 PM (Chantilly)'],
    instructor: 'Ms. Priya Nair',
    tags: ['LEGO SPIKE Prime', 'Ashburn – HQ & Chantilly · Wed/Sat'],
    categories: ['Ashburn', 'Chantilly', 'FLL'],
    imageWebp: '/assets/images/courses/fll-challenge.webp',
    imageFallback: '/assets/images/courses/fll-challenge.png',
    imageAlt: 'Students testing competition robots on an FLL Challenge field',
  },
  {
    id: 'vex-challenger',
    title: 'VEX-Challenger Robotics',
    ageRange: 'Ages 10–15',
    grades: 'Grades 5–9',
    level: 'Advanced',
    price: 360,
    priceLabel: 'Demo / qtr',
    description:
      'Drivetrain mechanics, gear ratios, and autonomous driver-skills coding on VEX platforms.',
    curriculum: [
      'High-efficiency drivetrains, intakes & lift mechanisms',
      'Compound gear ratios & mechanical advantage calculations',
      'Driver skills tuning & autonomous route programming',
      'Scrimmage & regional VEX IQ / V5 readiness',
    ],
    platform: 'VEX IQ / VEX V5',
    duration: '10 Weeks · 90 min / session',
    scheduleOptions: ['Sundays 1:00 PM – 2:30 PM (Ashburn – Best Brains)'],
    instructor: 'Mr. Ethan Brooks',
    tags: ['VEX IQ / V5', 'Ashburn – Best Brains · Sun 1 PM'],
    categories: ['Ashburn', 'FLL'],
    imageWebp: '/assets/images/courses/vex-challenger.webp',
    imageFallback: '/assets/images/courses/vex-challenger.png',
    imageAlt: 'Students building mechanical VEX IQ robots',
  },
  {
    id: 'after-school-coding',
    title: 'After-School Coding',
    ageRange: 'Ages 7–14',
    grades: 'Grades 2–8',
    level: 'All Levels',
    price: 245,
    priceLabel: 'Demo / qtr',
    description:
      'Logic, loops, and AI & Machine Learning foundations through interactive Python & Scratch projects.',
    curriculum: [
      'Algorithmic thinking, conditionals, loops & functions',
      'Interactive games & animations in Scratch',
      'Python fundamentals, data structures & turtle/grid logic',
      'Intro to AI & Machine Learning classification projects',
    ],
    platform: 'Python 3 & Scratch',
    duration: '10 Weeks · 60 min / session',
    scheduleOptions: ['Tuesdays 5:00 PM – 6:00 PM (Online)', 'Thursdays 3:45 PM – 4:45 PM (Moorefield ES)'],
    instructor: 'Mr. Ethan Brooks',
    tags: ['Python & Scratch', 'Online & Moorefield ES · Tue/Thu'],
    categories: ['Online', 'Ashburn', 'Coding'],
    imageWebp: '/assets/images/courses/after-school-coding.webp',
    imageFallback: '/assets/images/courses/after-school-coding.png',
    imageAlt: 'Children learning Python and Scratch coding on laptops',
  },
  {
    id: 'after-school-robotics',
    title: 'After-School Robotics',
    ageRange: 'Ages 6–11',
    grades: 'Grades 1–5',
    level: 'Beginner',
    price: 275,
    priceLabel: 'Demo / qtr',
    description:
      'Hands-on robotics engineering and block coding challenges right after school.',
    curriculum: [
      'Simple machines: levers, pulleys, cams & gears',
      'Motorized robot builds with tilt & motion sensors',
      'Block-based sequencing, loops & sound/light feedback',
      'Weekly mini-challenges & teamwork',
    ],
    platform: 'LEGO Education Robotics',
    duration: '8 Weeks · 60 min / session',
    scheduleOptions: ['Thursdays 3:30 PM – 4:30 PM (Moorefield Station ES)'],
    instructor: 'Ms. Priya Nair',
    tags: ['LEGO Robotics', 'Moorefield Station ES · Thu 3:30 PM'],
    categories: ['Ashburn', 'Robotics'],
    imageWebp: '/assets/images/courses/after-school-robotics.webp',
    imageFallback: '/assets/images/courses/after-school-robotics.png',
    imageAlt: 'Students building and testing robots in classroom',
  },
  {
    id: 'discoverer-robotics',
    title: 'Discoverer Robotics',
    ageRange: 'Ages 5–7',
    grades: 'Grades K–2',
    level: 'Beginner',
    price: 260,
    priceLabel: 'Demo / qtr',
    description:
      'Early STEM discovery with gears, simple machines, and icon-based coding.',
    curriculum: [
      'Foundational mechanical assembly with colorful hubs & motors',
      'Icon-based drag-and-drop coding sequences',
      'Cause-and-effect experiments with color & tilt sensors',
      'Storytelling & creative STEM problem solving',
    ],
    platform: 'LEGO Education SPIKE Essential',
    duration: '10 Weeks · 60 min / session',
    scheduleOptions: ['Saturdays 10:00 AM – 11:00 AM (Ashburn – HQ)', 'Sundays 10:30 AM – 11:30 AM (Chantilly)'],
    instructor: 'Ms. Priya Nair',
    tags: ['LEGO SPIKE Essential', 'Ashburn – HQ & Chantilly · Sat'],
    categories: ['Ashburn', 'Chantilly', 'Robotics'],
    imageWebp: '/assets/images/courses/discoverer-robotics.webp',
    imageFallback: '/assets/images/courses/discoverer-robotics.png',
    imageAlt: 'Young children exploring colorful beginner robotics kits',
  },
  {
    id: 'fll-explore',
    title: 'FLL Explore Workshops',
    ageRange: 'Ages 6–10',
    grades: 'Grades 1–4',
    level: 'Team Track',
    price: 285,
    priceLabel: 'Demo / qtr',
    description:
      'Collaborative LEGO model building, motorized mechanisms, and FIRST LEGO League Explore showcase.',
    curriculum: [
      'Real-world seasonal STEM theme exploration',
      'Motorized LEGO Explore Set engineering & coding',
      'Team Show Me Poster design & presentation practice',
      'FIRST LEGO League Explore Festival showcase',
    ],
    platform: 'FIRST LEGO League Explore + SPIKE Essential',
    duration: '10 Weeks · 75 min / session',
    scheduleOptions: ['Sundays 11:00 AM – 12:15 PM (Chantilly – Chinmaya Somnath)'],
    instructor: 'Mr. Ethan Brooks',
    tags: ['FIRST LEGO League', 'Chantilly – Chinmaya · Sun'],
    categories: ['Ashburn', 'Chantilly', 'FLL'],
    imageWebp: '/assets/images/courses/fll-explore.webp',
    imageFallback: '/assets/images/courses/fll-explore.png',
    imageAlt: 'Young students building creative LEGO models in a team',
  },
  {
    id: 'legoedu-challenger',
    title: 'LegoEdu-Challenger Robotics',
    ageRange: 'Ages 9–13',
    grades: 'Grades 4–7',
    level: 'Intermediate',
    price: 315,
    priceLabel: 'Demo / qtr',
    description:
      'Advanced LEGO Education SPIKE engineering, multi-sensor automation, and timed mission runs.',
    curriculum: [
      'Multi-sensor fusion (gyro + dual color + distance)',
      'Modular drivetrain & structural bracing techniques',
      'Timed autonomous obstacle courses & repeatability',
      'Preparation for FLL Challenge & VEX-Challenger',
    ],
    platform: 'LEGO Education SPIKE Prime',
    duration: '10 Weeks · 90 min / session',
    scheduleOptions: ['Fridays 5:30 PM – 7:00 PM (Ashburn – HQ)'],
    instructor: 'Ms. Priya Nair',
    tags: ['LEGO SPIKE Prime', 'Ashburn – HQ · Fri 5:30 PM'],
    categories: ['Ashburn', 'Robotics'],
    imageWebp: '/assets/images/courses/legoedu-challenger.webp',
    imageFallback: '/assets/images/courses/legoedu-challenger.png',
    imageAlt: 'Students assembling and programming LEGO Education SPIKE kits',
  },
]

export const SCHEDULE_SESSIONS: ScheduleSession[] = [
  {
    id: 's1',
    timeLabel: '4:30 PM',
    title: 'FLL Challenge Workshops',
    status: 'Upcoming',
    details: 'Aarav Sharma · Ashburn – HQ · Ms. Priya Nair',
    campus: 'Ashburn – HQ',
    studentName: 'Aarav Sharma',
  },
  {
    id: 's2',
    timeLabel: 'Nov 27',
    title: 'Thanksgiving Break',
    status: 'Holiday',
    details: 'All Ashburn & Chantilly Campuses Closed',
    campus: 'All',
  },
  {
    id: 's3',
    timeLabel: '5:00 PM',
    title: 'Discoverer Robotics',
    status: 'Makeup',
    details: 'Diya Sharma · Dec 2 · Online · Mr. Ethan Brooks',
    campus: 'Online',
    studentName: 'Diya Sharma',
  },
]

export const ATTENDANCE_HISTORY: AttendanceRecord[] = [
  {
    id: 'a1',
    dateLabel: 'Nov 19 · FLL Challenge',
    program: 'FLL Challenge Workshops',
    inTime: '4:29 PM',
    outTime: '6:02 PM',
    guardian: 'Anjali S.',
    status: 'Present',
  },
  {
    id: 'a2',
    dateLabel: 'Nov 12 · FLL Challenge',
    program: 'FLL Challenge Workshops',
    inTime: '4:41 PM',
    outTime: '6:00 PM',
    guardian: 'Rohan S.',
    status: 'Late',
  },
]

export const INITIAL_ROSTER: RosterStudent[] = [
  {
    id: 'r1',
    initials: 'AS',
    name: 'Aarav Sharma',
    status: 'Present',
    meta: 'In 4:28 PM · By Priya N.',
    pickupAuthorized: 'Pickup: Anjali S. / Rohan S.',
  },
  {
    id: 'r2',
    initials: 'MP',
    name: 'Maya Patel',
    status: 'Pending',
    meta: 'Awaiting arrival · Grade 6',
    pickupAuthorized: 'Pickup: Neha P.',
  },
  {
    id: 'r3',
    initials: 'LC',
    name: 'Liam Chen',
    status: 'Released',
    meta: 'In 4:31 PM · Out 5:45 PM (Early)',
    pickupAuthorized: 'Pickup: David C.',
  },
]

export const INITIAL_PAYMENTS: PaymentRecord[] = [
  {
    id: 'p1',
    title: 'Discoverer Robotics · Diya',
    methodAndDate: 'Zelle · Sep 12, 2026',
    amount: '$260.00',
    status: 'Paid',
  },
  {
    id: 'p2',
    title: 'Explorer Robotics · Aarav',
    methodAndDate: 'Venmo · Nov 20, 2026',
    amount: '$295.00',
    status: 'Under Review',
  },
]

export const ACADEMY_MESSAGES: AcademyMessage[] = [
  {
    id: 'm1',
    title: 'Check-in Alert · Aarav',
    time: '4:28 PM',
    body: 'Checked in to FLL Challenge at Ashburn – HQ by Ms. Priya Nair.',
    type: 'checkin',
  },
  {
    id: 'm2',
    title: 'Payment Reminder',
    time: 'Yesterday',
    body: 'Fall Q2 balance ($340.00 demo) due Dec 5. Upload receipt in Payments.',
    type: 'payment',
  },
]

export const ACADEMY_LOCATIONS: AcademyLocation[] = [
  {
    id: 'loc-hq',
    name: 'Ashburn – HQ',
    description: 'Main Robotics Labs · FLL & VEX Arenas',
  },
  {
    id: 'loc-bb',
    name: 'Ashburn – Best Brains',
    description: 'Weekend Robotics & Coding Tracks',
  },
  {
    id: 'loc-mses',
    name: 'Ashburn – Moorefield Station Elementary School',
    description: 'After-School Robotics & Coding',
  },
  {
    id: 'loc-cc',
    name: 'Chantilly – Chinmaya Somnath',
    description: 'Discoverer, Explorer & FLL Workshops',
  },
  {
    id: 'loc-online',
    name: 'Online',
    description: 'Live Instructor-Led Python, Scratch & AI',
  },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Enrollment',
    question: 'Which robotics track should my child start with?',
    answer:
      'Grades K–2 start in Discoverer Robotics (SPIKE Essential), Grades 3–5 in Explorer Robotics (SPIKE Prime), and Grades 4–9 with prior experience can join FLL Challenge or VEX-Challenger.',
  },
  {
    id: 'faq-2',
    category: 'Attendance & Pickup',
    question: 'How does 2-step QR pickup verification work?',
    answer:
      'Parents present their encrypted QR Pickup Pass from the portal. Instructors scan the pass and confirm Photo ID or Guardian PIN before releasing any student.',
  },
  {
    id: 'faq-3',
    category: 'Schedule',
    question: 'Can we schedule a makeup class if my child misses a session?',
    answer:
      'Yes. Use Report Absence in the Schedule tab to request an available makeup slot at Ashburn, Chantilly, or Online.',
  },
  {
    id: 'faq-4',
    category: 'Payments',
    question: 'What payment methods does Yantra Robotics Academy accept?',
    answer:
      'Tuition can be submitted via Zelle, Venmo, or Check at Ashburn – HQ. Upload your receipt in the Payments tab for coordinator verification.',
  },
]

export const OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'opp-fll',
    title: 'FIRST LEGO League (FLL) Competition Teams',
    badge: 'Grades 4–8',
    audience: 'Ashburn – HQ & Chantilly',
    summary:
      'Join seasonal regional tournament teams building autonomous LEGO SPIKE Prime robots and presenting Innovation Projects.',
    schedule: 'Fall & Winter Seasons · Scrimmages in Dec',
  },
  {
    id: 'opp-vex',
    title: 'VEX IQ & VEX V5 Challenger Track',
    badge: 'Grades 5–9',
    audience: 'Ashburn – Best Brains',
    summary:
      'Advanced mechanical engineering, drivetrain optimization, and autonomous skills runs for competitive robotics.',
    schedule: 'Year-round Quarterly Cohorts',
  },
  {
    id: 'opp-bootcamp',
    title: 'Pre-Season & Summer Robotics Bootcamps',
    badge: 'Ages 6–14',
    audience: 'Ashburn, Chantilly & Online',
    summary:
      'Intensive hands-on workshops covering robot game strategy, Python coding, and AI fundamentals.',
    schedule: 'Summer & Pre-Season (Aug)',
  },
]

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Regional Robot Performance Finalist',
    event: 'FIRST LEGO League Virginia Regional',
    year: '2025–2026',
    highlight: 'Top-scoring autonomous mission runs & modular attachment design.',
  },
  {
    id: 'ach-2',
    title: 'Innovation Project Excellence',
    event: 'Northern Virginia FLL Qualifier',
    year: '2025–2026',
    highlight: 'Recognized for real-world STEM research and team presentation.',
  },
  {
    id: 'ach-3',
    title: 'VEX Skills & Design Showcase',
    event: 'Ashburn Youth Robotics Invitational',
    year: '2026',
    highlight: 'High-efficiency drivetrain and sensor-guided autonomous programming.',
  },
]
