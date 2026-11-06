import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

/**
 * Sheets of paper held mid-air: the week's admin, sorted.
 * Raw three.js, no wrapper. One draw call per sheet, shadows on a ground plane.
 */

const SHEETS = [
  { w: 2.45, h: 3.25, x: -0.28, y: 0.1, z: -0.1, rz: 0.1, ry: -0.14, rx: 0.02, color: '#f8f6f3' },
  { w: 2.1, h: 2.85, x: 0.42, y: -0.18, z: 0.3, rz: -0.08, ry: 0.12, rx: 0.04, color: '#e7e3dc' },
  { w: 1.75, h: 2.35, x: -0.72, y: -0.62, z: 0.55, rz: 0.16, ry: 0.22, rx: -0.03, color: '#d9d4cc' },
  { w: 1.15, h: 1.55, x: 0.92, y: 0.72, z: 0.72, rz: 0.19, ry: -0.2, rx: 0.05, color: '#5c6b54' },
  { w: 0.86, h: 1.12, x: -1.18, y: 0.9, z: 0.5, rz: -0.2, ry: 0.28, rx: 0, color: '#333231' },
  { w: 1.6, h: 0.44, x: 0.28, y: -1.24, z: 0.85, rz: 0.04, ry: -0.06, rx: 0.02, color: '#f2efeb' },
]

const FOV = 32

const WEBGL_SUPPORTED = (() => {
  if (typeof document === 'undefined') return false
  try {
    const probe = document.createElement('canvas')
    return Boolean(probe.getContext('webgl2') || probe.getContext('webgl'))
  } catch {
    return false
  }
})()

function PaperFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
      <div className="relative h-2/3 w-2/3">
        <div className="absolute inset-0 rotate-[6deg] rounded-[10px] border border-hair bg-[#f8f6f3]" />
        <div className="absolute inset-x-6 inset-y-10 -rotate-[4deg] rounded-[10px] border border-hair bg-[#e7e3dc]" />
        <div className="absolute bottom-10 left-8 size-16 rotate-[12deg] rounded-[10px] bg-moss" />
      </div>
    </div>
  )
}

function roundedSheet(width, height, radius) {
  const shape = new THREE.Shape()
  const w = width / 2
  const h = height / 2
  const r = Math.min(radius, w, h)

  shape.moveTo(-w + r, -h)
  shape.lineTo(w - r, -h)
  shape.quadraticCurveTo(w, -h, w, -h + r)
  shape.lineTo(w, h - r)
  shape.quadraticCurveTo(w, h, w - r, h)
  shape.lineTo(-w + r, h)
  shape.quadraticCurveTo(-w, h, -w, h - r)
  shape.lineTo(-w, -h + r)
  shape.quadraticCurveTo(-w, -h, -w + r, -h)

  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.035,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 2,
    curveSegments: 8,
  })
}

export default function HeroScene() {
  const holder = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const node = holder.current
    if (!node || !WEBGL_SUPPORTED) return undefined

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      return undefined
    }

    let mounted = true

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    renderer.setPixelRatio(dpr)
    renderer.setClearAlpha(0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.02
    node.appendChild(renderer.domElement)
    renderer.domElement.style.display = 'block'

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 60)
    const group = new THREE.Group()
    scene.add(group)

    const hemi = new THREE.HemisphereLight(0xffffff, 0xc9c3b8, 1.15)
    scene.add(hemi)

    const key = new THREE.DirectionalLight(0xfffdf8, 2.1)
    key.position.set(3.4, 4.6, 4.2)
    key.castShadow = true
    key.shadow.mapSize.set(1024, 1024)
    key.shadow.camera.left = -6
    key.shadow.camera.right = 6
    key.shadow.camera.top = 6
    key.shadow.camera.bottom = -6
    key.shadow.camera.near = 1
    key.shadow.camera.far = 20
    key.shadow.radius = 4
    key.shadow.bias = -0.0015
    scene.add(key)

    const fill = new THREE.DirectionalLight(0xf2efe8, 0.55)
    fill.position.set(-4, -1.5, 2.5)
    scene.add(fill)

    const geometries = []
    const materials = []
    const meshes = []

    SHEETS.forEach((sheet, index) => {
      const geometry = roundedSheet(sheet.w, sheet.h, 0.1)
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(sheet.color),
        roughness: 0.86,
        metalness: 0,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(sheet.x, sheet.y, sheet.z)
      mesh.rotation.set(sheet.rx, sheet.ry, sheet.rz)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.userData.phase = index * 1.37
      mesh.userData.base = { x: sheet.x, y: sheet.y, z: sheet.z, rz: sheet.rz }
      group.add(mesh)

      geometries.push(geometry)
      materials.push(material)
      meshes.push(mesh)
    })

    const groundGeometry = new THREE.PlaneGeometry(24, 24)
    const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.1 })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -2.35
    ground.receiveShadow = true
    scene.add(ground)

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 }

    const fit = () => {
      const { clientWidth: width, clientHeight: height } = node
      if (!width || !height) return
      const aspect = width / height
      const neededHeight = Math.max(4.55, 3.3 / aspect)
      const distance = neededHeight / (2 * Math.tan((FOV * Math.PI) / 360))
      camera.aspect = aspect
      camera.position.set(0, 0, distance)
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    const clock = new THREE.Clock()
    let frame = 0

    const draw = () => {
      const t = clock.getElapsedTime()

      meshes.forEach((mesh) => {
        const { phase, base } = mesh.userData
        mesh.position.y = base.y + Math.sin(t * 0.34 + phase) * 0.055
        mesh.position.x = base.x + Math.cos(t * 0.26 + phase * 1.2) * 0.03
        mesh.position.z = base.z + Math.sin(t * 0.22 + phase) * 0.04
        mesh.rotation.z = base.rz + Math.sin(t * 0.28 + phase) * 0.022
      })

      pointer.x += (pointer.tx - pointer.x) * 0.045
      pointer.y += (pointer.ty - pointer.y) * 0.045
      group.rotation.y = pointer.x * 0.26
      group.rotation.x = -pointer.y * 0.16
      group.rotation.z = Math.sin(t * 0.16) * 0.012

      renderer.render(scene, camera)
    }

    const loop = () => {
      draw()
      frame = requestAnimationFrame(loop)
    }

    const onPointerMove = (event) => {
      const rect = node.getBoundingClientRect()
      pointer.tx = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.ty = ((event.clientY - rect.top) / rect.height) * 2 - 1
    }

    const onPointerLeave = () => {
      pointer.tx = 0
      pointer.ty = 0
    }

    const onVisibility = () => {
      if (reduceMotion) return
      if (document.hidden) {
        cancelAnimationFrame(frame)
        frame = 0
      } else if (!frame) {
        clock.start()
        loop()
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      fit()
      if (reduceMotion) draw()
    })
    resizeObserver.observe(node)

    fit()
    draw()
    requestAnimationFrame(() => {
      if (mounted) setReady(true)
    })

    if (!reduceMotion) {
      node.addEventListener('pointermove', onPointerMove)
      node.addEventListener('pointerleave', onPointerLeave)
      document.addEventListener('visibilitychange', onVisibility)
      loop()
    }

    return () => {
      mounted = false
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      node.removeEventListener('pointermove', onPointerMove)
      node.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      geometries.forEach((geometry) => geometry.dispose())
      materials.forEach((material) => material.dispose())
      groundGeometry.dispose()
      groundMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === node) node.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <>
      {!ready && <PaperFallback />}
      <div
        ref={holder}
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-700 ease-calm ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  )
}
