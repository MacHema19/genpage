/**
 * Application bootstrap
 * Initialises shared navigation, reveal, repository and form components.
 */
import { MobileMenu } from "./components/MobileMenu.js";
import { ScrollReveal } from "./components/ScrollReveal.js";
import { ContactForm } from "./components/ContactForm.js";
import { FormService } from "./services/FormService.js";
import { siteConfig } from "./config/site-config.js";

const header = document.querySelector("[data-header]");
if (header) new MobileMenu(header).initialize();
new ScrollReveal().initialize();

const form = document.querySelector("[data-contact-form]");
if (form instanceof HTMLFormElement) new ContactForm(form, new FormService(siteConfig.email)).initialize();

document.querySelectorAll(".resume-link").forEach((link) => link.addEventListener("click", async (event) => {
  try { const response = await fetch(siteConfig.resumeUrl, { method: "HEAD" }); if (!response.ok) throw new Error(); }
  catch { event.preventDefault(); alert("The executive résumé is being updated. Please request the latest copy by email."); }
}));
