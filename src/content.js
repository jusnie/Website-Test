/**
 * Single source of truth for every word and link on the page.
 * Copy marked "placeholder" is invented for the layout — swap in your own
 * before the site goes live. Nothing else in the codebase holds identity text.
 */

export const profile = {
  name: 'Ava Rivera', // placeholder
  initials: 'AR',
  role: 'Executive virtual assistant',
  location: 'Manila, Philippines', // placeholder
  timezone: 'PHT / GMT+8',
  hours: '3pm to midnight PHT',
  email: 'ava@example.com', // placeholder
  calendar: 'https://cal.com/ava-rivera/intro', // placeholder
  linkedin: 'https://www.linkedin.com/in/ava-rivera', // placeholder
  replyTime: 'Within one business day',
  availability: 'Two client slots open from February',
  since: 2017,
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Case notes', href: '#cases' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Proof', href: '#proof' },
  { label: 'Rate', href: '#rate' },
  { label: 'Questions', href: '#faq' },
]

export const hero = {
  title: 'Executive support for founders who are the bottleneck.',
  lead: 'I\u2019m Ava Rivera. I run the inbox, the calendar, the travel and the meeting notes for founders and small leadership teams \u2014 so the decisions stay with you and the administration does not.',
  primaryCta: { label: 'Book an intro call', href: 'calendar' },
  secondaryCta: { label: 'Read the case notes', href: '#cases' },
  facts: [
    { label: 'Based in', value: 'Manila, GMT+8' },
    { label: 'Working hours', value: '3pm \u2013 midnight PHT' },
    { label: 'Reply time', value: 'One business day' },
  ],
  credentials: 'Eight years in executive support \u00b7 twelve client engagements \u00b7 NDA on request',
}

export const services = [
  {
    name: 'Inbox and calendar',
    line: 'The two surfaces every other task passes through, kept to a standard you can plan around.',
    items: [
      'Triage to zero twice a day, with a one-screen digest',
      'Drafted replies waiting for your review each morning',
      'Calendar rebuilt weekly against your three priorities',
      'Follow-ups tracked until they close',
    ],
    from: 'from $1,200/mo',
  },
  {
    name: 'Travel and logistics',
    line: 'Itineraries that survive a moved flight, and a plan B written before you need it.',
    items: [
      'Bookings, transfers and visa paperwork',
      'A written alternative for every connection',
      'Expenses filed within 48 hours of landing',
      'Venues and suppliers coordinated in your time zone',
    ],
    from: 'from $600/mo',
  },
  {
    name: 'Meeting support',
    line: 'Every call ends with a decision, an owner and a date \u2014 or it does not go in the calendar.',
    items: [
      'Agendas out 24 hours ahead with the decision required',
      'Notes with decisions, owners and dates',
      'Action items filed in your project tool the same hour',
      'Recording summaries on request',
    ],
    from: 'from $450/mo',
  },
  {
    name: 'Operations and admin',
    line: 'The recurring work nobody owns, taken off the bottom of everyone\u2019s list.',
    items: [
      'Invoices issued, filed and chased',
      'CRM and contact records kept clean',
      'Recurring reporting assembled monthly',
      'Vendor and contractor correspondence',
    ],
    from: 'from $800/mo',
  },
]

export const coverage = {
  eyebrow: 'Coverage',
  title: 'Your working day, not mine.',
  body: 'I keep 3pm to midnight in Manila, which is your 9 to 6 in London and the first three hours of New York\u2019s morning. The overlap is the job: you send at the end of your day and it is done before the next one starts.',
  axis: ['00:00', '06:00', '12:00', '18:00', '24:00'],
  zones: [
    { city: 'Manila', detail: 'PHT \u00b7 GMT+8', start: 7, end: 16, mine: true },
    { city: 'London', detail: 'BST \u00b7 GMT+1', start: 8, end: 17, mine: false },
    { city: 'New York', detail: 'EDT \u00b7 GMT-4', start: 13, end: 22, mine: false },
  ],
  overlaps: [
    { label: 'London', hours: '8 hours of overlap' },
    { label: 'New York', hours: '3 hours of overlap' },
  ],
  note: 'All bars shown in GMT. Daylight saving shifts the London and New York bars by an hour twice a year; I adjust with them.',
}

export const cases = {
  eyebrow: 'Case notes',
  title: 'Three arrangements, and what changed.',
  note: 'Client names are withheld. Each note is the situation as it stood on day one, what I changed, and what it looked like a quarter later. These are placeholders until real engagements replace them.',
  items: [
    {
      client: 'Founder, 14-person design studio',
      situation: 'Her inbox stood at 400 unread. Three people were waiting on replies she had not seen, and she was reading email at midnight.',
      action: 'Twice-daily triage, a labelled queue, drafted replies for everything routine, and a standing 20-minute review on Mondays.',
      result: 'Nine emails a day reached her desk instead of 400.',
      metric: '400 \u2192 9',
      metricLabel: 'Emails needing her attention each day',
    },
    {
      client: 'Partner, two-person investment fund',
      situation: 'Travel was booked the week of departure, always at the worst fare, and often with no backup when a connection moved.',
      action: 'A 30-day booking rhythm with two priced alternatives per trip, all confirmations in one document, expenses filed on landing.',
      result: 'Average fare fell by a third across the first two quarters.',
      metric: '\u221233%',
      metricLabel: 'Average airfare after the first two quarters',
    },
    {
      client: 'Owner, six-client brand agency',
      situation: 'Meeting notes lived in three tools. Decisions were re-litigated in the next call because nobody could find the last one.',
      action: 'One Notion database, one note template with owners and dates, and a Friday summary that closed anything still open.',
      result: 'Recurring calls dropped from nine a week to six.',
      metric: '\u22123',
      metricLabel: 'Recurring meetings per week',
    },
  ],
}

export const week = {
  eyebrow: 'A week',
  title: 'What a normal week looks like.',
  note: 'Not a list of services \u2014 the actual shape of the work, Monday to Friday, written the way it happens.',
  days: [
    {
      day: 'Monday',
      theme: 'Set the week',
      lines: [
        'Inbox to zero by 8am, with a one-screen digest waiting for you.',
        'Calendar rebuilt around the three things that actually matter this week.',
        'Anything that can be a message instead of a meeting, made a message.',
      ],
    },
    {
      day: 'Tuesday',
      theme: 'Meetings',
      lines: [
        'Agendas out the night before, with the decision each call needs to reach.',
        'Notes and action items filed within the hour, owners named.',
      ],
    },
    {
      day: 'Wednesday',
      theme: 'The long tail',
      lines: [
        'Travel, bookings, visas and the plan B that nobody wants to write.',
        'Expenses and invoices from the past two weeks, filed and chased.',
      ],
    },
    {
      day: 'Thursday',
      theme: 'Follow-through',
      lines: [
        'Every thread from Tuesday chased until it closes or escalates.',
        'Supplier and contractor replies, batched into one short update.',
      ],
    },
    {
      day: 'Friday',
      theme: 'Close the desk',
      lines: [
        'One document with what moved, what stalled, and what needs you next week.',
        'Calendar cleaned for Monday. Nothing left open on the desk.',
      ],
    },
  ],
}

export const process = [
  {
    step: '01',
    title: 'A 30-minute call',
    body: 'You describe a normal week, including the parts you resent. I say what I would take and what should stay with you.',
  },
  {
    step: '02',
    title: 'Two paid weeks',
    body: 'A real inbox and a real calendar, not a sample. If the arrangement is not working by day ten, we stop there.',
  },
  {
    step: '03',
    title: 'A settled rhythm',
    body: 'A Monday plan, a Friday close-out, and one shared document that holds every decision we made.',
  },
]

export const testimonials = [
  {
    quote:
      'Ava took the calendar and the inbox in the first week. By the second, I had stopped opening email before nine in the morning.',
    name: 'Client name', // placeholder
    role: 'Founder, design studio', // placeholder
  },
  {
    quote:
      'She writes better follow-ups than I do, and she has never once needed reminding. That is the whole review.',
    name: 'Client name', // placeholder
    role: 'Partner, investment fund', // placeholder
  },
]

export const proofFigures = [
  { value: '8 yrs', label: 'In executive support' },
  { value: '12', label: 'Client engagements since 2017' },
  { value: '3', label: 'Time zones covered in a normal week' },
]

export const tools = [
  { name: 'Google Workspace', use: 'Mail, calendar, docs' },
  { name: 'Notion', use: 'Shared decisions and SOPs' },
  { name: 'Slack', use: 'Day-to-day channel' },
  { name: 'Asana', use: 'Projects and handoffs' },
  { name: 'Calendly', use: 'Booking rules' },
  { name: 'HubSpot', use: 'Contact hygiene' },
  { name: 'QuickBooks', use: 'Invoices and expenses' },
  { name: 'Loom', use: 'Async walkthroughs' },
]

export const rate = {
  eyebrow: 'Rate',
  title: 'Forty hours a month, most months.',
  body: 'One rate, no tiers, no add-ons for the things listed above. The minimum exists because anything less does not cover an inbox and a calendar properly.',
  headline: { value: '$32', unit: 'per hour' },
  rows: [
    { label: 'Minimum', value: '20 hours a month' },
    { label: 'Typical', value: '40 hours a month' },
    { label: 'Billed', value: 'Monthly, in advance' },
    { label: 'Trial', value: 'Two paid weeks, stop after day ten' },
    { label: 'Notice', value: 'Two weeks, no penalty' },
    { label: 'Not included', value: 'Bookkeeping, design, paid ads' },
  ],
  included: [
    'Inbox and calendar, every working day',
    'Meeting notes and action items',
    'Travel, bookings and expense filing',
    'A Friday close-out document',
  ],
}

export const faq = [
  {
    q: 'What hours do you keep?',
    a: 'I work 3pm to midnight PHT, which covers the full London day and the first three hours of New York\u2019s. For urgent items I check once on Saturday morning and tell you the rest of the weekend is quiet.',
  },
  {
    q: 'How do you handle access and confidentiality?',
    a: 'Access goes through a password manager with per-app permissions, never shared over chat. I sign an NDA before the trial starts and work from an encrypted laptop with a screen no one else uses.',
  },
  {
    q: 'Can you work inside our tools rather than alongside them?',
    a: 'Yes. I work inside your Workspace, Notion, Asana or HubSpot with my own seat, so the history stays with your company if we ever part ways.',
  },
  {
    q: 'What does the minimum commitment look like?',
    a: 'Twenty hours a month, spread as you need them. Most clients settle at forty, which is the point where inbox and calendar both get real attention.',
  },
]

export const contact = {
  eyebrow: 'Start here',
  title: 'Two ways to start.',
  note: 'If you write, tell me what a typical week looks like and which parts you would hand over first. That is usually enough for a useful first call.',
  options: [
    { label: 'Book a 30-minute intro', value: 'Pick a slot on the calendar', href: 'calendar' },
    { label: 'Send a note instead', value: 'ava@example.com', href: 'mailto' },
  ],
  details: [
    { label: 'Where I am', value: 'Manila, Philippines \u2014 GMT+8' },
    { label: 'When I answer', value: 'Within one business day' },
    { label: 'What I need', value: 'Your NDA, or mine' },
  ],
}

export const footer = {
  closing: 'Take the administration off your week.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Inbox and calendar', href: '#services' },
        { label: 'Travel and logistics', href: '#services' },
        { label: 'Meeting support', href: '#services' },
        { label: 'Operations and admin', href: '#services' },
      ],
    },
    {
      title: 'Reading',
      links: [
        { label: 'Case notes', href: '#cases' },
        { label: 'Coverage', href: '#coverage' },
        { label: 'Rate', href: '#rate' },
        { label: 'Questions', href: '#faq' },
      ],
    },
  ],
  legal: 'Placeholder identity. Replace every name, figure and link in src/content.js before publishing.',
}
