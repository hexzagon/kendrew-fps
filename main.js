let scene, camera, renderer;
let enemies = [];

function startGame() {
  document.getElementById("menu").style.display = "none";
  init();
  animate();
}

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1.6, 5);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const light = new THREE.HemisphereLight(0xffffff, 0x444444);
  scene.add(light);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({ color: 0x222222 })
  );
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  spawnEnemy(5, 1, -5);
}

function animate() {
  requestAnimationFrame(animate);
  updatePlayer();
  updateEnemies();
  renderer.render(scene, camera);
}
