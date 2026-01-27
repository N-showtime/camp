/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

const cards = document.querySelector('.skill-card');

// カウンターの設定
const counters = document.querySelector('.btn-count');
const likeButton = document.querySelector('.button');
let count =0;

likeButton.addEventListener("click", function () {
  count++;
  counters.textContent = count;
});

// スキルカードの表示・非表示
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-open');
  });
});
