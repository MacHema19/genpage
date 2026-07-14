/** GitHub API configuration and cached public fallback records. */
export const githubConfig = Object.freeze({
  username: "MacHema19",
  featuredRepositories: ["Hema_EbayDevAPi"],
  cacheDurationMs: 60 * 60 * 1000,
  fallback: [
    { name: "Hema_EbayDevAPi", description: "Independent eBay developer sandbox API integration using an authenticated service architecture.", language: "Python", topics: ["fastapi", "oauth2", "docker"], html_url: "https://github.com/MacHema19/Hema_EbayDevAPi", visibility: "public", updated_at: null },
    { name: "MacHema19", description: "Public GitHub profile containing selected automation, security and solution-prototype work.", language: null, topics: ["automation", "security", "cloud"], html_url: "https://github.com/MacHema19", visibility: "public", updated_at: null }
  ]
});
