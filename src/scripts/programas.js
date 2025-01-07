document.addEventListener('astro:page-load', function() {
  console.log('hola desde programas');
  const buttons = document.querySelectorAll('button[data-url]');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      document.getElementById('video-modal').classList.remove('hidden');
      document.getElementById('video-iframe').src = url;
    });
  });

  document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('video-modal').classList.add('hidden');
    document.getElementById('video-iframe').src = '';
  });
});