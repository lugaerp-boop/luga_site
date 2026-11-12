import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/demonstracao`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/funcionalidades`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/erp-para-distribuidoras`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/erp-para-ceasa`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/erp-para-hortifruti`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
