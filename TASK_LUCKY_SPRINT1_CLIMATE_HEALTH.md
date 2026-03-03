# 🌍 TASK: Sprint 1 - CLIMATE + HEALTH Variants Skeleton

**Assignee:** Lucky  
**Status:** Ready for Development  
**Duration:** 2-3 days  
**Priority:** High  

---

## 📋 Objective

Implement skeleton configs and UI for **CLIMATE** and **HEALTH** variants - two complementary dashboards for weather/climate monitoring and health risk tracking. Both variants will be integrated into the multi-variant architecture where Victor handles TRAVEL.

---

## ✅ Acceptance Criteria

### Part 1: Config Files

#### File: `src/config/variants/climate.ts`
**Must export:**
```typescript
export const climateVariantConfig = {
  id: "climate",
  label: "Climate & Weather Monitor",
  enabledLayers: [
    "weather",      // Real-time weather
    "natural",      // Earthquakes, floods, etc.
    "fires",        // Satellite fire detection
    "climate",      // Climate anomalies
  ],
  enabledPanels: [
    "map",
    "live-news",
    "climate-panel",
    "extremes-today",
  ],
};
```

**Requirements:**
- ✅ All 4 specified layers enabled
- ✅ No conflicts/military/bases layers
- ✅ At least 2 unique panels (different from WORLD)

---

#### File: `src/config/variants/health.ts`
**Must export:**
```typescript
export const healthVariantConfig = {
  id: "health",
  label: "Health Risk Monitor",
  beta: true,  // Mark as beta/coming soon
  enabledLayers: [
    "outages",      // Infrastructure health impact
    "weather",      // Weather health effects
    "fires",        // Air quality from fires
    "climate",      // Heat/drought health impacts
  ],
  enabledPanels: [
    "map",
    "live-news",
    "health-summary",
  ],
};
```

**Requirements:**
- ✅ Unique health-focused layer combination
- ✅ Include `beta: true` flag (shows "Coming Soon" badge in UI)
- ✅ At least 1 unique panel

---

### Part 2: Health Summary Panel

**File:** `src/features/health/HealthSummaryPanel.tsx`

**Render (dummy content OK for now):**
```
┌─────────────────────────────────────┐
│ Health Risk Monitor                 │
│ (coming soon - Phase 2)             │
│                                     │
│ Top Countries by Health Risk:       │
│ 1. India       | Risk Score: 42 🔴  │
│ 2. Nigeria     | Risk Score: 38 🔴  │
│ 3. Pakistan    | Risk Score: 35 🟡  │
│                                     │
│ [Learn More →]                      │
└─────────────────────────────────────┘
```

**Requirements:**
- ✅ Render dummy text: "Health Risk Monitor coming soon"
- ✅ Display 3-5 dummy country rows with scores
- ✅ Use existing `Panel.ts` wrapper if possible
- ✅ No broken styles (can be basic)

**File Export:**
```typescript
// src/features/health/HealthSummaryPanel.tsx
export default function HealthSummaryPanel() {
  // ... implementation
}
```

---

### Part 3: Variant Integration

**Location:** Where WORLD/TECH/FINANCE tabs are rendered (same file as Victor will modify)

**Add:**
- ✅ New menu options: "CLIMATE" and "HEALTH"
- ✅ CLIMATE tab:
  - Switches map layers to `climateVariantConfig.enabledLayers`
  - Renders climate-specific panels
- ✅ HEALTH tab:
  - Switches map layers to `healthVariantConfig.enabledLayers`
  - Renders `HealthSummaryPanel`
  - Shows "Beta" or "Coming Soon" badge (optional but nice)

**Acceptance:** Clicking CLIMATE or HEALTH tabs visibly updates map layers

---

## 📂 Folder Structure (Expected)

```
src/
├── config/
│   └── variants/
│       ├── world.ts          (existing)
│       ├── tech.ts           (existing)
│       ├── finance.ts        (existing)
│       ├── climate.ts        (NEW - YOUR FILE)
│       └── health.ts         (NEW - YOUR FILE)
│
└── features/
    └── health/               (NEW - YOUR FOLDER)
        ├── HealthSummaryPanel.tsx (NEW)
        └── index.ts          (optional export barrel)
```

**Note:** Climate features not required yet (reuse existing climate panel if it exists)

---

## 🔄 Testing Checklist

Before submitting PR, verify:

- [ ] `npm run build` completes without errors
- [ ] `npm run dev` starts and loads without console errors
- [ ] CLIMATE tab appears in variant selector
- [ ] HEALTH tab appears in variant selector (with "Beta" badge if implemented)
- [ ] Clicking CLIMATE updates map layers visibly
- [ ] Clicking HEALTH updates map layers visibly
- [ ] HealthSummaryPanel renders without errors
- [ ] No TypeScript errors related to new configs
- [ ] Dummy country rows display correctly in HealthSummaryPanel

---

## 📦 Deliverables

Submit **ONE of:**

### Option A: GitHub PR
- Link to PR with commits on `feature/climate-health-variants` branch
- Clean commit history or squashed commits
- PR description: "Implement CLIMATE and HEALTH variant skeletons with configs and HealthSummaryPanel"

### Option B: Diff Files
- 4 files showing diffs:
  1. `climate.ts` (new config)
  2. `health.ts` (new config)
  3. `HealthSummaryPanel.tsx` (new component)
  4. File showing variant switcher changes
- Format: Copy-paste into issue or `.patch` file

### Option C: Screenshots + Code Snippets
- Working/non-working OK - just show attempt
- Screenshots of CLIMATE and HEALTH tabs in UI
- Code snippets of 3 key files
- List any blockers/questions

### Required Attachments:
- ✅ Screenshot showing CLIMATE tab selected with updated map
- ✅ Screenshot showing HEALTH tab selected with HealthSummaryPanel visible
- ✅ (Optional) Screenshot showing "Beta" badge on HEALTH tab

---

## 🚫 Common Pitfalls (Avoid These)

- ❌ Editing Victor's TRAVEL or any existing WORLD/TECH/FINANCE configs
- ❌ Hardcoding layer lists in components (should read from config)
- ❌ Using components/APIs that don't exist yet
- ❌ Breaking existing variants (test all tabs still work)
- ❌ Adding large dependencies without approval
- ❌ Committing `node_modules` or `.env`

---

## 🤝 Getting Help

If blocked on:
- **"Where is the variant switcher?"** → Same file Victor is editing; coordinate on that
- **"How do I style HealthSummaryPanel?"** → Look at existing panels in `src/components/`, reuse `Panel.ts` wrapper
- **"What should dummy health scores be?"** → Any reasonable 0-100 number is fine for Phase 1
- **"Can CLIMATE and HEALTH share code?"** → Yes! Common logic in `src/features/shared/` if needed
- **Build fails** → Paste full error log in task comment

---

## 📋 Coordination Notes

- **You + Victor are working on variant switcher in same file**:
  - Decide: Do you edit same section or split?
  - Suggestion: He does TRAVEL, you do CLIMATE+HEALTH in separate commits, then merge gently
  - Use feature branches: `feature/climate-health-variants` (you), `feature/travel-variant` (Victor)
  
- **Don't edit each other's files:**
  - Victor: `travel.ts` + `features/travel/`
  - Lucky: `climate.ts`, `health.ts` + `features/health/`
  - Shared: variant switcher (coordinate!)

---

## 📝 Notes

- This is **Phase 1 skeleton** - dummy data is OK, no real APIs needed yet
- Focus on **structure + integration**, not perfection
- Victor working on TRAVEL in parallel - identical template
- After approval, Phase 2 will add: real health data, disease tracking, risk scoring
- CLIMATE variant can reuse existing climate anomaly panel if it exists in WORLD

---

**Questions?** Comment below or reach out to team lead.  
**Ready to start?** Create your feature branch and push when done!
