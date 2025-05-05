document.getElementById("addPhotoBtn").addEventListener("click", () => {
    const url = prompt("Cole o link da imagem:");
    const caption = prompt("Escreva uma legenda fofa:");
    if (url) {
      const gallery = document.querySelector(".gallery");
      const frame = document.createElement("div");
      frame.className = "photo-frame";
      frame.innerHTML = `
        <img src="${url}" alt="Nova foto">
        <span class="caption">${caption}</span>
      `;
      gallery.appendChild(frame);
    }
  });
  