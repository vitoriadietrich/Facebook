const face = document.getElementById('face');
const eyes = document.querySelectorAll('.eye');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Obtém o centro do emoji
    const rect = face.getBoundingClientRect();
    const faceX = rect.left + rect.width / 2;
    const faceY = rect.top + rect.height / 2;

    // Calcula o ângulo e a distância limitada
    const angleDeg = Math.atan2(y - faceY, x - faceX);
    const distance = 15; // O quanto o rosto/olhos podem se deslocar

    const moveX = Math.cos(angleDeg) * distance;
    const moveY = Math.sin(angleDeg) * distance;

    // Move o rosto levemente para dar profundidade
    face.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;

    // Move as pupilas/olhos dentro do limite
    eyes.forEach(eye => {
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});