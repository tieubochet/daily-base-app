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
    image: '/badges/csbadge.png',
    name: 'Creator Score',
    tag: 'Superchain',
    description: 'A reputation metric that quantifies your creative contributions across platforms using verified data.',
    whyItMatters: 'Quantifies creative impact.',
    howToProgress: 'Connect socials and create content.',
    tiers: ['Bronze', 'Silver', 'Gold'],
    links: [
      { name: 'Open Creator Score', url: 'https://www.creatorscore.app/' },
      { name: 'Open Talent Protocol', url: 'https://app.talentprotocol.com/' },
      { name: 'Creator Score (docs)', url: 'https://docs.talentprotocol.com/docs/protocol-concepts/scoring-systems/creator-score' }
    ]
  },
  {
    id: 'builder-score',
    image: '/badges/bsbadge.png',
    name: 'Builder Score',
    tag: 'Ethereum',
    description: 'A builder reputation signal by Talent Protocol that aggregates onchain activity and public contributions to show your consistency and credibility as a builder.',
    whyItMatters: 'Show consistency and credibility as a builder.',
    howToProgress: 'Build and contribute to repos.',
    tiers: ['Novice', 'Builder', 'Architect'],
    links: [
      { name: 'Open Builder Score', url: 'https://app.talentprotocol.com/' },
      { name: 'Builder Rewards', url: 'https://www.builderscore.xyz/' },
      { name: 'Builder Score (docs)', url: 'https://docs.talentprotocol.com/docs/protocol-concepts/scoring-systems/builder-score' },
      { name: 'Builder Score Levels (docs)', url: 'https://docs.talentprotocol.com/docs/protocol-concepts/scoring-systems/builder-score/builder-score-levels' }
    ]
  },
  {
    id: 'based-nouns',
    image: '/badges/basednounsbadge.png',
    name: 'Based Nouns Holder',
    tag: 'Base',
    description: 'Hold Based Nouns NFTs on Base to unlock tiers.',
    whyItMatters: 'Community membership.',
    howToProgress: 'Acquire more Based Nouns.',
    tiers: ['Holder', 'Whale'],
    links: [
        { name: 'Open Based Nouns (OpenSea)', url: 'https://opensea.io/collection/based-nouns' }
    ]
  },
  {
    id: 'lil-nouns',
    image: '/badges/lnbadge.png',
    name: 'Lil Nouns Holder',
    tag: 'Ethereum',
    description: 'Hold Lil Nouns NFTs on Ethereum Mainnet to unlock tiers.',
    whyItMatters: 'Governance participation.',
    howToProgress: 'Buy Lil Nouns.',
    tiers: ['Holder', 'Collector'],
    links: [
        { name: 'Open Lil Nouns (OpenSea)', url: 'https://opensea.io/collection/lil-nouns' },
        { name: 'Lil Nouns — LinkTree', url: 'https://linktr.ee/lilnounsdao' }
    ]
  },
  {
    id: 'nouns-holder',
    image: '/badges/nhbadge.png',
    name: 'Nouns Holder',
    tag: 'Ethereum',
    description: 'Hold Nouns NFTs on Ethereum Mainnet to unlock tiers.',
    whyItMatters: 'Premier DAO membership.',
    howToProgress: 'Win a Nouns auction.',
    tiers: ['Nounder'],
    links: [
        { name: 'Open Nouns (OpenSea)', url: 'https://opensea.io/collection/nouns' },
        { name: 'Nouns.wtf', url: 'https://nouns.wtf/' }
    ]
  },
  {
    id: 'giveth',
    image: '/badges/gdonorbadge.png',
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
    image: '/badges/gtcdbadge.png',
    name: 'Gitcoin Donor',
    tag: 'Optimism',
    description: 'Donate on Gitcoin to fund public goods; tiers reflect total USD donated.',
    whyItMatters: 'Quadratic funding support.',
    howToProgress: 'Donate during rounds.',
    tiers: ['Donor', 'Patron'],
    links: [
        { name: 'Open Gitcoin Grants', url: 'https://grants.gitcoin.co/' }
    ]
  },
  {
    id: 'worldcoin-verify',
    image: '/badges/wcvbadge.png',
    name: 'Worldcoin Verification',
    tag: 'World',
    description: 'Verify your personhood with World App to unlock proof-of-uniqueness benefits across supported apps.',
    whyItMatters: 'Proof of Personhood.',
    howToProgress: 'Verify at an orb.',
    tiers: ['Verified'],
    links: [
        { name: 'Get World App (Android)', url: 'https://play.google.com/store/apps/details?id=com.worldcoin' },
        { name: 'Get World App (iOS)', url: 'https://apps.apple.com/no/app/world-app-worldcoin-wallet/id1560859847' }
    ]
  },
  {
    id: 'world-user',
    image: '/badges/wubadge.png',
    name: 'World User',
    tag: 'World',
    description: 'Make onchain transactions on the World chain. Higher tiers reflect more activity and a deeper footprint in the World ecosystem.',
    whyItMatters: 'Activity on World Chain.',
    howToProgress: 'Transact more.',
    tiers: ['Active', 'Power User'],
    links: [
        { name: 'Learn about World', url: 'https://world.org/' }
    ]
  },
  {
    id: 'base-user',
    image: '/badges/baseuserbadge.png',
    name: 'Base User',
    tag: 'Base',
    description: 'Make onchain transactions on the Base layer-2 network. Higher tiers reflect more activity and a deeper footprint in the Base ecosystem.',
    whyItMatters: 'Core ecosystem activity.',
    howToProgress: 'Use dApps on Base.',
    tiers: ['Newbie', 'Native'],
    links: [
        { name: 'Learn about Base', url: 'https://www.base.org/' }
    ]
  },
  {
    id: 'op-user',
    image: '/badges/opuserbadge.png',
    name: 'OP Mainnet User',
    tag: 'OP Mainnet',
    description: 'Make onchain transactions on OP Mainnet, the original Optimism network. Higher tiers reflect more activity and a deeper footprint in the OP Mainnet ecosystem.',
    whyItMatters: 'OG Optimism activity.',
    howToProgress: 'Transact on OP Mainnet.',
    tiers: ['User', 'Power User'],
    links: [
        { name: 'Learn about OP Mainnet', url: 'https://www.superchain.eco/chains/op-mainnet' }
    ]
  },
  {
    id: 'mode-user',
    image: '/badges/modeuserbadge.png',
    name: 'Mode User',
    tag: 'Mode',
    description: 'Make onchain transactions on Mode, the Ethereum L2 focused on sequencing and yield. Higher tiers reflect more activity and a deeper footprint in the Mode ecosystem.',
    whyItMatters: 'DeFi activity.',
    howToProgress: 'Participate in Mode Early Campaign.',
    tiers: ['Early', 'Degen'],
    links: [
        { name: 'Mode Early Campaign', url: 'https://app.mode.network/early/' }
    ]
  },
  {
    id: 'unichain-user',
    image: '/badges/uniuserbadge.png',
    name: 'Unichain User',
    tag: 'Unichain',
    description: 'Make onchain transactions on Unichain, the L2 focused around the Uniswap ecosystem. Higher tiers reflect more activity and a deeper footprint in the Unichain ecosystem.',
    whyItMatters: 'DEX activity.',
    howToProgress: 'Swap on Unichain.',
    tiers: ['Swapper'],
    links: [
        { name: 'Explore Unichain', url: 'https://www.unichain.org/explore' }
    ]
  },
  {
    id: 'lisk-user',
    image: '/badges/liskuserbadge.png',
    name: 'Lisk User',
    tag: 'Lisk',
    description: 'Make onchain transactions on Lisk, an OP Stack chain in the Superchain ecosystem. Higher tiers reflect more activity and a deeper footprint in the Lisk ecosystem.',
    whyItMatters: 'Emerging chain activity.',
    howToProgress: 'Bridge to Lisk.',
    tiers: ['Explorer'],
    links: [
        { name: 'Explore the Lisk ecosystem', url: 'https://lisk.com/ecosystem/' }
    ]
  },
  {
    id: 'soneium-user',
    image: '/badges/soneiumuserbadge.png',
    name: 'Soneium User',
    tag: 'Soneium',
    description: 'Make onchain transactions on Soneium, an OP Stack L2 in the Superchain ecosystem. Higher tiers reflect more activity and a deeper footprint in the Soneium ecosystem.',
    whyItMatters: 'Ecosystem growth.',
    howToProgress: 'Transact on Soneium.',
    tiers: ['Early Adopter'],
    links: [
        { name: 'Explore the Soneium ecosystem', url: 'https://soneium.org/en/ecosystem/' }
    ]
  },
  {
    id: 'ink-user',
    image: '/badges/inkuserbadge.png',
    name: 'Ink User',
    tag: 'Ink',
    description: 'Make onchain transactions on Ink, Kraken’s OP Stack L2 in the Optimism Superchain. Higher tiers reflect more activity and a deeper footprint in the Ink ecosystem.',
    whyItMatters: 'Exchange chain activity.',
    howToProgress: 'Use Ink dApps.',
    tiers: ['Inker'],
    links: [
        { name: 'Explore Ink apps', url: 'https://inkonchain.com/apps' }
    ]
  },
  {
    id: 'early-power',
    image: '/badges/epubadge.png',
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
    image: '/badges/sc24badge.png',
    name: 'Super Cohort 24',
    tag: 'Optimism',
    description: 'Graduated from Super Cohort 0. Note: this program/badge is no longer available to join.',
    whyItMatters: 'Historical achievement.',
    howToProgress: 'Legacy badge.',
    tiers: ['Graduate'],
    links: [
        { name: 'Announcement / recap', url: 'https://www.superchain.eco/insights/announcing-super-contributor-cohort-0' }
    ]
  },
  {
    id: 's7-user',
    image: '/badges/s7subadge.png',
    name: 'S7 Super User',
    tag: 'Superchain (Season 7)',
    description: 'Make transactions across Superchain during Season 7. Higher tiers reflect more onchain activity across supported chains.',
    whyItMatters: 'Seasonal activity.',
    howToProgress: 'Legacy badge.',
    tiers: ['Super User'],
    links: [
        { name: 'Explore Superchain chains', url: 'https://www.superchain.eco/chains' }
    ]
  },
  {
    id: 's8-user',
    image: '/badges/s8subadge.png',
    name: 'S8 Super User',
    tag: 'Superchain (Season 8)',
    description: 'Make transactions across Superchain during Season 8. Higher tiers reflect more onchain activity across supported chains.',
    whyItMatters: 'Current seasonal activity.',
    howToProgress: 'Transact across chains.',
    tiers: ['Active'],
    links: [
        { name: 'Explore Superchain chains', url: 'https://www.superchain.eco/chains' }
    ]
  },
  {
    id: 'self-verify',
    image: '/badges/selfbadge.png',
    name: 'Self Verification',
    tag: 'Celo',
    description: 'Verify your uniqueness and country using Self Protocol’s ZK passport on Celo. Additionally, Self launched a points campaign.',
    whyItMatters: 'Identity verification.',
    howToProgress: 'Use Self App.',
    tiers: ['Verified'],
    links: [
        { name: 'Join Self', url: 'https://referral.self.xyz/referral/0x4B741c1047419557D2d1Ac0014A723BBFa3Efcbb' },
        { name: 'Get Self (Android)', url: 'https://play.google.com/store/apps/details?id=com.proofofpassportapp' },
        { name: 'Get Self (iOS)', url: 'https://apps.apple.com/fr/app/self-zk-passport-identity/id6478563710' }
    ]
  },
  {
    id: 'superstacks',
    image: '/badges/superstacksbadge.png',
    name: 'SuperStacks',
    tag: 'Superchain (Season 7)',
    description: 'XP earned during the SuperStacks campaign (Season 7). Note: this campaign has ended and the badge is no longer obtainable.',
    whyItMatters: 'Campaign participation.',
    howToProgress: 'Ended.',
    tiers: ['Participant'],
    links: [
        { name: 'About SuperStacks', url: 'https://www.superchain.eco/programs/superstacks' }
    ]
  },
  {
    id: 'lisk-airdrop',
    image: '/badges/liskabadge.png',
    name: 'Lisk Airdrop S1',
    tag: 'Lisk',
    description: 'Seasonal airdrop on the Lisk OP Stack chain. Join the verified airdrop Guild and complete tasks to earn Season 1 points and LSK rewards.',
    whyItMatters: 'Rewards.',
    howToProgress: 'Complete Guild tasks.',
    tiers: ['Eligible'],
    links: [
        { name: 'How To: Lisk Airdrop Season 1', url: 'https://www.superchain.eco/insights/how-to-lisk-airdrop-season-1' },
        { name: 'Open Lisk Airdrop portal', url: 'https://portal.lisk.com/' }
    ]
  },
  {
    id: 'lisk-surge',
    image: '/badges/lisksurgebadge.png',
    name: 'Lisk Surge',
    tag: 'Lisk',
    description: 'LSK earned during the Lisk Surge campaign (Season 7). Earn more LSK to reach higher tiers.',
    whyItMatters: 'Liquidity provision.',
    howToProgress: 'Ended.',
    tiers: ['Surger'],
    links: [
        { name: 'About Lisk Surge', url: 'https://www.superchain.eco/programs/lisk-surge' }
    ]
  },
  {
    id: 'eth-vault',
    image: '/badges/ethvdbadge.png',
    name: 'ETH Vault Deposits',
    tag: 'OP Mainnet',
    description: 'Deposit ETH into the WETH Super Vaults on OP Mainnet to progress through reward tiers.',
    whyItMatters: 'DeFi savings.',
    howToProgress: 'Deposit more ETH.',
    tiers: ['Saver', 'Whale'],
    links: [
        { name: 'Open Superchain Vaults', url: 'https://account.superchain.eco/vaults' }
    ]
  },
  {
    id: 'citizen',
    image: '/badges/citibadge.png',
    name: 'Citizen',
    tag: 'OP Mainnet',
    description: 'Become an Optimism Citizen by owning a wallet that has been granted Citizenship on OP Mainnet.',
    whyItMatters: 'Voting power.',
    howToProgress: 'Contribution to governance.',
    tiers: ['Citizen'],
    links: [
        { name: 'Learn about Optimism Citizenship', url: 'https://atlas.optimism.io/citizenship' }
    ]
  }
];

export const PILL_LINKS: LinkItem[] = []; // Not used in this design

export const FOOTER_LINKS = [
  { name: 'Discord', url: 'https://discord.gg/buildonbase' },
  { name: 'X', url: 'https://x.com/base' },
  { name: 'Guild', url: 'https://guild.xyz/base' },
];