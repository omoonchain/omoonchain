document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card, .hero');
  cards.forEach((card, i) => {
    card.animate(
      [
        { opacity: 0, transform: 'translateY(14px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 450,
        delay: i * 80,
        easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        fill: 'forwards'
      }
    );
  });
});
