const TRENDS_DATA = {
  strategy: "Trend-jacking is the fastest way to get algorithm distribution. When a celebrity trend spikes, YouTube and TikTok boost ALL related content for 24-72 hours. Your job is to have pre-built templates ready to deploy within 2 hours of a trend breaking.",
  rules: [
    "The 2-Hour Rule: If you're not posted within 2 hours of a trend breaking, you've missed the window. The algorithm rewards speed over quality.",
    "Pre-Built Templates: Have 3-5 Short templates ready to fill in with trending celebrity names/hooks. The editing is done — you just swap the content.",
    "The RPM Check: Before trend-jacking, ask: 'Can I add a money angle?' A pure entertainment trend earns $1-3 RPM. A trend with a financial twist earns $8-15.",
    "The Stack: Trending celebrity + financial angle + educational framing = viral reach + high RPM + Fair Use protection. This is the triple crown.",
    "Never chase trends outside your lane. If you're 'The Vault,' don't jump on a quiz trend. Stay consistent."
  ],
  triggers: [
    {
      event: "Celebrity lawsuit/legal news",
      angle: "The legal fees + potential financial impact. Frame as 'What this lawsuit could cost [Name].' Lawyers and legal services advertisers pay premium RPMs.",
      pack: "Behind-the-Decision",
      speed: "4 hours max — legal news has a longer trending window"
    },
    {
      event: "Celebrity contract extension / new deal",
      angle: "The contract breakdown. Frame as 'Let me read between the lines of [Name]'s new $X deal.' Finance and B2B advertisers love this.",
      pack: "Contract Leak",
      speed: "2 hours — contract news trends fast and dies fast"
    },
    {
      event: "Celebrity net worth article goes viral",
      angle: "Is it accurate? Break down the real vs. reported numbers. Frame as 'The internet says [Name] is worth $X. Here's why that's wrong.'",
      pack: "Price Tag Reveal",
      speed: "3 hours — wealth content trends for 48 hours"
    },
    {
      event: "Celebrity retirement / career announcement",
      angle: "The financial impact of the decision. Frame as 'What [Name] walking away actually costs (and what they'll gain).'",
      pack: "Wealth Autopsy",
      speed: "2 hours — retirement news is the biggest traffic spike"
    },
    {
      event: "Award show / red carpet moment",
      angle: "The cost of every outfit + the business behind the styling. Frame as 'The $X outfit that just broke the internet — and who actually paid for it.'",
      pack: "Evolution Matrix",
      speed: "1 hour — award show moments die in 6 hours"
    },
    {
      event: "Celebrity health/fitness routine goes viral",
      angle: "The monthly cost breakdown. Frame as '[Name]'s routine costs $X/month. Here's the free version that gets 80% of the results.'",
      pack: "Extreme Routine",
      speed: "3 hours — fitness content has a 72-hour trending window"
    }
  ],
  abTesting: {
    desc: "The fastest way to find your winning formula is systematic A/B testing. Here's the framework:",
    variables: [
      { variable: "Hook Style", options: "Controversial statement vs. incomplete sentence vs. blurred number", metric: "First 3-second retention" },
      { variable: "Celebrity Niche", options: "Athletes vs. Actors vs. Musicians vs. Entrepreneurs", metric: "RPM per video" },
      { variable: "Finance Angle", options: "Net worth reveal vs. contract breakdown vs. routine cost vs. investment lesson", metric: "RPM per video" },
      { variable: "Posting Time", options: "7AM vs. 12PM vs. 7:30PM ET", metric: "Views per hour + RPM" },
      { variable: "Caption Style", options: "Karaoke word-by-word vs. punchy phrase-by-phrase vs. no captions", metric: "Average view duration" },
      { variable: "Video Length", options: "30s vs. 45s vs. 60s", metric: "Completion rate × RPM" }
    ],
    method: [
      "Week 1-2: Test hook styles — post the same celebrity story with 3 different hooks at 3 different times",
      "Week 3-4: Test celebrity niches — post 3 different celebrities using the same pack format",
      "Week 5-6: Test finance angles — post the same celebrity with different money angles (net worth vs. contract vs. routine)",
      "After 6 weeks: You'll have data showing your winning hook style × celebrity niche × finance angle × posting time combo",
      "Lock in the winning formula and batch-produce 30 variations of it"
    ]
  }
};

window.TRENDS_DATA = TRENDS_DATA;
