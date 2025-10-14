# TODO: Make Senior High School Tracks Clickable

## Steps to Complete

1. **Create individual page components for each SHS track** ✅
   - SHSHUMSS.jsx for Arts, Social Sciences, and Humanities ✅
   - SHSABM.jsx for Business and Entrepreneurship ✅
   - SHSSTEM.jsx for Science, Technology, Engineering, and Mathematics ✅
   - SHSTechnicalDrafting.jsx for Technical Drafting ✅
   - SHSAnimation.jsx for Animation ✅
   - SHSIllustration.jsx for Illustration ✅
   - SHSVisualGraphicDesign.jsx for Visual Graphic Design ✅
   - SHSComputerProgramming.jsx for Computer Programming (Java) ✅
   - SHSComputerSystemsServicing.jsx for Computer Systems Servicing ✅
   - SHSContactCenterServices.jsx for Contact Center Services ✅

2. **Update App.jsx** ✅
   - Add imports for all new SHS track components ✅
   - Add routing conditions for each track (e.g., "#/programs/shs/abm" -> <SHSABM />) ✅
   - Update titleForRoute function to include titles for each track ✅

3. **Update ExplorePrograms.jsx** ✅
   - Modify the Academic Tracks items to be objects with label and href ✅
   - Modify the Technical-Professional (TechPro) Tracks items to be objects with label and href ✅

## Notes
- Base each new page component on the existing SHS.jsx structure
- Use appropriate icons and descriptions for each track
- Ensure hrefs match the routing paths

4. **Update SHS track pages to use ProgramPageLayout** ✅
   - Refactor each SHS track component to use ProgramPageLayout like Higher Education programs ✅
   - Define program object with hero, overview, outcomes, tagline, careers, campuses, badge ✅
   - Ensure content is appropriate for SHS tracks ✅
