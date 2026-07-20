import Lanyard from "@/components/Lanyard";
import { ThemeToggle } from "@/components/ThemeToggle";
import LightRays from "@/components/LightRays";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-x-hidden font-sans text-gray-900 dark:text-gray-100">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40 dark:opacity-60">
          <LightRays
            raysOrigin="top-center"
            raysColor="#6366f1"
            raysSpeed={0.5}
            lightSpread={1.2}
            rayLength={1.8}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.1),transparent_70%)]" />
      </div>

      <ThemeToggle />

      {/* Mobile Layout - KEEP ORIGINAL */}
      <div className="relative z-10 md:hidden flex flex-col items-center justify-start py-20 px-6 gap-10 min-h-screen">
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

        <div className="w-full h-[350px] -my-8">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>

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

      {/* Desktop Layout - KEEP EVERYTHING ORIGINAL, just add max-w-7xl and responsive positioning */}
      <div className="relative z-10 hidden md:block h-screen overflow-hidden">
        <div className="relative w-full h-full max-w-9xl mx-auto">
          
          {/* LEFT - KEEP ORIGINAL SIZE */}
          <section className="absolute left-[8%] lg:left-[12%] xl:left-[18%] top-1/2 -translate-y-1/2 z-20 w-[240px] lg:w-[280px] xl:w-[320px]">
            <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm font-semibold mb-2 tracking-[0.2em] uppercase">
              Hello, I&apos;m
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

          {/* CENTER - Lanyard KEEP ORIGINAL SIZE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full pointer-events-auto">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>

          {/* RIGHT - KEEP ORIGINAL SIZE */}
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
      </div>
      
      <SkillsMarquee/>
    </main>
  );
}