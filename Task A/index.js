// script.js
const cardContainer = document.querySelector('.card-container');
const cards = Array.from(document.querySelectorAll('.card'));

// Scroll offset and state
let offset = 0;
let scrolling = false;

cards.forEach((card) => {
    card.addEventListener('click', () => {
        if (scrolling) return; // Prevent rapid clicks
        scrolling = true;

        // Move all cards upwards
        offset -= 170; // Adjust card height + gap
        cardContainer.style.transform = `translateY(${offset}px)`;

        setTimeout(() => {
            // Recycle first card to the bottom
            const firstCard = cards.shift();
            cards.push(firstCard);
            cardContainer.append(firstCard);

            // Reset the transform for seamless effect
            cardContainer.style.transition = 'none';
            offset += 170;
            cardContainer.style.transform = `translateY(${offset}px)`;

            setTimeout(() => {
                cardContainer.style.transition = 'transform 0.3s ease';
                scrolling = false;
            }, 10); // Short delay to reset transition
        }, 300); // Matches transition duration
    });
});
