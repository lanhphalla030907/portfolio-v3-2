import Lanyard from "@/components/Lanyard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-x-hidden font-sans text-gray-900 dark:text-gray-100">
      <ThemeToggle />

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center justify-start py-20 px-6 gap-10 min-h-screen">
        {/* LEFT - Mobile */}
        <section className="w-full text-center mt-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 tracking-wider uppercase">
            Hello, I'm
          </p>
          <h1 className="text-6xl font-black leading-[0.8] tracking-tighter text-gray-900 dark:text-white">
            LANH
          </h1>
          <h1 className="text-6xl font-black leading-[0.8] tracking-tighter text-gray-900 dark:text-white mb-4">
            PHALLA
          </h1>
          <h2 className="text-xl font-light tracking-[0.2em] uppercase mb-6 text-gray-400 dark:text-gray-500">
            Web Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm max-w-[280px] mx-auto font-medium">
            I build modern web applications using React, Next.js, Laravel and
            embedded systems with ESP32.
          </p>
          <button className="mt-8 px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-all active:scale-95 text-xs font-bold tracking-widest uppercase">
            Contact Me →
          </button>
        </section>

        {/* CENTER - Mobile */}
        <div className="w-full h-[350px] -my-8">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>

        {/* RIGHT - Mobile */}
        <section className="w-full grid grid-cols-2 gap-y-10 gap-x-4 text-center pb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
              2+
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
              Year Learning
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
              15+
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
              Projects
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
              100%
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
              Passion
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
              KH
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
              Based in Cambodia
            </p>
          </div>
        </section>
      </div>

      <div className="hidden md:block relative h-screen overflow-hidden">
        <section className="absolute left-[8%] lg:left-[12%] xl:left-[18%] top-1/2 -translate-y-1/2 z-20 w-[240px] lg:w-[280px] xl:w-[320px]">
          <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm font-semibold mb-2 tracking-[0.2em] uppercase">
            Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.8] tracking-tighter text-gray-900 dark:text-white">
            LANH
          </h1>

          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter text-gray-900 dark:text-white mb-4 lg:mb-6">
            PHALLA
          </h1>

          <h2 className="text-xl lg:text-2xl xl:text-2xl font-light tracking-[0.3em] uppercase mb-6 lg:mb-8 text-gray-400 dark:text-gray-500">
            Web Developer
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base font-medium max-w-[260px] lg:max-w-none">
            I build modern web applications using React, Next.js, Laravel and
            embedded systems with ESP32.
          </p>

          <button className="mt-8 lg:mt-10 px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-all hover:px-10 active:scale-95 text-xs lg:text-sm font-bold tracking-widest uppercase">
            Contact Me →
          </button>
        </section>

        {/* CENTER - Desktop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full pointer-events-auto">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>

        {/* RIGHT - Desktop */}
        <section className="absolute right-[8%] lg:right-[12%] xl:right-[18%] top-1/2 -translate-y-1/2 z-20 text-right space-y-10 lg:space-y-12">
          <div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
              2+
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest mt-1">
              Year Learning
            </p>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
              15+
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest mt-1">
              Projects
            </p>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
              100%
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest mt-1">
              Passion
            </p>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
              KH
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest mt-1">
              Based in Cambodia
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
