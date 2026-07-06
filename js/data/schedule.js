const SCHEDULE_DATA = {
  youtube: [
    {
      time: "7:00 AM ET",
      label: "MORNING — HOOK POST",
      icon: "☀️",
      content: "Most aggressive, curiosity-driven content. Designed for maximum impressions. This is your 'clickbait but deliver' post. Use Price Tag Reveals or Micro-Doc Part 1s here.",
      days: "Mon–Fri",
      why: "Morning commute + wake-up scroll. Highest for ages 18–34."
    },
    {
      time: "12:00 PM ET",
      label: "LUNCH — VALUE POST",
      icon: "🌤️",
      content: "Tactical Breakdowns or educational content. People at lunch want to learn something cool to tell coworkers. This is your highest-RPM slot because finance/business viewers browse at lunch.",
      days: "Mon–Fri",
      why: "Lunch break scroll. Second-highest engagement window. Premium ad inventory peaks here."
    },
    {
      time: "7:30 PM ET",
      label: "EVENING — EMOTION POST",
      icon: "🌙",
      content: "Micro-Doc or Behind-the-Decision. People at home are relaxed and open to longer emotional engagement. This is your highest-completion-rate slot — viewers watch to the end.",
      days: "Every day",
      why: "Post-dinner relaxation. Peak overall watch time. Highest completion rates."
    }
  ],
  tiktok: [
    {
      time: "7:30 AM ET",
      label: "MORNING",
      icon: "☀️",
      content: "TikTok's algorithm favors early-morning posts — it needs fresh content for the morning FYP wave. Post your most shareable content here.",
      days: "Mon–Fri",
      why: "Morning FYP push. TikTok needs new content for the first scroll wave."
    },
    {
      time: "1:00 PM ET",
      label: "AFTERNOON",
      icon: "🌤️",
      content: "Slightly later than YouTube — TikTok's lunch audience peaks later. Use your quiz/interactive content here — TikTok's younger audience engages more with interactive formats.",
      days: "Mon–Fri",
      why: "Lunch audience peaks later on TikTok than YouTube."
    },
    {
      time: "8:00 PM ET",
      label: "EVENING (OPTIONAL)",
      icon: "🌙",
      content: "Only post if you have a particularly strong piece. Overposting on TikTok can cannibalize your own views. Maximum 3 posts/day on TikTok.",
      days: "Best days only",
      why: "Evening binge but don't overpost — 2-3x/day max on TikTok."
    }
  ],
  bonusWindows: [
    {
      time: "10:00 PM – 12:00 AM ET",
      days: "Fri–Sun",
      why: "Late-night binge. Highest completion rates — viewers too tired to swipe. Post your longest, most story-driven content here."
    },
    {
      time: "6:30 AM ET",
      days: "Sat–Sun",
      why: "Weekend early birds. Different demographic — older, higher-income viewers. Perfect for your high-RPM finance/luxury content."
    }
  ],
  rules: [
    "Never miss 2 consecutive days — the algorithm punishes gaps harder than it rewards volume",
    "Batch-produce 7 days of content in one session (21 Shorts = 7 days × 3 posts). Schedule, don't post live",
    "Both YouTube and TikTok schedulers signal 'professional creator' to algorithms — boosts initial distribution",
    "If a Short hits 10K+ views in the first hour, post a follow-up within 2 hours while the algorithm is 'hot' on your channel",
    "Rotate celebrities every 3-4 days — posting the same celebrity daily causes audience fatigue and algorithm throttling",
    "Track RPM by time slot — your lunch posts will likely earn 2-3x your morning posts due to finance advertiser bidding patterns"
  ]
};

window.SCHEDULE_DATA = SCHEDULE_DATA;
