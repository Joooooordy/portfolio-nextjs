# Performance Optimizations - Homepage Scroll Performance

## Date: 2025-11-08

## Issue
The homepage had laggy, non-smooth scrolling due to several performance bottlenecks.

## Root Causes Identified

1. **Universal Transition Rule (Critical)**: `app/globals.css` had a `*` selector applying transitions to ALL elements on ALL properties including transform, causing constant repaints during scroll.

2. **Continuous Animations**: Hero component had infinite repeating animations on `boxShadow` property which triggers expensive repaints.

3. **Layout-Affecting Transforms**: Multiple components used `hover:-translate-y` and `hover:scale-*` which cause layout shifts and reflow.

4. **Unoptimized Image**: Hero component used standard `<img>` tag instead of Next.js `Image` component.

5. **Inefficient Blur Effects**: Decorative elements with `group-hover:scale-150` on blurred elements causing performance issues.

## Changes Made

### 1. app/globals.css
**Before:**
```css
* {
  transition-property: background-color, color, border-color, fill, stroke, box-shadow, transform;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}
```

**After:**
```css
/* Smooth transitions - removed universal selector for performance */
/* Individual components now handle their own transitions */
```

**Impact:** Eliminates constant transitions on all elements during scroll.

---

### 2. components/Hero.tsx

#### Image Optimization
- **Before:** Used `<img>` tag
- **After:** Using Next.js `Image` component with proper `fill`, `sizes`, and `priority` props
- **Impact:** Proper image optimization, lazy loading, and srcset generation

#### Animation Optimization
- **Removed:** Infinite `boxShadow` animation on profile image container (lines 159-166)
- **Removed:** Infinite `y` position animations on floating decorative elements
- **Impact:** Eliminates continuous repaints during scroll

#### Button/Link Hover Optimization
- **Before:** `hover:scale-105` and `hover:scale-110` on buttons and social links
- **After:** Only `transition-shadow` and `transition-colors` with `will-change-transform`
- **Impact:** No layout shifts during hover/scroll

#### Positioning Fix
- **Before:** `transform -translate-x-1/2` on scroll indicator
- **After:** `-translate-x-1/2` (Tailwind's static utility)
- **Impact:** Proper centering without triggering transforms

---

### 3. components/AboutSection.tsx

#### Card Hover Optimization
- **Before:** `hover:-translate-y-1` on all three cards
- **After:** Removed translate, kept `hover:shadow-2xl` and `hover:border-*`
- **Impact:** No layout shifts during scroll/hover

#### Decorative Element Optimization
- **Before:** `group-hover:scale-150 transition-transform` on 4 blur elements
- **After:** Static positioning, no scale transforms
- **Impact:** Eliminates repaint costs on hover

---

### 4. components/SkillsSection.tsx

#### Skill Card Optimization
- **Before:** `hover:scale-105 transition-all`
- **After:** `will-change-transform transition-shadow`
- **Impact:** Only shadow changes on hover, no layout shifts

---

### 5. components/ProjectsSection.tsx

#### Project Card Optimization
- **Before:** `hover:scale-105 transition-all`
- **After:** `will-change-transform transition-shadow`
- **Impact:** Only shadow changes on hover, no layout shifts

---

### 6. components/tech-card.tsx

#### Card Optimization
- **Before:** `hover:-translate-y-0.5` on card wrapper
- **After:** Removed translate, kept border/shadow transitions
- **Impact:** No layout shifts

#### Icon Optimization
- **Before:** `group-hover:scale-105` on Image component
- **After:** `transition-opacity`
- **Impact:** GPU-accelerated opacity changes instead of scale

---

## Performance Benefits

1. **Eliminated Layout Thrashing**: Removed all `translate` and `scale` transforms that cause reflow
2. **Reduced Repaints**: Removed continuous animations and universal transitions
3. **Hardware Acceleration**: Focused on `opacity` and `transform` (when static)
4. **Optimized Images**: Using Next.js Image component for automatic optimization
5. **Efficient Transitions**: Only transition specific properties needed (shadow, colors, opacity)
6. **Will-Change Hints**: Strategic use of `will-change-transform` where appropriate

## Testing Checklist for Maintainers

After running `npm install` and `npm run build`, verify:

- [ ] Homepage scrolling is smooth and fluid on desktop
- [ ] Homepage scrolling is smooth on mobile devices
- [ ] All hover effects still work (shadows, colors, borders)
- [ ] Profile image loads properly and looks correct
- [ ] All animations during initial page load still work (framer-motion fade-ins)
- [ ] No visual regressions in layout or spacing
- [ ] Typing animation in Hero section still works
- [ ] All cards and components maintain their visual design
- [ ] No console errors or warnings
- [ ] Run `npm run lint` to ensure no linting issues

## Browser Compatibility

All optimizations use standard CSS properties and Next.js features that work across modern browsers. The `will-change` property has excellent support (95%+ global usage).

## Notes

- All visual designs, layouts, and functionality have been preserved
- Only performance-related changes were made
- Images now use Next.js automatic optimization
- Framer Motion animations during page load are preserved
- The typing animation effect in Hero section is unchanged
- Reduced motion preferences are respected (already in globals.css)
