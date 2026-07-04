# Animation & 3D Effects Documentation (GSAP Powered)

This document outlines the industry-standard 3rd party animation libraries and logic that power this 21st-century motion site experience.

## 1. The Technology Stack
We are utilizing **GSAP (GreenSock Animation Platform)** and **GSAP ScrollTrigger** for all high-end motion effects.

## 2. The "Crazy" Unlock Animation (Scene 0)
When Azhaka enters **2209**, a master GSAP Timeline fires:
- `gsap.to(".vault-door-left", { x: "-100%", duration: 1.5, ease: "power4.inOut" })`
- `gsap.to(".vault-door-right", { x: "100%", duration: 1.5, ease: "power4.inOut" })`
- The main content scales in via `gsap.fromTo`.

## 3. The Blooming Bouquet Animation (Scene 1)
As soon as the vault opens, Azhaka is presented with flowers:
- **GSAP Staggering:** We use `gsap.from(".flower-item", { scale: 0, opacity: 0, rotation: 45, stagger: 0.15, ease: "back.out(1.7)" })`
- This creates a beautiful "blooming" effect where each flower pops into place organically, assembling a massive bouquet on her screen.

## 4. 3D Interactive Flip-Cards (GSAP + CSS3D)
- Cards utilize `transform-style: preserve-3d;` for true depth.
- GSAP's `quickTo` function provides highly optimized, buttery-smooth mouse tracking for `rotateX` and `rotateY`.
- On click, a GSAP tween handles the 180-degree flip with a `back` easing curve.

## 5. Scroll-Triggered Floral Parallax (ScrollTrigger)
- **Scrubbing Petals:** Instead of generic particles, we have floating flower petals hooked to the scrollbar via `scrub: true`. 
- Layer 1 (Foreground petals): Move fast and are slightly out of focus (`filter: blur(4px)`).
- Layer 2 (Background petals): Move slow. This difference in speed creates a deep 3D floral storm.
- **Background Color Morphing:** We map the entire scroll height to a GSAP timeline that tweens the `body` background color.

## 6. Cinematic Text Reveals
- Using `gsap.from(".text-line", { y: 100, opacity: 0, stagger: 0.2, ease: "expo.out" })`, the text lines elegantly float up one by one as she scrolls.