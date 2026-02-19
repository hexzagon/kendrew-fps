function spawnEnemy(x, y, z) {
  const enemy = new THREE.Mesh(
    new THREE.BoxGeometry(1, 2, 1),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
  );

  enemy.position.set(x, y, z);
  enemy.userData = {
    health: 100,
    state: "idle",
    awareTimer: 0
  };

  scene.add(enemy);
  enemies.push(enemy);
}
