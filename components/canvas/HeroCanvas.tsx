"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050608, 0.0018);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1500);
    camera.position.z = 600;
    camera.position.y = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. Particle Cloud (Glowing cyan & deep blue points)
    const particleCount = prefersReducedMotion ? 250 : 900;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00bfff); // Cyan
    const color2 = new THREE.Color(0x0b5cff); // Deep Blue
    const color3 = new THREE.Color(0xffffff); // White twinkle

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1600;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 900 + 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1200;

      // Color distribution
      const rand = Math.random();
      const c = rand < 0.6 ? color1 : rand < 0.9 ? color2 : color3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.3, "rgba(0,191,255,0.8)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 4.5,
      map: texture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 2. Animated Perspective Digital Grid (Ground Wave)
    const gridGeometry = new THREE.PlaneGeometry(2800, 1800, 52, 40);
    gridGeometry.rotateX(-Math.PI / 2.3);
    gridGeometry.translate(0, -300, -100);

    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x0b5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });

    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
    scene.add(gridMesh);

    // 3. Floating 3D Wireframe Prisms & Geometric Nodes
    const prismGroup = new THREE.Group();
    const prismGeom = new THREE.OctahedronGeometry(18, 0);
    const prismMat = new THREE.MeshBasicMaterial({
      color: 0x00bfff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const prismCount = prefersReducedMotion ? 4 : 10;
    const prisms: THREE.Mesh[] = [];

    for (let i = 0; i < prismCount; i++) {
      const mesh = new THREE.Mesh(prismGeom, prismMat);
      mesh.position.set(
        (Math.random() - 0.5) * 1100,
        (Math.random() - 0.5) * 600 + 40,
        (Math.random() - 0.5) * 800
      );
      const scale = 0.5 + Math.random() * 1.2;
      mesh.scale.set(scale, scale, scale);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      prismGroup.add(mesh);
      prisms.push(mesh);
    }
    scene.add(prismGroup);

    // Mouse coordinates interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = x * 0.35;
      targetY = y * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation Loop
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth camera sway toward mouse
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      camera.position.x = mouseX * 0.5;
      camera.position.y = 80 - mouseY * 0.3;
      camera.lookAt(0, 30, 0);

      if (!prefersReducedMotion) {
        // Slow rotation of particle cloud
        particles.rotation.y = elapsedTime * 0.03;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

        // Grid gentle motion
        gridMesh.position.z = (elapsedTime * 40) % 100;

        // Floating prisms rotation & drift
        prisms.forEach((p, idx) => {
          p.rotation.x += 0.008 * ((idx % 2 === 0) ? 1 : -1);
          p.rotation.y += 0.012;
          p.position.y += Math.sin(elapsedTime * 1.2 + idx) * 0.25;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      gridGeometry.dispose();
      gridMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    />
  );
}
