import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "../SocialMediaIcons";

const Footer = () => {
  const footerItems = [
    {
      label: "company",
      links: [
        {
          label: "about",
          href: "#",
        },
        {
          label: "contact us",
          href: "#",
        },
        {
          label: "support",
          href: "#",
        },
        {
          label: "careers",
          href: "#",
        },
      ],
    },
    {
      label: "quick links",
      links: [
        {
          label: "share location",
          href: "#",
        },
        {
          label: "orders tracking",
          href: "#",
        },
        {
          label: "size guide",
          href: "#",
        },
        {
          label: "FAQs",
          href: "#",
        },
      ],
    },
    {
      label: "legal",
      links: [
        {
          label: "terms & condition",
          href: "#",
        },
        {
          label: "privacy policy",
          href: "#",
        },
      ],
    },
  ];

  const socialMediaList = [
    {
      Icon: GithubIcon,
      href: "https://github.com/suhelmakkad",
    },
    {
      Icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/suhel-makkad-606a3219b/",
    },
    {
      Icon: InstagramIcon,
      href: "https://www.instagram.com/suhel_makkad/",
    },
    {
      Icon: TwitterIcon,
      href: "https://twitter.com/suhel_makad",
    },
  ];

  return (
    <footer
      className={`
        flex gap-12 py-12 text-white max-lg:flex-col max-lg:items-center max-lg:text-center
        full-bleed bg-black shadow-black shadow-[0_0_0_100vmax] dark:bg-gray-900 dark:shadow-gray-900
    `}
    >
      <div className="flex flex-col gap-4">
        <h6 className="text-2xl font-bold">FASHION</h6>
        <span className="text-gray-400 max-w-xs">
          Complete your style with awesome clothes from us.
        </span>

        <ul className="flex gap-6 max-lg:mx-auto">
          {socialMediaList.map((item, index) => (
            <li key={index}>
              <a
                className="block text-gray-200 hover:text-white hover:-translate-y-0.5 transition-all"
                href={item.href}
                target="_blank"
              >
                <item.Icon className="text-2xl fill-current" />
              </a>
            </li>
          ))}
        </ul>

        <span className="text-gray-500 hover:text-gray-300 transition-colors">
          <a target="_blank" href="https://icons8.com">
            Icons by Icons8
          </a>
        </span>
      </div>

      <div className="flex max-lg:flex-wrap gap-28 justify-end max-lg:justify-center flex-1 capitalize">
        {footerItems.map((item) => (
          <div key={item.label}>
            <span>{item.label}</span>
            <ul className="flex flex-col gap-4 mt-4">
              {item.links.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
