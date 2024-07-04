import {
  Smartphone,
  Laptop,
  SprayCan,
  HandHeart,
  Apple,
  House,
} from "lucide-react";

export const categoryMapping = {
  smartphones: { color: "#3498db", icon: Smartphone },
  laptops: { color: "#2ecc71", icon: Laptop },
  fragrances: { color: "#9b59b6", icon: SprayCan },
  skincare: { color: "#e74c3c", icon: HandHeart },
  groceries: { color: "#f1c40f", icon: Apple },
  "home-decoration": { color: "#1abc9c", icon: House },
};

export function getCategoryInfo(category) {
  return categoryMapping[category] || { color: "#95a5a6", icon: null };
}
