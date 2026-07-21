import Lanyard from "@/components/ui/Lanyard";
import { ThemeToggle } from "@/components/ThemeToggle";
import LightRays from "@/components/ui/LightRays";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen overflow-x-clip bg-white font-sans text-gray-900 transition-colors duration-500 dark:bg-zinc-950 dark:text-gray-100">
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

      {/* Flow layout stays active through tablet widths, preventing the hero from colliding. */}
      <div className="relative  flex min-h-screen flex-col items-center justify-start gap-10 px-6 py-20 lg:hidden sm:px-10">
        <section className="w-full text-center mt-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 tracking-wider uppercase">
            Hello, I&apos;
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

        <div className="-my-8 h-[350px] w-full max-w-md sm:h-[420px]">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>

        <section className="grid w-full max-w-lg grid-cols-2 gap-x-4 gap-y-10 pb-12 text-center">
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

      {/* The three-column layout begins only when there is room for the 3D scene. */}
      <div className="relative hidden min-h-[42rem] overflow-hidden lg:block lg:h-[max(100svh,42rem)]">
        <div className="site-container grid h-full grid-cols-[minmax(15rem,1fr)_minmax(20rem,30rem)_minmax(10rem,1fr)] items-center gap-4 xl:gap-8">
          
          {/* LEFT - KEEP ORIGINAL SIZE */}
          <section className="min-w-0 max-w-[20rem]">
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
          <div className="col-start-2 h-full min-h-[42rem]">
            <div className="h-full w-full">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>

          {/* RIGHT - KEEP ORIGINAL SIZE */}
          <section className=" min-w-0 justify-self-end text-right space-y-10 lg:space-y-12">
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
