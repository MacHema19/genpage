class TimelineEntry {
  constructor(entry) {
    Object.assign(this, entry);
    this.titleTag = this.titleTag || 'h4';
    this.subtitleTag = this.subtitleTag || 'h4';
    this.titleClass = this.titleClass || '';
    this.subtitleClass = this.subtitleClass || 'subheading';
    this.detailClass = this.detailClass || 'text-muted';
  }

  renderImage() {
    if (this.imageHtml) {
      return `<div class="timeline-image">${this.imageHtml}</div>`;
    }

    if (!this.image) {
      return '<div class="timeline-image"></div>';
    }

    return `
      <div class="timeline-image">
        <img class="rounded-circle img-fluid" src="${this.image}" alt="${this.title}">
      </div>
    `;
  }

  renderHeading() {
    const titleAttributes = this.titleClass ? ` class="${this.titleClass}"` : '';
    const title = `<${this.titleTag}${titleAttributes}>${this.title}</${this.titleTag}>`;

    if (this.subtitle && this.subtitleUrl) {
      return `${title}
        <${this.subtitleTag} class="${this.subtitleClass}"><a href="${this.subtitleUrl}" target="_blank" rel="noopener noreferrer">${this.subtitle}</a></${this.subtitleTag}>`;
    }

    if (this.subtitle) {
      return `${title}
        <${this.subtitleTag} class="${this.subtitleClass}">${this.subtitle}</${this.subtitleTag}>`;
    }

    return title;
  }

  renderRole() {
    if (!this.role) {
      return '';
    }
    return `<h5>${this.role}</h5>`;
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
        <li class="timeline-inverted">
          ${this.renderImage()}
        </li>
      `;
    }

    return `
      <li${this.inverted ? ' class="timeline-inverted"' : ''}>
        ${this.renderImage()}
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4>${this.duration}</h4>
            ${this.renderHeading()}
            <hr>
            ${this.renderRole()}
          </div>
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
