document.getElementById('file-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  console.log(file); // Check if the file is being selected correctly
  if (file) {
      const audio = document.getElementById('audio');
      audio.src = URL.createObjectURL(file);
      audio.play();
  }
});
