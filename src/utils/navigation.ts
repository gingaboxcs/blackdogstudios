// An array of links for navigation bar
const navBarLinks = [
  { name: "Apps", url: "/apps" },
  { name: "Themes", url: "/themes" },
  { name: "Assets", url: "/assets" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Products",
    links: [
      { name: "Shopify Themes", url: "/themes" },
      { name: "Stock Assets", url: "/assets" },
      { name: "Our Apps", url: "/apps" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    section: "Legal",
    links: [
      { name: "Terms", url: "/terms" },
      { name: "Privacy", url: "/privacy" },
      { name: "Tokushoho", url: "/tokushoho" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  x: "https://twitter.com/blackdogstudios",
  github: "https://github.com/blackdogstudios",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
