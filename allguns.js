
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x444442 );
 //  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2FlaSfn9lWa3rXf8pL3Q3U_MIOmRB4w0zWs9TG51A85_JfwxN5jTCwE&s=10');
  const texture2 = textureLoader53.load('/storage/emulated/0/DCIM/Lift and shift/LS20250215170857.png');
    // Create a simple gun-like shape using basic geometries
   export const gun = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelMaterial = new THREE.MeshStandardMaterial({ map: texture1,bumpMap:texture1 ,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshPhongMaterial({ color : 0x222222,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ color : 0x000000 ,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial3 = new THREE.MeshStandardMaterial({ map : texture2,transparent:true,opacity:5});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(-0.5,0.5,1);
  gun.add(barrel);
  const barrel1 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel1.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(0.5,0.5,1);
  gun.add(barrel1);
  const barrel2 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel2.rotation.x = Math.PI / 2; // Rotate to make it horizontal
  barrel2.position.set(0.5,-0.5,1);
    gun.add(barrel2);
  const barrel3 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel3.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel3.position.set(-0.5,-0.5,1);
  gun.add(barrel3);
  const bp = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    bp.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    bp.position.set(0,0,2);
  bp.scale.set(1.3,1,1.4);
  gun.add(bp);
  const bp1 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    bp1.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    bp1.position.set(0,0.5,5.5);
  bp1.scale.set(0.4,0.6,0.4);
  gun.add(bp1);
  const bp0 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    bp0.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    bp0.position.set(0,0.5,5.5);
  bp0.scale.set(0.5,0.59,0.5);
  gun.add(bp0);
  const bp2 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    bp2.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    bp2.position.set(0,-0.5,5);
  bp2.scale.set(0.3,0.55,0.3);
  gun.add(bp2);
  const bp3 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    bp3.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    bp3.position.set(0,-0.5,5);
  bp3.scale.set(0.3,0.55,0.3);
  gun.add(bp3);
  const bp4 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    bp4.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    bp4.position.set(2,-1,-2.5);
  bp4.scale.set(1,0.3,1);
  gun.add(bp4);

    // Gun body (a box)
    const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0,0,1); // Position it below the barrel
    body.scale.set(0.999,0.6,1.01);
  gun.add(body);

  const body1 = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body1.position.set(0,0,1); // Position it below the barrel
    body1.rotation.set(0,0,Math.PI/2);
 body1.scale.set(0.999,0.61,1.01);
  gun.add(body1);
  const body2 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body2.position.set(1.5,0,-2); // Position it below the barrel
    body2.rotation.set(0,0,Math.PI/2);
 body2.scale.set(0.4,0.3,0.3);
  gun.add(body2);
  const body3 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body3.position.set(1.6,0,-3); // Position it below the barrel
    body3.rotation.set(0,0,Math.PI/2);
 body3.scale.set(0.45,0.35,0.2);
  gun.add(body3);
  const body4 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body4.position.set(0,-2,0); // Position it below the barrel
    body4.rotation.set(0,0,Math.PI/2);
 body4.scale.set(0.5,0.6,0.3);
  gun.add(body4);
  const body5 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body5.position.set(0,1.5,-1); // Position it below the barrel
    body5.rotation.set(0,0,Math.PI/2);
 body5.scale.set(0.5,0.6,0.4);
  gun.add(body5);
  const body6 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body6.position.set(0.5,1.6,-2.5); // Position it below the barrel
    body6.rotation.set(0,0,Math.PI/4);
 body6.scale.set(0.5,0.5,0.3);
  gun.add(body6);
  const body7 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body7.position.set(-0.5,1.6,-2.5); // Position it below the barrel
    body7.rotation.set(0,0,-Math.PI/4);
 body7.scale.set(0.5,0.5,0.3);
  gun.add(body7);
  const body8 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body8.position.set(0,1.87,-2.5); // Position it below the barrel
    body8.rotation.set(0,0,Math.PI/2);
 body8.scale.set(0.5,0.3,0.3);
  gun.add(body8);
  //target
  const body9s = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body9s.position.set(0.5,3,-2); // Position it below the barrel
    body9s.rotation.set(0,0,Math.PI/2);
 body9s.scale.set(0.4,0.1,0.1);
  gun.add(body9s);
  const body9s1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body9s1.position.set(-0.5,3,-2); // Position it below the barrel
    body9s1.rotation.set(0,0,Math.PI/2);
 body9s1.scale.set(0.4,0.1,0.1);
  gun.add(body9s1);
  const body9s2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body9s2.position.set(0,3.5,-2); // Position it below the barrel
    body9s2.rotation.set(0,0,Math.PI);
 body9s2.scale.set(0.4,0.1,0.1);
  gun.add(body9s2);
  const body9s3 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    body9s3.position.set(0,3,-2); // Position it below the barrel
    body9s3.rotation.set(Math.PI/2,0,Math.PI);
 body9s3.scale.set(0.4,0.15,0.1);
  gun.add(body9s3);
  
  
  
  const body1s = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body1s.position.set(0,-0.5,-5); // Position it below the barrel
    body1s.rotation.set(0,0,Math.PI/2);
 body1s.scale.set(0.5,0.8,0.4);
  gun.add(body1s);
  const body2s = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body2s.position.set(0,0,-6); // Position it below the barrel
    body2s.rotation.set(0,0,Math.PI/2);
 body2s.scale.set(0.5,1,0.5);
  gun.add(body2s);
  //handle and trigger
  const body3s = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body3s.position.set(0,-2,-6); // Position it below the barrel
    body3s.rotation.set(-Math.PI/3,0,Math.PI/2);
 body3s.scale.set(0.2,0.3,0.3);
  gun.add(body3s);
  const body4s = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body4s.position.set(0,-3.2,-6.3); // Position it below the barrel
    body4s.rotation.set(0,0,Math.PI/2);
 body4s.scale.set(0.2,0.3,0.15);
  gun.add(body4s);
  const body5s = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body5s.position.set(0,-1.5,1); // Position it below the barrel
    body5s.rotation.set(0,0,Math.PI/2);
 body5s.scale.set(0.3,0.5,1);
  gun.add(body5s);
  const body6s = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body6s.position.set(0,1,-5); // Position it below the barrel
    body6s.rotation.set(0,0,Math.PI/2);
 body6s.scale.set(0.2,0.7,0.8);
  gun.add(body6s);
  const body7s = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body7s.position.set(0,1.5,-5); // Position it below the barrel
    body7s.rotation.set(0,0,Math.PI/2);
 body7s.scale.set(0.2,0.5,0.5);
  gun.add(body7s);
  const bodys = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodys.position.set(0,1.5,-5.5); // Position it below the barrel
    bodys.rotation.set(-Math.PI/8,0,Math.PI/2);
 bodys.scale.set(0.2,0.5,0.4);
  gun.add(bodys);
  const bodys1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    bodys1.position.set(0,1.5,-7.1); // Position it below the barrel
    bodys1.rotation.set(0,0,Math.PI/2);
 bodys1.scale.set(0.25,0.6,0.1);
  gun.add(bodys1);
  const bodys3 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    bodys3.position.set(0,1,-8); // Position it below the barrel
    bodys3.rotation.set(0,0,Math.PI/2);
 bodys3.scale.set(0.25,0.8,0.1);
  gun.add(bodys3);
  const bodys2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    bodys2.position.set(0,0,-9); // Position it below the barrel
    bodys2.rotation.set(0,0,Math.PI/2);
 bodys2.scale.set(0.25,0.6,0.6);
  gun.add(bodys2);
  const bodys5 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    bodys5.position.set(0,-1,-11); // Position it below the barrel
    bodys5.rotation.set(0,0,Math.PI/2);
 bodys5.scale.set(0.5,0.6,0.2);
  gun.add(bodys5);
  const bodys6 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    bodys6.position.set(0,0.5,-11.5); // Position it below the barrel
    bodys6.rotation.set(0,0,Math.PI/2);
 bodys6.scale.set(0.3,0.6,0.1);
  gun.add(bodys6);
  const bodys7 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodys7.position.set(0,0.5,-10); // Position it below the barrel
    bodys7.rotation.set(0,0,Math.PI/2);
 bodys7.scale.set(0.2,0.5,0.3);
  gun.add(bodys7);
  const bodys8 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodys8.position.set(0,0.5,-10.2); // Position it below the barrel
    bodys8.rotation.set(-Math.PI/10,0,Math.PI/2);
 bodys8.scale.set(0.3,0.5,0.31);
  gun.add(bodys8);
  //trigger
  const trg1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    trg1.position.set(0,-1.5,-4.5); // Position it below the barrel
    trg1.rotation.set(Math.PI/2,0,Math.PI/2);
 trg1.scale.set(0.1,0.2,0.15);
  gun.add(trg1);
  const trg2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    trg2.position.set(0,-2.2,-5.2); // Position it below the barrel
    trg2.rotation.set(0,0,Math.PI/2);
 trg2.scale.set(0.1,0.2,0.15);
  gun.add(trg2);
  const trg3 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    trg3.position.set(0,-1.5,-5.4); // Position it below the barrel
    trg3.rotation.set(0,0,Math.PI/2);
 trg3.scale.set(0.4,0.1,0.05);
  gun.add(trg3);
  const trg4 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    trg4.position.set(0,-0.8,-10); // Position it below the barrel
    trg4.rotation.set(Math.PI/6,0,Math.PI/2);
 trg4.scale.set(0.7,0.6,0.1);
  gun.add(trg4);
    // Gun handle (a box)
    const handleGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const handleMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.position.y = -0.8; // Position it below the body
    handle.position.z = -0.5; // Position it behind the body
    gun.add(handle);
//bullets
  const numCylinders = 7;
const cylinderRadius = 0.4;
const circleRadius = 1.5;

const cylinderGeometry = new THREE.CylinderGeometry(cylinderRadius, cylinderRadius, 2, 10);
const cylinderGeometry1 = new THREE.CylinderGeometry(0, cylinderRadius, 2, 10);

const cylinderMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });

for (let i = 0; i < numCylinders; i++) {
    const angle = (i / numCylinders) * Math.PI;
    const cylinder = new THREE.Mesh(cylinderGeometry, barrelMaterial1);
    const cylinder1 = new THREE.Mesh(cylinderGeometry1, barrelMaterial1);

    const x = Math.sin(angle) * circleRadius;
    const y = Math.cos(angle) * circleRadius;

    cylinder.position.set(x+1, y, -2);
    cylinder1.position.set(x+1, y, 0);

    // Key change: Rotate 90 degrees (Math.PI / 2 radians) around the X-axis
    cylinder.rotation.x = Math.PI / 2;  // or cylinder.rotateX(Math.PI / 2);
    cylinder1.rotation.x = Math.PI / 2; // or cylinder1.rotateX(Math.PI / 2);


    gun.add(cylinder);
    gun.add(cylinder1);
}

    // Add the gun to the scene
    scene.add(gun);

  


    

  const gunGeometry = new THREE.BoxGeometry(0.2, 1, 1);
    const gunMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
    export const gun1 = new THREE.Mesh(gunGeometry, gunMaterial);
    gun.add(gun1);
    gun1.position.z = 7;
  gun1.position.y = 0;


    
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x444442 );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
   // document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hueK3_oN4EkA10zI0abPn91zlPgIoW8Njk1rL6Yokw5kr8V_GTZaJ6w&s=10');
  const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFG-gaHqaIHmAxSSyA_q1bhFObcYM1BctPggK3P1TRqil2NSuy81ltlKIV&s=10');
  const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_nt-N9k1fMYp38K0XSToqNA6c-JQo4iqC17mkwtaaWM6RmDJ4AjkfhWDE&s=10');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
   export const sgun = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial = new THREE.MeshStandardMaterial({ map: texture1,bumpMap:texture1 ,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshPhongMaterial({ color : 0x222222,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ color : 0x000000 ,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial3 = new THREE.MeshStandardMaterial({ map : texture2,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshStandardMaterial({ map : texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(0,1,0);
  barrel.scale.set(1,1.2,1);
  sgun.add(barrel);
  const barrel1 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel1.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(0,1,0);
  barrel1.scale.set(0.5,1.21,0.5);
  sgun.add(barrel1);
   const barrel2 = new THREE.Mesh(barrelGeometry1, barrelMaterial5);
    barrel2.rotation.x = Math.PI / 2.2; // Rotate to make it horizontal
    barrel2.position.set(0,-0.6,-8);
  barrel2.scale.set(0.5,1.21,0.5);
  sgun.add(barrel2);
   const barrel3 = new THREE.Mesh(barrelGeometry2, barrelMaterial6);
    barrel3.rotation.x = Math.PI / 2.2; // Rotate to make it horizontal
    barrel3.position.set(0,-0.7,-9);
  barrel3.scale.set(0.5,0.2,0.5);
  sgun.add(barrel3);
   const barrel4 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel4.rotation.x = Math.PI / 6; // Rotate to make it horizontal
    barrel4.position.set(0,-2,-5);
  barrel4.scale.set(0.5,0.2,0.2);
  sgun.add(barrel4);
   const barrel5 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel5.rotation.x = -Math.PI / 6; // Rotate to make it horizontal
    barrel5.position.set(0,-2,-7);
  barrel5.scale.set(0.5,0.2,0.2);
  sgun.add(barrel5);
   const barrel6 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel6.rotation.x = Math.PI/2; // Rotate to make it horizontal
    barrel6.position.set(0,-2.8,-6);
  barrel6.scale.set(0.5,0.15,0.2);
  sgun.add(barrel6);
   const barrel7 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel7.rotation.x = Math.PI/10; // Rotate to make it horizontal
    barrel7.position.set(0,-2.8,-7.8);
  barrel7.scale.set(0.5,0.5,0.5);
  sgun.add(barrel7);
   //trigger
   const barrel65 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel65.rotation.x = -Math.PI/6; // Rotate to make it horizontal
    barrel65.position.set(0,-1.7,-6.4);
  barrel65.scale.set(0.1,0.15,0.3);
  sgun.add(barrel65);
   // Gun body (a box)
    const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const body = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body.position.set(0,1,0); // Position it below the barrel
    body.scale.set(0.7,0.3,1.2);
  sgun.add(body);
  const body1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body1.position.set(0,1,0); // Position it below the barrel
    body1.scale.set(0.7,0.3,1.2);
  body1.rotation.set(0,0,Math.PI/2);
  sgun.add(body1);
  const wood = new THREE.Mesh(bodyGeometry, barrelMaterial);
    wood.position.set(0,-0.6,-1.4); // Position it below the barrel
    wood.scale.set(0.5,0.5,1.5);
  wood.rotation.set(0,0,Math.PI/2);
  sgun.add(wood);
  const gold = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    gold.position.set(0,0.3,-1.9); // Position it below the barrel
    gold.scale.set(1.3,0.8,0.15);
  gold.rotation.set(0,0,Math.PI/2);
  sgun.add(gold);
  const gold1 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    gold1.position.set(0,0.3,1.7); // Position it below the barrel
    gold1.scale.set(1.3,0.8,0.15);
  gold1.rotation.set(0,0,Math.PI/2);
  sgun.add(gold1);
  const sgold = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold.position.set(0,0.3,-1.9); // Position it below the barrel
    sgold.scale.set(1.31,0.84,0.1);
  sgold.rotation.set(0,0,Math.PI/2);
  sgun.add(sgold);
  const sgold1 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold1.position.set(0,0.3,1.7); // Position it below the barrel
    sgold1.scale.set(1.31,0.84,0.1);
  sgold1.rotation.set(0,0,Math.PI/2);
  sgun.add(sgold1);
  
  const sgold2 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold2.position.set(0,0,4.5); // Position it below the barrel
    sgold2.scale.set(2,0.77,0.2);
  sgold2.rotation.set(0,0,Math.PI/2);
  sgun.add(sgold2);
  const sgold3 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold3.position.set(0,-2,4.2); // Position it below the barrel
    sgold3.scale.set(2.5,0.4,0.3);
  sgold3.rotation.set(0,0,Math.PI/2);
  sgun.add(sgold3);
  const sgold4 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold4.position.set(0,-5.7,4.2); // Position it below the barrel
    sgold4.scale.set(0.3,0.3,0.29);
  sgold4.rotation.set(0,0,Math.PI/4);
  sgun.add(sgold4);
  const sgold5 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold5.position.set(0,-5.3,1.6); // Position it below the barrel
    sgold5.scale.set(0.3,0.3,0.3);
  sgold5.rotation.set(Math.PI/10,0,Math.PI/4);
  sgun.add(sgold5);
  const sgold6 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold6.position.set(0,-4,1.9); // Position it below the barrel
    sgold6.scale.set(0.39,0.9,0.28);
  sgold6.rotation.set(Math.PI/10,0,0);
  sgun.add(sgold6);
   const sgold7 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    sgold7.position.set(0,0,-6); // Position it below the barrel
    sgold7.scale.set(0.51,1,0.28);
  sgold7.rotation.set(0,0,0);
  sgun.add(sgold7);
   const sgold8 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    sgold8.position.set(0,2,-6); // Position it below the barrel
    sgold8.scale.set(0.1,0.9,0.05);
  sgold8.rotation.set(0,0,0);
  sgun.add(sgold8);
  // Add the gun to the scene
    

   const ambientLight1 = new THREE.AmbientLight(0x404040, 3);
    sgun.add(ambientLight1);
  sgun.position.x = 0;
  scene.add(sgun);
    


