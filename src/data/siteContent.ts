import {
  CalendarRange,
  ClipboardList,
  Droplets,
  Flower2,
  Leaf,
  Mountain,
  type LucideIcon,
  Shovel,
  Sprout,
  TreePine,
} from "lucide-react";
import gardenMaintenance from "@/assets/garden-maintenance.jpg";
import gardenPatio from "@/assets/garden-patio.jpg";
import gardenPlanting from "@/assets/garden-planting.jpg";

export const business = {
  name: "Bear Necessities Gardens",
  email: "bearnecessitiesgardens@gmail.com",
  instagram: "https://www.instagram.com/bear.necessities.gardens/",
  tagline: "The bear essentials for beautiful outdoor spaces.",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const aboutStats = [
  { value: "Neat", label: "Clean finish" },
  { value: "Calm", label: "Thoughtful approach" },
  { value: "Clear", label: "Simple enquiry path" },
];

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    icon: Droplets,
    title: "Garden maintenance",
    description:
      "Ongoing care to keep lawns, borders, beds, and outdoor spaces tidy, healthy, and presentable.",
  },
  {
    icon: Shovel,
    title: "Tidy-ups and clear-outs",
    description:
      "A practical reset for overgrown or neglected spaces, with the goal of making everything feel manageable again.",
  },
  {
    icon: Flower2,
    title: "Seasonal planting",
    description:
      "Fresh planting and subtle updates that bring colour, texture, and renewed life into the garden.",
  },
  {
    icon: Leaf,
    title: "Pruning and shaping",
    description:
      "Thoughtful cutting back and maintenance that keeps gardens looking cared for without feeling overdone.",
  },
  {
    icon: Mountain,
    title: "Landscaping",
    description:
      "Planting, shaping, and practical improvements that give the whole garden a stronger, more cohesive feel.",
  },
  {
    icon: TreePine,
    title: "Tailored garden help",
    description:
      "Flexible support for the bear essentials of your garden, depending on what the space needs most.",
  },
];

export const servicePreviewImages = [gardenPatio, gardenPlanting, gardenMaintenance];

export const projectTypes = [
  {
    title: "Front gardens",
    description:
      "Sharper kerb appeal, tidier edges, and a more welcoming first impression.",
  },
  {
    title: "Back garden resets",
    description:
      "A cleaner, calmer base for spaces that have become overgrown or underused.",
  },
  {
    title: "Borders and planting",
    description:
      "More structure, better texture, and planting that feels intentional rather than crowded.",
  },
  {
    title: "Ongoing upkeep",
    description:
      "Regular support for gardens that need to stay presentable without becoming a full-time job.",
  },
];

export const processSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Discuss the space",
    description:
      "Start with the garden as it is now, what feels overgrown or underused, and the kind of result you want it to have.",
  },
  {
    icon: Sprout,
    step: "02",
    title: "Shape the work",
    description:
      "From maintenance and tidy-ups to landscaping and planting, the scope stays focused on what will make the clearest visible difference.",
  },
  {
    icon: CalendarRange,
    step: "03",
    title: "Keep it looking right",
    description:
      "Where needed, the work can lead into regular upkeep so the garden keeps its cleaner, calmer, more looked-after feel.",
  },
];

export const galleryItems = [
  {
    image: gardenPatio,
    title: "Outdoor spaces with a settled, welcoming feel",
    description:
      "Use this space for patios, seating areas, and garden corners that deserve a cleaner, more polished finish.",
  },
  {
    image: gardenPlanting,
    title: "Borders, planting, and seasonal texture",
    description:
      "A ready-made slot for future photos from Google Drive exports once local project images are added to the repo.",
  },
  {
    image: gardenMaintenance,
    title: "From overgrown to un-bear-lievably good",
    description:
      "Ideal for before-and-after shots, regular maintenance highlights, or tidy-up work worth showing off.",
  },
];

export const proofFeedback = [
  {
    quote:
      "The garden looked completely different afterwards. Neater, lighter, and much easier to enjoy.",
    source: "Client feedback",
  },
  {
    quote:
      "Reliable, tidy, and clearly cares about the small details that make the whole space feel better.",
    source: "Recent enquiry follow-up",
  },
  {
    quote:
      "Exactly the kind of help we needed. Practical, professional, and the finish was excellent.",
    source: "Instagram message",
  },
];

export const faqItems = [
  {
    question: "What kind of gardens is this best suited to?",
    answer:
      "The site is positioned for homes and outdoor spaces that need maintenance, a tidy-up, planting, landscaping, or a more polished overall feel. It is intentionally broad enough to grow with the business.",
  },
  {
    question: "Can the gallery be updated with real project images later?",
    answer:
      "Yes. The gallery is already structured so local files or direct image URLs can be swapped in as new project photography becomes available.",
  },
  {
    question: "Does the enquiry form need extra software?",
    answer:
      "No. Right now it uses a mailto flow so enquiries can work without a backend. It can later be upgraded to a proper hosted form if needed.",
  },
  {
    question: "Can Instagram still be part of the site?",
    answer:
      "Absolutely. Instagram works best here as supporting proof of current work rather than the main conversion path, which keeps the website more professional and self-contained.",
  },
];

export const showcaseNotes = [
  "A calmer, more editorial presentation style",
  "Clear enquiry path on the site itself",
  "Space for future project images and case studies",
];

export const featuredCaseStudy = {
  image: gardenMaintenance,
  badge: "Featured example",
  category: "Garden maintenance",
  title: "A cleaner, calmer, more looked-after outdoor space.",
  description:
    "This layout works well for future before-and-after projects too. Swap in stronger photography, add a short project summary, and the section quickly becomes a serious trust signal.",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description:
    "Thoughtful garden maintenance, landscaping, and planting with a polished, professional finish.",
  email: business.email,
  sameAs: [business.instagram],
};
