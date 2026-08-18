// LIGHTBOX FUNCTIONALITY
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// SMOOTH SCROLL PARA O WHATSAPP (OPCIONAL)
document.querySelectorAll('a[href^="https://api.whatsapp.com"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Log de conversão aqui, se houver Pixel do Facebook
        console.log('Clique convertido: WhatsApp');
    });
});