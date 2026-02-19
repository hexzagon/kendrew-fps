const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

document.addEventListener("click", () => {
  if (!camera || !scene) return;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(enemies);

  if (intersects.length > 0) {
    const enemy = intersects[0].object;
    enemy.userData.health -= 50;
    enemy.userData.state = "alert";

    if (enemy.userData.health <= 0) {
      scene.remove(enemy);
      enemies = enemies.filter(e => e !== enemy);
    }
  }
});
