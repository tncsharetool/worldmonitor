/**
 * DonatePopup - Auto-appear every 20 minutes
 * Shows donation links (Buy me a coffee, PayPal)
 * Auto-dismisses after 30 seconds or manual close
 * Uses i18n for locale detection (VI/EN)
 */

import { t } from '@/services/i18n';

const DONATE_STORAGE_KEY = 'donate-popup-last-shown';
const DONATE_INTERVAL_MS = 20 * 60 * 1000; // 20 minutes
const AUTO_DISMISS_MS = 30 * 1000; // 30 seconds

export class DonatePopup {
  private popupEl: HTMLElement | null = null;
  private dismissTimeout: ReturnType<typeof setTimeout> | null = null;
  private lastShownTime: number = 0;

  constructor() {
    this.loadLastShownTime();
    this.start();
  }

  private loadLastShownTime(): void {
    try {
      const stored = localStorage.getItem(DONATE_STORAGE_KEY);
      this.lastShownTime = stored ? parseInt(stored, 10) : 0;
    } catch {
      this.lastShownTime = 0;
    }
  }

  private saveLastShownTime(): void {
    try {
      localStorage.setItem(DONATE_STORAGE_KEY, Date.now().toString());
    } catch {
      // Silently fail if localStorage unavailable
    }
  }

  private start(): void {
    // Check every minute if we should show popup
    setInterval(() => {
      const timeSinceLastShown = Date.now() - this.lastShownTime;
      if (timeSinceLastShown >= DONATE_INTERVAL_MS) {
        this.show();
      }
    }, 60 * 1000); // Check every minute
  }

  private show(): void {
    // Don't show if already visible
    if (this.popupEl) return;

    this.saveLastShownTime();

    // Get localized strings (auto-detect locale)
    const title = t('common.donate.title') ?? 'Love this app?';
    const message = t('common.donate.message') ?? 'Support the author to keep servers running';
    const btnCoffee = t('common.donate.buyMeCoffee') ?? '☕ Buy me a coffee';
    const btnPaypal = t('common.donate.paypal') ?? '💳 PayPal';

    // Create popup element
    this.popupEl = document.createElement('div');
    this.popupEl.className = 'donate-popup';
    this.popupEl.innerHTML = `
      <div class="donate-popup-content">
        <div class="donate-popup-icon">☕</div>
        <div class="donate-popup-text">
          <p class="donate-popup-title">${title}</p>
          <p class="donate-popup-message">${message}</p>
        </div>
        <div class="donate-popup-buttons">
          <a href="https://buymeacoffee.com/victorchuyen" 
             target="_blank" 
             rel="noopener noreferrer"
             class="donate-btn donate-btn-primary">
            ${btnCoffee}
          </a>
          <a href="https://paypal.me/victorchuyen" 
             target="_blank" 
             rel="noopener noreferrer"
             class="donate-btn donate-btn-secondary">
            ${btnPaypal}
          </a>
          <button class="donate-btn-close" id="donatePopupClose">✕</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.popupEl);

    // Setup close button
    const closeBtn = this.popupEl.querySelector('#donatePopupClose');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Auto-dismiss after 30 seconds
    this.dismissTimeout = setTimeout(() => {
      this.close();
    }, AUTO_DISMISS_MS);
  }

  private close(): void {
    if (this.dismissTimeout) {
      clearTimeout(this.dismissTimeout);
      this.dismissTimeout = null;
    }

    if (this.popupEl) {
      this.popupEl.remove();
      this.popupEl = null;
    }
  }

  public destroy(): void {
    this.close();
  }
}
