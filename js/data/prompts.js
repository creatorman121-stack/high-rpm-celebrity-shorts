const PROMPTS_DATA = [
  {
    title: "Viral Hook Generator",
    label: "CHATGPT HOOK PROMPT",
    prompt: `Act as a viral YouTube Shorts scriptwriter. Write 5 different 15-word opening hooks for a short video about [Insert Celebrity Name]. The hooks must use psychological triggers like curiosity, fear of missing out, or a controversial opinion to stop the user from swiping. Do not include hashtags or greetings. Each hook must contain at least one financial keyword (money, million, invest, net worth, fortune, salary, deal) to trigger high-RPM ad classification.`,
    category: "hooks"
  },
  {
    title: "3-Part Micro-Doc Script",
    label: "MICRO-DOC SERIES SCRIPT",
    prompt: `Write a 3-part YouTube Shorts script about [Celebrity Name]'s [Story Topic]. Each part is 55 seconds of narration with 5 seconds for CTA. Structure: Part 1 = The Hook (shocking opening, incomplete revelation, end on cliffhanger). Part 2 = The Deep Dive (the financial/business angle, dollar figures, consequences). Part 3 = The Resolution (the outcome, the financial lesson, the subscriber CTA). Include financial keywords throughout for RPM optimization. Format each part with [VISUAL] and [AUDIO] cues.`,
    category: "scripts"
  },
  {
    title: "Price Tag Reveal Script",
    label: "PRICE TAG REVEAL SCRIPT",
    prompt: `Write a 55-second YouTube Shorts script for a 'Price Tag Reveal' video about [Celebrity Name]'s [Item/Action/Decision]. Structure: Second 0-5: Blurred dollar amount on screen with 'How much did [Name] spend on [X]?' Second 5-20: Build context — why it matters, what normal people pay. Second 20-40: Slowly reveal the number with escalating commentary. Second 40-50: Financial takeaway lesson (what this means for regular people). Second 50-55: CTA + 'What would YOU do with $X?' Include [VISUAL], [SFX], and [CAPTION] cues. Ensure 3+ financial keywords for RPM.`,
    category: "scripts"
  },
  {
    title: "Tactical Breakdown Script",
    label: "TACTICAL ANALYSIS SCRIPT",
    prompt: `Write a 55-second YouTube Shorts script breaking down [Celebrity Name]'s [Specific Skill/Action/Moment]. Structure: Second 0-5: '99% of people missed this' hook. Second 5-15: Set up the context — what was happening. Second 15-35: Slow-motion breakdown with analysis (use [SLOW MO] markers). Second 35-45: 'What this actually means' — connect to a business/strategy lesson. Second 45-55: Financial parallel + CTA. Use [SPOTLIGHT], [SPEED RAMP], [SFX] markers. Must include 2+ business/finance keywords for RPM.`,
    category: "scripts"
  },
  {
    title: "YouTube Title Optimizer",
    label: "TITLE OPTIMIZATION PROMPT",
    prompt: `Generate 10 YouTube Shorts titles for a video about [Celebrity Name + Topic]. Requirements: Maximum 60 characters, must include a number ($X, X million, X%), must create a curiosity gap (don't reveal the answer), must include one high-RPM keyword (money, secret, deal, fortune, investment, millions, billionaire, rich), must feel like the viewer is about to discover something hidden. Rank them by predicted click-through rate.`,
    category: "titles"
  },
  {
    title: "Caption & Hashtag Generator",
    label: "CAPTION + HASHTAG PROMPT",
    prompt: `Write 3 variations of a YouTube Shorts caption for a video about [Celebrity Name + Topic]. Each caption must: be under 200 characters, include 1-2 high-RPM hashtags (#finance #money #investing #business #wealth), include 1 curiosity hashtag (#secret #hidden #untold), end with a question that drives comments. Also generate 5 hashtag sets (5 hashtags each) targeting different audience segments: finance viewers, celebrity fans, and self-improvement audience.`,
    category: "captions"
  },
  {
    title: "Decision Tree Script",
    label: "DECISION TREE SCRIPT",
    prompt: `Write a 55-second YouTube Shorts script for a 'Behind-the-Decision' video about [Celebrity Name]'s [Career Decision]. Create a visual 'Decision Tree' structure: Branch A = 'What If They Said No' (show the financial/career loss — dollar amount), Branch B = 'What They Actually Did' (show the financial gain — dollar amount). Include [DECISION TREE GRAPHIC] markers, [NET WORTH COUNTER] markers, and [TICKING CLOCK SFX] markers. Must include 3+ financial keywords. End with: 'Every decision has a price tag. What's yours?'`,
    category: "scripts"
  },
  {
    title: "Routine Cost Breakdown",
    label: "ROUTINE COST SCRIPT",
    prompt: `Write a 55-second YouTube Shorts script for an 'Extreme Routine' video about [Celebrity Name]'s [Daily Routine]. Structure: Fast-cut montage of routine elements, each 1.5 seconds, with a running monthly cost counter at the bottom. After the montage: 'This routine costs $X/month. Here's what a normal person's routine costs: $Y/month. The difference? $Z — which, invested at 8% over 10 years, becomes $[calculated].' End with a financial lesson. Include [COST TICKER], [CLOCK GRAPHIC], [YOU vs THEM] markers. Maximum finance keyword density for RPM.`,
    category: "scripts"
  },
  {
    title: "Comment Bait Generator",
    label: "COMMENT BAIT PROMPT",
    prompt: `Write 5 'comment bait' questions for a YouTube Short about [Celebrity Name + Topic]. Each question must: be controversial enough to trigger disagreement, be answerable in a few words (easy to comment), include a financial element ('Would you spend $X on Y?'), and make the viewer want to check what other people answered. These questions will be placed in the video description and as the final caption frame. Order by predicted comment rate.`,
    category: "engagement"
  },
  {
    title: "Fair Use Script Wrapper",
    label: "FAIR USE PROTECTION PROMPT",
    prompt: `Take this YouTube Shorts script and add Fair Use protection layers: (1) Add educational commentary phrases ('What's notable here is...', 'The technique being used is...', 'This demonstrates a principle of...'), (2) Add [TRANSFORM] markers where visual changes should occur (mirror, zoom, color shift), (3) Add [ANALYSIS OVERLAY] markers for educational graphics (arrows, diagrams, comparisons), (4) Ensure no single source clip exceeds 10 seconds, (5) Add a 3-second 'educational summary' at the end. Original script: [PASTE SCRIPT]`,
    category: "protection"
  }
];

window.PROMPTS_DATA = PROMPTS_DATA;
