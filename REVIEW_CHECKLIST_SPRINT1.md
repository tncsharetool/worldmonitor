# 🔍 SPRINT 1 - PR REVIEW CHECKLIST

**For:** Code Lead / Tech Lead  
**Purpose:** Standardized review criteria for Victor (TRAVEL) & Lucky (CLIMATE/HEALTH) Sprint 1 PRs

---

## 📋 Universal Checks (Apply to All PRs)

### Code Quality
- [ ] No TypeScript errors on build (`npm run build`)
- [ ] No ESLint violations in changed files
- [ ] No `console.log`, `debugger`, or `TODO: fix later` left in code
- [ ] Imports are clean (no unused imports)
- [ ] File names follow convention: `camelCase.tsx`, `UPPER_CASE.ts` for configs

### Architecture
- [ ] No files/folders rename or move (unless explicitly approved)
- [ ] No modifications to other team member's files
- [ ] Config exports match spec (id, label, enabledLayers, enabledPanels)
- [ ] Components export as default or named correctly
- [ ] No new dependencies added without approval

### Testing
- [ ] PR author confirms all items in "Testing Checklist" section
- [ ] At least 1 screenshot showing working feature
- [ ] Build log shows `npm run build` success or partial success
- [ ] Dev server started with `npm run dev` (no crash)

---

## ✅ VICTOR PR Specific Checks

**File:** `src/config/variants/travel.ts`
- [ ] Exports `travelVariantConfig`
- [ ] Config has: `id: "travel"`, `label` containing "Travel"
- [ ] `enabledLayers` has exactly 4+ layers including `conflicts` + `weather`
- [ ] `enabledPanels` has 2+ panels different from WORLD variant
- [ ] No TypeScript errors (can be `any` type for now)

**File:** `src/features/travel/TravelSidebar.tsx`
- [ ] Renders 3 inputs: Origin, Destination, Departure Date
- [ ] Submit button labeled "Plan Trip" or similar
- [ ] Form submission logs object to console: `{ origin, destination, departureDate }`
- [ ] Component is properly exported (default or named)
- [ ] Uses existing styling patterns (no conflicting CSS)

**Integration (Variant Switcher)**
- [ ] TRAVEL tab/button appears in header/menu
- [ ] Clicking TRAVEL updates map layers (visually different from WORLD)
- [ ] TravelSidebar renders when TRAVEL variant is active
- [ ] No errors when switching between variants

**Blockers?**
- If build fails: Ask for error log → diagnose & provide patch
- If component doesn't render: Check TypeScript types or import paths
- If layers don't update: Check variant config is wired to map layer system

---

## ✅ LUCKY PR Specific Checks

**File:** `src/config/variants/climate.ts`
- [ ] Exports `climateVariantConfig`
- [ ] Config has: `id: "climate"`, `label` with "Climate" or "Weather"
- [ ] `enabledLayers` includes: `weather`, `natural`, `fires`, `climate`
- [ ] No conflict/military/bases layers
- [ ] `enabledPanels` has 2+ climate-specific panels

**File:** `src/config/variants/health.ts`
- [ ] Exports `healthVariantConfig`
- [ ] Config has: `id: "health"`, `label` containing "Health"
- [ ] `beta: true` flag present (marks as "Coming Soon")
- [ ] `enabledLayers` health-focused (not conflict/military)
- [ ] `enabledPanels` includes `health-summary` or similar

**File:** `src/features/health/HealthSummaryPanel.tsx`
- [ ] Renders successfully without errors
- [ ] Contains text: "Health Risk Monitor" + "coming soon"
- [ ] Displays 3-5 dummy country rows with health scores
- [ ] Uses Panel wrapper if available
- [ ] Exported correctly (default or named)

**Integration (Variant Switcher)**
- [ ] CLIMATE tab appears in variant selector
- [ ] HEALTH tab appears in variant selector
- [ ] Clicking CLIMATE updates layers
- [ ] Clicking HEALTH updates layers + renders HealthSummaryPanel
- [ ] HEALTH tab shows "Beta" or "Coming Soon" badge (nice-to-have)
- [ ] No errors when switching variants

**Blockers?**
- If config types fail: Use `any` type, real type comes later
- If HealthSummaryPanel doesn't render: Check Panel wrapper or styling
- If variant switcher fails: Coordinate with Victor on shared file
- If layers don't switch: Debug map layer system (might need lead help)

---

## 🤝 Conflict Resolution (If Both Modified Variant Switcher)

**Scenario:** Both Victor & Lucky edited the same variant switcher file

**Resolution:**
1. Have them push to separate branches: `feature/travel-variant` & `feature/climate-health-variants`
2. Review & merge Victor's PR first (TRAVEL)
3. Have Lucky rebase `feature/climate-health-variants` onto main
4. Re-test Lucky's PR to ensure CLIMATE/HEALTH tabs work alongside TRAVEL
5. Merge Lucky's PR

**Alternative:** Divide the switcher file:
- Victor: Add TRAVEL to switcher
- Lucky: Add CLIMATE + HEALTH to same file
- Merge both PRs, may need small conflict resolution

---

## 🚨 Critical Issues (Block Merge)

- [ ] Build fails (`npm run build` red)
- [ ] TypeScript errors in changed files
- [ ] Breaking changes to existing WORLD/TECH/FINANCE variants
- [ ] Files renamed or moved (breaks other code)
- [ ] Hardcoded data that overlaps with other variants
- [ ] Missing required acceptance criteria (form doesn't work, config incomplete)

---

## ⚠️ Warnings (Request Changes, Not Critical)

- [ ] Minor styling issues (can fix in Phase 2)
- [ ] No screenshot attached (ask for confirmation)
- [ ] Unused config values (minor, removable later)
- [ ] Comments missing in new code (document later)
- [ ] No tests written (not required for Phase 1, but nice)

---

## ✨ Nice-to-Have (Approve Even Without These)

- [ ] Unit tests for config or form
- [ ] Storybook stories
- [ ] Accessibility improvements (ARIA labels)
- [ ] Responsive design tweaks
- [ ] Comments/documentation

---

## 🔄 Review Process

1. **Author submits PR** (or files in task comment)
2. **Lead runs checklist** above
3. **If all critical + required AC pass:** `Approve` 
4. **If blockers:** `Request changes` + comment specific fix
5. **Author makes changes + requests re-review**
6. **Lead verifies fixes** + `Approve` + `Merge`

---

## 📝 Sample Review Comments

### ✅ Approve
```
Great work! All acceptance criteria met:
✓ travel.ts config complete with 4 layers
✓ TravelSidebar form works + logs correctly
✓ Variant switching integrates properly
✓ Build passes, no TS errors

Ready to merge!
```

### 🔄 Request Changes
```
A few things to fix:

1. **Missing layer in config**: enabledLayers has only 3, needs 4+. Add `outages` or `flights`.
2. **TravelSidebar submission**: Form doesn't log to console. Check onClick handler.
3. **Variant switcher**: TRAVEL tab added but clicking doesn't update layers. Debug map layer wiring.

After fixes, request re-review!
```

### ⚠️ Approve with Notes
```
Looks good! A couple small notes for Phase 2:

- HealthSummaryPanel dummy data is fine now, but replace with real data next sprint
- Consider moving common panel styling to shared utils later
- Add some spacing between country rows?

Approving! Can merge anytime.
```

---

## 🤖 Automated Help

When review finds issues:
1. **Run checklist above** → identify specific blockers
2. **Ask author to paste** error log + code snippet (if build fails)
3. **Copilot writes specific patch** (e.g., "add `outages` to enabledLayers line 12")
4. **Author applies patch** → pushes new commit
5. **Lead re-verifies** → approves

---

End of checklist. Use this for both Victor & Lucky PRs! 🚀
