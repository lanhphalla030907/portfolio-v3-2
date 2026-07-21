import CardNav from "@/components/ui/CardNav";
const logo = "/image.png";
export const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "About me", href: "#about", ariaLabel: "Go to about me" },
        { label: "Tech stack", href: "#tech-stack", ariaLabel: "Go to tech stack" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#projects", ariaLabel: "Go to featured projects" },
        { label: "Case studies", href: "#projects", ariaLabel: "Go to project case studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "#contact", ariaLabel: "Go to contact form" },
        { label: "Phone", href: "tel:+855962657233", ariaLabel: "Call Lanh Phalla" },
        { label: "LinkedIn", href: "#contact", ariaLabel: "Go to contact details" }
      ]
    }
  ];

  return (
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
  );
};
