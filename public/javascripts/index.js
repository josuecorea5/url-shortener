const copyUrl = document.querySelectorAll('.copy-url');

copyUrl.forEach(item => {
  item.addEventListener('click', (e) => {
    if(e.target.classList.contains('copy-url')) {
      const id = e.target.getAttribute("data-id");
      navigator.clipboard.writeText(`http://localhost:3000/${id}`)
        .then(() => {
          e.target.classList.remove('bg-secondary');
          e.target.classList.add('bg-success')
            e.target.textContent = "Copied!";
            setTimeout(() => {
              e.target.textContent = "Copy";
              e.target.classList.remove('bg-success');
              e.target.classList.add('bg-secondary')
            },3000)
        });
    }
  })
})