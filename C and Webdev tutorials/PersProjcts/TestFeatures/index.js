const popSound = document.getElementById('popSound');

document.querySelectorAll('.petal').forEach(petal => {
    petal.addEventListener('click', () => {
      // Apply pop animation
      petal.classList.add('popping');
      popSound.play();

      // Wait for the pop to finish, then replace with butterfly
      setTimeout(() => {
        petal.classList.remove('petal', 'popping');
        petal.classList.add('butterfly');
      }, 300);
    });
});