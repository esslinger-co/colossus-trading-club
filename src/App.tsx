import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15)_0%,transparent_50%)]"></div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4">
            COLOSSUS
            <span className="text-neon-purple">.</span>
          </h1>
          <p className="text-4xl md:text-6xl font-bold mb-6 text-neon-green">
            TRADING CLUB
          </p>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto mb-12 text-gray-300 font-light">
            Free. Raw. Real.  
            Kostenlose Signale, Charts, Diskussionen – für Trader, die ernst meinen.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a
              href="https://discord.gg/dein-discord-invite" // ← ECHTEN LINK EINFÜGEN!
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-neon-purple hover:bg-purple-600 font-black text-2xl rounded-xl shadow-2xl shadow-neon-purple/50 transition transform hover:scale-105"
            >
              DISCORD BEITRETEN
            </a>
            <a
              href="https://t.me/dein-telegram-link" // ← ECHTEN LINK EINFÜGEN!
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 border-2 border-neon-green hover:bg-neon-green/20 font-black text-2xl rounded-xl transition transform hover:scale-105"
            >
              TELEGRAM JOINEN
            </a>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 border border-gray-800 rounded-2xl hover:border-neon-purple transition">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-4xl font-bold mb-4 text-neon-purple">Kostenlose Signale</h3>
            <p className="text-xl text-gray-300">
              Tägliche Ideen für Crypto, Stocks, Futures – Entry, Exit, Risiko alles offen.
            </p>
          </div>
          <div className="text-center p-8 border border-gray-800 rounded-2xl hover:border-neon-green transition">
            <div className="text-6xl mb-6">🔥</div>
            <h3 className="text-4xl font-bold mb-4 text-neon-green">Offene Community</h3>
            <p className="text-xl text-gray-300">
              Kein Gatekeeping. Teile deine Trades, Wins, Losses – alle lernen mit.
            </p>
          </div>
          <div className="text-center p-8 border border-gray-800 rounded-2xl hover:border-neon-purple transition">
            <div className="text-6xl mb-6">🌐</div>
            <h3 className="text-4xl font-bold mb-4 text-neon-purple">Wissen teilen</h3>
            <p className="text-xl text-gray-300">
              Backtests, Strategien, News-Diskussionen – alles 100% gratis.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 px-6 text-center bg-gray-950">
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          Keine Finanzberatung. Trading birgt Risiken. Handle nur mit Geld, das du dir leisten kannst zu verlieren.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Colossus Trading Club – Powered by @esslinger-co</p>
        <p className="mt-2">Free forever. Join the Colossus.</p>
      </footer>
    </div>
  );
}

export default App;
