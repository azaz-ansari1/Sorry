document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const successScreen = document.getElementById('success-screen');
    const heartsContainer = document.getElementById('hearts-container');
    const mainContainer = document.getElementById('main-container');

    // Array of funny texts for the No button when they try to click it
    const noTexts = [
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;("
    ];
    let noClickCount = 0;

    // Move the "No" button on hover (desktop) or touch (mobile)
    const moveNoButton = (e) => {
        // Prevent default touch behavior if it's a touch event to avoid double triggering
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
        
        // Change text occasionally to be cute
        if (noClickCount < noTexts.length) {
            noBtn.innerText = noTexts[noClickCount];
            noClickCount++;
        } else {
            noBtn.innerText = "Please 🥺";
            noClickCount = 0; // reset
        }

        // Get window dimensions
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Get button dimensions
        const btnRect = noBtn.getBoundingClientRect();
        
        // Calculate max allowed positions
        const maxX = windowWidth - btnRect.width - 20;
        const maxY = windowHeight - btnRect.height - 20;

        // Ensure we don't go negative or out of bounds
        const safeMaxX = Math.max(0, maxX);
        const safeMaxY = Math.max(0, maxY);

        // Generate random positions
        const randomX = Math.floor(Math.random() * safeMaxX);
        const randomY = Math.floor(Math.random() * safeMaxY);

        // Set absolute position so it jumps out of the flex container
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // Increase the Yes button size slightly each time No is touched to make Yes more tempting
        let currentYesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        let currentYesPadding = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
        yesBtn.style.fontSize = (currentYesSize * 1.1) + 'px';
        yesBtn.style.padding = (currentYesPadding * 1.1) + 'px';
    };

    // Attach events to "No" button
    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('touchstart', moveNoButton);
    noBtn.addEventListener('click', (e) => {
        e.preventDefault(); // In case they somehow manage to click it
        moveNoButton(e);
    });

    // Handle "Yes" button click
    yesBtn.addEventListener('click', () => {
        mainContainer.style.opacity = '0';
        mainContainer.style.pointerEvents = 'none';
        
        setTimeout(() => {
            successScreen.classList.add('active');
            createHearts();
            createSorryWall();
        }, 300); // Wait a tiny bit for the fade out
    });

    // Create 100 "Sorry" messages
    function createSorryWall() {
        const sorryWall = document.getElementById('sorry-wall');
        sorryWall.innerHTML = ''; // Clear just in case
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const sorryItem = document.createElement('div');
                sorryItem.classList.add('sorry-item');
                sorryItem.innerText = "Sorry, Azhaka! 🥺";
                sorryWall.appendChild(sorryItem);
            }, i * 50); // Stagger the appearance
        }
    }

    // Create floating hearts on the success screen
    function createHearts() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = ['❤️', '💖', '💗', '💓', '💕'][Math.floor(Math.random() * 5)];
                
                // Randomize position and animation delay
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // 3-5s
                
                heartsContainer.appendChild(heart);
                
                // Remove heart after animation to keep DOM clean
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 150); // Stagger the heart creation
        }
        
        // Continue creating hearts periodically
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = ['❤️', '💖', '💗', '💓', '💕'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            heartsContainer.appendChild(heart);
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 300);
    }
});
