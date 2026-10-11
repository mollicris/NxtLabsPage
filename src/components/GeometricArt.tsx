// Ilustraciones geométricas decorativas aproximadas a mano (no son una
// exportación real de Figma — no se subió ese asset). Dos variantes para
// distinguir Precios (cubos) de Contacto (hexágonos), en la paleta de marca.
export function GeometricCubes() {
  return (
    <svg width="180" height="170" viewBox="0 0 180 170" aria-hidden="true">
      {[
        [70, 10, "#1B2179"], [110, 10, "#324BD9"],
        [50, 45, "#324BD9"], [90, 45, "#5FD68A"], [130, 45, "#1B2179"],
        [70, 80, "#79E88F"], [110, 80, "#324BD9"],
        [50, 115, "#1B2179"], [90, 115, "#324BD9"], [130, 115, "#5FD68A"],
        [70, 150, "#324BD9"], [110, 150, "#1B2179"],
      ].map(([x, y, color], i) => (
        <polygon
          key={i}
          points={`${x as number},${(y as number) - 18} ${(x as number) + 20},${(y as number) - 8} ${(x as number) + 20},${(y as number) + 12} ${x as number},${(y as number) + 22} ${(x as number) - 20},${(y as number) + 12} ${(x as number) - 20},${(y as number) - 8}`}
          fill={color as string}
          opacity={0.9}
        />
      ))}
    </svg>
  );
}

export function GeometricHexagons() {
  const hex = (cx: number, cy: number, r: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(" ");

  const cells: [number, number, string, boolean][] = [
    [30, 30, "#1B2179", false], [78, 30, "#324BD9", true], [126, 30, "#1B2179", false],
    [54, 68, "#5FD68A", true], [102, 68, "#D4D4D4", false], [150, 68, "#324BD9", true],
    [30, 106, "#324BD9", false], [78, 106, "#1B2179", false], [126, 106, "#5FD68A", true],
  ];

  return (
    <svg width="180" height="140" viewBox="0 0 180 140" aria-hidden="true">
      {cells.map(([cx, cy, color, outline], i) => (
        <polygon
          key={i}
          points={hex(cx, cy, 26)}
          fill={outline ? "none" : color}
          stroke={outline ? color : "none"}
          strokeWidth={outline ? 2 : 0}
        />
      ))}
    </svg>
  );
}
