    // Assuming 'group' is your THREE.Group object
    group.children.forEach(child => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: 0xffffff, // Wireframe color
          wireframe: true,
        });
      }
    });


