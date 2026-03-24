import "./Gallery.css";
import { useRef, useEffect } from "react";
import img from "../../../assets/img/foto-1.png";
import img2 from "../../../assets/img/foto-2.png";
import img3 from "../../../assets/img/foto-3.png";

export default function Gallery() {
  const images = [img, img2, img3];

  const galleryRef = useRef<HTMLDivElement>(null);
  const lastSpawn = useRef(0);
  const idleInterval = useRef<number | null>(null);
  const idleTimeout = useRef<number | null>(null);

  const IMG_SIZE = 350;
  const HALF = IMG_SIZE / 2;

  function createImage(container: HTMLDivElement, x: number, y: number) {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = "trail";

    img.style.left = x + "px";
    img.style.top = y + "px";

    container.appendChild(img);

    setTimeout(() => {
      img.remove();
    }, 2000);
  }

  function spawnRandom() {
    if (!galleryRef.current) return;

    const container = galleryRef.current;
    const rect = container.getBoundingClientRect();

    const x = HALF + Math.random() * (rect.width - IMG_SIZE);
    const y = HALF + Math.random() * (rect.height - IMG_SIZE);

    createImage(container, x, y);
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const now = Date.now();

    if (now - lastSpawn.current > 200) {
      lastSpawn.current = now;

      const container = e.currentTarget;
      const rect = container.getBoundingClientRect();

      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      x = Math.max(HALF, Math.min(x, rect.width - HALF));
      y = Math.max(HALF, Math.min(y, rect.height - HALF));

      createImage(container, x, y);
    }

    // reset idle
    if (idleTimeout.current) clearTimeout(idleTimeout.current);
    if (idleInterval.current) clearInterval(idleInterval.current);

    idleTimeout.current = setTimeout(() => {
      idleInterval.current = setInterval(spawnRandom, 400);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      if (idleInterval.current) clearInterval(idleInterval.current);
    };
  }, []);

  return (
    <div className="gallery" ref={galleryRef} onMouseMove={handleMove}></div>
  );
}
