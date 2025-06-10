document.querySelectorAll('.petal').forEach(petal => {
    petal.addEventListener('click', () => {
      // Apply pop animation
      petal.classList.add('popping');
  
      // Wait for the pop to finish, then replace with butterfly
      setTimeout(() => {
        petal.classList.remove('petal', 'popping');
        petal.classList.add('butterfly');
      }, 300);
    });
  });

  //const popSound = document.getElementById('popSound');
//popSound.play();