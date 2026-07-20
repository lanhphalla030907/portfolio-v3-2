// "use client";

// import { Terminal } from "@/components/ui/terminal";
// import ProfileCard from "@/components/ProfileCard";

// export default function AboutMe() {
//   const iconUrl = "/globe.svg";
//   const avatarUrl = "/image3.png";

//   return (
//     <section
//       id="about"
//       className="relative max-w-7xl py-15 mx-auto"
//     >
//       <div>
//         {/* Heading */}
//         <div className="text-center mb-12 sm:mb-14">
//           <p className="text-blue-500 font-medium tracking-widest uppercase text-sm sm:text-base">
//             About Me
//           </p>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
//             Get to know me
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           {/* Terminal */}
//           <div className="w-full flex justify-center">
//             <Terminal
//               enableSound={false}
//               className="w-full max-w-md sm:max-w-xl lg:max-w-2xl"
//               commands={[
//                 "$ who am i",
//                 "$ education",
//                 "$ tech_stack",
//                 "$ current_goal",
//               ]}
//               outputs={{
//                 0: [
//                   "> My name is Phalla",
//                   "> I'm a second-year Computer Science student who enjoys solving real-world problems through software development. I specialize in building modern full-stack web applications, working across frontend, backend, and database systems. I'm passionate about clean architecture, responsive UI design, API development, and continuously improving my technical skills by building professional projects.",
//                 ],

//                 1: [
//                   "> Computer Science Student",
//                   "> Royal University of Phnom Penh",
//                 ],

//                 2: [
//                   "> React",
//                   "> Next.js",
//                   "> TypeScript and JavaScript",
//                   "> Laravel",
//                   "> Spring Boot",
//                   "> Express.js",
//                 ],

//                 3: ["> Become a Full Stack Web Developer"],
//               }}
//               typingSpeed={40}
//               delayBetweenCommands={900}
//             />
//           </div>

//           {/* Profile Card */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center">
//               {/* Glow */}
//               <div className="absolute inset-0 rounded-3xl blur-3xl bg-blue-500/20" />

//               <div className="scale-90 sm:scale-95 md:scale-100 origin-center">
//                 <ProfileCard
//                   name="Lanh Phalla"
//                   title="Web Developer"
//                   handle="javicodes"
//                   status="Online"
//                   contactText="Contact Me"
//                   avatarUrl={avatarUrl}
//                   showUserInfo={false}
//                   enableTilt={true}
//                   enableMobileTilt={false}
//                   onContactClick={() => console.log("Contact clicked")}
//                   behindGlowColor="rgba(125, 190, 255, 0.67)"
//                   iconUrl={iconUrl}
//                   behindGlowEnabled
//                   innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import ScrollReveal from "@/components/ScrollReveal";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function AboutMe() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        w-full
        "
      >
        {/* Label */}
        <div className="flex justify-center mb-10">
          <div
            className="
            flex
            items-center
            gap-2
            text-blue
            text-xl
            font-semibold
            uppercase
            tracking-widest
            "
          >
            <span className="text-2xl">✦</span>
            About Me
          </div>
        </div>

        {/* Main Text */}

        <div
          className="
          max-w-5xl
          mx-auto
          text-center
          "
        >
          <ScrollReveal
            baseOpacity={0.15}
            enableBlur
            baseRotation={2}
            blurStrength={3}
          >
            I'm Lanh Phalla, a passionate Web Developer with strong experience
            building modern web applications using React, Next.js, Laravel and
            embedded systems. I focus on creating clean, scalable and meaningful
            digital experiences that combine great design with powerful
            technology.
          </ScrollReveal>
           <InteractiveHoverButton>View More About Me</InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
