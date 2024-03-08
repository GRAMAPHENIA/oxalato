"use client";

import { useState, useEffect } from "react";

const Navegacion = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleKeyDown = (event) => {
      const step = 1; // Puedes ajustar la cantidad de movimiento aquí
      let newX = x;
      let newY = y;

      if (event.key === "ArrowUp") {
        newY -= step;
      } else if (event.key === "ArrowDown") {
        newY += step;
      } else if (event.key === "ArrowLeft") {
        newX -= step;
      } else if (event.key === "ArrowRight") {
        newX += step;
      }

      // Obtener los límites del viewport
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;

      // Limitar la nueva posición dentro de los límites del viewport
      newX = Math.max(0, Math.min(newX, viewportWidth - 10)); // 10 es el ancho del cuadrado
      newY = Math.max(0, Math.min(newY, viewportHeight - 10)); // 10 es la altura del cuadrado

      // Función de interpolación para suavizar el movimiento
      const interpolate = (start, end, amount) => {
        return (1 - amount) * start + amount * end;
      };

      const animate = () => {
        setX((prevX) => interpolate(prevX, newX, 10));
        setY((prevY) => interpolate(prevY, newY, 10));
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [x, y]);

  return (
    <div className="viewport-container">
      <div
        className="relative"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        {/* Contenido de tu viewport aquí */}
        <div className="absolute bg-sky-300 w-10 h-10" />
        {/* Otros elementos dentro del viewport */}
      </div>
    </div>
  );
};

export default Navegacion;
