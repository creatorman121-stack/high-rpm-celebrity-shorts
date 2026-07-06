const RPM_DATA = [
  {
    title: "REGULAR CELEBRITY",
    value: "$1-3",
    class: "low",
    label: "Baseline RPM for entertainment/celebrity Shorts",
    factors: [
      "Entertainment category = lowest advertiser bids",
      "No finance/business angle = no premium ad inventory",
      "Broad audience = low targeting value per impression",
      "Copyright claims reduce monetization eligibility"
    ]
  },
  {
    title: "CELEBRITY + FINANCE ANGLE",
    value: "$8-15",
    class: "mid",
    label: "Our baseline — celebrity hook with financial framing",
    factors: [
      "Finance/investment advertisers pay 5-10x more per impression",
      "YouTube classifies finance-adjacent content as premium inventory",
      "Older, higher-income viewers = more valuable ad targets",
      "Educational framing protects Fair Use AND attracts B2B advertisers",
      "Money visuals ($ signs, numbers, charts) trigger finance ad targeting"
    ]
  },
  {
    title: "CELEBRITY + LUXURY/WEALTH",
    value: "$12-22",
    class: "high",
    label: "The RPM ceiling — wealth content + celebrity hook",
    factors: [
      "Luxury/wealth = highest CPM category on YouTube after crypto",
      "High-net-worth audience segment = maximum advertiser competition",
      "Price tags, net worth figures, and dollar amounts are literal ad magnets",
      "Premium brands (watches, cars, real estate) compete for this inventory",
      "Content is 'evergreen' — wealth stories don't expire, earning RPM over months"
    ]
  }
];

window.RPM_DATA = RPM_DATA;
