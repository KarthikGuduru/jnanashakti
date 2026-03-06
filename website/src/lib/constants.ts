export const SITE_NAME = "Jnanashakti";
export const SITE_TAGLINE = "Illuminating Lives Through Ancient Wisdom";
export const SITE_DESCRIPTION =
  "Jnanashakti works in the fields of human values, spiritual education, and empowering individuals and organisations through the wisdom of ancient Indian traditions.";

export const CONTACT_EMAIL = "info@jnanashakti.org";
export const CONTACT_PHONE = "+91 XXXXX XXXXX";
export const CONTACT_ADDRESS =
  "Shakti Ashram, [Address Line], Maharashtra, India";

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@jnanashakti",
  instagram: "https://instagram.com/jnanashakti",
  facebook: "https://facebook.com/jnanashakti",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Human Values", href: "/about/values" },
      { label: "Swamiji", href: "/about/swamiji" },
    ],
  },
  {
    label: "Teachings",
    href: "/teachings",
    children: [
      { label: "Talks", href: "/teachings/talks" },
      { label: "Articles", href: "/teachings/articles" },
      { label: "Media Library", href: "/teachings/media" },
    ],
  },
  {
    label: "Ashram",
    href: "/ashram",
    children: [
      { label: "About Shakti Ashram", href: "/ashram" },
      { label: "Request to Stay", href: "/ashram/stay" },
      { label: "Directions", href: "/ashram/directions" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "hi", label: "HI" },
  { code: "mr", label: "MR" },
];

export const DONATION_AMOUNTS = [500, 1000, 2000, 5000, 10000];

export const DONATION_CAUSES = [
  {
    id: "meal",
    title: "Sponsor a Meal",
    description: "Provide meals for ashram visitors and seekers",
    suggestedAmount: 500,
    icon: "UtensilsCrossed",
  },
  {
    id: "education",
    title: "Support Education",
    description: "Fund spiritual education programs and workshops",
    suggestedAmount: 2000,
    icon: "GraduationCap",
  },
  {
    id: "construction",
    title: "Construction Fund",
    description: "Help build and maintain ashram infrastructure",
    suggestedAmount: 5000,
    icon: "Building",
  },
];
