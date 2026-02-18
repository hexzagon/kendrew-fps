let keys = {};
let playerSpeed = 0.1;

document.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
document.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

function updatePlayer() {
  if (!camera) return;

  if (keys["w"]) camera.position.z -= playerSpeed;
  if (keys["s"]) camera.position.z += playerSpeed;
  if (keys["a"]) camera.position.x -= playerSpeed;
  if (keys["d"]) camera.position.x += playerSpeed;
}
