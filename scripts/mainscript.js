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
  
  document.addEventListener("DOMContentLoaded", () => {
    const ticket = document.getElementById("ticket");
  
    let flipped = false;
  
    ticket.addEventListener("click", () => {
      ticket.classList.add("shake");
  
      ticket.addEventListener("animationend", () => {
        ticket.classList.remove("shake");
  
        if (!flipped) {
          ticket.src = "./img/block2/ticket2.svg";
          flipped = true;
        } else {
          ticket.src = "./img/block2/ticket.svg";
          flipped = false;
        }
      }, { once: true });
    });
  });
  
  
  document.querySelectorAll('.note').forEach(note => {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
  
    note.addEventListener('mousedown', (e) => {
      isDragging = true;
      note.style.cursor = 'grabbing';
  
      const rect = note.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
  
      const parentRect = note.parentElement.getBoundingClientRect();
      const left = rect.left - parentRect.left;
      const top = rect.top - parentRect.top;
  
      note.style.left = `${left}px`;
      note.style.top = `${top}px`;
  
      note.style.zIndex = 1000;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
  
      const parentRect = note.parentElement.getBoundingClientRect();
      const newLeft = e.clientX - parentRect.left - offsetX;
      const newTop = e.clientY - parentRect.top - offsetY;
  
      note.style.left = `${newLeft}px`;
      note.style.top = `${newTop}px`;
    });
  
    document.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      note.style.cursor = 'grab';
      note.style.zIndex = 10;
    });
  });
  
const coffeeItems = document.querySelectorAll('.coffee-item');
const coffeeZone = document.querySelector('.coffee-zone');

coffeeItems.forEach(item => {
  item.style.cursor = 'grab';
  item.addEventListener('mousedown', onMouseDown);
  item.ondragstart = () => false;

  function onMouseDown(e) {
    e.preventDefault();

    const zoneRect = coffeeZone.getBoundingClientRect();
    const shiftX = e.clientX - item.getBoundingClientRect().left;
    const shiftY = e.clientY - item.getBoundingClientRect().top;

    item.style.zIndex = 10;
    item.style.cursor = "url('../img/paw_cursor.png'), grabbing";

    function moveAt(pageX, pageY) {
      const left = pageX - zoneRect.left - shiftX;
      const top = pageY - zoneRect.top - shiftY;
      item.style.left = `${left}px`;
      item.style.top = `${top}px`;
    }

    function onMouseMove(e) {
      e.preventDefault(); // предотвращаем лаги
      moveAt(e.pageX, e.pageY);
    }

    moveAt(e.pageX, e.pageY);

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      item.style.cursor = 'grab';
    });
  }
});

