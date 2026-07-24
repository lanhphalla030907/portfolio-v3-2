import CardNav from "@/components/ui/CardNav";
const logo = "/image.png";

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
          label: "Featured",
          href: "/#projects",
          ariaLabel: "Go to featured projects",
        },
        {
          label: "Case studies",
          href: "/#projects",
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
        { label: "Email", href: "/#contact", ariaLabel: "Go to contact form" },
        {
          label: "Phone",
          href: "tel:+855962657233",
          ariaLabel: "Call Lanh Phalla",
        },
        {
          label: "LinkedIn",
          href: "/#contact",
          ariaLabel: "Go to contact details",
        },
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