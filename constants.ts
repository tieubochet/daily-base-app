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
    { label: 'Layer3 Quests', url: 'https://app.layer3.xyz/category/base', primary: true },
    { label: 'Base Sepolia Faucet', url: 'https://www.alchemy.com/faucets/base-sepolia' },
    { label: 'Lend on Aave', url: 'https://app.aave.com/markets/?marketName=proto_base_v3' }
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
    whyItMatters: 'Creator Score is designed to recognize authentic creators by evaluating consistent quality output and engagement, not just popularity. It helps platforms and communities discover creators based on impact and consistency.',
    howToProgress: 'Complete your Talent Protocol profile and connect your primary wallet(s). Link your social & content accounts (GitHub, Farcaster/Twitter, blogs, etc.) so data points can be verified. Publish original work regularly (posts, articles, repos, media) to accumulate measurable creative signals. Earnings and attributions on creator platforms (e.g., mints/sales, tips) further strengthen your score.',
    tiers: ['Reach Creator Score ≥ 10', 'Reach Creator Score ≥ 40', 'Reach Creator Score ≥ 80', 'Reach Creator Score ≥ 120'],
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
    whyItMatters: 'A higher Builder Score helps you stand out to ecosystems, programs, and DAOs that reward consistent public building. It captures progress over time, not just one-off moments.',
    howToProgress: 'Open Talent Protocol and complete your builder profile. Connect your wallet(s) and link relevant accounts (GitHub, Farcaster, etc.). Keep shipping public work (code, apps, tutorials), participate in programs, and maintain activity — your score improves over time.',
    tiers: ['Have a Builder score above 30', 'Have a Builder score above 60', 'Have a Builder score above 90'],
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
    whyItMatters: 'Holding Based Nouns signals participation in the Base-native Nouns ecosystem and its community culture.',
    howToProgress: 'Get a Based Nouns NFT on Base (secondary markets). Hold the NFT in your wallet to progress through tiers.',
    tiers: ['Hold 1 Based Nouns on Base', 'Hold 3 Based Nouns on Base', 'Hold 5 Based Nouns on Base'],
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
    whyItMatters: 'Lil Nouns extends the Nouns ecosystem with daily auctions and a vibrant builder community. Holding Lil Nouns shows long-term alignment with the Nouns ethos.',
    howToProgress: 'Acquire a Lil Nouns NFT on Ethereum (e.g., secondary markets). Keep the NFT in your wallet — tiers reflect how many you hold.',
    tiers: ['Hold 1 Lil Nouns on Ethereum Mainnet', 'Hold 3 Lil Nouns on Ethereum Mainnet', 'Hold 5 Lil Nouns on Ethereum Mainnet'],
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
    whyItMatters: 'Nouns DAO is a flagship onchain community/brand. Holding a Noun represents deep participation in the Nouns ecosystem and its governance culture.',
    howToProgress: 'Acquire a Noun on Ethereum (e.g., via OpenSea/auction). Hold the Noun in your wallet — tiers reflect how many you hold.',
    tiers: ['Hold 1 Nouns on Ethereum Mainnet', 'Hold 3 Nouns on Ethereum Mainnet', 'Hold 5 Nouns on Ethereum Mainnet'],
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
    whyItMatters: 'Giveth routes funds directly to impact projects. Donating builds a positive onchain footprint and aligns your activity with public goods funding.',
    howToProgress: 'Open Giveth, pick a project you believe in, and connect your wallet (OP Mainnet supported). Choose an amount in USD equivalent and confirm the donation transaction. Keep records if you need them for personal accounting — donations are generally non-refundable.',
    tiers: ['Donate at least $25 on Giveth', 'Donate at least $100 on Giveth', 'Donate at least $250 on Giveth', 'Donate at least $1K on Giveth'],
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
    whyItMatters: 'Gitcoin Grants match community donations to accelerate public goods. Supporting rounds adds clear, positive signals to your onchain reputation.',
    howToProgress: 'Open Gitcoin Grants and connect your wallet (OP Mainnet supported for many rounds). Select grantees, set amounts, and complete checkout (Quadratic Funding rounds may require passport/verification). Confirm the donation transaction(s) and keep receipts for your records.',
    tiers: ['Donate at least $25 on Gitcoin', 'Donate at least $100 on Gitcoin', 'Donate at least $250 on Gitcoin', 'Donate at least $1K on Gitcoin'],
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
    whyItMatters: 'Worldcoin verification provides a sybil-resistance signal (one-human-per-proof) that some apps use to prevent spam and enable fair distributions.',
    howToProgress: 'Install World App on your phone. Create or restore your account and find a nearby Orb to schedule a verification. Complete the in-person verification; your World ID will be available in the app.',
    tiers: ['Get verified with Worldcoin'],
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
    whyItMatters: 'World User tracks how actively you transact on World. Consistent usage signals that you are not just verified, but also an engaged participant in the network’s economy.',
    howToProgress: 'Set up a wallet that supports the World chain (for example via World App or a compatible EVM wallet once support is available). Bridge or receive funds on World so you can pay gas and interact with apps. Use World regularly: send transactions, interact with dapps, and move value onchain. As your total transaction count on World increases, you progress through the different tiers of the badge.',
    tiers: ['5 transactions made on World', '20 transactions made on World', '50 transactions made on World', '100 transactions made on World', '250 transactions made on World'],
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
    whyItMatters: 'Base User recognizes consistent onchain usage of Base, the Ethereum L2 built with the OP Stack and incubated by Coinbase. Activity here shows that you are actively exploring apps and contributing to liquidity and usage on Base.',
    howToProgress: 'Bridge ETH to Base using an official or trusted bridge so you can pay gas. Connect your wallet to Base-native or Superchain apps and start using them (swaps, mints, deposits, payments, etc.). Use Base regularly over time; every onchain interaction counts toward your total transactions. As your total transaction count on Base increases, you move up through the different badge tiers.',
    tiers: ['5 transactions made on Base', '20 transactions made on Base', '50 transactions made on Base', '100 transactions made on Base', '250 transactions made on Base'],
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
    whyItMatters: 'OP Mainnet User highlights your direct usage of OP Mainnet itself, not just other OP Stack chains. Regular activity here signals that you are helping secure, test, and grow the core Optimism ecosystem.',
    howToProgress: 'Add OP Mainnet to your wallet (most wallets support it natively or via chain lists). Bridge ETH or other supported assets to OP Mainnet so you can pay gas and transact. Use OP Mainnet apps regularly: swaps, mints, bridges, deposits, governance, and other dapp interactions. As your total transaction count on OP Mainnet increases, you progress through the different tiers of the badge.',
    tiers: ['5 transactions made on OP Mainnet', '20 transactions made on OP Mainnet', '50 transactions made on OP Mainnet', '100 transactions made on OP Mainnet', '250 transactions made on OP Mainnet'],
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
    whyItMatters: 'Mode User captures your direct transactional activity on Mode. Consistent usage helps bootstrap liquidity, test apps, and grow Mode as a Superchain-aligned L2.',
    howToProgress: 'Bridge ETH to Mode using an official or trusted bridge so you can pay gas. Connect your wallet to Mode-native apps or the Mode Early campaign page. Use Mode regularly: swaps, mints, deposits, lending, and other dapp interactions all count. As your total transaction count on Mode increases, you move up through the different badge tiers.',
    tiers: ['5 transactions made on Mode', '20 transactions made on Mode', '50 transactions made on Mode'],
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
    whyItMatters: 'Unichain User tracks how actively you transact on Unichain. Consistent activity here shows you are exploring Uniswap-native apps, providing liquidity, and helping grow this OP Stack network.',
    howToProgress: 'Bridge ETH or other supported assets to Unichain using an official or trusted bridge so you can pay gas. Add Unichain to your wallet (via chain list or the Unichain app) and connect to supported dapps. Use Unichain regularly: swaps, liquidity provision, mints, deposits, and other dapp interactions all count. As your total transaction count on Unichain increases, you move up through the different badge tiers.',
    tiers: ['5 transactions made on Unichain', '20 transactions made on Unichain', '50 transactions made on Unichain', '100 transactions made on Unichain', '250 transactions made on Unichain'],
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
    whyItMatters: 'Lisk User showcases your direct onchain activity on the Lisk network. Regular usage helps test apps, deepen liquidity, and support the growth of Lisk as part of the broader Superchain.',
    howToProgress: 'Bridge ETH or other supported assets to Lisk so you can pay gas for your transactions. Add Lisk to your wallet via the official Lisk portal or supported chain lists and connect to Lisk dapps. Use Lisk regularly: swaps, mints, deposits, lending, and other dapp interactions all count toward your total. As your total transaction count on Lisk increases, you move up through the different badge tiers.',
    tiers: ['5 transactions made on Lisk', '20 transactions made on Lisk', '50 transactions made on Lisk', '100 transactions made on Lisk', '250 transactions made on Lisk'],
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
    whyItMatters: 'Soneium User highlights your direct activity on Soneium. Consistent usage helps test dapps, deepen liquidity, and support the growth of this Ethereum-aligned L2.',
    howToProgress: 'Bridge ETH or other supported assets to Soneium so you can pay gas for your transactions. Add Soneium to your wallet via official chain configs or supported chain lists, then connect to Soneium dapps. Use Soneium regularly: swaps, mints, deposits, lending, and other dapp interactions all count toward your total. As your total transaction count on Soneium increases, you move up through the different badge tiers.',
    tiers: ['5 transactions made on Soneium', '20 transactions made on Soneium', '50 transactions made on Soneium', '100 transactions made on Soneium', '250 transactions made on Soneium'],
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
    whyItMatters: 'Ink User showcases your direct onchain activity on Ink. Consistent usage helps bootstrap liquidity, test apps, and bridge Kraken users into DeFi on the Superchain.',
    howToProgress: 'Bridge ETH or other supported assets to Ink so you can pay gas for your transactions. Add Ink to your wallet via the official Ink portal or supported chain lists, then connect to Ink dapps. Use Ink regularly: swaps, mints, deposits, lending, and other dapp interactions all count toward your total. As your total transaction count on Ink increases, you move up through the different badge tiers.',
    tiers: ['5 transactions made on Ink', '20 transactions made on Ink', '50 transactions made on Ink', '100 transactions made on Ink', '250 transactions made on Ink'],
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
    whyItMatters: 'Recognizes early power users on OP Mainnet who actively explore features and level up quickly.',
    howToProgress: 'Create your account and start using the product on OP Mainnet. Complete actions that grant XP and progress through levels. Reach Level 3 — only the first 100 accounts qualify.',
    tiers: ['Reach Level 3'],
    links: []
  },
  {
    id: 'super-cohort',
    image: '/badges/sc24badge.png',
    name: 'Super Cohort 24',
    tag: 'Optimism',
    description: 'Graduated from Super Cohort 0. Note: this program/badge is no longer available to join.',
    whyItMatters: 'Super Cohort 24 celebrated the first graduating cohort (Cohort 0) of Superchain contributors. It’s a legacy badge that recognizes early community members.',
    howToProgress: 'Participate in Super Cohort 0 activities and complete all requirements. Graduate from the cohort to receive recognition.',
    tiers: ['Complete Super Cohort 0'],
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
    whyItMatters: 'This badge showcases consistent multi-chain usage in the Superchain ecosystem and encourages exploring several OP Stack networks.',
    howToProgress: 'Bridge to and use apps on Superchain networks (e.g., Base, OP Mainnet, Mode, Zora, Frax, Metal). Transact normally: swaps, mints, bridges, payments, deploys — they all count. Accumulate transactions during Season 7 to reach higher tiers.',
    tiers: ['25 transactions made on Superchain in Season 7', '70 transactions made on Superchain in Season 7', '150 transactions made on Superchain in Season 7', '350 transactions made on Superchain in Season 7', '1K transactions made on Superchain in Season 7'],
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
    whyItMatters: 'Demonstrates active, multi-chain participation in the Superchain ecosystem during Season 8.',
    howToProgress: 'Use apps across OP Stack networks (Base, OP Mainnet, Mode, Zora, Frax, Metal, etc.). Do everyday transactions (swaps, mints, bridges, payments, deploys). Accumulate transactions during Season 8 to hit higher tiers.',
    tiers: ['25 transactions made on Superchain in Season 8', '70 transactions made on Superchain in Season 8', '150 transactions made on Superchain in Season 8', '350 transactions made on Superchain in Season 8', '1K transactions made on Superchain in Season 8'],
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
    whyItMatters: 'Self provides privacy-preserving country verification. Some apps use it for sybil resistance and eligibility checks while keeping personal data off-chain.',
    howToProgress: 'Install the Self app on Android or iOS. Create your account and complete the in-app country verification flow. Link/use the same wallet in your dapps to present your proof when required.',
    tiers: ['Verify your Country via Self'],
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
    whyItMatters: 'SuperStacks rewarded cross-ecosystem activity with XP during Season 7, encouraging users to explore multiple OP Stack chains and apps.',
    howToProgress: 'Participate in SuperStacks Season 7 activities across supported chains. Earn XP by completing eligible onchain actions during the campaign window. Accumulate enough XP to reach higher tiers.',
    tiers: ['100K XP earned during SuperStacks campaign', '1M XP earned during SuperStacks campaign', '5M XP earned during SuperStacks campaign', '10M XP earned during SuperStacks campaign', '25M XP earned during SuperStacks campaign'],
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
    whyItMatters: 'Lisk Airdrop Season 1 rewards early onchain usage of the Lisk network. By joining the verified airdrop cohort and completing tasks, you build a clear Lisk-specific footprint that can convert into both LSK rewards and Superchain reputation.',
    howToProgress: 'Open the official Lisk Airdrop portal. Connect an EVM-compatible wallet (e.g. MetaMask, Rabby, Phantom) and use the portal’s “Switch to Lisk” flow to add the Lisk network. Bridge a small amount of ETH to Lisk so you can pay gas for your transactions. Click “Verify with Guild” in the portal and complete at least 2 of the listed requirements to join the Verified Airdrop participant Guild. Back on the portal, enter the referral code se2024 to unlock the Season 1 dashboard, then complete tasks over time to accumulate points for the airdrop.',
    tiers: ['Join the Verified Airdrop participant Guild for Lisk Season 1'],
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
    whyItMatters: 'Lisk Surge highlighted activity on the Lisk OP Stack chain by rewarding users who earned LSK during the campaign.',
    howToProgress: 'Use apps on Lisk and participate in eligible activities during the campaign window. Earn LSK through supported actions and accumulate totals to progress.',
    tiers: ['5 LSK earned during the Lisk Surge campaign', '25 LSK earned during the Lisk Surge campaign', '100 LSK earned during the Lisk Surge campaign', '1K LSK earned during the Lisk Surge campaign', '5K LSK earned during the Lisk Surge campaign'],
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
    whyItMatters: 'Using the WETH Super Vaults puts your ETH to work directly in the Superchain ecosystem, helping deepen liquidity on OP Mainnet while you earn yield and points.',
    howToProgress: 'Open the Superchain Vaults page on OP Mainnet. Connect your wallet and choose the WETH Super Vaults product. Deposit ETH into the vaults and keep your position to maintain your badge progress.',
    tiers: ['Deposit ETH in the WETH Super Vaults (Tier 1)', 'Deposit more ETH in the WETH Super Vaults (Tier 2)', 'Deposit more ETH in the WETH Super Vaults (Tier 3)', 'Deposit more ETH in the WETH Super Vaults (Tier 4)', 'Deposit more ETH in the WETH Super Vaults (Tier 5)'],
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
    whyItMatters: 'Optimism Citizenship recognizes active, values-aligned contributors to the Optimism Collective. Being a Citizen gives you a voice in Citizens\' House governance and signals long-term commitment to the ecosystem.',
    howToProgress: 'Explore Optimism governance and community channels to understand how Citizenship is granted. Contribute to the Optimism ecosystem (building, governance, public goods, community) so you can become eligible for a Citizenship grant. Once one of your wallets is a Citizen wallet, keep ownership of that wallet to satisfy the badge condition.',
    tiers: ['Be the owner of a wallet who is a Citizen'],
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