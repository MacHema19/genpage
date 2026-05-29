class TimelineEntry {
  constructor(entry) {
    Object.assign(this, entry);
    this.titleTag = this.titleTag || 'h4';
    this.subtitleTag = this.subtitleTag || 'h4';
    this.titleClass = this.titleClass || '';
    this.subtitleClass = this.subtitleClass || 'subheading';
    this.detailClass = this.detailClass || 'text-muted';
  }

  renderCompanyLogo() {
    if (this.imageHtml) {
      return `<div class="company-avatar">${this.imageHtml}</div>`;
    }

    if (!this.image) {
      return '<div class="company-avatar empty-avatar"></div>';
    }

    return `
      <div class="company-avatar">
        <img src="${this.image}" alt="${this.title}">
      </div>
    `;
  }

  renderCompanyInfo() {
    const companyName = this.subtitleUrl
      ? `<a href="${this.subtitleUrl}" target="_blank" rel="noopener noreferrer">${this.title}</a>`
      : this.title;

    const companySubtitle = this.subtitle ? `<div class="company-subtitle">${this.subtitle}</div>` : '';

    return `
      <div class="timeline-company-info">
        ${this.renderCompanyLogo()}
        <div class="company-details">
          <div class="company-name">${companyName}</div>
          ${companySubtitle}
        </div>
      </div>
    `;
  }

  renderRole() {
    if (!this.role) {
      return '';
    }
    return `<div class="timeline-job-title">${this.role}</div>`;
  }

  renderDetails() {
    if (this.detailsHtml) {
      return this.detailsHtml;
    }
    if (!this.details) {
      return '';
    }
    return `<p class="${this.detailClass}">${this.details}</p>`;
  }

  render() {
    if (this.isCallToAction) {
      return `
        <li class="timeline-entry call-to-action">
          <div class="timeline-panel cta-panel">
            ${this.renderCompanyLogo()}
            <div class="timeline-cta-text">${this.title}</div>
          </div>
        </li>
      `;
    }

    return `
      <li class="timeline-entry${this.inverted ? ' timeline-inverted' : ''}">
        <div class="timeline-panel">
          <div class="timeline-card-header">
            ${this.renderRole()}
            <div class="timeline-duration">${this.duration}</div>
          </div>
          <div class="timeline-divider"></div>
          <div class="timeline-card-company">
            ${this.renderCompanyInfo()}
          </div>
          <div class="timeline-divider"></div>
          <div class="timeline-body">
            ${this.renderDetails()}
          </div>
        </div>
      </li>
    `;
  }
}

class WorkExperienceTimeline {
  constructor(containerId, entries) {
    this.containerId = containerId;
    this.entries = entries.map(entry => new TimelineEntry(entry));
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      return;
    }

    container.innerHTML = this.entries.map(entry => entry.render()).join('');
  }
}

function initWorkExperienceTimeline() {
  const timeline = new WorkExperienceTimeline('work-experience-timeline', WORK_EXPERIENCE_TIMELINE);
  timeline.render();
}

document.addEventListener('DOMContentLoaded', initWorkExperienceTimeline);
