/** ArticleService provides small client-side article utilities. */
export class ArticleService {
  /** Estimates reading time from plain text. */
  static readingMinutes(text, wordsPerMinute = 220) { return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / wordsPerMinute)); }
}
