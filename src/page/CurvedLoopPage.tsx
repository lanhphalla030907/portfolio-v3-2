import CurvedLoop from "@/components/CurvedLoop";
import React from "react";

const CurvedLoopPage = () => {
  return (
    <div>
      <CurvedLoop marqueeText="Welcome to My Portfolio✦" />
      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ Web ✦ Design"
        speed={2}
        curveAmount={400}
        direction="right"
        interactive
        className="custom-text-style text-black"
      />
      <CurvedLoop />
    </div>
  );
};

export default CurvedLoopPage;
