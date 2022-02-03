window.addEventListener("load", function() {
    const form = document.getElementById('contactForm');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
     let spin= document.getElementById('spinner')
     spin.style.display = 'inline'
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Το μήνυμα στάλθηκε!");
        spin.style.display ='none'
      })
    });
  });
  