const NEW_PACKS = [
  {
    id: "wealth-autopsy",
    icon: "🪦",
    tag: "WEALTH AUTOPSY",
    tagClass: "tag-luxury",
    title: "The Wealth Autopsy",
    rpmClass: "rpm-high",
    rpmLabel: "RPM: $15-25",
    rpmWhy: "Estate/inheritance/wealth transfer = highest RPM on YouTube",
    desc: "Dissect how a celebrity built, lost, or transferred their fortune. This is the highest-RPM format possible — wealth transfer content attracts estate planning, investment, and insurance advertisers who pay the absolute highest CPMs on the platform.",
    featured: true,
    targets: [
      { name: "Kobe Bryant", hook: '"The $600M Estate Plan Kobe Set Up Before He Died (Nobody Talks About This)"' },
      { name: "Elvis Presley", hook: '"How Elvis\'s Estate Makes MORE Money Now Than When He Was Alive"' },
      { name: "Michael Jackson", hook: '"The $2B After-Death Business Strategy That Made MJ\'s Kids Rich"' }
    ],
    highRPM: [
      "Estate planning = INSURANCE + INVESTMENT advertisers — these categories pay $20-30+ CPM, the highest on YouTube",
      "After-death wealth = LEGAL + FINANCIAL PLANNING — law firms, wealth management, and trust companies bid aggressively",
      "Frame every story as 'What regular people can learn from this' — makes it educational personal finance content",
      "Add a 'Your Action Step' at the end: 'Get term life insurance' or 'Set up a revocable trust' — drives affiliate revenue from insurance/finance platforms"
    ],
    zone: "three-zone",
    edits: [
      "Open with the TOTAL estate value as a slowly revealing number ($___B)",
      "Timeline graphic showing wealth accumulation → transfer → growth",
      "Green/red bar showing estate value going UP or DOWN after death",
      "End card: 'What happens to YOUR money if you die tomorrow?' — comment bait + financial CTA",
      "Add subtle legal document visuals (wills, trusts, contracts) as background texture — signals 'legal/finance' to ad AI"
    ]
  },
  {
    id: "contract-leak",
    icon: "📋",
    tag: "CONTRACT LEAK",
    tagClass: "tag-finance",
    title: "The Contract Leak",
    rpmClass: "rpm-high",
    rpmLabel: "RPM: $12-20",
    rpmWhy: "Contract/salary content = employment/business advertisers",
    desc: "Break down the actual contract terms, salary structures, and deal points that celebrities sign. This format is irresistible because people want to know EXACTLY how the rich get paid — and contract/salary content attracts B2B and employment advertisers.",
    featured: false,
    targets: [
      { name: "Tom Cruise", hook: '"The Exact Contract Clause That Lets Tom Cruise Keep 10% of Box Office"' },
      { name: "Patrick Mahomes", hook: '"Why Patrick Mahomes\' $503M Contract Is Actually a Trap (The Fine Print)"' },
      { name: "Scarlett Johansson", hook: '"The Disney Contract That Cost Scarlett Johansson $50M — And How She Fought Back"' }
    ],
    highRPM: [
      "Contract breakdown = BUSINESS/LEGAL — B2B SaaS, legal tech, and contract management platforms pay premium CPMs",
      "Salary structures = CAREER/EMPLOYMENT — job platforms, career services, and HR tech companies target this content",
      "Add a 'How This Compares to a Regular Job' comparison — connects celebrity wealth to personal finance = finance ad classification",
      "Every contract clause is a mini-lesson: 'What is a backend deal?' 'What is a no-cut clause?' — educational framing = Fair Use + high RPM"
    ],
    zone: "three-zone",
    edits: [
      "Show a CONTRACT DOCUMENT visual with key terms highlighted/blurred",
      "Redline effect: strike through the 'bad' clauses, highlight the 'genius' clauses in green",
      "Running total counter: 'Year 1: $X → Year 5: $Y → Total: $Z'",
      "Side-by-side comparison: 'What the contract says' vs 'What it actually means' — educational overlay",
      "End with: 'Would you sign this contract? Comment YES or NO' — binary comment bait drives algorithm distribution"
    ]
  }
];

window.NEW_PACKS = NEW_PACKS;
