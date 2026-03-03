import { Panel } from './Panel';
import { escapeHtml } from '@/utils/sanitize';
import { type ClimateAnomaly, getSeverityIcon, formatDelta } from '@/services/climate';
import { t } from '@/services/i18n';
import { SITE_VARIANT } from '@/config';

export class ClimateAnomalyPanel extends Panel {
  private anomalies: ClimateAnomaly[] = [];
  private onZoneClick?: (lat: number, lon: number) => void;

  constructor() {
    super({
      id: 'climate',
      title: t('panels.climate'),
      showCount: true,
      trackActivity: true,
      infoTooltip: t('components.climate.infoTooltip'),
    });
    this.showLoading(t('common.loadingClimateData'));
  }

  public setZoneClickHandler(handler: (lat: number, lon: number) => void): void {
    this.onZoneClick = handler;
  }

  public setAnomalies(anomalies: ClimateAnomaly[]): void {
    this.anomalies = anomalies;
    this.setCount(anomalies.length);
    this.renderContent();
  }

  private async showExpandedData(row: HTMLElement, a: ClimateAnomaly): Promise<void> {
    const existing = this.content.querySelector('.climate-expanded');
    const isSameRow = existing?.previousElementSibling === row;
    if (existing) existing.remove();
    if (isSameRow) return;

    const expandedTr = document.createElement('tr');
    expandedTr.className = 'climate-expanded';
    expandedTr.innerHTML = `
      <td colspan="4" style="padding: 0;">
        <div class="climate-expanded-content" style="padding: 12px; background: var(--bg-elevated); border-bottom: 1px solid var(--border-subtle);">
          <div class="climate-loading" style="color: var(--text-dim); font-size: 12px;">Fetching live weather...</div>
        </div>
      </td>
    `;
    row.after(expandedTr);

    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${a.lat}&longitude=${a.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`);
      const data = await res.json();

      const content = expandedTr.querySelector('.climate-expanded-content');
      if (!content) return;

      let ctaHtml = '';
      if (SITE_VARIANT === 'travel' || SITE_VARIANT === 'full') {
        const query = encodeURIComponent(a.zone);
        ctaHtml = `
          <div class="climate-cta" style="margin-top: 12px; display: flex; gap: 8px;">
            <a href="https://www.booking.com/searchresults.html?ss=${query}" target="_blank" class="panel-button" style="flex: 1; text-align: center; padding: 6px; background: var(--bg-hover); border-radius: 4px; color: var(--text-primary); text-decoration: none; font-size: 13px;">🏨 Book Hotels in ${escapeHtml(a.zone)}</a>
            <a href="https://www.google.com/search?q=flights+to+${query}" target="_blank" class="panel-button" style="flex: 1; text-align: center; padding: 6px; background: var(--bg-hover); border-radius: 4px; color: var(--text-primary); text-decoration: none; font-size: 13px;">✈️ Find Flights</a>
          </div>
        `;
      }

      content.innerHTML = `
        <div class="climate-live-data" style="display: flex; gap: 16px; font-size: 13px;">
          <div class="climate-live-item"><span style="color: var(--text-dim);">Temp:</span> ${data.current?.temperature_2m ?? '--'}°C</div>
          <div class="climate-live-item"><span style="color: var(--text-dim);">Wind:</span> ${data.current?.wind_speed_10m ?? '--'} km/h</div>
          <div class="climate-live-item"><span style="color: var(--text-dim);">Humidity:</span> ${data.current?.relative_humidity_2m ?? '--'}%</div>
        </div>
        ${ctaHtml}
      `;
    } catch (e) {
      const content = expandedTr.querySelector('.climate-expanded-content');
      if (content) content.innerHTML = `<div class="climate-error" style="color: var(--semantic-critical); font-size: 12px;">Failed to fetch live data.</div>`;
    }
  }

  private renderContent(): void {
    if (this.anomalies.length === 0) {
      this.setContent(`<div class="panel-empty">${t('components.climate.noAnomalies')}</div>`);
      return;
    }

    const sorted = [...this.anomalies].sort((a, b) => {
      const severityOrder = { extreme: 0, moderate: 1, normal: 2 };
      return (severityOrder[a.severity] || 2) - (severityOrder[b.severity] || 2);
    });

    const rows = sorted.map(a => {
      const icon = getSeverityIcon(a);
      const tempClass = a.tempDelta > 0 ? 'climate-warm' : 'climate-cold';
      const precipClass = a.precipDelta > 0 ? 'climate-wet' : 'climate-dry';
      const sevClass = `severity-${a.severity}`;
      const rowClass = a.severity === 'extreme' ? ' climate-extreme-row' : '';

      return `<tr class="climate-row${rowClass}" data-lat="${a.lat}" data-lon="${a.lon}" style="cursor: pointer;">
        <td class="climate-zone"><span class="climate-icon">${icon}</span>${escapeHtml(a.zone)}</td>
        <td class="climate-num ${tempClass}">${formatDelta(a.tempDelta, '°C')}</td>
        <td class="climate-num ${precipClass}">${formatDelta(a.precipDelta, 'mm')}</td>
        <td><span class="climate-badge ${sevClass}">${t(`components.climate.severity.${a.severity}`)}</span></td>
      </tr>`;
    }).join('');

    this.setContent(`
      <div class="climate-panel-content">
        <table class="climate-table">
          <thead>
            <tr>
              <th>${t('components.climate.zone')}</th>
              <th>${t('components.climate.temp')}</th>
              <th>${t('components.climate.precip')}</th>
              <th>${t('components.climate.severityLabel')}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `);

    this.content.querySelectorAll('.climate-row').forEach((el, index) => {
      el.addEventListener('click', () => {
        const lat = Number((el as HTMLElement).dataset.lat);
        const lon = Number((el as HTMLElement).dataset.lon);
        const anomaly = sorted[index];

        if (Number.isFinite(lat) && Number.isFinite(lon) && anomaly) {
          this.onZoneClick?.(lat, lon);
          this.showExpandedData(el as HTMLElement, anomaly);
        }
      });
    });
  }
}
