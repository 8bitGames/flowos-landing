'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ShaderBackgroundProps {
  className?: string;
  xScale?: number;
  yScale?: number;
  distortion?: number;
  speed?: number;
}

export function ShaderBackground({
  className = '',
  xScale = 1.0,
  yScale = 0.5,
  distortion = 0.05,
  speed = 0.01,
}: ShaderBackgroundProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(true);
  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.OrthographicCamera | null;
    renderer: THREE.WebGLRenderer | null;
    mesh: THREE.Mesh | null;
    uniforms: {
      resolution: { value: number[] };
      time: { value: number };
      xScale: { value: number };
      yScale: { value: number };
      distortion: { value: number };
      isDark: { value: number };
    } | null;
    animationId: number | null;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { current: refs } = sceneRef;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;
      uniform float isDark;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        // Invert colors for light mode (isDark = 0.0), keep original for dark mode (isDark = 1.0)
        vec3 finalColor = mix(vec3(1.0) - vec3(r, g, b), vec3(r, g, b), isDark);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const initScene = () => {
      refs.scene = new THREE.Scene();
      refs.renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      refs.renderer.setPixelRatio(window.devicePixelRatio);
      refs.renderer.setClearColor(new THREE.Color(0x000000), 0);

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

      refs.uniforms = {
        resolution: { value: [window.innerWidth, window.innerHeight] },
        time: { value: 0.0 },
        xScale: { value: xScale },
        yScale: { value: yScale },
        distortion: { value: distortion },
        isDark: { value: 1.0 },
      };

      const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
      ];

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', positions);

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
        transparent: true,
      });

      refs.mesh = new THREE.Mesh(geometry, material);
      refs.scene.add(refs.mesh);

      handleResize();
    };

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += speed;
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
      refs.animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      refs.renderer.setSize(width, height, false);
      refs.uniforms.resolution.value = [width, height];
    };

    initScene();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener('resize', handleResize);
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose();
        }
      }
      refs.renderer?.dispose();
    };
  }, [xScale, yScale, distortion, speed]);

  // Detect dark mode changes
  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Initial check
    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Update shader uniform when isDark changes
  useEffect(() => {
    const { current: refs } = sceneRef;
    if (refs.uniforms) {
      refs.uniforms.isDark.value = isDark ? 1.0 : 0.0;
    }
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 left-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
