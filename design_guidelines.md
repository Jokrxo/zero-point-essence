# Stella Lumen Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium coaching and consulting websites with a unique cosmic theme to create an aspirational, trustworthy brand presence.

## Core Design Elements

### A. Color Palette
**Primary Colors (Classy & Sophisticated):**
- Dark Charcoal: #231F20 (primary dark backgrounds, hero sections)
- Muted Gold: #8E793E (primary accent, dark variant)
- Lighter Gold: #AD974F (primary accent, lighter variant for stars/highlights)
- Light Gray: #EAEAEA (backgrounds, subtle accents)

**Light Mode:**
- Background: White (#FFFFFF) for content areas
- Text: Dark Charcoal (#231F20) for primary content
- Accents: Muted Gold (#8E793E, #AD974F) for buttons, links, and emphasis

**Dark Mode:**
- Background: Dark Charcoal (#231F20)
- Text: Light Gray (#EAEAEA) for primary content
- Accents: Lighter Gold (#AD974F) for interactive elements

### B. Typography
**Font Families** (via Google Fonts):
- **Headers (H1-H3)**: Montserrat (bold, clean, modern)
- **Body Text**: Open Sans (readable, friendly)

**Font Hierarchy:**
- H1: Large, prominent (hero titles, "WHO WE ARE")
- H2: Section headers ("OUR SERVICES", "HAPPY CLIENTS")
- H3: Subsections ("Journey to the Stars" - founder bio)
- Body: 16px base, comfortable line-height for readability

### C. Layout System
**Spacing Primitives**: Use consistent Tailwind-style spacing units (or custom CSS):
- p-4, p-8, p-12 for padding
- m-4, m-8, m-12 for margins
- Gap spacing: 4, 8, 16px between elements

**Responsive Breakpoints:**
- Mobile-first approach
- <768px: Single column, hamburger menu
- ≥768px: Multi-column layouts, full navigation

**Layout Structure:**
- Full-width hero banner
- Contained content sections (max-width ~1200px)
- Flexbox/Grid for service cards and testimonials

### D. Component Library

**Navigation:**
- Sticky top navigation bar
- Links: Home | About | Services | Clients | Blog | Contact
- Active states for current page
- Mobile: Hamburger menu for <768px

**Hero Section:**
- Full-width starry sky background image (Unsplash placeholder)
- Alt text: "Starry galaxy sky"
- Overlay gradient for text readability
- Primary CTA button: "Start Your Journey – Free Consultation"
- Button style: Gold background, navy text, prominent placement

**Service Cards (4 offerings):**
- Card layout with icons/imagery
- Title + bulleted benefits (semantic HTML lists)
- Example: "Leadership Coaching" with "Personalized strategies to boost team performance"
- Grid: 2x2 on desktop, stacked on mobile

**Testimonial Blocks (5 testimonials):**
- Quote format with quotation styling
- Include metrics: "Increased revenue by 40% – Anonymous Corp"
- Profile images or company logos (placeholders)
- Grid layout: 3 columns desktop, 1 column mobile

**Forms:**
- Contact form: Name, Email, Goal fields with HTML5 validation
- Newsletter signup: Simple email input + subscribe button
- Gold submit buttons with hover states
- JS validation alerts for required fields

**Footer:**
- Social media icons (LinkedIn/X placeholders)
- Copyright information
- Dark navy background, gold accents

### E. Animations
**Subtle CSS Animations:**
- Twinkling stars effect on scroll (CSS keyframes)
- Smooth scroll behavior between sections
- Fade-in effects for content sections
- Button hover states (scale/glow effects)
- Avoid excessive motion; keep it elegant

## Content Sections

**Homepage Structure (Single-page scroll feel):**
1. Hero with starry background + CTA
2. Who We Are (250-word expanded content)
3. Our Services (4 service cards)
4. Happy Clients (5 testimonials)
5. Journey to the Stars (Founder bio snippet)
6. Final CTA section
7. Footer

**Subpages:**
- about.html, services.html, clients.html, blog.html (stub), contact.html
- Include breadcrumb navigation on all subpages
- Consistent header/footer across all pages

## Images
**Required Images:**
1. **Hero Banner**: Full-width starry galaxy sky (Unsplash free image)
2. **Team Collaboration**: High-res placeholder, Alt: "Team collaborating on success strategy"
3. **Additional Supporting Images**: 2 more high-res placeholders for services/about pages
4. **All images compressed** for <3s load time

## SEO & Accessibility
- Title: "Stella Lumen: Guiding You to Prosperity | Innovative Success Solutions"
- Meta description: "Achieve business success with our prosperity coaching and goal-tracking solutions."
- Proper H1-H3 hierarchy throughout
- Alt texts for all images
- Semantic HTML5 tags (nav, section, article, footer)
- Keywords: "achieve goals," "business success," "prosperity coaching"

## Performance & Technical
- Target: <3s page load
- Minify CSS/JS
- Image compression
- HTTPS-ready (deployment comment)
- Google Analytics placeholder script
- WCAG accessibility basics
- Clean, commented code

**Design Philosophy**: Create a cosmic, aspirational experience that conveys trust, innovation, and transformation. The starry theme should feel elegant and professional, not gimmicky—balancing visual impact with usability and conversion optimization.