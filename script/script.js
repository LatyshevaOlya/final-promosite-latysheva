function initEventsAnimation() {
  const eventsSection = document.querySelector('.events');
  if (!eventsSection) return;

  const eventsText = eventsSection.querySelector('.events__text');
  if (!eventsText) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        eventsText.classList.add('visible');
      } else {
        eventsText.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(eventsSection);
}

document.addEventListener('DOMContentLoaded', function() {
  initEventsAnimation();
  
  const h3 = document.getElementById('museumName');
  const description = document.getElementById('museumDescription');
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const museumSection = document.getElementById('museumSection');
  
  let isLouvre = true;

  function switchMusee() {
    isLouvre = !isLouvre;
    
    if (isLouvre) {
      h3.textContent = 'Лувр';
      description.textContent = 'Художественный музей в Париже. Расположен в центре города, на правом берегу Сены.';
      img1.src = '../images/ms1.jpg';
      img2.src = '../images/ms2.jpg';
      museumSection.style.background = 'url("../images/ml.png") center/cover no-repeat';
    } else {
      h3.textContent = 'Метропо́литен';
      description.textContent = 'Был основан 13 апреля 1870 года группой американских бизнесменов и почитателей искусства.';
      img1.src = '../images/ms3.jpg';
      img2.src = '../images/ms4.webp';
      museumSection.style.background = 'url("../images/metro.png") center/cover no-repeat';
    }
  }

  h3.addEventListener('click', function(e) {
    const leftArrowX = e.offsetX < 24;
    const rightArrowX = e.offsetX > h3.offsetWidth - 24;
    
    if (leftArrowX || rightArrowX) {
      switchMusee();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const spotlight = document.querySelector('.hero__spotlight');

  if (!hero || !spotlight) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotlight.style.left = `${x}px`;
    spotlight.style.top = `${y}px`;
  });
});