import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lugaerp.com.br";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/funcionalidades`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/precos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
