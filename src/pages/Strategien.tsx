import React, { useState, useEffect } from 'react';

export default function Strategien() {
  const [liveSignal, setLiveSignal] = useState<string[]>([
    "BTC/USD Long @ 62350 – TP 62800",
    "ETH Short @ 3240 – SL 3270"
  ]);
  const [chartSrc] = useState(
    "https://s3.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=D&theme=dark&timezone=Etc%2FUTC&studies=%5B%5D&show_last=1&hidesidetoolbar=0&hidelegend=0&hideline=0&overrideoverlay=0"
  );

  // Fake "Echtzeit" – in echt: Discord-Webhook + Cron oder Serverless
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveSignal(prev => {
        const newSignal = [...prev];
        newSignal.push(`SOL/USDT Breakout @ ${Math.floor(Math.random() * 1000 + 140) + 140} – RR 3:1`);
        if (newSignal.length > 4) newSignal.shift();
        return newSignal;
      });
    }, 10000); // Alle 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <h1 className="text-6xl font-black text-center mb-16">STRATEGIEN & LIVE</h1>

      {/* Live Signals */}
      <section className="max-w-4xl mx-auto mb-16 bg-gray-950/50 p-6 rounded-2xl border border-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-neon-green">Aktive Signale</h2>
        <div className="space-y-3">
          {liveSignal.map((s, i) => (
            <p key={i} className="text-xl bg-gray-900 px-4 py-3 rounded-lg border-l-4 border-neon-purple">
              {s}
            </p>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">Update alle 10s – via Discord-Bot (intern)</p>
      </section>

      {/* Live Chart */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-neon-purple">BTC/USDT – 1D</h2>
        <iframe
          src={chartSrc}
          className="w-full h-96 border-none"
          title="TradingView Chart"
          allowTransparency={true}
        />
      </section>

      {/* Visualisierer: Breakout mit Pfeil */}
      <section className="max-w-4xl mx-auto bg-gray-950/50 p-8 rounded-2xl border border-gray-800">
        <h2 className="text-3xl font-black mb-6 text-neon-green">BREAKOUT-SCALP – VISUAL</h2>
        <div className="relative h-64 bg-gray-900 rounded-lg overflow-hidden">
          <svg viewBox="0 0 400 100" className="absolute inset-0 w-full h-full">
            {/* Preislinie */}
            <path d="M20 70 L80 70 L120 70 L180 80 L220 85 L280 90 L340 95 L380 98" fill="none" stroke="gray" strokeWidth="2" />
            {/* Breakout-Pfeil */}
            <polygon points="200,70 210,60 210,80" fill="#22c55e" stroke="none" />
            <line x1="200" y1="70" x2="380" y2="98" stroke="#22c55e" strokeWidth="3" strokeDasharray="5 5" />
            <text x="210" y="45" className="text-green-500 font-bold">Break!</text>
          </svg>
        </div>
        <p className="mt-6 text-lg text-gray-300">
          Entry: Grün-Pfeil → 5 Ticks darüber. Stop: Unter letztem Low. Take: 2:1 RR.
        </p>
      </section>
    </div>
  );
}
