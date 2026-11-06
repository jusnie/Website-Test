/**
 * Single source of truth for every word and link on the page.
 * Copy marked "placeholder" is invented for the layout — swap in your own
 * before the site goes live. Nothing else in the codebase holds identity text.
 */

export const profile = {
  name: 'Ava Rivera', // placeholder copy
  initials: 'AR',
  role: 'Executive virtual assistant',
  location: 'Manila, Philippines', // placeholder copy
  timezone: 'GMT+8',
  overlap: '4-hour overlap with London, 3 with New York',
  email: 'ava@example.com', // placeholder copy
  calendar: 'https://cal.com/ava-rivera/intro', // placeholder copy
  linkedin: 'https://www.linkedin.com/in/ava-rivera', // placeholder copy
  replyTime: 'Within one business day',
  availability: 'One client slot open from February',
  since: 2019,
}

export const nav = [
  { label: 'What I handle', href: '#services' },
  { label: 'How we work', href: '#process' },
  { label: 'Proof', href: '#proof' },
  { label: 'Questions', href: '#faq' },
]

export const hero = {
  title: 'Your calendar, inbox and travel, handled.',
  lead: 'I\u2019m Ava, an executive assistant working remotely with founders and small leadership teams. I keep the week in order \u2014 triage, scheduling across time zones, itineraries that survive changes, and notes you can act on the same day.',
  primaryCta: { label: 'Book an intro call', href: 'calendar' },
  secondaryCta: { label: 'See what I handle', href: '#services' },
  facts: [
    { label: 'Based in', value: 'Manila, GMT+8' },
    { label: 'Overlap', value: 'EU and US East' },
    { label: 'Reply time', value: 'One business day' },
  ],
}

export const services = [
  {
    name: 'Inbox and calendar',
    line: 'Triage to zero twice a day, a calendar that reflects what you actually agreed to, and follow-ups that do not slip.',
    detail: 'Labels, drafts, and a short daily digest at the hour you choose.',
    from: 'from $1,200/mo',
  },
  {
    name: 'Travel and logistics',
    line: 'Itineraries that hold when a flight moves: bookings, transfers, visas, and a plan B already written down.',
    detail: 'Expense receipts filed the day you land.',
    from: 'from $600/mo',
  },
  {
    name: 'Meeting support',
    line: 'Agendas before, notes and decisions after, and every action item in your project tool before the next call starts.',
    detail: 'Recordings trimmed and summarised when you ask.',
    from: 'from $450/mo',
  },
  {
    name: 'Operations and admin',
    line: 'Invoices, expenses, supplier chasing, CRM tidy-up, and the recurring jobs that nobody quite owns.',
    detail: 'A weekly close-out so Friday ends with a clean desk.',
    from: 'from $800/mo',
  },
]

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

export const proof = {
  quote:
    'Ava took the calendar and the inbox in the first week. By the second, I had stopped opening email before nine in the morning.',
  attribution: 'Client name, founder', // placeholder copy
  company: 'Company name', // placeholder copy
  figures: [
    { value: '6 yrs', label: 'Supporting founders and small teams' },
    { value: '3', label: 'Time zones covered in a normal week' },
    { value: '11', label: 'Longest single client relationship' },
  ],
}

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

export const faq = [
  {
    q: 'What hours do you keep?',
    a: 'I work 9am to 6pm GMT+8, which covers the start of the London day and the end of the New York morning. For urgent items I check once on Saturday morning and tell you the rest of the weekend is quiet.',
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
  title: 'Two ways to start.',
  note: 'If you write, tell me what a typical week looks like and which parts you would hand over first. That is usually enough for a useful first call.',
  options: [
    {
      label: 'Book a 30-minute intro',
      value: 'Pick a slot on the calendar',
      href: 'calendar',
    },
    {
      label: 'Send a note instead',
      value: 'ava@example.com',
      href: 'mailto',
    },
  ],
  details: [
    { label: 'Where I am', value: 'Manila, Philippines \u2014 GMT+8' },
    { label: 'When I answer', value: 'Within one business day' },
    { label: 'What I need', value: 'Your NDA, or mine' },
  ],
}

export const footer = {
  closing: 'Take the admin off your week.',
  credit: 'Built with React, three.js and Tailwind. Set in Literata and Figtree.',
}
