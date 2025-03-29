document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const bunny1 = document.querySelector('.bunny1');
    const bunny2 = document.querySelector('.bunny2');
  
    function setupBunny(bunny) {
      bunny.dataset.state = 'idle';
  
      bunny.addEventListener('click', () => {
        const state = bunny.dataset.state;
  
        if (state === 'idle') {
          bunny.classList.add('bunny-leave');
          bunny.classList.add('bunny-swing');
          bunny.dataset.state = 'swinging';
        } else if (state === 'swinging') {
          bunny.classList.remove('bunny-swing');
          bunny.classList.add('bunny-fall');
          bunny.dataset.state = 'fallen';
        }
      });
    }
  
    setupBunny(bunny1);
    setupBunny(bunny2);
  });
  