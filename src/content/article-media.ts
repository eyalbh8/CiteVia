import images from './article-images.json';

type ArticleMedia = (typeof images)[keyof typeof images];

export function articleMedia(slug: string): ArticleMedia {
  const image = (images as Record<string, ArticleMedia>)[slug];
  if (!image) {
    throw new Error(`Missing unique Unsplash image for article: ${slug}`);
  }
  return image;
}
