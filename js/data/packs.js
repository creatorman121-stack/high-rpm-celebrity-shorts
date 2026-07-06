const PACKS = [
  {
    id: "micro-doc",
    icon: "🎬",
    tag: "MICRO-DOC",
    tagClass: "tag-micro",
    title: "The 3-Part Micro-Doc",
    rpmClass: "rpm-high",
    rpmLabel: "RPM: $8-15",
    rpmWhy: "Finance/luxury angle = premium advertisers",
    desc: "Break a celebrity's craziest story into a high-retention 3-part Short series. The multi-part format drives subscribers who MUST follow to see the next part.",
    featured: true,
    targets: [
      { name: "Keanu Reeves", hook: '"The Dark Reason Keanu Reeves Gives His Money Away" — Parts 1-3' },
      { name: "Cillian Murphy", hook: '"Why Cillian Murphy Refuses to Live in Hollywood" — Parts 1-3' },
      { name: "Cristiano Ronaldo", hook: '"The Extreme Routine That Keeps Ronaldo At The Top at Age 41" — Parts 1-3' }
    ],
    highRPM: [
      "Add a FINANCIAL TWIST: Frame Keanu's story around 'How giving away $75M actually increased his net worth' — this pulls finance advertisers",
      "Ronaldo's routine = LUXURY/HEALTH niche — supplement brands, fitness tech, premium lifestyle advertisers pay $12-18 RPM",
      "Cillian's refusal = BUSINESS DECISION angle — 'The $50M Hollywood Deal Cillian Murphy Said No To'"
    ],
    zone: "three-zone",
    edits: [
      "Scale: 120% to crop out network logos",
      "Speed: 1.05x to alter digital fingerprint",
      "Mirror: Horizontal flip bypasses Content ID",
      "Captions: Karaoke-style word-by-word (40% retention boost)",
      "Edge Sharpen at 5% opacity alters pixel signature"
    ]
  },
  {
    id: "tactical",
    icon: "🔍",
    tag: "TACTICAL BREAKDOWN",
    tagClass: "tag-tactical",
    title: "The Tactical Breakdown",
    rpmClass: "rpm-high",
    rpmLabel: "RPM: $10-20",
    rpmWhy: "Educational framing = tech/business advertisers",
    desc: "Highlight split-second genius or hidden details that regular fans miss. This format heavily triggers Fair Use because it is strictly educational — and educational content commands the highest RPM.",
    featured: false,
    targets: [
      { name: "Lionel Messi / Neymar", hook: '"The Exact Second Messi Deletes a Defender\'s Brain"' },
      { name: "Taylor Swift", hook: '"How Taylor Swift Uses Easter Eggs to Brainwash Her Fans"' },
      { name: "Pedro Pascal", hook: '"How Pedro Pascal Uses Non-Verbal Acting to Steal Every Scene"' }
    ],
    highRPM: [
      "Messi breakdown = SPORTS TECH angle — sports analytics platforms, betting apps, and fitness tech pay premium CPMs",
      "Taylor Swift = MARKETING/PSYCHOLOGY — B2B SaaS companies, marketing tools, and ad platforms target this content",
      "Pedro Pascal = ACTING TECHNIQUE as SKILL CONTENT — online course platforms and education advertisers pay top dollar"
    ],
    zone: "spotlight",
    edits: [
      "Speed Ramp: Slow to 0.5x at the action moment (Messi's dribble, Pascal's expression)",
      "Visual Spotlight: Darken screen 40%, glowing yellow circle around the highlight area",
      "Sound Effect: Drop 'Whoosh' or 'Impact' SFX, mute original broadcast audio",
      "Add analytics overlay graphics (arrows, angle measurements) — signals 'educational' to advertisers AND Fair Use protection"
    ]
  },
  {
    id: "evolution",
    icon: "🔄",
    tag: "EVOLUTION MATRIX",
    tagClass: "tag-evolution",
    title: "The Evolution Matrix",
    rpmClass: "rpm-mid",
    rpmLabel: "RPM: $6-12",
    rpmWhy: "Nostalgia + transformation = fashion/lifestyle advertisers",
    desc: "People love nostalgia and watching change over time. Rapid side-by-side editing with a progress bar that forces viewers to watch until the end.",
    featured: false,
    targets: [
      { name: "Zendaya / Jenna Ortega", hook: '"The Evolution of [Name]\'s Red Carpet Style (2015 vs. 2026)"' },
      { name: "Robert Downey Jr. / Tom Hardy", hook: '"How Their Voices Drastically Changed For Movie Roles"' }
    ],
    highRPM: [
      "Red carpet evolution = FASHION/LUXURY — designer brands, luxury fashion retailers pay premium RPMs",
      "Voice transformation = HEALTH/TECHNOLOGY — voice health products, AI voice tech companies target this niche",
      "Add brand callouts: Label the designer/cost of each outfit — transforms entertainment into luxury shopping content"
    ],
    zone: "split-screen",
    edits: [
      "Split-Screen: Old clip on top half, current clip on bottom half",
      "Progress Bar: Bright neon blue bar moving across the screen — viewers watch until it hits the end",
      "Year labels: Bold year stamps on each half (2015 vs 2026)",
      "Price tags: Overlay estimated cost of outfits/accessories — this is what triggers luxury advertisers"
    ]
  },
  {
    id: "price-tag",
    icon: "💰",
    tag: "PRICE TAG REVEAL",
    tagClass: "tag-price",
    title: "The Price Tag Reveal",
    rpmClass: "rpm-high",
    rpmLabel: "RPM: $12-22",
    rpmWhy: "MONEY/WEALTH content = highest RPM niche on YouTube",
    desc: "Tease a jaw-dropping number and slowly reveal it. This is the single highest-RPM format because money/wealth content attracts finance, investment, and luxury advertisers — the most expensive ad categories.",
    featured: true,
    targets: [
      { name: "MrBeast", hook: '"How Much MrBeast Actually Loses on Every Challenge"' },
      { name: "Rihanna", hook: '"The One Product That Made Rihanna a Billionaire Overnight"' },
      { name: "LeBron James", hook: '"The $2,000,000 Habit LeBron Refuses to Quit"' }
    ],
    highRPM: [
      "This is THE highest-RPM pack. Finance/investment advertisers pay $15-25 CPM for wealth content",
      "Rihanna = ENTREPRENEURSHIP angle — startup tools, business platforms, fintech apps all bid on this",
      "LeBron's habit = HEALTH WEALTH — insurance companies, investment platforms, premium health brands",
      "Every video should include a 'financial takeaway' at the end — this signals to YouTube's ad classifier that your content is finance-adjacent"
    ],
    zone: "three-zone",
    edits: [
      "Open with a blurred-out number/check that slowly dissolves over 10 seconds",
      "Cha-ching sound at 3-second mark as micro-hook for scrollers",
      "Green-screen celebrity reaction face in top-right corner",
      "Running total counter at bottom — numbers ticking up create hypnotic visual movement",
      "End card: 'What would YOU do with $X?' — drives comments which boost algorithm distribution"
    ]
  },
  {
    id: "fake-real",
    icon: "🎭",
    tag: "FAKE VS. REAL",
    tagClass: "tag-fake",
    title: "The Fake vs. Real",
    rpmClass: "rpm-mid",
    rpmLabel: "RPM: $6-14",
    rpmWhy: "Tech/verification angle = cybersecurity/AI advertisers",
    desc: "Exploit the internet's obsession with authenticity. This format gets massive engagement because viewers want to prove they can tell the difference — and comments drive algorithm distribution.",
    featured: false,
    targets: [
      { name: "Ryan Gosling", hook: '"Real Ryan Gosling Interview vs. AI Deepfake — Can You Tell?"' },
      { name: "Margot Robbie", hook: '"The Scene That Was Actually a Stunt Double (Nobody Noticed)"' },
      { name: "Drake", hook: '"Real Drake Quote vs. Internet Fake — 90% Get It Wrong"' }
    ],
    highRPM: [
      "Deepfake content = AI/TECH angle — AI detection tools, cybersecurity platforms, SaaS companies pay premium",
      "Stunt double = INSURANCE/SAFETY — insurance companies and safety tech advertisers target this",
      "Frame each video as a 'digital literacy' lesson — YouTube's algorithm classifies educational tech content as high-value"
    ],
    zone: "three-zone",
    edits: [
      "2-Choice overlay: 'REAL' and 'FAKE' buttons with 3-second countdown",
      "Heartbeat SFX that speeds up as countdown narrows",
      "Flash percentage stat: '78% of viewers got this wrong' — drives comments",
      "Split-screen comparison with magnifying glass effect on key details",
      "Freeze-frame on the reveal moment with a stamp graphic (VERIFIED or DEBUNKED)"
    ]
  },
  {
    id: "decision",
    icon: "🧠",
    tag: "BEHIND-THE-DECISION",
    tagClass: "tag-decision",
    title: "The Behind-the-Decision",
    rpmClass: "rpm-high",
    rpmLabel: "RPM: $10-18",
    rpmWhy: "Business decision angle = B2B/finance advertisers",
    desc: "Dissect a single career-defining choice. This turns gossip into strategy content — and strategy/business content attracts the highest-paying advertisers on the internet.",
    featured: false,
    targets: [
      { name: "Daniel Radcliffe", hook: '"Why Daniel Radcliffe Almost Quit Harry Potter After Movie 4"' },
      { name: "Adele", hook: '"The 3-Second Voice Crack That Changed Adele\'s Entire Career Path"' },
      { name: "Dwayne Johnson", hook: '"The WWE Meeting Where The Rock Was Told He\'d Never Make It"' }
    ],
    highRPM: [
      "Career decisions = BUSINESS/STRATEGY — consulting firms, B2B platforms, career services pay premium RPMs",
      "Add a 'What This Decision Was Worth' financial overlay — instantly reclassifies content as finance-adjacent",
      "Frame rejections as 'investment opportunities' — 'The Rock was undervalued. Here's what investing in undervalued assets looks like.'"
    ],
    zone: "three-zone",
    edits: [
      "VHS-style rewind effect with tape-deck sound to signal time reversal",
      "Decision Tree graphic: branching diagram mapping 'What If He Said No' vs. 'What He Did'",
      "Ticking-clock SFX during the decision moment — audio tension increases completion rate by 30%",
      "Net worth counter that changes based on the decision path — gamifies the financial angle",
      "Red/green color coding: red = what could have gone wrong, green = what actually happened"
    ]
  },
  {
    id: "one-second",
    icon: "⚡",
    tag: "1-SECOND TEST",
    tagClass: "tag-quiz",
    title: "The 1-Second Test",
    rpmClass: "rpm-mid",
    rpmLabel: "RPM: $4-10",
    rpmWhy: "Interactive quiz format = education/gaming advertisers",
    desc: "A quiz format that weaponizes the viewer's ego. Nobody wants to admit they can't recognize a celebrity from 1 second of footage. Massive rewatch and share potential.",
    featured: false,
    targets: [
      { name: "Any A-Lister", hook: '"Guess the Movie from 1 Second of Footage — Hard Mode"' },
      { name: "K-Pop Idols", hook: '"Can You Name This BTS Member from Just Their Hands?"' },
      { name: "Athletes", hook: '"Guess the Athlete by Their Walk — 1 Second Each"' }
    ],
    highRPM: [
      "Quiz/interactive = GAMING + EDUCATION hybrid — both categories have strong advertiser demand",
      "Add a 'score rating' at the end tied to a wealth/success metric — 'Your score puts you in the top 10% — like the top 10% of earners' — finance angle",
      "Streaming service trivia = ENTERTAINMENT TECH — streaming platforms and media tech bid on this"
    ],
    zone: "three-zone",
    edits: [
      "1-second flash with heavy blur + distortion, then 2-second 'thinking time' with buzzer-ready SFX",
      "Score tracker: '1/10,' '2/10' — gamification keeps viewers through entire Short",
      "FAIL stamp graphic with red X sound for hard reveals — viewers rewatch to prove themselves",
      "Quick-cut montage of correct answers at the end as a 'reward loop' — satisfying completion feeling drives shares"
    ]
  },
  {
    id: "routine",
    icon: "🌅",
    tag: "EXTREME ROUTINE",
    tagClass: "tag-routine",
    title: "The Day in the Life — Extreme Edition",
    rpmClass: "rpm-high",
    rpmLabel: "RPM: $8-18",
    rpmWhy: "Health/productivity/routine = wellness + business advertisers",
    desc: "The hyper-compressed, almost-unbelievable version of a celebrity's routine that makes normal people feel lazy. The productivity/health angle is a goldmine for premium advertisers.",
    featured: false,
    targets: [
      { name: "Mark Wahlberg", hook: '"Mark Wahlberg\'s 2:30 AM Morning Routine Is Insane"' },
      { name: "David Goggins", hook: '"Goggins\' Daily Routine Would Break 99% of Humans"' },
      { name: "Beyoncé", hook: '"What Beyoncé\'s Throat Endures During a Tour Week"' }
    ],
    highRPM: [
      "Morning routines = PRODUCTIVITY/SUPPLEMENTS — nootropics, supplements, productivity apps pay $10-18 RPM",
      "Goggins = FITNESS/MENTAL HEALTH — therapy platforms, fitness tech, premium wellness brands",
      "Add 'routine cost breakdown' — what each element of the routine costs monthly — transforms into personal finance content"
    ],
    zone: "three-zone",
    edits: [
      "Fast-cut montage: each activity gets exactly 1.5 seconds of screen time",
      "24-hour clock graphic spinning in real-time sync with routine",
      "YOU vs. THEM comparison bar: celebrity's 4:00 AM workout vs 'You at 4:00 AM: 😴' — share bait",
      "Monthly cost ticker at bottom: 'This routine costs $X/month' — finance angle for RPM",
      "Progress bar showing time of day — creates visual momentum and urgency"
    ]
  }
];

window.PACKS = PACKS;
