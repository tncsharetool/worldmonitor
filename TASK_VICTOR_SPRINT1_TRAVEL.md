# 🎯 TASK: Sprint 1 - TRAVEL Variant Implementation

**Assignee:** Victor  
**Status:** Ready for Development  
**Duration:** 2-3 days  
**Priority:** High  

---

## 📋 Objective

Implement the **TRAVEL variant** skeleton - a new dashboard focused on travel intelligence, flight tracking, and destination safety. This is **Phase 1 of multi-variant architecture** where each team member owns a specialized dashboard.

---

## ✅ Acceptance Criteria

### 1. Config File: `src/config/variants/travel.ts`
**File MUST export:**
```typescript
export const travelVariantConfig = {
  id: "travel",
  label: "Travel Monitor",
  enabledLayers: [
    "conflicts",      // Travel risk zones
    "weather",        // Destination weather
    "flights",        // Airport delays
    "outages",        // Infrastructure impacts
  ],
  enabledPanels: [
    "map",
    "live-news", 
    "travel-sidebar",
    "security-advisories",
  ],
};
```

**Requirements:**
- ✅ Minimal structure (can be `any` type for now)
- ✅ At least 4 layers enabled (conflicts + weather + 2 others)
- ✅ At least 2 panels different from WORLD variant
- ✅ No TypeScript errors on build

---

### 2. Component: `src/features/travel/TravelSidebar.tsx`

**Must render:**
- ✅ Form with 3 inputs:
  - `[Origin]` (text input, placeholder "From (city/airport)")
  - `[Destination]` (text input, placeholder "To (city/airport)")
  - `[Departure Date]` (date input)
- ✅ Submit button labeled "Plan Trip"
- ✅ Basic styling (can use existing `Panel.ts` wrapper or inline CSS)

**Behavior:**
- On submit, log to console: `{ origin, destination, departureDate }`
- Form clears after submit (optional, not required)

**File Path & Export:**
```typescript
// src/features/travel/TravelSidebar.tsx
export default function TravelSidebar() {
  // ... implementation
}
```

---

### 3. Variant Integration

**Location:** Find where WORLD/TECH/FINANCE tabs are rendered (likely in `src/components/App.ts` or header component)

**Add:**
- ✅ New menu option: "TRAVEL" (can be button, tab, or dropdown item)
- ✅ When TRAVEL is selected:
  - Switch map layers to match `travelVariantConfig.enabledLayers`
  - Render `TravelSidebar` instead of other sidebars
  - Update URL query param to `?variant=travel` (optional but nice)

**Acceptance:** Clicking TRAVEL tab switches app to TRAVEL config visibly

---

## 📂 Folder Structure (Expected)

```
src/
├── config/
│   └── variants/
│       ├── world.ts          (existing)
│       ├── tech.ts           (existing)
│       ├── finance.ts        (existing)
│       └── travel.ts         (NEW - YOUR FILE)
│
└── features/
    └── travel/               (NEW - YOUR FOLDER)
        ├── TravelSidebar.tsx (NEW)
        └── index.ts          (optional export barrel)
```

---

## 🔄 Testing Checklist

Before submitting PR, verify:

- [ ] `npm run build` completes without errors
- [ ] `npm run dev` starts and loads without console errors
- [ ] TRAVEL tab appears in variant selector
- [ ] Clicking TRAVEL tab updates map layers (visually different from WORLD)
- [ ] TravelSidebar form renders with 3 inputs
- [ ] Entering "New York" → "London" → date and clicking "Plan Trip" logs correct object to console
- [ ] Form inputs are accessible (can tab, type, select date)

---

## 📦 Deliverables

Submit **ONE of:**

### Option A: GitHub PR
- Link to PR with commits on `feature/travel-variant` branch
- Squash commits or clean history preferred
- PR description: "Implement TRAVEL variant skeleton - config, TravelSidebar, variant switching"

### Option B: Diff Files
- 3 files showing diffs:
  1. `travel.ts` (new config)
  2. `TravelSidebar.tsx` (new component)
  3. File showing variant switcher changes (e.g., `App.ts` or header component)
- Format: Copy-paste into issue or attach `.patch` file

### Option C: Screenshots + File Links
- Working/non-working OK - just show attempt
- Screenshot of TRAVEL tab in UI
- Code snippets of 3 key files
- List any blockers/questions

### Required Attachments:
- ✅ Screenshot showing TRAVEL tab selected + TravelSidebar form visible
- ✅ Browser console screenshot showing form submission log

---

## 🚫 Common Pitfalls (Avoid These)

- ❌ Hardcoding layers/panels in component (should read from config)
- ❌ Importing from files that don't exist yet
- ❌ Renaming existing files (break other variants)
- ❌ Adding dependencies without asking
- ❌ Committing `node_modules` or `.env` files

---

## 🤝 Getting Help

If blocked on:
- **"Where is the variant switcher?"** → Search for `WORLD` string in component files
- **"How do I reference TravelSidebar in config?"** → Look at how other panels are referenced in `world.ts` or `tech.ts`
- **"TypeScript error on travelVariantConfig"** → Type as `any` for now, real type defined later
- **Build fails" → Paste full error log in task comment, Victor/Copilot will patch

---

## 📝 Notes

- This is **Phase 1 skeleton** - UI can be basic, no API calls needed yet
- Focus on **structure + integration**, not styling
- Lucky working on CLIMATE/HEALTH in parallel - **don't edit Lucky's files**
- After approval, Phase 2 will add: real flight data, risk scoring, affiliate links

---

**Questions?** Comment below or reach out to team lead.  
**Ready to start?** Create your feature branch and push when done!
