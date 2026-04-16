import type { LucideIcon } from "lucide-react";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type SocialLink = {
  name: string;
  icon?: LucideIcon | IconDefinition;
  href: string;
  handle?: string;
};
