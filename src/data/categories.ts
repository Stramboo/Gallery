import type { CategoryInfo } from "@/types";
import { categoryCovers } from "./helpers";

export const categories: CategoryInfo[] = [
  {
    id: "landscape",
    name: "风景",
    nameEn: "Landscape",
    description: "山川湖海，日出日落 — 大自然最壮阔的诗篇",
    coverImage: categoryCovers.landscape,
  },
  {
    id: "portrait",
    name: "人像",
    nameEn: "Portrait",
    description: "光影之间，定格灵魂深处最真实的表情",
    coverImage: categoryCovers.portrait,
  },
  {
    id: "street",
    name: "街拍",
    nameEn: "Street",
    description: "城市的脉搏，街头巷尾的烟火与人情",
    coverImage: categoryCovers.street,
  },
  {
    id: "architecture",
    name: "建筑",
    nameEn: "Architecture",
    description: "线条与几何，凝固在空间中的结构之美",
    coverImage: categoryCovers.architecture,
  },
  {
    id: "monochrome",
    name: "黑白",
    nameEn: "Monochrome",
    description: "褪去色彩，回归光影本质的纯粹表达",
    coverImage: categoryCovers.monochrome,
  },
];

export function getCategoryName(id: string): string {
  return categories.find((c) => c.id === id)?.name ?? "全部";
}
