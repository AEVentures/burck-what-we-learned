// FL-22 (2026 cycle) Republican Primary — Opposition & Capital Efficiency Dataset
// Sources cited inline; full citations also on sources.html
// Primary held Tuesday, August 18, 2026. General election Nov 3, 2026 (Askar R vs. Dandiya D).

const RACE = {
  district: "Florida's 22nd Congressional District",
  cycle: 2026,
  primaryDate: "August 18, 2026",
  generalDate: "November 3, 2026",
  seatType: "Open seat (Rep. Lois Frankel redistricted into new FL-23; no incumbent)",
  pvi: "R+4 (Cook Political Report), rated Lean Republican",
  totalFieldFundraising: 22500000, // Legis1/FEC aggregate across the race, as of 8/11/2026
  totalOutsideSpendingPending: 1920000, // Legis1 aggregate pending IE commitments as of 8/19/2026
};

// David Burck — the subject of this report
const BURCK = {
  name: "David Burck",
  party: "Republican",
  age: 36,
  hometown: "West Palm Beach, FL",
  bio: "U.S. Marine Corps veteran. Former West Palm Beach Police Department officer and gang crimes detective. Realtor and small business owner. Married with a young son.",
  fecCandidateId: "H6FL22156",
  committeeId: "C00935452",
  committeeName: "David Burck for Congress 2026",
  votePct: 15.7,
  financials: {
    totalReceipts: 255072.97,
    totalDisbursements: 187965.41,
    cashOnHand: 67107.56,
    individualContributions: 255072.97,
    individualItemized: 252562.13,
    individualUnitemized: 2510.84,
    pacContributions: 0,
    candidateSelfFunding: 0,
    loans: 0,
    coveragePeriod: "Jan 1, 2026 – Jul 29, 2026 (pre-primary report)",
  },
  source: "https://api.open.fec.gov/v1/candidate/H6FL22156/totals/ ; https://www.fec.gov/data/candidate/H6FL22156/",
};

// The competition — every Republican who stood between Burck and the nomination
const OPPONENTS = [
  {
    name: "Casey Askar",
    result: "WINNER — advances to Nov. 3 general election vs. Pia Dandiya (D)",
    age: 57,
    hometown: "Naples, FL (grew up in Michigan)",
    votePct: 30.85,
    voteSource: "https://www.marconews.com/story/news/politics/elections/2026/08/18/see-who-won-redrawn-florida-congressional-district-22-primaries/91167398007/",
    bio: [
      "Came to the U.S. from Iraq with his family at age 7, fleeing religious persecution.",
      "Joined the U.S. Marine Corps at 18.",
      "Harvard Business School graduate. Built the Askar Family Office / Askar Brands / Askar Properties / Askar Management Group portfolio — a major multi-state franchisee for Church's Chicken, Dunkin' Donuts and other national brands, employing thousands.",
      "Ran for Congress once before: finished 3rd in the 2020 FL-19 Republican primary behind now-Rep. Byron Donalds, after loaning his own campaign $6.5 million and raising an additional $754,000. He later sued Donalds over campaign messaging.",
      "Married father of six (some reports say seven); active parishioner at St. Ann's Church in Naples.",
    ],
    financials: {
      totalReceipts: 2501510.00,
      totalDisbursements: 265266.14,
      cashOnHand: 2236243.86,
      selfFunded: true,
      selfFundingNote: "Loaned his 2026 campaign $2.5 million; ended Q2 2026 with $2.24 million cash on hand. Largely self-funded, as in his 2020 run.",
      committeeId: "C00952663",
      committeeName: "Casey for Congress",
      leadershipPac: "Alligator Alley PAC (C00953414)",
    },
    outsideMoney: "Targeted by attack ads/website from a dark-money operation and by opponent Belinda Keiser calling him a 'Liberal Never Trump' figure and questioning his residency; a Super PAC (America PACT) is widely seen as having run pro-Askar attacks on Keiser and Carbonara.",
    sources: [
      "https://ballotpedia.org/Casey_Askar",
      "https://www.caseyaskar.com/",
      "https://floridapolitics.com/archives/797331-casey-askar-jumps-into-increasingly-competitive-cd-22-contest/",
      "https://floridapolitics.com/archives/814079-casey-askar-pia-dandiya-to-compete-for-new-cd-22-seat-after-winning-their-primary-races-tuesday/",
      "https://floridianpress.com/2026/07/floridas-republican-race-in-cd-22-filled-with-sexual-assault-claims-love-for-communist-china-and-illegal-websites/",
    ],
  },
  {
    name: "Michael Carbonara",
    result: "2nd place",
    age: 43,
    hometown: "Cooper City / Weston, FL (born Bethpage, NY)",
    votePct: 19.0,
    voteSource: "https://www.aahoa.com/news-details/2026-florida-primary-elections",
    bio: [
      "Born May 24, 1983 in Bethpage, New York; associate degree in business administration from Ulster County Community College.",
      "Founder and CEO of fintech company Ibanera and founder of Gattaca Genomics, a genomics company aimed at helping families struggling with infertility.",
      "Originally announced his 2026 candidacy in Florida's 25th Congressional District in May 2025, then switched to the newly redrawn FL-22 after redistricting.",
      "Endorsed by Huck PAC and the Fort Lauderdale Young Republicans; won the marquee endorsement of Club for Growth Action.",
    ],
    financials: {
      totalReceipts: 5867348.70,
      totalDisbursements: 4524861.36,
      cashOnHand: 1342487.34,
      selfFunded: true,
      selfFundingNote: "Loaned himself over $4 million in the primary; individual (non-self) contributions totaled only about $58,834.95 — roughly 1% of his total war chest.",
      committeeId: "C00901793",
      committeeName: "Carbonara for Congress",
    },
    outsideMoney: "Club for Growth Action endorsed Carbonara and ran a ~$700,000 ad buy attacking Casey Askar on his behalf. America's Renewal PAC separately reported $45,323.24 in independent expenditures supporting Carbonara (printing, yard signs, text messaging, canvassing, media).",
    sources: [
      "https://en.wikipedia.org/wiki/Michael_Carbonara",
      "https://thehill.com/homenews/campaign/6021929-club-for-growth-action-carbonara-florida-house-primary/",
      "https://legis1.com/news/florida-22nd-congressional-district-primary",
    ],
  },
  {
    name: "Belinda Keiser",
    result: "3rd place",
    age: 67,
    hometown: "Parkland, FL",
    votePct: 18.3,
    voteSource: "https://www.aahoa.com/news-details/2026-florida-primary-elections",
    bio: [
      "Vice Chancellor of Community Relations and Student Advancement at Keiser University (founded 1977 by her husband's family), a role she has held since 1978.",
      "B.S. in Communications, Florida State University; MBA, Nova Southeastern University; paralegal certificate, Keiser University.",
      "Former member of Florida's Constitution Revision Commission.",
      "With her husband Arthur Keiser (Keiser University chancellor), also owns for-profit Southeastern College.",
    ],
    financials: {
      totalReceipts: 3213868.36,
      totalDisbursements: null,
      cashOnHand: null,
      selfFunded: true,
      selfFundingNote: "Reporting indicates her campaign was substantially self-funded ('of her own money' per The Hill); no FEC candidate page could be located for the FL-22 2026 cycle at time of research, so figures above are drawn from news reporting rather than the FEC API directly.",
      committeeId: null,
    },
    outsideMoney: "Targeted early and hard by the Super PAC America PACT over her past political donations and 'ties to the CCP'; also attacked in an anonymous, low-production 'dark money' website campaign.",
    sources: [
      "https://www.news-press.com/story/news/politics/elections/2026/08/08/republican-congressional-district-22-candidate-belinda-keiser-qa/90932771007/",
      "https://floridianpress.com/2026/07/floridas-republican-race-in-cd-22-filled-with-sexual-assault-claims-love-for-communist-china-and-illegal-websites/",
    ],
  },
  {
    name: "Terri Hasdorff",
    result: "5th place",
    age: 56,
    hometown: "Loxahatchee / Wellington, FL",
    votePct: 7.7,
    voteSource: "https://www.aahoa.com/news-details/2026-florida-primary-elections",
    bio: [
      "Former faith-based initiatives director under President George W. Bush; former congressional staffer.",
      "Small-business owner, nonprofit executive, author and speaker. Chair of the Republican Federal Women's Forum.",
      "Author of 'Running Into the Fire,' arguing 'Christians and people of faith must engage with courage to preserve our freedoms and values.'",
      "Also has prior federal campaign experience from a 2020 Alabama congressional run.",
    ],
    financials: {
      totalReceipts: null,
      note: "No FEC committee found for the FL-22 2026 cycle — campaign appears to have stayed below (or not yet cleared) the $5,000 federal reporting threshold.",
    },
    sources: [
      "https://bluewaterhealthyliving.com/news/national-news/florida/take-a-first-look-at-the-7-republicans-running-for-u-s-rep-district-22/",
      "https://www.palmbeachpost.com/story/news/politics/elections/2026/08/08/palm-beach-post-voter-guide-for-us-house-district-22-primary/90663317007/",
    ],
  },
  {
    name: "Michael Thompson",
    result: "6th place",
    age: null,
    hometown: "Alva, FL (born Palm Beach Gardens, raised Belle Glade)",
    votePct: 5.5,
    voteSource: "https://www.aahoa.com/news-details/2026-florida-primary-elections",
    bio: [
      "Former Lee County Republican Executive Committee chair.",
      "Local Realtor; Alva Fire Commissioner.",
      "Founded the SW Florida Heroes Foundation, a nonprofit supporting military, law enforcement, firefighter/EMT and teacher heroes.",
      "Originally launched a campaign against incumbent State Rep. Tiffany Esposito for Florida House District 77, then withdrew to run for Congress instead.",
      "Raised $86,976 in a 2025 special election bid for FL-1 before switching to this race.",
    ],
    financials: {
      totalReceipts: null,
      priorCycleReceipts: 86976,
      priorCycleNote: "2025 FL-1 special election bid",
      note: "No FEC committee found for the FL-22 2026 cycle race itself.",
    },
    sources: [
      "https://www.palmbeachpost.com/story/news/politics/elections/2026/08/08/congressional-district-22-candidate-michael-thompson-qa-in-south-florida/90927627007/",
    ],
  },
  {
    name: "Richard Evans",
    result: "7th place (last)",
    age: null,
    hometown: "Ave Maria, FL (moved from Chicago in 2020)",
    votePct: 3.0,
    voteSource: "https://www.aahoa.com/news-details/2026-florida-primary-elections",
    bio: [
      "Certified Public Accountant and risk manager.",
      "Previously ran unsuccessfully for Congress in Florida's 26th District in 2024 against Rep. Mario Diaz-Balart, raising $13,700.",
    ],
    financials: {
      totalReceipts: null,
      priorCycleReceipts: 13700,
      priorCycleNote: "2024 FL-26 run",
      note: "No FEC committee found for the FL-22 2026 cycle race itself.",
    },
    sources: [
      "https://www.fec.gov/data/candidate/H4FL26111/",
      "https://bluewaterhealthyliving.com/news/national-news/florida/take-a-first-look-at-the-7-republicans-running-for-u-s-rep-district-22/",
    ],
  },
];

const DEMOCRATS_FOR_CONTEXT = [
  {
    name: "Pia Dandiya",
    result: "Democratic nominee (68.7% of primary vote)",
    bio: "Former high school principal and White House Fellow. Faces Askar in the Nov. 3, 2026 general election.",
    source: "https://www.miamiherald.com/news/politics-government/election/article316929421.html",
  },
  {
    name: "Kaysia Earley",
    result: "Democratic runner-up (31.3% / 11,735 votes)",
    bio: "Parkland-based attorney.",
    source: "https://legis1.com/news/florida-22nd-congressional-district-primary",
  },
];

const OUTSIDE_SPENDING = [
  { org: "Club for Growth Action", amount: 714838.98, note: "Pending commitment as of 8/19/26; ran ~$700K ad buy backing Carbonara / attacking Askar" },
  { org: "American PACT", amount: 641750.00, note: "Pending commitment; widely viewed as pro-Askar, attacked Keiser and Carbonara" },
  { org: "American Liberty Foundation", amount: 281462.02, note: "Pending commitment as of 8/19/26" },
  { org: "America's Renewal PAC", amount: 77579.86, note: "Pending; separately reported $45,323.24 in direct IEs supporting Carbonara" },
  { org: "Making Congress Great Again PAC", amount: 48489.53, note: "Pending commitment as of 8/19/26" },
];

if (typeof module !== "undefined") {
  module.exports = { RACE, BURCK, OPPONENTS, DEMOCRATS_FOR_CONTEXT, OUTSIDE_SPENDING };
}
