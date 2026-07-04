# Project Requirements: The "Secret Love Vault" & Cinematic Journey

## 1. Overview
A massive, highly interactive, and cinematic webpage created by **Azaz Ahmad** for his wife, **Azhaka Rajpoot Khokhar**. What starts as a mysterious locked screen opens up into a multi-stage digital love letter filled with 3D effects, scroll-animations, virtual bouquets of flowers, and interactive memories.

## 2. Core Features & Functional Requirements

### 2.1 The Secret Vault (Password Protection)
- The page will initially load into a full-screen, sleek lock interface. 
- It will ask for a secret password to enter. 
- The correct password is **"2209"**.
- Entering the correct password will trigger a massive unlock animation to seamlessly reveal the actual website behind it.
- Incorrect passwords will show playful, loving error messages.

### 2.2 The Virtual Bouquet for Azhaka
- Upon unlocking the vault, Azhaka will be greeted with a massive, beautifully animated virtual bouquet of flowers.
- The flowers will "bloom" or elegantly assemble on the screen, setting a deeply romantic tone before the scroll journey begins.

### 2.3 Expanded Interactive Sections
- **3D Memory Cards:** A section where premium, glassmorphic cards float. Moving the mouse over them creates a 3D tilt effect, and clicking them flips them over to reveal specific reasons why Azaz loves Azhaka.
- **Floating Photo Gallery:** A massive masonry grid of memories that drift slowly across the screen.

### 2.4 Dynamic Scroll-Triggered Animations
- As Azhaka scrolls down, text and image elements should fade in, slide up, and scale dynamically.
- The background color must transition seamlessly through different romantic themes.

### 2.5 Parallax 3D Floral Elements
- Instead of generic particles, the parallax elements will be **beautiful flower petals** (e.g., roses, cherry blossoms). They will move at varying speeds in the background and foreground as she scrolls, creating an immersive, romantic floral storm.

### 2.6 Cinematic Text Reveal & Grand Finale
- Sentences will fade in gracefully, synced to her scroll position. 
- The bottom of the page will culminate in a beating heart that expands into a hidden, personal letter.

## 3. Technical Specifications
- **HTML5:** Semantic structure, `<section>` tags.
- **CSS3:** Advanced CSS variables, 3D transforms (`rotateX`, `rotateY`), CSS Grid, and Glassmorphism.
- **JavaScript (GSAP Powered):** GSAP Core for the lock screen, bouquet blooming, and 3D tilt math; GSAP ScrollTrigger for parallax petals and text reveals.

## 4. Content Structure (The "Scenes")

- **Scene 0 (The Lock):** The "2209" password gate.
- **Scene 1 (The Hook & The Flowers):** Full-screen landing. A beautiful virtual bouquet blooms. "For Azhaka Rajpoot Khokhar..."
- **Scene 2 (The Reasons):** Interactive 3D flip-cards.
- **Scene 3 (The Journey):** Parallax scroll-story with floating flower petals.
- **Scene 4 (The Gallery):** Floating masonry grid of images.
- **Scene 5 (The Finale):** The beating heart and final love letter from Azaz Ahmad.
