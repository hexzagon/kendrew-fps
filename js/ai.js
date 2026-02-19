function updateEnemies() {
  enemies.forEach(enemy => {
    if (enemy.userData.state === "alert") {
      const dx = camera.position.x - enemy.position.x;
      const dz = camera.position.z - enemy.position.z;

      enemy.position.x += dx * 0.01;
      enemy.position.z += dz * 0.01;
    }
  });
}
