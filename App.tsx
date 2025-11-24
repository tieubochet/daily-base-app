import React, { useState, useEffect } from 'react';
import sdk from '@farcaster/frame-sdk';
import {
  ConnectButton,
  useConnectModal,
} from '@rainbow-me/rainbowkit';
import {
  useAccount,
  useBalance,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { formatUnits } from 'viem';
import {
  Settings,
  Moon,
  Sun,
  Wallet,
  Globe,
  ShieldCheck,
  Award,
  ExternalLink,
  X,
  Loader2,
  Zap,
} from 'lucide-react';

import { Card } from './components/Card';
import { BadgeItem } from './components/BadgeItem';
import {
  THEMES,
  SECTION_1_LINKS,
  BADGES_DATA,
  FOOTER_LINKS,
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
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { data: balanceData } = useBalance({
    address: address,
  });

  // --- Contract Hooks (Simulation) ---
  const { data: streakData } = useReadContract({
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
        });
    } catch (e) {
        console.error("Simulation error (expected if no wallet connected to real chain)", e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center overflow-x-hidden font-sans pb-10" style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}>
      
      {/* --- HEADER --- */}
      <header className="w-full max-w-[1100px] mx-auto p-4 pt-4 flex items-center gap-3 flex-wrap">
         {/* Logo Placeholder */}
         <div className="w-8 h-8 rounded-lg bg-blue-500/50 flex items-center justify-center border border-white/20">
             <Globe size={18} className="text-white" />
         </div>
         
         <div className="mr-1 leading-[1.05]">
             <div className="text-[22px] font-extrabold text-white">Daily Base App</div>
             <div className="text-xs opacity-90">Build your onchain habit</div>
         </div>

         {/* Superchain Button */}
         <a 
            href="https://www.superchain.eco/" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-xl text-sm font-semibold border border-white/20 bg-white/10 text-[#E6E8F0] hover:bg-white/20 transition-colors"
         >
            <Zap size={14} /> Superchain
         </a>

         <div className="flex-1"></div>

         {/* Connect Button */}
         <div className="flex items-center gap-2">
            {!isConnected && (
                <button
                    onClick={openConnectModal}
                    className="flex items-center gap-2 h-9 px-3 rounded-xl text-sm font-semibold border border-white/20 bg-white/10 text-[#E6E8F0] hover:bg-white/20 transition-colors"
                >
                    Connect Wallet
                </button>
            )}
            {isConnected && (
                 <div className="scale-90 origin-right">
                    <ConnectButton accountStatus="avatar" chainStatus="none" showBalance={false} />
                 </div>
            )}
            
            {/* Social / Theme Buttons */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center justify-center w-9 h-9 rounded-xl border border-white/20 bg-transparent text-[#E6E8F0] hover:bg-white/10">
                <Settings size={18} />
            </a>

            <button 
                onClick={toggleTheme}
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/20 bg-transparent text-[#E6E8F0] hover:bg-white/10"
            >
                {themeMode === 'light' ? '🌗' : '☀️'}
            </button>
         </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="w-full max-w-[1100px] px-4 flex flex-col gap-6 mt-2">
        
        {/* --- SESSION WALLET (Preserved functionality) --- */}
        <Card className="p-0 overflow-hidden">
            <div className="p-6 relative">
                 <div className="absolute top-0 right-0 p-6 opacity-10 text-white">
                    <Wallet size={80} />
                 </div>
                 <h2 className="text-sm font-medium opacity-80 mb-1">Total Balance</h2>
                 <div className="text-3xl font-bold mb-4">
                    {isConnected && balanceData
                        ? `${parseFloat(formatUnits(balanceData.value, balanceData.decimals)).toFixed(4)} ${balanceData.symbol}`
                        : '---'}
                 </div>

                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-4 mt-2">
                    <div>
                        <span className="text-xs opacity-70 block">Daily Streak</span>
                        <span className="text-xl font-mono font-bold text-accent">
                             {streakData ? String(streakData) : '0'} Days
                        </span>
                    </div>
                    <button
                        onClick={handleCheckIn}
                        disabled={isPending || isConfirming || isConfirmed}
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-all
                            ${isConfirmed
                                ? 'bg-green-500/80 border border-green-400 text-white'
                                : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'}
                        `}
                    >
                        {isPending || isConfirming ? (
                            <Loader2 className="animate-spin w-4 h-4" />
                        ) : isConfirmed ? (
                            <ShieldCheck className="w-4 h-4" />
                        ) : (
                            <Zap className="w-4 h-4" />
                        )}
                        {isConfirmed ? 'Checked In' : 'Daily Check-in'}
                    </button>
                 </div>
            </div>
        </Card>

        {/* --- ECOSYSTEM SECTION --- */}
        <Card className="text-center p-6">
            <div className="font-extrabold text-lg mb-1">Ecosystem</div>
            <div className="opacity-90 mb-4 text-sm">Explore Base resources & tools.</div>
            <div className="flex flex-wrap justify-center gap-2">
                {SECTION_1_LINKS.map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 h-9 px-3 rounded-xl text-sm font-semibold border border-white/20 bg-white/10 text-[#E6E8F0] hover:bg-white/20 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </Card>

        {/* --- BADGES SECTION --- */}
        <Card className="text-center p-6">
            <div className="font-extrabold text-lg mb-1">Badges</div>
            <div className="opacity-90 mb-4 text-sm">Short, Base-aligned explanations to earn Superchain Eco badges with confidence.</div>
            
            <div className="flex flex-col items-center gap-4 mt-4 w-full">
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
            <div className="fixed z-50 bg-[#1E293B] border border-white/10 shadow-2xl w-full md:w-[600px] h-[85vh] md:h-auto bottom-0 left-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 rounded-t-2xl md:rounded-xl overflow-y-auto animate-slide-up-mobile md:animate-fade-in text-white">
                <div className="sticky top-0 bg-[#1E293B]/95 backdrop-blur z-10 p-4 border-b border-white/10 flex justify-between items-center">
                    <h3 className="text-lg font-bold">{selectedBadge.name}</h3>
                    <button onClick={() => setSelectedBadge(null)} className="p-1 hover:bg-white/10 rounded-full"><X size={24} /></button>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex flex-col items-center text-center">
                         <img src={selectedBadge.image} alt={selectedBadge.name} className="w-24 h-24 rounded-2xl mb-4 border border-white/10" />
                         <span className="inline-block px-3 py-1 bg-white/10 text-xs font-bold rounded-full border border-white/20 mb-2">
                            {selectedBadge.tag}
                         </span>
                         <p className="text-[#C9D1D9]">{selectedBadge.description}</p>
                    </div>

                    <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                        <h4 className="text-xs font-bold uppercase text-[#94A3B8] mb-2">Why it matters</h4>
                        <p className="text-sm">{selectedBadge.whyItMatters}</p>
                    </div>

                    <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                         <h4 className="text-xs font-bold uppercase text-[#94A3B8] mb-2">How to progress</h4>
                         <p className="text-sm">{selectedBadge.howToProgress}</p>
                    </div>
                    
                    <div>
                        <h4 className="text-xs font-bold uppercase text-[#94A3B8] mb-3">Tiers</h4>
                        <div className="flex gap-2 flex-wrap">
                            {selectedBadge.tiers.map((tier, idx) => (
                                <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium">
                                    {tier}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-4">
                        {selectedBadge.links.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-xl hover:opacity-90 transition-opacity">
                                {link.name} <ExternalLink size={14} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
      )}

    </div>
  );
};

export default App;