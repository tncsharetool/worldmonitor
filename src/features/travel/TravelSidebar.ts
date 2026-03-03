import { Panel } from '@/components/Panel';
import { t } from '@/services/i18n';

export class TravelSidebar extends Panel {
  private originInput: HTMLInputElement | null = null;
  private destinationInput: HTMLInputElement | null = null;
  private dateInput: HTMLInputElement | null = null;

  constructor() {
    super({
      id: 'travel-sidebar',
      title: t('panels.travelPlanner') ?? 'Travel Planner',
      trackActivity: true,
      className: 'travel-sidebar-panel',
    });
    this.renderForm();
    this.attachEventListeners();
  }

  private renderForm(): void {
    const formHTML = `
      <div class="travel-form">
        <div class="form-group">
          <label for="travel-origin" class="form-label">
            ${t('travel.origin') ?? 'Origin (City/Airport)'}
          </label>
          <input
            type="text"
            id="travel-origin"
            class="form-input"
            placeholder="e.g., New York (JFK)"
            autocomplete="off"
          />
        </div>

        <div class="form-group">
          <label for="travel-destination" class="form-label">
            ${t('travel.destination') ?? 'Destination (City/Airport)'}
          </label>
          <input
            type="text"
            id="travel-destination"
            class="form-input"
            placeholder="e.g., Bangkok (BKK)"
            autocomplete="off"
          />
        </div>

        <div class="form-group">
          <label for="travel-date" class="form-label">
            ${t('travel.departureDate') ?? 'Departure Date'}
          </label>
          <input
            type="date"
            id="travel-date"
            class="form-input"
          />
        </div>

        <button class="form-submit-btn" id="travel-submit-btn">
          ${t('travel.planTrip') ?? 'Plan Trip'}
        </button>
      </div>
    `;

    this.content.innerHTML = formHTML;

    // Cache references to inputs
    this.originInput = this.content.querySelector('#travel-origin') as HTMLInputElement;
    this.destinationInput = this.content.querySelector('#travel-destination') as HTMLInputElement;
    this.dateInput = this.content.querySelector('#travel-date') as HTMLInputElement;
  }

  private attachEventListeners(): void {
    const submitBtn = this.content.querySelector('#travel-submit-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => this.handleSubmit());
    }

    // Allow Enter key to submit
    this.content.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleSubmit();
      }
    });
  }

  private handleSubmit(): void {
    const origin = this.originInput?.value.trim() || '';
    const destination = this.destinationInput?.value.trim() || '';
    const departureDate = this.dateInput?.value || '';

    const tripData = {
      origin,
      destination,
      departureDate,
      timestamp: new Date().toISOString(),
    };

    console.log('Trip Plan Submitted:', tripData);

    // Optional: Clear form after submit
    this.clearForm();
  }

  private clearForm(): void {
    if (this.originInput) this.originInput.value = '';
    if (this.destinationInput) this.destinationInput.value = '';
    if (this.dateInput) this.dateInput.value = '';
  }
}
