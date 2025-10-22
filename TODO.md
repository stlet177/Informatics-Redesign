# TODO: Fix Mission Vision Section Background Image

## Tasks
- [x] Edit the background gradient in src/pages/About.jsx to use rgba colors for semi-transparency, allowing the image to show through.
- [x] Verify the change by checking the page renders correctly.
- [x] Updated the background to fully transparent gradient with blur effect on the image, allowing the image to show through with a soft blur.

# TODO: Add Parallax Scrolling to Campuses Hero Section

## Tasks
- [x] Import useScroll and useTransform from framer-motion in src/pages/Campuses.jsx.
- [x] Add useRef hook and create containerRef for the main element.
- [x] Set up scrollYProgress using useScroll with target containerRef and offset ["start start", "end start"].
- [x] Create y transform using useTransform to move the background image from 0 to -200 based on scroll progress.
- [x] Apply the y transform to the motion.img element in the hero section.
- [x] Verify the parallax effect works by scrolling on the page.

# TODO: Update Campuses Section Layout

## Tasks
- [x] Modify the campuses section in src/pages/About.jsx to overlay campus name and address on the image with a black opaque background at the bottom.
- [x] Remove the separate text div below the image.
- [x] Ensure the layout shows only images with overlaid text.

# TODO: Add Mission Vision Section to Sidebar

## Tasks
- [x] Add "The future We're Building" entry to the sidebarItems array in src/pages/About.jsx with Rocket icon and scroll action to 'the-future-were-building'.
- [x] Position it after "Where It all began" in the sidebar.
- [x] Verify the sidebar navigation works correctly.
