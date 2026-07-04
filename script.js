// Main Application Script
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    
    const lockScreen = document.getElementById('scene-0');
    const mainContent = document.getElementById('main-content');
    const passwordInput = document.getElementById('password-input');
    const unlockBtn = document.getElementById('unlock-btn');
    const errorMessage = document.getElementById('error-message');
    const parallaxPetals = document.getElementById('parallax-petals');
    
    const correctPassword = '2209';
    let isUnlocked = false;
    
    // Password input handler
    passwordInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length === 4) {
            setTimeout(() => checkPassword(), 300);
        }
    });
    
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkPassword();
        }
    });
    
    unlockBtn.addEventListener('click', function(e) {
        e.preventDefault();
        checkPassword();
    });
    
    function checkPassword() {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword.length < 4) {
            gsap.fromTo(passwordInput, { x: -5 }, { x: 0, duration: 0.3 });
            return;
        }
        
        if (enteredPassword === correctPassword) {
            unlockVault();
        } else {
            showError();
        }
    }
    
    function showError() {
        errorMessage.style.display = 'block';
        passwordInput.value = '';
        
        gsap.fromTo(errorMessage, { x: -10 }, { x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        
        if (navigator.vibrate) navigator.vibrate(100);
        
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
    
    function unlockVault() {
        isUnlocked = true;
        
        if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
        
        const unlockTimeline = gsap.timeline({
            onComplete: () => {
                mainContent.classList.add('visible');
                parallaxPetals.classList.add('visible');
                setTimeout(() => {
                    initializeAnimations();
                }, 100);
            }
        });
        
        unlockTimeline
            .to(".vault-door-left", { x: "-100%", duration: 1.2, ease: "power4.inOut" })
            .to(".vault-door-right", { x: "100%", duration: 1.2, ease: "power4.inOut" }, "-=1.2")
            .to(lockScreen, { opacity: 0, duration: 0.4 }, "-=0.3")
            .set(lockScreen, { display: "none" })
            .fromTo(mainContent, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 });
    }
    
    function initializeAnimations() {
        initializeBouquetAnimation();
        initializeFlipCards();
        initializeParallaxScroll();
        initializeLoveLetterAnimation();
        initializeTextReveals();
        
        if (window.matchMedia('(hover: hover)').matches) {
            initialize3DTilt();
        }
    }
    
    function initializeBouquetAnimation() {
        const bouquetContainer = document.querySelector('.bouquet-container');
        const flowerItems = document.querySelectorAll('.flower-item');
        
        gsap.to(bouquetContainer, { opacity: 1, duration: 0.5 });
        
        gsap.from(flowerItems, {
            scale: 0,
            opacity: 0,
            rotation: 45,
            stagger: { amount: 1.5, from: "center" },
            ease: "back.out(1.7)",
            duration: 0.8
        });
    }
    
    function initializeFlipCards() {
        const flipCards = document.querySelectorAll('.flip-card');
        
        flipCards.forEach(card => {
            let touchStartX = 0;
            let touchStartY = 0;
            
            card.addEventListener('touchstart', function(e) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            
            card.addEventListener('touchend', function(e) {
                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                const deltaX = Math.abs(touchEndX - touchStartX);
                const deltaY = Math.abs(touchEndY - touchStartY);
                
                if (deltaX < 10 && deltaY < 10) {
                    this.classList.toggle('flipped');
                    const inner = this.querySelector('.flip-card-inner');
                    gsap.to(inner, {
                        rotationY: this.classList.contains('flipped') ? 180 : 0,
                        duration: 0.8,
                        ease: "back.inOut(1.7)"
                    });
                }
            });
            
            card.addEventListener('click', function() {
                if (!('ontouchstart' in window)) {
                    this.classList.toggle('flipped');
                    const inner = this.querySelector('.flip-card-inner');
                    gsap.to(inner, {
                        rotationY: this.classList.contains('flipped') ? 180 : 0,
                        duration: 0.8,
                        ease: "back.inOut(1.7)"
                    });
                }
            });
        });
    }
    
    function initializeParallaxScroll() {
        const petals = document.querySelectorAll('.parallax-petals .petal');
        petals.forEach((petal, index) => {
            gsap.to(petal, {
                y: -120 * (index + 1),
                scrollTrigger: {
                    trigger: ".scene-3",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });
        
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                x: -20,
                duration: 0.5,
                delay: index * 0.15,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }
    
    function initializeLoveLetterAnimation() {
        const beatingHeart = document.querySelector('.beating-heart');
        const loveLetter = document.querySelector('.love-letter');
        const letterContent = document.querySelector('.letter-content');
        const finalMessage = document.querySelector('.final-message');
        const bottomFlowers = document.querySelector('.bottom-flowers');
        
        gsap.fromTo(beatingHeart, 
            { scale: 0 }, 
            { 
                scale: 1, 
                duration: 1, 
                ease: "elastic.out(1, 0.3)",
                scrollTrigger: { trigger: ".scene-4", start: "top 80%" }
            }
        );
        
        gsap.fromTo(loveLetter, 
            { y: 40, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8,
                scrollTrigger: { trigger: loveLetter, start: "top 85%" }
            }
        );
        
        const letterLines = letterContent.querySelectorAll('p');
        gsap.from(letterLines, {
            y: 15,
            opacity: 0,
            stagger: 0.12,
            scrollTrigger: { trigger: letterContent, start: "top 80%" }
        });
        
        gsap.fromTo(finalMessage, 
            { scale: 0.8, opacity: 0 }, 
            { 
                scale: 1, 
                opacity: 1, 
                duration: 0.8,
                scrollTrigger: { trigger: finalMessage, start: "top 90%" }
            }
        );
        
        if (bottomFlowers) {
            gsap.from(bottomFlowers.children, {
                y: 20,
                opacity: 0,
                stagger: 0.08,
                scrollTrigger: { trigger: bottomFlowers, start: "top 95%" }
            });
        }
    }
    
    function initializeTextReveals() {
        const revealTexts = document.querySelectorAll('.reveal-text');
        
        revealTexts.forEach(text => {
            gsap.fromTo(text, 
                { y: 25, opacity: 0 }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.7,
                    ease: "expo.out",
                    scrollTrigger: { trigger: text, start: "top 85%" }
                }
            );
        });
    }
    
    function initialize3DTilt() {
        const flipCards = document.querySelectorAll('.flip-card');
        
        flipCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                if (this.classList.contains('flipped')) return;
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                
                gsap.to(this, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    duration: 0.3,
                    ease: "power2.out",
                    transformPerspective: 1000
                });
            });
            
            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
        });
    }
    
    function initializeFloatingPetals() {
        const petals = document.querySelectorAll('.floating-petal');
        
        petals.forEach((petal) => {
            gsap.set(petal, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotation: Math.random() * 360
            });
            
            gsap.to(petal, {
                x: "+=40",
                y: "-=250",
                rotation: "+=360",
                duration: 25 + Math.random() * 20,
                repeat: -1,
                ease: "none"
            });
        });
    }
    
    initializeFloatingPetals();
    
    window.addEventListener('orientationchange', () => {
        setTimeout(() => ScrollTrigger.refresh(), 500);
    });
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 250);
    }, { passive: true });
    
    console.log('%c💕 Secret Love Vault Loaded', 'color: #FF2A55; font-size: 20px; font-weight: bold;');
});