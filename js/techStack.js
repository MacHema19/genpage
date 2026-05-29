/**
 * Tech Stack Renderer Classes
 * Handles rendering of tech stack categories and items
 */

class TechStackCategory {
  constructor(categoryData) {
    Object.assign(this, categoryData);
  }

  renderTitle() {
    return `<h4 class="tech-category-title">${this.title}</h4>`;
  }

  renderDescription() {
    if (!this.description) return '';
    return `<p class="tech-category-description">${this.description}</p>`;
  }

  renderItems() {
    if (!this.items || this.items.length === 0) return '';
    
    const itemsList = this.items
      .map(item => `<li class="tech-item">${item}</li>`)
      .join('');
    
    return `<ul class="tech-items-list">${itemsList}</ul>`;
  }

  render() {
    return `
      <div class="tech-category">
        ${this.renderTitle()}
        ${this.renderDescription()}
        ${this.renderItems()}
      </div>
    `;
  }
}

class TechStackContainer {
  constructor(containerId, categories) {
    this.containerId = containerId;
    this.categories = categories;
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`Tech stack container with id "${this.containerId}" not found`);
      return;
    }

    const categoriesHtml = this.categories
      .map(categoryData => new TechStackCategory(categoryData).render())
      .join('');

    container.innerHTML = categoriesHtml;
  }
}

/**
 * Initialize tech stack rendering on DOM load
 */
function initTechStack() {
  const container = new TechStackContainer('tech-stack-container', TECH_STACK_CATEGORIES);
  container.render();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTechStack);
} else {
  initTechStack();
}
