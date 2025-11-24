import { Badge, LinkItem, Themes } from './types';

// Matching the "Base Lite" color scheme
// Main BG: rgb(0, 58, 209) -> #003AD1
// Text: rgb(230, 232, 240) -> #E6E8F0
// Glass Card: rgba(0, 0, 0, 0.25)
// Border: rgba(255, 255, 255, 0.18)
// Button BG: rgba(255, 255, 255, 0.12)

export const THEMES: Themes = {
  light: {
    bgApp: '#003AD1',
    bgCard: 'rgba(0, 0, 0, 0.25)',
    textPrimary: '#FFFFFF',
    textSecondary: '#E6E8F0',
    borderColor: 'rgba(255, 255, 255, 0.18)',
    accentColor: '#FFFFFF',
    accentHover: 'rgba(255, 255, 255, 0.8)',
    shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },
  dark: {
    bgApp: '#001A66', // Darker blue for dark mode
    bgCard: 'rgba(0, 0, 0, 0.4)',
    textPrimary: '#E6E8F0',
    textSecondary: '#94A3B8',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    accentColor: '#60A5FA',
    accentHover: '#3B82F6',
    shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
  },
  dim: {
    bgApp: '#0F172A',
    bgCard: 'rgba(30, 41, 59, 0.7)',
    textPrimary: '#FAFAFA',
    textSecondary: '#A1A1AA',
    borderColor: '#3F3F46',
    accentColor: '#A1A1AA',
    accentHover: '#E4E4E7',
    shadow: '0 4px 6px -1px rgb(0 0 0 / 0.3)',
  },
};

export const SECTION_1_LINKS: LinkItem[] = [
  { name: 'Superchain Eco S8', url: 'https://account.superchain.eco/campaigns/s8-superchain-eco' },
  { name: 'Base Ecosystem', url: 'https://www.base.org/ecosystem' },
  { name: 'Base Names', url: 'https://www.base.org/name/' },
  { name: 'Base App', url: 'https://join.base.app/' },
  { name: 'Base Build', url: 'https://www.base.org/build' },
];

export const ROUTINE_ITEMS = [
    { label: 'Layer3 Quests', url: '#', primary: true },
    { label: 'Claim $G daily', url: '#' },
    { label: 'Lend on Aave', url: '#' }
];

export const SECTION_2_LINKS_GOV: LinkItem[] = []; // Unused in new design
export const SECTION_2_LINKS_ID: LinkItem[] = [];  // Unused in new design

export const BADGES_DATA: Badge[] = [
  {
    id: 'creator-score',
    image: 'https://picsum.photos/seed/creator/200',
    name: 'Creator Score',
    tag: 'Superchain',
    description: 'A reputation metric that quantifies your creative contributions across platforms using verified data.',
    whyItMatters: 'Quantifies creative impact.',
    howToProgress: 'Connect socials and create content.',
    tiers: ['Bronze', 'Silver', 'Gold'],
    links: [
      { name: 'Open Creator Score', url: 'https://www.creatorscore.app/' },
      { name: 'Open Talent Protocol', url: 'https://app.talentprotocol.com/' }
    ]
  },
  {
    id: 'builder-score',
    image: 'https://picsum.photos/seed/builder/200',
    name: 'Builder Score',
    tag: 'Ethereum',
    description: 'A builder reputation signal by Talent Protocol that aggregates onchain activity and public contributions.',
    whyItMatters: 'Show consistency and credibility as a builder.',
    howToProgress: 'Build and contribute to repos.',
    tiers: ['Novice', 'Builder', 'Architect'],
    links: [
      { name: 'Open Builder Score', url: 'https://app.talentprotocol.com/' },
      { name: 'Builder Rewards', url: 'https://www.builderscore.xyz/' }
    ]
  },
  {
    id: 'based-nouns',
    image: 'https://picsum.photos/seed/nouns/200',
    name: 'Based Nouns Holder',
    tag: 'Base',
    description: 'Hold Based Nouns NFTs on Base to unlock tiers.',
    whyItMatters: 'Community membership.',
    howToProgress: 'Acquire more Based Nouns.',
    tiers: ['Holder', 'Whale'],
    links: [
        { name: 'Open OpenSea', url: 'https://opensea.io/collection/based-nouns' }
    ]
  },
  {
    id: 'lil-nouns',
    image: 'https://picsum.photos/seed/lil/200',
    name: 'Lil Nouns Holder',
    tag: 'Ethereum',
    description: 'Hold Lil Nouns NFTs on Ethereum Mainnet to unlock tiers.',
    whyItMatters: 'Governance participation.',
    howToProgress: 'Buy Lil Nouns.',
    tiers: ['Holder', 'Collector'],
    links: [
        { name: 'Open OpenSea', url: 'https://opensea.io/collection/lil-nouns' }
    ]
  },
  {
    id: 'nouns-holder',
    image: 'https://picsum.photos/seed/nounsh/200',
    name: 'Nouns Holder',
    tag: 'Ethereum',
    description: 'Hold Nouns NFTs on Ethereum Mainnet to unlock tiers.',
    whyItMatters: 'Premier DAO membership.',
    howToProgress: 'Win a Nouns auction.',
    tiers: ['Nounder'],
    links: [
        { name: 'Nouns.wtf', url: 'https://nouns.wtf/' }
    ]
  },
  {
    id: 'giveth',
    image: 'https://picsum.photos/seed/giveth/200',
    name: 'Giveth Donor',
    tag: 'Optimism',
    description: 'Donate on Giveth to support public goods; tiers reflect total USD donated.',
    whyItMatters: 'Supporting public goods.',
    howToProgress: 'Donate to verified projects.',
    tiers: ['Supporter', 'Philanthropist'],
    links: [
        { name: 'Open Giveth', url: 'https://giveth.io/' }
    ]
  },
  {
    id: 'gitcoin',
    image: 'https://picsum.photos/seed/gitcoin/200',
    name: 'Gitcoin Donor',
    tag: 'Optimism',
    description: 'Donate on Gitcoin to fund public goods; tiers reflect total USD donated.',
    whyItMatters: 'Quadratic funding support.',
    howToProgress: 'Donate during rounds.',
    tiers: ['Donor', 'Patron'],
    links: [
        { name: 'Open Gitcoin', url: 'https://grants.gitcoin.co/' }
    ]
  },
  {
    id: 'worldcoin-verify',
    image: 'https://picsum.photos/seed/world/200',
    name: 'Worldcoin Verification',
    tag: 'World',
    description: 'Verify your personhood with World App to unlock proof-of-uniqueness benefits.',
    whyItMatters: 'Proof of Personhood.',
    howToProgress: 'Verify at an orb.',
    tiers: ['Verified'],
    links: [
        { name: 'Get World App', url: 'https://world.org/' }
    ]
  },
  {
    id: 'world-user',
    image: 'https://picsum.photos/seed/wuser/200',
    name: 'World User',
    tag: 'World',
    description: 'Make onchain transactions on the World chain.',
    whyItMatters: 'Activity on World Chain.',
    howToProgress: 'Transact more.',
    tiers: ['Active', 'Power User'],
    links: [
        { name: 'Learn about World', url: 'https://world.org/' }
    ]
  },
  {
    id: 'base-user',
    image: 'https://picsum.photos/seed/base/200',
    name: 'Base User',
    tag: 'Base',
    description: 'Make onchain transactions on the Base layer-2 network.',
    whyItMatters: 'Core ecosystem activity.',
    howToProgress: 'Use dApps on Base.',
    tiers: ['Newbie', 'Native'],
    links: [
        { name: 'Learn about Base', url: 'https://www.base.org/' }
    ]
  },
  {
    id: 'op-user',
    image: 'https://picsum.photos/seed/op/200',
    name: 'OP Mainnet User',
    tag: 'OP Mainnet',
    description: 'Make onchain transactions on OP Mainnet, the original Optimism network.',
    whyItMatters: 'OG Optimism activity.',
    howToProgress: 'Transact on OP Mainnet.',
    tiers: ['User', 'Power User'],
    links: [
        { name: 'Learn about OP', url: 'https://www.superchain.eco/chains/op-mainnet' }
    ]
  },
  {
    id: 'mode-user',
    image: 'https://picsum.photos/seed/mode/200',
    name: 'Mode User',
    tag: 'Mode',
    description: 'Make onchain transactions on Mode, the Ethereum L2 focused on sequencing and yield.',
    whyItMatters: 'DeFi activity.',
    howToProgress: 'Participate in Mode Early Campaign.',
    tiers: ['Early', 'Degen'],
    links: [
        { name: 'Mode Early Campaign', url: 'https://app.mode.network/early/' }
    ]
  },
  {
    id: 'unichain-user',
    image: 'https://picsum.photos/seed/uni/200',
    name: 'Unichain User',
    tag: 'Unichain',
    description: 'Make onchain transactions on Unichain, the L2 focused around the Uniswap ecosystem.',
    whyItMatters: 'DEX activity.',
    howToProgress: 'Swap on Unichain.',
    tiers: ['Swapper'],
    links: [
        { name: 'Explore Unichain', url: 'https://www.unichain.org/explore' }
    ]
  },
  {
    id: 'lisk-user',
    image: 'https://picsum.photos/seed/lisk/200',
    name: 'Lisk User',
    tag: 'Lisk',
    description: 'Make onchain transactions on Lisk, an OP Stack chain in the Superchain ecosystem.',
    whyItMatters: 'Emerging chain activity.',
    howToProgress: 'Bridge to Lisk.',
    tiers: ['Explorer'],
    links: [
        { name: 'Explore Lisk', url: 'https://lisk.com/ecosystem/' }
    ]
  },
  {
    id: 'soneium-user',
    image: 'https://picsum.photos/seed/son/200',
    name: 'Soneium User',
    tag: 'Soneium',
    description: 'Make onchain transactions on Soneium, an OP Stack L2 in the Superchain ecosystem.',
    whyItMatters: 'Ecosystem growth.',
    howToProgress: 'Transact on Soneium.',
    tiers: ['Early Adopter'],
    links: [
        { name: 'Explore Soneium', url: 'https://soneium.org/en/ecosystem/' }
    ]
  },
  {
    id: 'ink-user',
    image: 'https://picsum.photos/seed/ink/200',
    name: 'Ink User',
    tag: 'Ink',
    description: 'Make onchain transactions on Ink, Kraken’s OP Stack L2 in the Optimism Superchain.',
    whyItMatters: 'Exchange chain activity.',
    howToProgress: 'Use Ink dApps.',
    tiers: ['Inker'],
    links: [
        { name: 'Explore Ink', url: 'https://inkonchain.com/apps' }
    ]
  },
  {
    id: 'early-power',
    image: 'https://picsum.photos/seed/epu/200',
    name: 'Early Power User',
    tag: 'Optimism',
    description: 'Be among the first 100 accounts to reach Level 3.',
    whyItMatters: 'Elite status.',
    howToProgress: 'Race to Level 3.',
    tiers: ['Top 100'],
    links: []
  },
  {
    id: 'super-cohort',
    image: 'https://picsum.photos/seed/sc24/200',
    name: 'Super Cohort 24',
    tag: 'Optimism',
    description: 'Graduated from Super Cohort 0. Note: this program/badge is no longer available to join.',
    whyItMatters: 'Historical achievement.',
    howToProgress: 'Legacy badge.',
    tiers: ['Graduate'],
    links: [
        { name: 'Recap', url: 'https://www.superchain.eco/insights/announcing-super-contributor-cohort-0' }
    ]
  },
  {
    id: 's7-user',
    image: 'https://picsum.photos/seed/s7/200',
    name: 'S7 Super User',
    tag: 'Superchain (Season 7)',
    description: 'Make transactions across Superchain during Season 7.',
    whyItMatters: 'Seasonal activity.',
    howToProgress: 'Legacy badge.',
    tiers: ['Super User'],
    links: [
        { name: 'Explore Chains', url: 'https://www.superchain.eco/chains' }
    ]
  },
  {
    id: 's8-user',
    image: 'https://picsum.photos/seed/s8/200',
    name: 'S8 Super User',
    tag: 'Superchain (Season 8)',
    description: 'Make transactions across Superchain during Season 8.',
    whyItMatters: 'Current seasonal activity.',
    howToProgress: 'Transact across chains.',
    tiers: ['Active'],
    links: [
        { name: 'Explore Chains', url: 'https://www.superchain.eco/chains' }
    ]
  },
  {
    id: 'self-verify',
    image: 'https://picsum.photos/seed/self/200',
    name: 'Self Verification',
    tag: 'Celo',
    description: 'Verify your uniqueness and country using Self Protocol’s ZK passport on Celo.',
    whyItMatters: 'Identity verification.',
    howToProgress: 'Use Self App.',
    tiers: ['Verified'],
    links: [
        { name: 'Join Self', url: 'https://referral.self.xyz/referral/0x4B741c1047419557D2d1Ac0014A723BBFa3Efcbb' }
    ]
  },
  {
    id: 'superstacks',
    image: 'https://picsum.photos/seed/stacks/200',
    name: 'SuperStacks',
    tag: 'Superchain (Season 7)',
    description: 'XP earned during the SuperStacks campaign (Season 7).',
    whyItMatters: 'Campaign participation.',
    howToProgress: 'Ended.',
    tiers: ['Participant'],
    links: [
        { name: 'About SuperStacks', url: 'https://www.superchain.eco/programs/superstacks' }
    ]
  },
  {
    id: 'lisk-airdrop',
    image: 'https://picsum.photos/seed/liska/200',
    name: 'Lisk Airdrop S1',
    tag: 'Lisk',
    description: 'Seasonal airdrop on the Lisk OP Stack chain.',
    whyItMatters: 'Rewards.',
    howToProgress: 'Complete Guild tasks.',
    tiers: ['Eligible'],
    links: [
        { name: 'How To', url: 'https://www.superchain.eco/insights/how-to-lisk-airdrop-season-1' },
        { name: 'Portal', url: 'https://portal.lisk.com/' }
    ]
  },
  {
    id: 'lisk-surge',
    image: 'https://picsum.photos/seed/surge/200',
    name: 'Lisk Surge',
    tag: 'Lisk',
    description: 'LSK earned during the Lisk Surge campaign (Season 7).',
    whyItMatters: 'Liquidity provision.',
    howToProgress: 'Ended.',
    tiers: ['Surger'],
    links: [
        { name: 'About Lisk Surge', url: 'https://www.superchain.eco/programs/lisk-surge' }
    ]
  },
  {
    id: 'eth-vault',
    image: 'https://picsum.photos/seed/ethv/200',
    name: 'ETH Vault Deposits',
    tag: 'OP Mainnet',
    description: 'Deposit ETH into the WETH Super Vaults on OP Mainnet to progress through reward tiers.',
    whyItMatters: 'DeFi savings.',
    howToProgress: 'Deposit more ETH.',
    tiers: ['Saver', 'Whale'],
    links: [
        { name: 'Open Vaults', url: 'https://account.superchain.eco/vaults' }
    ]
  },
  {
    id: 'citizen',
    image: 'https://picsum.photos/seed/citi/200',
    name: 'Citizen',
    tag: 'OP Mainnet',
    description: 'Become an Optimism Citizen by owning a wallet that has been granted Citizenship on OP Mainnet.',
    whyItMatters: 'Voting power.',
    howToProgress: 'Contribution to governance.',
    tiers: ['Citizen'],
    links: [
        { name: 'Learn about Citizenship', url: 'https://atlas.optimism.io/citizenship' }
    ]
  }
];

export const PILL_LINKS: LinkItem[] = []; // Not used in this design

export const FOOTER_LINKS = [
  { name: 'Discord', url: 'https://discord.gg/buildonbase' },
  { name: 'X', url: 'https://x.com/base' },
  { name: 'Guild', url: 'https://guild.xyz/base' },
];