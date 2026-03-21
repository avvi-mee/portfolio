"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    // Materials
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0xc8a97e,
      metalness: 0.3,
      roughness: 0.4,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
    });

    const solidMat = new THREE.MeshStandardMaterial({
      color: 0xede5da,
      metalness: 0.1,
      roughness: 0.8,
      transparent: true,
      opacity: 0.18,
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: 0xc8a97e,
      metalness: 0.4,
      roughness: 0.3,
      transparent: true,
      opacity: 0.08,
    });

    // Geometries
    const geometries = [
      { geo: new THREE.IcosahedronGeometry(1.4, 1), mat: wireMat, x: 5.5, y: 2, z: -3, rotSpeed: 0.003 },
      { geo: new THREE.OctahedronGeometry(0.9, 0), mat: solidMat, x: -5, y: -1.5, z: -2, rotSpeed: -0.004 },
      { geo: new THREE.TorusGeometry(1.1, 0.25, 16, 60), mat: wireMat, x: 3.5, y: -3, z: -4, rotSpeed: 0.002 },
      { geo: new THREE.TetrahedronGeometry(0.8, 0), mat: accentMat, x: -3.5, y: 3, z: -3, rotSpeed: 0.005 },
      { geo: new THREE.IcosahedronGeometry(0.6, 1), mat: solidMat, x: -1.5, y: -4, z: -2, rotSpeed: -0.003 },
      { geo: new THREE.TorusKnotGeometry(0.7, 0.2, 80, 12), mat: wireMat, x: -6, y: 1, z: -5, rotSpeed: 0.002 },
      { geo: new THREE.OctahedronGeometry(0.5, 0), mat: accentMat, x: 6, y: -2, z: -2, rotSpeed: 0.006 },
      { geo: new THREE.IcosahedronGeometry(0.4, 0), mat: wireMat, x: 0, y: 4.5, z: -3, rotSpeed: -0.004 },
    ];

    const meshes: THREE.Mesh[] = [];
    const floatOffsets: number[] = [];

    geometries.forEach(({ geo, mat, x, y, z, rotSpeed }, i) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.userData = { rotSpeed, baseY: y };
      floatOffsets.push(i * 0.8);
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfaf8f5, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xc8a97e, 1.5, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xede5da, 1.0, 20);
    pointLight2.position.set(-5, -3, 3);
    scene.add(pointLight2);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(0, 10, 5);
    scene.add(dirLight);

    // Particle field
    const particleCount = 80;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 4;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc8a97e,
      size: 0.04,
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    // Resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    let frame = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      frame += 0.005;

      meshes.forEach((mesh, i) => {
        const { rotSpeed, baseY } = mesh.userData;
        mesh.rotation.x += rotSpeed;
        mesh.rotation.y += rotSpeed * 1.3;
        mesh.position.y = baseY + Math.sin(frame + floatOffsets[i]) * 0.4;
      });

      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;

      // Smooth camera parallax
      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (mouseY * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometries.forEach(({ geo }) => geo.dispose());
      [wireMat, solidMat, accentMat, particleMat].forEach((m) => m.dispose());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="three-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
