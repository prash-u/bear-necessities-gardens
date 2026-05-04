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
import beforeAfter from "@/assets/before-after.jpg";
import gardenFeature from "@/assets/garden-feature.jpg";
import gardenLawn from "@/assets/garden-lawn.jpg";
import gardenerAtWork from "@/assets/gardener-at-work.jpg";
import option1FullWordmark from "@/assets/brand-options/option-1-full-wordmark.jpeg";
import option2LockupBear from "@/assets/brand-options/option-2-lockup-bear.jpeg";
import option3BearFace from "@/assets/brand-options/option-3-bear-face.jpeg";
import option4BebearStacked from "@/assets/brand-options/option-4-bebear-stacked.jpeg";
import option5BebearSplitA from "@/assets/brand-options/option-5-bebear-split-a.jpeg";
import option6BebearSplitB from "@/assets/brand-options/option-6-bebear-split-b.jpeg";
import option7BearShieldA from "@/assets/brand-options/option-7-bear-shield-a.jpeg";
import option8BearShieldB from "@/assets/brand-options/option-8-bear-shield-b.jpeg";

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
  { value: "B", label: "Bold craftsmanship" },
  { value: "E", label: "Exacting finish" },
  { value: "A", label: "Attentive care" },
  { value: "R", label: "Reliable service" },
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
    category: "Patio and borders",
    title: "Outdoor spaces with a settled, welcoming feel",
    description:
      "Use this space for patios, seating areas, and garden corners that deserve a cleaner, more polished finish.",
  },
  {
    image: gardenPlanting,
    category: "Planting",
    title: "Borders, planting, and seasonal texture",
    description:
      "Seasonal colour, balanced structure, and planting that feels intentional rather than overfilled.",
  },
  {
    image: gardenMaintenance,
    category: "Maintenance",
    title: "From overgrown to un-bear-lievably good",
    description:
      "Ideal for before-and-after shots, regular maintenance highlights, or tidy-up work worth showing off.",
  },
  {
    image: beforeAfter,
    category: "Transformation",
    title: "Before-and-after style proof",
    description:
      "Stronger contrast between starting point and result helps the business feel more credible immediately.",
  },
  {
    image: gardenFeature,
    category: "Feature garden",
    title: "Characterful details and stronger composition",
    description:
      "A useful fit for more designed corners, pathways, or gardens with a softer cottage feel.",
  },
  {
    image: gardenLawn,
    category: "Lawn and finish",
    title: "Clean lines and a more finished overall look",
    description:
      "Helpful for showing maintenance quality, edging, and the calmer feel of a properly looked-after space.",
  },
  {
    image: gardenerAtWork,
    category: "Process",
    title: "Professional care in progress",
    description:
      "Adding one or two human-in-action images can make the business feel more real, local, and trustworthy.",
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
      "Homes and outdoor spaces that need maintenance, a tidy-up, planting, landscaping, or a more polished overall feel. Work can be tailored to anything from a quick refresh to ongoing care.",
  },
  {
    question: "Can the gallery be updated with real project images later?",
    answer:
      "Yes. As more project photography becomes available, the gallery can be expanded to show a wider mix of finished spaces, seasonal work, and before-and-after results.",
  },
  {
    question: "Does the enquiry form need extra software?",
    answer:
      "No. Enquiries can be sent directly by email, keeping the process simple and easy to use.",
  },
  {
    question: "Can Instagram still be part of the site?",
    answer:
      "Absolutely. Instagram is a useful way to browse recent work and garden updates alongside the main website.",
  },
];

export const showcaseNotes = [
  "From overgrown to un-bear-lievably good",
  "Thoughtful landscaping, tidy-ups, and regular care",
  "Recent work, real results, and a polished first impression",
];

export const featuredCaseStudy = {
  image: gardenMaintenance,
  badge: "Featured example",
  category: "Garden maintenance",
  title: "A cleaner, calmer, more looked-after outdoor space.",
  description:
    "The strongest garden transformations are often the ones that feel simplest afterwards: cleaner lines, tidier borders, and a space that feels easier to enjoy day to day.",
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

export const logoShowcaseModes = [
  {
    id: "lockup-bear",
    name: "Lockup Bear",
    summary: "The strongest all-rounder for the website, signage, and social headers.",
    type: "image" as const,
    image: option2LockupBear,
    heroTitle: "Bear Necessities Gardens",
    heroCopy:
      "A complete lockup with the bear face baked into the main mark, giving the brand a clear hero logo without losing personality.",
  },
  {
    id: "full-wordmark",
    name: "Full Wordmark",
    summary: "Bold and direct, with the name doing the heavy lifting at a glance.",
    type: "image" as const,
    image: option1FullWordmark,
    heroTitle: "Built around the full name.",
    heroCopy:
      "This direction leans into immediate recognition, with the full business name front and centre in one high-impact graphic.",
  },
  {
    id: "bear-face",
    name: "Bear Face",
    summary: "A memorable icon-first route that could shine as the main social and favicon asset.",
    type: "image" as const,
    image: option3BearFace,
    heroTitle: "Icon-led and instantly memorable.",
    heroCopy:
      "The face mark feels punchy, modern, and highly ownable, especially when paired with cleaner supporting typography around it.",
  },
  {
    id: "bebear-stacked",
    name: "BeBear Stacked",
    summary: "A more experimental stacked concept with a playful poster-like energy.",
    type: "image" as const,
    image: option4BebearStacked,
    heroTitle: "Graphic, playful, and harder-edged.",
    heroCopy:
      "This concept pushes the character of the brand further, with a stacked composition that feels distinctive and merch-friendly.",
  },
  {
    id: "bebear-split-a",
    name: "Split Concept A",
    summary: "A split composition that gives the wordmark and bear shield equal weight.",
    type: "image" as const,
    image: option5BebearSplitA,
    uiCrop: { x: 320, y: 245, width: 760, height: 965 },
    previewCrops: [
      { x: 0, y: 0, width: 360, height: 1448 },
      { x: 320, y: 245, width: 760, height: 965 },
    ],
    heroTitle: "A split layout with more contrast.",
    heroCopy:
      "This route breaks the identity into separate shapes, which could work well when the owner wants a more graphic, layout-driven feel.",
  },
  {
    id: "bebear-split-b",
    name: "Split Concept B",
    summary: "A cleaner variation of the split idea with slightly stronger balance.",
    type: "image" as const,
    image: option6BebearSplitB,
    uiCrop: { x: 420, y: 185, width: 834, height: 1000 },
    previewCrops: [
      { x: 0, y: 0, width: 470, height: 1254 },
      { x: 420, y: 185, width: 834, height: 1000 },
    ],
    heroTitle: "More balanced, still bold.",
    heroCopy:
      "A stronger refinement of the split composition that keeps the graphic energy while feeling a little more resolved.",
  },
  {
    id: "bear-shield-a",
    name: "Bear Shield A",
    summary: "A compact shield icon that feels like a scalable sub-brand or badge.",
    type: "image" as const,
    image: option7BearShieldA,
    heroTitle: "Compact, ownable, and highly scalable.",
    heroCopy:
      "This version works especially well as a standalone icon system, giving the brand a strong compact mark for socials, watermarks, and kit.",
  },
  {
    id: "bear-shield-b",
    name: "Bear Shield B",
    summary: "A sharper shield variation with a stronger face cut and more aggressive geometry.",
    type: "image" as const,
    image: option8BearShieldB,
    heroTitle: "The sharpest symbol-first option.",
    heroCopy:
      "This concept is the most aggressive and badge-like of the icon routes, making it a strong candidate for compact branding moments.",
  },
] as const;

export type LogoShowcaseMode = (typeof logoShowcaseModes)[number];
