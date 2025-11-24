import React, { useState, useEffect } from 'react';
import sdk from '@farcaster/frame-sdk';
import {
  ConnectButton,
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
import {
  useAccount,
  useBalance,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
  useTransactionCount,
} from 'wagmi';
import { base } from 'wagmi/chains';
import { formatUnits } from 'viem';
import {
  Settings,
  Wallet,
  Globe,
  Flame,
  ExternalLink,
  X,
  Loader2,
  Zap,
  ArrowRight
} from 'lucide-react';

import { Card } from './components/Card';
import { BadgeItem } from './components/BadgeItem';
import { BadgeIcon } from './components/BadgeIcon';
import {
  THEMES,
  SECTION_1_LINKS,
  BADGES_DATA,
  FOOTER_LINKS,
  ROUTINE_ITEMS,
} from './constants';
import { ThemeMode, Badge } from './types';

// Real Contract on Base
const MOCK_CONTRACT_ADDRESS = '0x899bffa2af4504eec57b8c8f12d8150c4d792830' as const;
const MOCK_ABI = [
  {
    type: 'function',
    name: 'checkIn',
    stateMutability: 'nonpayable',
    inputs: [],
    outputs: [],
  },
  {
    type: 'function',
    name: 'streak',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ type: 'uint256' }],
  },
] as const;

const App: React.FC = () => {
  // --- Theming State ---
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const theme = THEMES[themeMode];

  // --- Modal State ---
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  // --- Web3 Hooks ---
  const { address, isConnected, chain } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  const { data: balanceData } = useBalance({
    address: address,
  });

  const { data: txCountData } = useTransactionCount({
    address: address,
  });

  // --- Contract Hooks (Simulation) ---
  const { data: streakData, refetch: refetchStreak } = useReadContract({
    address: MOCK_CONTRACT_ADDRESS,
    abi: MOCK_ABI,
    functionName: 'streak',
    args: address ? [address] : undefined,
    query: {
        enabled: !!address
    }
  });

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed) {
        refetchStreak();
    }
  }, [isConfirmed, refetchStreak]);

  // --- Farcaster Initialization ---
  useEffect(() => {
    const init = async () => {
        try {
            await sdk.actions.ready();
        } catch (e) {
            console.warn("Farcaster SDK not found or failed to load");
        }
    };
    init();
  }, []);

  // --- Theme Application ---
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-app', theme.bgApp);
    root.style.setProperty('--bg-card', theme.bgCard);
    root.style.setProperty('--text-primary', theme.textPrimary);
    root.style.setProperty('--text-secondary', theme.textSecondary);
    root.style.setProperty('--border-color', theme.borderColor);
    root.style.setProperty('--accent-color', theme.accentColor);
    root.style.setProperty('--accent-hover', theme.accentHover);
  }, [theme]);

  // --- Handlers ---
  const toggleTheme = () => {
    setThemeMode((prev) => {
      if (prev === 'light') return 'dark';
      return 'light';
    });
  };

  const handleCheckIn = () => {
    if (!isConnected || !address) {
        if (openConnectModal) openConnectModal();
        return;
    }
    // Simulate write
    try {
        writeContract({
            address: MOCK_CONTRACT_ADDRESS,
            abi: MOCK_ABI,
            functionName: 'checkIn',
            args: [],
            account: address,
            chain: base,
        });
    } catch (e) {
        console.error("Simulation error (expected if no wallet connected to real chain)", e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center overflow-x-hidden font-sans pb-10" style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}>
      
      {/* --- HEADER --- */}
      <header className="w-full max-w-[1100px] mx-auto p-4 flex items-center gap-3 flex-wrap">
         {/* Logo Placeholder */}
         <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-white/20 shrink-0">
             <div className="w-6 h-6 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                <span className="text-[10px] font-bold text-yellow-400">DB</span>
             </div>
         </div>
         
         <div className="mr-1 leading-tight flex-1">
             <div className="text-xl md:text-2xl font-extrabold text-white">Daily Base App</div>
             <div className="text-xs md:text-sm opacity-80 text-blue-100">Ecosystem · Staking · Governance</div>
         </div>

         {/* Right Side Actions */}
         <div className="flex items-center gap-2">
            {!isConnected ? (
                <button
                    onClick={openConnectModal}
                    className="flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-bold bg-white text-[#003AD1] hover:bg-gray-100 transition-colors shadow-lg"
                >
                    <Wallet size={16} /> Connect Wallet
                </button>
            ) : (
                <>
                    {/* Address Button */}
                    <button 
                        onClick={openAccountModal}
                        className="hidden sm:flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-bold bg-black text-white hover:bg-gray-900 transition-colors border border-white/10"
                    >
                         <Wallet size={16} />
                         {address?.slice(0, 6)}...{address?.slice(-4)}
                    </button>

                    {/* Streak / Check-in Button */}
                    <button
                        onClick={handleCheckIn}
                        disabled={isPending || isConfirming || isConfirmed}
                        className={`
                            flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-bold border transition-all shadow-md
                            ${isConfirmed 
                                ? 'bg-green-500 text-white border-green-600' 
                                : 'bg-[#FFC800] text-black border-[#E6B400] hover:bg-[#FFD633]'
                            }
                        `}
                    >
                        {isPending || isConfirming ? (
                            <Loader2 className="animate-spin w-4 h-4" />
                        ) : (
                            <Flame className={`w-4 h-4 ${isConfirmed ? 'fill-white' : 'fill-black'}`} />
                        )}
                        <span className="hidden sm:inline">Daily Streak:</span> 
                        <span className="font-mono text-base">{streakData ? String(streakData) : '0'}</span>
                    </button>
                </>
            )}

            <button 
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#FFEC99] text-black hover:bg-[#FFD633] transition-colors shadow-sm"
                aria-label="Toggle Theme"
            >
                {themeMode === 'light' ? '☀️' : '🌗'}
            </button>
         </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="w-full max-w-[1100px] px-4 flex flex-col gap-6 mt-4">
        
        {/* --- NEW WALLET CARD DESIGN --- */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl relative overflow-hidden w-full text-black min-h-[140px] flex flex-col justify-center border border-white/20">
             {/* Watermark */}
             <div className="absolute -right-6 -bottom-8 opacity-[0.05] pointer-events-none transform rotate-[-10deg]">
                <Wallet size={180} color="black" />
             </div>

             <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Wallet Balance</h2>
             
             {!isConnected ? (
                 <div className="flex flex-col items-start gap-1">
                    <div className="text-2xl font-medium text-gray-800">Not connected</div>
                    <button 
                        onClick={openConnectModal}
                        className="text-sm font-bold text-[#003AD1] flex items-center gap-1 hover:underline"
                    >
                        Connect to show status <ArrowRight size={14} />
                    </button>
                 </div>
             ) : (
                 <div className="flex flex-wrap items-baseline gap-3 z-10">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        {balanceData
                            ? parseFloat(formatUnits(balanceData.value, balanceData.decimals)).toFixed(4)
                            : '0.0000'}
                    </div>
                    <div className="text-xl md:text-2xl font-normal text-gray-500">
                        {balanceData?.symbol}
                        <span className="ml-2 text-lg text-gray-400">
                            ({txCountData ? txCountData.toString() : '0'} txs)
                        </span>
                    </div>
                 </div>
             )}
        </div>

        {/* --- SPLIT SECTION: ECOSYSTEM (LEFT) & ROUTINES (RIGHT) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            
            {/* ECOSYSTEM (LEFT) */}
            <Card className="flex flex-col items-start text-left p-6 h-full">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2 text-secondary">Ecosystem</div>
                <div className="opacity-90 mb-4 text-sm leading-relaxed text-secondary">
                    Explore core identity & impact apps in the Base ecosystem.
                </div>
                
                <div className="flex flex-wrap justify-start gap-2 mb-4">
                    {SECTION_1_LINKS.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 h-8 px-3 rounded-md text-sm font-medium border border-white/20 bg-white/10 text-primary hover:bg-white/20 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="mt-auto">
                    <a 
                        href="https://www.base.org/ecosystem" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-sm font-bold flex items-center gap-1 hover:underline cursor-pointer text-primary"
                    >
                        Explore All Apps <ArrowRight size={12} />
                    </a>
                </div>
            </Card>

            {/* ROUTINES (RIGHT) */}
            <Card className="text-center p-6 h-full flex flex-col items-center">
                <div className="font-extrabold text-2xl mb-2 text-primary">Routines</div>
                <div className="opacity-80 text-sm max-w-sm text-secondary mb-6">
                    Keep a healthy onchain cadence: learn, earn, and keep reputation active.
                </div>

                <div className="flex flex-wrap justify-center gap-3 w-full">
                    {ROUTINE_ITEMS.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.url}
                            className={`
                                flex items-center justify-center h-10 px-5 rounded-md text-sm font-bold transition-all flex-grow md:flex-grow-0
                                ${item.primary 
                                    ? 'bg-black text-white hover:bg-gray-900 border border-transparent' 
                                    : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
                                }
                            `}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </Card>

        </div>

        {/* --- BADGES SECTION --- */}
        <Card className="p-0 overflow-hidden">
            <div className="flex flex-col items-center p-6 border-b border-white/10 text-center">
                <div className="font-extrabold text-2xl mb-2 text-primary">Badges</div>
                <div className="opacity-80 text-sm max-w-lg text-secondary">
                    Short, Base-aligned explanations to earn Superchain Eco badges with confidence.
                </div>
            </div>
            
            <div className="flex flex-col w-full px-6 pb-2">
                {BADGES_DATA.map((badge) => (
                    <BadgeItem key={badge.id} badge={badge} onSelect={setSelectedBadge} />
                ))}
            </div>
        </Card>

      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full flex justify-center gap-3 py-6 mt-4">
          {FOOTER_LINKS.map((link, i) => (
            <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md hover:opacity-100 opacity-90 transition-opacity text-white"
            >
                <ExternalLink size={16} />
            </a>
          ))}
      </footer>

      {/* --- MODAL --- */}
      {selectedBadge && (
        <>
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setSelectedBadge(null)}
            />
            <div className="fixed z-50 bg-[#F8FAFC] dark:bg-[#1E293B] w-full md:w-[600px] max-h-[90vh] bottom-0 left-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 rounded-t-2xl md:rounded-xl shadow-2xl overflow-hidden flex flex-col animate-slide-up-mobile md:animate-fade-in text-[#0F172A] dark:text-white">
                
                {/* Header Section */}
                <div className="p-6 pb-2 flex justify-between items-start shrink-0">
                    <div className="flex gap-4 items-center">
                        <BadgeIcon name={selectedBadge.name} className="w-16 h-16 text-2xl rounded-xl" />
                        <div>
                            <h3 className="text-xl font-extrabold leading-tight">{selectedBadge.name}</h3>
                            <div className="text-sm opacity-60 mt-1 font-medium">Chain: {selectedBadge.tag}</div>
                        </div>
                    </div>
                    <button 
                        onClick={() => setSelectedBadge(null)} 
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 pt-2 overflow-y-auto flex-1 space-y-6"> 
                    {/* Why it matters */}
                    <div>
                        <h4 className="font-bold text-sm mb-2">Why it matters</h4>
                        <p className="text-sm opacity-80 leading-relaxed">
                            {selectedBadge.whyItMatters}
                        </p>
                    </div>

                    {/* How to progress */}
                    <div>
                        <h4 className="font-bold text-sm mb-2">How to progress</h4>
                        <div className="text-sm opacity-80 leading-relaxed">
                             {selectedBadge.howToProgress}
                        </div>
                    </div>

                    {/* Tiers */}
                    <div>
                        <h4 className="font-bold text-sm mb-2">Tiers</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            {selectedBadge.tiers.map((tier, idx) => (
                                <li key={idx} className="text-sm opacity-80 pl-1">{tier}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Flexible Footer Action Buttons */}
                <div className="shrink-0 w-full p-4 bg-white dark:bg-[#1E293B] border-t border-gray-200 dark:border-white/10 flex flex-wrap gap-3">
                    {selectedBadge.links.map((link, idx) => (
                        <a 
                            key={idx}
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-between px-6 h-12 flex-1 min-w-[40%] bg-black text-white font-bold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
                        >
                            <span>{link.name}</span>
                            <ExternalLink size={18} className="ml-2" />
                        </a>
                    ))}
                </div>
            </div>
        </>
      )}

    </div>
  );
};

export default App;