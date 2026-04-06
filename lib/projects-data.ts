/** Single source of truth for portfolio project cards (home + about). */

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  image: string;
  imageUrl: string;
  technologies: string[];
  github: string;
  live: string;
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "Inventory Management Mobile App",
    description:
      "A mobile inventory dashboard with metrics, product highlights, and intuitive navigation—designed in Figma for a clear, modern UX.",
    image: "bg-gradient-to-br from-gray-700 to-black",
    imageUrl: "/img/project/Inventory%20Management%20Mobile.png",
    technologies: ["Figma", "UI/UX", "Mobile App"],
    github: "#",
    live: "https://www.figma.com/proto/PKOKcbFaQKtCcotxu0uI9S/Qu%E1%BA%A3n-l%C3%BD-kho?node-id=189-392&viewport=532%2C189%2C0.3&t=xM7xtC8FQQ6o1qiH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=189%3A392&page-id=189%3A391",
  },
  {
    id: 2,
    title: "Car Wash",
    description:
      "A car detailing studio landing page with hero imagery, service navigation, and gallery—designed in Figma for a clean, professional look.",
    image: "bg-gradient-to-br from-gray-800 to-gray-600",
    imageUrl: "/img/project/car-wash.png",
    technologies: ["Figma", "UI/UX", "Web"],
    github: "#",
    live: "https://www.figma.com/proto/asfDn7sJdBc1nyLKro3XCA/Car-Wash-Website?node-id=2-3&p=f&viewport=1145%2C748%2C0.22&t=rhR29O04DIib3LKi-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 3,
    title: "EasyTrips",
    description:
      "A travel landing page with hero imagery, navigation, and a booking-style search form—designed in Figma for a clean, modern trip-planning feel.",
    image: "bg-gradient-to-br from-black to-gray-700",
    imageUrl: "/img/project/easytrips.png",
    technologies: ["Figma", "UI/UX", "Web"],
    github: "#",
    live: "https://www.figma.com/proto/PVLzfhjd78HlkYVfm3xLFF/Untitled?node-id=6-2&viewport=2032%2C383%2C0.42&t=ojBIUjmEv25NTuzQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=23%3A1087&page-id=0%3A1",
  },
  {
    id: 4,
    title: "NFT Website",
    description:
      "A modern NFT marketplace website featuring digital art collections and trading functionality.",
    image: "bg-gradient-to-br from-gray-600 to-gray-800",
    imageUrl: "/img/project/nft.png",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/DatNgyM/NFT_Web",
    live: "https://datngym.github.io/NFT_Web/",
  },
  {
    id: 5,
    title: "KOC",
    description:
      "Đi Săn Cùng Tớ — a Gen Z product review and affiliate marketing website with deals, blog reviews, and a responsive Next.js experience.",
    image: "bg-gradient-to-br from-black to-gray-700",
    imageUrl: "/img/project/koc.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/DatNgyM/KOC",
    live: "https://disancungto.vercel.app/",
  },
  {
    id: 6,
    title: "Blog Website",
    description:
      "A full-featured blog website with content management, categories, and modern UI design.",
    image: "bg-gradient-to-br from-gray-700 to-black",
    imageUrl: "/img/project/blog.png",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/DatNgyM/Blog_Web",
    live: "https://datngym.github.io/Blog_Web/",
  },
];
