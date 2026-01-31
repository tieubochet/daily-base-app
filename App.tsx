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
  ArrowRight,
  Share,
  CheckCircle2
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

// --- CONTRACT CONFIGURATION ---
// Địa chỉ Contract thật trên Base Mainnet (Daily Streak)
const CONTRACT_ADDRESS = '0x899bffa2af4504eec57b8c8f12d8150c4d792830' as const;

const CONTRACT_ABI = [
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

  // --- Real Contract Hooks ---
  
  // 1. Đọc dữ liệu Streak từ Blockchain
  const { data: streakData, refetch: refetchStreak } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'streak',
    args: address ? [address] : undefined,
    query: {
        enabled: !!address // Chỉ chạy khi đã kết nối ví
    }
  });

  // 2. Hook ghi dữ liệu (Check-in)
  const { writeContract, data: hash, isPending, error: writeError } = useWriteContract();

  // 3. Đợi transaction hoàn tất
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  // Tự động load lại streak mới khi check-in thành công
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
    
    // Gọi Contract thật
    writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'checkIn',
        args: [],
        chain: base, // Đảm bảo gọi trên Base Mainnet
    });
  };

  const handleShare = () => {
    const currentStreak = streakData ? String(streakData) : '0';
    
    const text = `🔥 I'm on a ${currentStreak}-day streak on Daily Base App! \n\nBuilding my onchain habit on @base 🔵`;
    
    // URL Frame của bạn (cập nhật nếu cần thiết)
    const embedUrl = 'https://farcaster.xyz/miniapps/H4cwzep265Hq/daily-base-app'; 
    
    const shareUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}&embeds[]=${encodeURIComponent(embedUrl)}`;
    sdk.actions.openUrl(shareUrl);
  };

  // Helper to render social icons
  const getSocialIcon = (name: string) => {
    const className = "w-5 h-5 fill-current";
    switch (name) {
      case 'X':
        return (
          <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        );
      case 'Discord':
        return (
          <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
          </svg>
        );
      case 'Guild':
      default:
        return (
          <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <line x1="22" y1="2" x2="11" y2="13"></line>
             <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center overflow-x-hidden font-sans pb-4" style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}>
      
      {/* --- HEADER --- */}
      <header className="w-full max-w-[1100px] mx-auto p-4 flex items-center gap-3 flex-wrap">
         {/* Logo Placeholder */}
         <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
             <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img 
                src="/img/logo.png" 
                alt="Daily Base App Logo" 
                className="w-10 h-10" 
              />
             </div>
         </div>
         
         <div className="mr-1 leading-tight flex-1">
             <div className="text-xl md:text-2xl font-extrabold text-white">Daily Base App</div>
             <div className="text-xs md:text-sm opacity-80 text-blue-100">Build your onchain habit</div>
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

                    {/* UPDATED: Check-in Button */}
                    <button
                        onClick={handleCheckIn}
                        disabled={isPending || isConfirming || isConfirmed}
                        className={`
                            flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-bold border transition-all shadow-md
                            ${isConfirmed 
                                ? 'bg-green-600 text-white border-green-500 cursor-default' 
                                : 'bg-[#FFC800] text-black border-[#E6B400] hover:bg-[#FFD633]'
                            }
                            ${(isPending || isConfirming) ? 'opacity-80 cursor-wait' : ''}
                        `}
                    >
                        {isPending || isConfirming ? (
                            <>
                                <Loader2 className="animate-spin w-4 h-4" />
                                <span className="hidden sm:inline">Processing...</span>
                            </>
                        ) : isConfirmed ? (
                            <>
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="hidden sm:inline">Checked In!</span>
                            </>
                        ) : (
                            <>
                                <Flame className="w-4 h-4 fill-black" />
                                <span className="hidden sm:inline">Streak:</span> 
                                <span className="font-mono text-base">{streakData ? String(streakData) : '0'}</span>
                            </>
                        )}
                    </button>

                    {/* Share Button */}
                    <button
                        onClick={handleShare}
                        className="flex items-center justify-center w-10 h-10 px-0 sm:px-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 border border-blue-500 transition-colors shadow-md ml-1"
                        title="Share your streak on Farcaster"
                    >
                        <Share size={18} />
                        <span className="hidden sm:inline ml-2 text-sm font-bold">Share</span>
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

      {/* --- ERROR MESSAGE DISPLAY --- */}
      {writeError && (
          <div className="w-full max-w-[1100px] px-4 mb-2 animate-fade-in">
            <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm text-center font-medium flex items-center justify-center gap-2">
                <X size={16} />
                <span>Transaction failed. You may have already checked in recently (24h cooldown).</span>
            </div>
          </div>
      )}

      {/* --- MAIN CONTENT --- */}
      <main className="w-full max-w-[1100px] px-4 flex flex-col gap-6 mt-4 flex-1">
        
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
      <footer className="w-full max-w-[1100px] px-4 mt-8">
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="text-secondary/60 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label={link.name}
              >
                {getSocialIcon(link.name)}
              </a>
            ))}
          </div>

          {/* Copyright Text */}
          <div className="text-[10px] md:text-xs text-secondary/40 text-center md:text-right font-medium">
            © 2025 Daily Base App. Inspired by wenaltszn.eth. Not affiliated with Base.
          </div>
        </div>
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