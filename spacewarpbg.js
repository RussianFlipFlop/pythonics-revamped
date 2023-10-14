let scene, camera, renderer, stars, starGeo;

  function init() {
    var scene3d = document.getElementById("particle-testing");
    var width_d = document.getElementById("particle-testing").clientWidth;
    var height_d = document.getElementById("particle-testing").clientHeight;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60,width_d / height_d, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI/2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width_d, height_d);
    scene3d.appendChild(renderer.domElement);

    starGeo = new THREE.Geometry();
    for(let i=0;i<6000;i++) {
      star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      star.velocity = 0;
      star.acceleration = 0.005;
      starGeo.vertices.push(star);
    }

    let sprite = new THREE.TextureLoader().load("https://uploads-ssl.webflow.com/6510fb15a432a25316b03985/65262ae41084758d8c03af5c_starcourse.png");
    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite
    });

    stars = new THREE.Points(starGeo,starMaterial);
    scene.add(stars);

    window.addEventListener("resize", onWindowResize, false);

    animate();
  }
  function onWindowResize() {
      width_d = document.getElementById("particle-testing").clientWidth;
      height_d = document.getElementById("particle-testing").clientHeight;

      camera.aspect = width_d / height_d;
      camera.updateProjectionMatrix();
      renderer.setSize(width_d, height_d);
    }
  function animate() {
    starGeo.vertices.forEach(p => {
      p.velocity += p.acceleration
      p.y -= p.velocity;

      if (p.y < -200) {
        p.y = 200;
        p.velocity = 0;
      }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y +=0.001;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  init();
