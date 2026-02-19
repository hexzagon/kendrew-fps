let keys = {};
let playerSpeed = 0.1;
let yaw = 0;
let pitch = 0;

document.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
document.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

document.body.addEventListener("click", () => {
  document.body.requestPointerLock();
});

document.addEventListener("mousemove", (e) => {
  if (document.pointerLockElement === document.body) {
    yaw -= e.movementX * 0.002;
    pitch -= e.movementY * 0.002;
    pitch = Math.max(-Math.PI/2, Math.min(Math.PI/2, pitch));
  }
});

function updatePlayer() {
  if (!camera) return;

  camera.rotation.order = "YXZ";
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;

  let forward = new THREE.Vector3();
  camera.getWorldDirection(forward);
  forward.y = 0;
  forward.normalize();

  let right = new THREE.Vector3();
  right.crossVectors(forward, camera.up).normalize();

  if (keys["w"]) camera.position.add(forward.clone().multiplyScalar(playerSpeed));
  if (keys["s"]) camera.position.add(forward.clone().multiplyScalar(-playerSpeed));
  if (keys["a"]) camera.position.add(right.clone().multiplyScalar(-playerSpeed));
  if (keys["d"]) camera.position.add(right.clone().multiplyScalar(playerSpeed));
}
