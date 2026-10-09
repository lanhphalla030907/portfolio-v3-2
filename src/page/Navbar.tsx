import CardNav from "@/components/ui/CardNav";
const logo = "/name.png";

export const Navbar = () => {
  const items = [
    {
      label: "Main Page",
      href: "/",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "About me", href: "/#about", ariaLabel: "Go to about me" },
        {
          label: "Tech stack",
          href: "/#tech-stack",
          ariaLabel: "Go to tech stack",
        },
        {
          label: "Select Project",
          href: "/#select-project",
          ariaLabel: "Go to select project",
        },
        {
          label: "Certificates & Courses",
          href: "/#certificates",
          ariaLabel: "Go to certificates and courses",
        },
        {
          label: "Contact",
          href: "/#contact",
          ariaLabel: "Go to contact",
        },
      ],
    },
    {
      label: "About Page",
      href: "/about",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        {
          label: "Home",
          href: "/about#homeabout",
          ariaLabel: "Go to featured projects",
        },
        {
          label: "Mindset",
          href: "/about#mindset",
          ariaLabel: "Go to mindset",
        },
        {
          label: "TimeLine",
          href: "/about#timeline",
          ariaLabel: "Go to project case studies",
        },
      ],
    },
    {
      label: "Projects Page",
      href: "/project",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        
      ],
    },
  ];

  return (
    <div className="sticky top-0 z-50">
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </div>
  );
};