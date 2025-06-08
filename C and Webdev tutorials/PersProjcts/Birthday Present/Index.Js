const petals = document.querySelectorAll('.petal');

  petals.forEach(petal => {
    petal.addEventListener('click', () => {
      // Toggle open/closed state
      if (petal.classList.contains('closed')) {
        petal.classList.remove('closed');
        petal.classList.add('open');
        // animate bloom: rotate petal to original angle (0 deg)
        petal.style.transform = petal.style.transform.replace('rotate(90deg)', petal.classList.contains('petal1') ? 'rotate(0deg)' :
                                                                   petal.classList.contains('petal2') ? 'rotate(60deg)' :
                                                                   petal.classList.contains('petal3') ? 'rotate(120deg)' :
                                                                   petal.classList.contains('petal4') ? 'rotate(180deg)' :
                                                                   petal.classList.contains('petal5') ? 'rotate(240deg)' :
                                                                   petal.classList.contains('petal6') ? 'rotate(300deg)' : 'rotate(0deg)');
      } else {
        petal.classList.remove('open');
        petal.classList.add('closed');
        // Close petal: rotate down (hidden)
        petal.style.transform = petal.style.transform.replace(/rotate\(\d+deg\)/, 'rotate(90deg)');
      }
    });
  });