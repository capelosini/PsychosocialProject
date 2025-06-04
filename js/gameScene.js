const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100)
camera.position.set(0, 0, 0.1)

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)

const texture = new THREE.TextureLoader().load(HDRImage)
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(500, 60, 40).scale(-1, 1, 1),
    new THREE.MeshBasicMaterial({ map: texture })
)
scene.add(sphere)

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.enableDamping = false
//controls.dampingFactor = 0.02
controls.enableZoom = false
controls.enablePan = true

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()