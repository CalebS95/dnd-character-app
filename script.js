// Get all floating friend containers
const friends = document.querySelectorAll('.friend');

// Position each friend spaced apart horizontally
let offset = 100; // starting x position
const gap = 1100; // horizontal space between each heart

friends.forEach((friend, index) => {
  // Even horizontal spacing + slight vertical randomness
  const x = offset + index * gap;
  const y = 150 + Math.random() * 100;

  // Apply position to the container
  friend.style.left = `${x}px`;
  friend.style.top = `${y}px`;

  // Get the image inside the container
  const img = friend.querySelector('.floating');

  // Random float animation and object focus
  img.style.animationDuration = `${6 + Math.random() * 6}s`;
  img.style.objectPosition = 'top';
});

// Mouse movement interaction: rotate images based on cursor position
document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = (e.clientX - centerX) / 100;
  const offsetY = (e.clientY - centerY) / 100;

  document.querySelectorAll('.floating').forEach(img => {
    img.style.transform = `translateY(0px) rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
  });
});

// Lore viewer random start
let currentIndex = Math.floor(Math.random() * friends.length);
updateProfile();


