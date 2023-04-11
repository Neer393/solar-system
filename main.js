import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

//sizes
let sizes = {
    width:window.innerWidth,
    height:window.innerHeight
}

//Renderer
const canvas = document.querySelector("#mycanvas");
const renderer = new THREE.WebGLRenderer({canvas,antialias:true});
renderer.setSize(sizes.width,sizes.height);

//scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height,0.1,1000);
// scene.add(camera);
const controls = new OrbitControls(camera,canvas);
camera.position.set(-90,140,140);
controls.update();

const textureloader = new THREE.TextureLoader();
//Sun
const sungeometry = new THREE.SphereGeometry(16,30,30);
const sunmaterial = new THREE.MeshBasicMaterial({
    map: textureloader.setPath('/assets/').load('sunmap.jpg')
})
const sun = new THREE.Mesh(sungeometry,sunmaterial);
scene.add(sun);

//Mercury
const mercuryobj = new THREE.Object3D();
const mercurygeometry = new THREE.SphereGeometry(3.2,30,30);
const mercurymaterial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('mercury.jpg')
})
const mercury = new THREE.Mesh(mercurygeometry,mercurymaterial);
mercuryobj.add(mercury);
scene.add(mercuryobj);
mercury.position.x = 28;

//Venus
const venusobj = new THREE.Object3D();
const venusgeometry = new THREE.SphereGeometry(5.8,30,30);
const venusmaterial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('venus.jpg')
})
const venus = new THREE.Mesh(venusgeometry,venusmaterial);
venusobj.add(venus);
scene.add(venusobj);
venus.position.x = -44;

//Earth
const earthobj = new THREE.Object3D();
const earthgeometry = new THREE.SphereGeometry(6,30,30);
const earthmaterial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('earth.jpg')
})
const earth = new THREE.Mesh(earthgeometry,earthmaterial);
earthobj.add(earth);
earth.position.z = 62;

//Moon
const moonobj = new THREE.Object3D();
const moongeometry = new THREE.SphereGeometry(1.7,30,30);
const moonmaterial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('moon.jpg')
})
const moon = new THREE.Mesh(moongeometry,moonmaterial);
moonobj.add(moon);
earth.add(moonobj);
moon.position.z = 8.2;
scene.add(earthobj);

//Mars
const marsobj = new THREE.Object3D();
const marsgeometry = new THREE.SphereGeometry(4,30,30);
const marsmaterial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('mars.jpg')
})
const mars = new THREE.Mesh(marsgeometry,marsmaterial);
marsobj.add(mars);
scene.add(marsobj);
mars.position.z = -85;

//Jupiter
const jupiterobj = new THREE.Object3D();
const jupitergeometry = new THREE.SphereGeometry(12,30,30);
const jupitermaterial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('jupiter.jpg')
})
const jupiter = new THREE.Mesh(jupitergeometry,jupitermaterial);
jupiterobj.add(jupiter);
scene.add(jupiterobj);
jupiter.position.x = -107;

//Saturn
const saturnobj = new THREE.Object3D();
const saturngeometry = new THREE.SphereGeometry(10,30,30);
const saturnringgeometry = new THREE.RingGeometry(10,20,32);
const saturnmaterial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('saturn.jpg')
})
const saturnringmaterial = new THREE.MeshBasicMaterial({
    map: textureloader.setPath('/assets/').load('saturn-ring.png'),
    side: THREE.DoubleSide
})
const saturn = new THREE.Mesh(saturngeometry,saturnmaterial);
const saturnring= new THREE.Mesh(saturnringgeometry,saturnringmaterial);
saturnobj.add(saturn);
saturnobj.add(saturnring);
saturnring.position.x = 145;
saturn.position.x=145;
saturnring.rotation.x = -0.5 * Math.PI;
scene.add(saturnobj);

//Uranus
const uranusobj = new THREE.Object3D();
const uranusgeometry = new THREE.SphereGeometry(7,30,30);
const uranusringgeometry = new THREE.RingGeometry(7,12,32);
const uranusmaterial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('uranus.jpg')
})
const uranusringmaterial = new THREE.MeshBasicMaterial({
    map: textureloader.setPath('/assets/').load('uranus-ring.png'),
    side: THREE.DoubleSide
})
const uranus = new THREE.Mesh(uranusgeometry,uranusmaterial);
const uranusring= new THREE.Mesh(uranusringgeometry,uranusringmaterial);
uranusobj.add(uranus);
uranusobj.add(uranusring);
uranus.position.z = -183;
uranusring.position.z = -183;
uranusring.rotation.x = -0.5 * Math.PI;
scene.add(uranusobj);

//Neptune
const neptuneobj = new THREE.Object3D();
const neptunegeometry = new THREE.SphereGeometry(7,30,30);
const neptunematerial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('neptune.jpg')
})
const neptune = new THREE.Mesh(neptunegeometry,neptunematerial);
neptuneobj.add(neptune);
scene.add(neptuneobj);
neptune.position.x = 207;

//Pluto
const plutoobj = new THREE.Object3D();
const plutogeometry = new THREE.SphereGeometry(2.8,30,30);
const plutomaterial = new THREE.MeshStandardMaterial({
    map: textureloader.setPath('/assets/').load('pluto.jpg')
})
const pluto = new THREE.Mesh(plutogeometry,plutomaterial);
plutoobj.add(pluto);
scene.add(plutoobj);
pluto.position.x = 223;

//Lights
const ambientlight = new THREE.AmbientLight(0x333333);
scene.add(ambientlight);

const sunlight = new THREE.PointLight(0xFFFFFF,2,300);
scene.add(sunlight);

const cubetextureloader = new THREE.CubeTextureLoader();
scene.background = cubetextureloader.setPath('/assets/').load([
    'webbdeepfield-new.jpg',
    'webbdeepfield-new.jpg',
    'webbdeepfield-new.jpg',
    'webbdeepfield-new.jpg',
    'webbdeepfield-new.jpg',
    'webbdeepfield-new.jpg'
])

function animate(){
    requestAnimationFrame(animate);
    sun.rotateY(0.004);
    mercury.rotateY(0.004);
    venus.rotateY(0.002);
    earth.rotateY(0.02);
    // moon.rotateY(0.02);
    mars.rotateY(0.0018);
    jupiter.rotateY(0.04);
    saturn.rotateY(0.0038);
    uranus.rotateY(0.03);
    neptune.rotateY(0.0032);
    pluto.rotateY(0.008);

    mercuryobj.rotateY(0.04);
    venusobj.rotateY(0.015);
    earthobj.rotateY(0.01);
    marsobj.rotateY(0.008);
    jupiterobj.rotateY(0.002);
    saturnobj.rotateY(0.0009);
    uranusobj.rotateY(0.0004);
    neptuneobj.rotateY(0.0001);
    plutoobj.rotateY(0.00007);

    controls.update();
    renderer.render(scene,camera);
}
animate();

window.addEventListener('resize',()=>{
    sizes={
        width:window.innerWidth,
        height:window.innerHeight
    }
    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width,sizes.height);
})
