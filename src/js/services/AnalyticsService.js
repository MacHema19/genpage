/** Privacy-preserving no-op analytics service reserved for future consent-based use. */
export class AnalyticsService {
  /** Records nothing by design because this portfolio uses no visitor tracking. */
  track() { return false; }
}
