export const SITE_VARIANT: string = (() => {
  const env = import.meta.env.VITE_VARIANT || 'full';
  // Build-time variant (non-full) takes priority - each deployment is variant-specific.
  if (env !== 'full') return env;
  // Hostname-based detection: auto-detect variant from subdomain
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const subdomainMap: Record<string, string> = {
      'travel.breaths.me': 'travel',
      'weather.breaths.me': 'climate',
      'health.breaths.me': 'health',
      'sports.breaths.me': 'sports',
      'tech.breaths.me': 'tech',
      'finance.breaths.me': 'finance',
      'happy.breaths.me': 'happy',
    };
    if (subdomainMap[host]) return subdomainMap[host];
    // Only fall back to localStorage when env is 'full' (allows desktop app variant switching).
    const stored = localStorage.getItem('worldmonitor-variant');
    if (stored === 'tech' || stored === 'full' || stored === 'finance' || stored === 'happy' || stored === 'travel' || stored === 'weather' || stored === 'health' || stored === 'sports') {
      return stored;
    }
  }
  return env;
})();
