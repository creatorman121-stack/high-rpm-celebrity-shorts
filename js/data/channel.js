const CHANNEL_DATA = {
  lanes: [
    {
      name: '"The Vault"',
      emoji: "🏦",
      desc: "Unseen/hidden celebrity stories with financial twists",
      packs: "Micro-Doc + Behind-the-Decision",
      rpmRange: "$10-18"
    },
    {
      name: '"The Lab"',
      emoji: "🔬",
      desc: "Breakdowns, analysis, and 'how they do it' content",
      packs: "Tactical Breakdown + Price Tag",
      rpmRange: "$12-22"
    },
    {
      name: '"The Timeline"',
      emoji: "📅",
      desc: "Before/after, evolution, and nostalgia content",
      packs: "Evolution Matrix + Extreme Routine",
      rpmRange: "$6-15"
    },
    {
      name: '"The Test"',
      emoji: "🧪",
      desc: "Quiz, challenge, and interactive content",
      packs: "Fake vs. Real + 1-Second Test",
      rpmRange: "$4-14"
    }
  ],
  namingFormula: "[Adjective] + [Celebrity Noun] + [Content Type]",
  namingExamples: [
    "Dark Celebrity Vault",
    "Hidden Star Lab",
    "Famous Fortune Timeline",
    "Celebrity Reality Test",
    "Wealthy Star Vault",
    "Rich Celebrity Lab"
  ],
  roadmap: [
    {
      phase: "CHANNEL SETUP",
      days: "Day 1",
      items: [
        "Create channel with your chosen lane name",
        "Bio as promise: 'Hidden celebrity stories you were never supposed to hear. New Shorts daily.'",
        "Profile picture: Bold simple icon matching your 3-color palette — NOT a photo of yourself",
        "Channel banner showing posting schedule: '☀️ 7AM | 🌤️ 12PM | 🌙 7:30PM ET'",
        "Set channel keywords to finance/business/luxury terms — this pre-trains the ad classifier"
      ]
    },
    {
      phase: "THE LAUNCH STACK",
      days: "Days 1-7",
      items: [
        "Prepare 21 Shorts BEFORE posting a single one. Never launch with fewer than 3 videos live",
        "First 3 posts: strongest content across 3 different celebrity targets (test which audience the algorithm pushes you toward)",
        "Day 1: Post all 3 within a 2-hour window (7AM, 9AM, 11AM) — 'burst' signals active channel to YouTube",
        "Days 2-7: Follow the 3x/day schedule consistently. The algorithm needs 7 days to classify your channel",
        "IMPORTANT: Every video must include at least one finance/wealth visual signal for RPM classification"
      ]
    },
    {
      phase: "ALGORITHM PING",
      days: "Days 7-30",
      items: [
        "After every post, comment on 5 other Shorts in adjacent niches (movie recaps, sports highlights, finance explainers)",
        "Reply to EVERY comment within the first hour — algorithm measures response time as 'active creator' signal",
        "If a Short gets 1,000+ views in the first hour, post another Short within 2 hours — feed the algorithm while it's hot",
        "Start A/B testing: post the same content with different hooks at different times to find your winning formula",
        "Track which celebrity niches get the highest RPM — double down on those"
      ]
    },
    {
      phase: "1K SUBSCRIBERS PUSH",
      days: "Days 30-60",
      items: [
        "Start creating 'Part 1 of 3' series — the #1 subscriber driver because viewers MUST subscribe for Part 2",
        "Add verbal CTA at second 55 of every 60-second Short: 'Follow for Part 2' — ONLY in final 5 seconds",
        "Create one 'magnum opus' Short per week — your absolute best work, pinned to channel page",
        "Start cross-posting to TikTok (same content, different posting times) to build parallel audience",
        "Once monetized, immediately enable ALL ad formats — skipping ads reduce RPM by 40% if unavailable"
      ]
    }
  ],
  branding: {
    colors: "Pick exactly 3 colors. Example: Black (#000000), Neon Yellow (#CCFF00), White (#FFFFFF). Never deviate.",
    font: "ONE font family everywhere. For Shorts: 'Bebas Neue' or 'Anton' — readable on tiny screens.",
    watermark: "Semi-transparent logo, bottom-right corner, 30% opacity, same size every video. Builds recognition even when stolen.",
    endCard: "Last 2 seconds: channel name + arrow pointing to subscribe button. Same animation every time."
  }
};

window.CHANNEL_DATA = CHANNEL_DATA;
