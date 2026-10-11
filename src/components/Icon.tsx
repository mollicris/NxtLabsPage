import { SVGProps } from "react";

// ---- "Características del sistema" (íconos planos gris claro) ----
const flatBase = (props: SVGProps<SVGSVGElement>) => ({
  width: 96, height: 96, viewBox: "0 0 96 96", fill: "none",
  stroke: "#D4D4D4", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  ...props,
});
export const IconKiosk = (p: SVGProps<SVGSVGElement>) => (
  <svg {...flatBase(p)}>
    <path d="M14 32l6-16h56l6 16" /><path d="M14 32v42h68V32" /><path d="M14 32h68" />
    <rect x="34" y="56" width="28" height="18" /><circle cx="24" cy="14" r="2.5" fill="#D4D4D4" stroke="none" />
    <circle cx="72" cy="14" r="2.5" fill="#D4D4D4" stroke="none" /><circle cx="48" cy="10" r="2.5" fill="#D4D4D4" stroke="none" />
  </svg>
);
export const IconInvoiceStack = (p: SVGProps<SVGSVGElement>) => (
  <svg {...flatBase(p)}>
    <rect x="22" y="14" width="42" height="54" rx="2" /><rect x="32" y="28" width="42" height="54" rx="2" fill="#fff" />
    <path d="M40 40h26M40 48h26M40 56h18" />
  </svg>
);
export const IconHomologacion = (p: SVGProps<SVGSVGElement>) => (
  <svg {...flatBase(p)}>
    <path d="M24 16v64" /><path d="M24 22h48v14H24z" /><path d="M30 44h18v34H30z" />
    <path d="M34 50h10M34 56h10M34 62h10" />
  </svg>
);
export const IconAdminUser = (p: SVGProps<SVGSVGElement>) => (
  <svg {...flatBase(p)}>
    <circle cx="42" cy="34" r="14" /><path d="M18 82c0-16 10-26 24-26s24 10 24 26" />
    <path d="M60 34h18M74 26l8 8-8 8" />
    <circle cx="80" cy="16" r="3" fill="#D4D4D4" stroke="none" /><circle cx="86" cy="26" r="2" fill="#D4D4D4" stroke="none" />
  </svg>
);

// ---- "¿Por qué elegir?" (íconos lineales azul_nxt #324BD9) ----
const lineBase = (props: SVGProps<SVGSVGElement>) => ({
  width: 64, height: 64, viewBox: "0 0 64 64", fill: "none",
  stroke: "#324BD9", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  ...props,
});
export const IconDiamond = (p: SVGProps<SVGSVGElement>) => (
  <svg {...lineBase(p)}>
    <path d="M16 22l6-10h20l6 10-16 26z" /><path d="M16 22h32M22 12l4 10-3 0M42 12l-4 10h3M26 12l6 10 6-10" />
    <path d="M32 4v4M20 6l2 3M44 6l-2 3" />
  </svg>
);
export const IconNetwork = (p: SVGProps<SVGSVGElement>) => (
  <svg {...lineBase(p)}>
    <circle cx="32" cy="32" r="16" /><circle cx="32" cy="24" r="4" /><circle cx="26" cy="36" r="4" /><circle cx="38" cy="36" r="4" />
    <path d="M46 14l3-3M50 20h4M14 46l-3 3M10 40H6" />
  </svg>
);
export const IconGearsDuo = (p: SVGProps<SVGSVGElement>) => (
  <svg {...lineBase(p)}>
    <circle cx="24" cy="38" r="9" /><circle cx="42" cy="22" r="7.5" />
    <path d="M24 25v4M24 47v4M13 38h4M31 38h4M15.5 29.5l3 3M29.5 43.5l3 3M15.5 46.5l3-3M29.5 32.5l3-3" />
    <path d="M42 11v3M42 30v3M30.5 22h3M50.5 22h3" />
    <path d="M8 8l3 3M53 8l-3 3" />
  </svg>
);
export const IconLaptopChart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...lineBase(p)}>
    <rect x="12" y="12" width="40" height="26" rx="1.5" /><path d="M6 44h52l-4-6H10z" />
    <rect x="19" y="28" width="5" height="7" /><rect x="27" y="23" width="5" height="12" /><rect x="35" y="18" width="5" height="17" />
  </svg>
);

// ---- Íconos auxiliares para Precios / Contacto (mismo estilo lineal azul) ----
export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 14l6 6L23 7" />
  </svg>
);
export const IconWhatsapp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...lineBase(p)}><path d="M20 44l-9 2.5 2.5-8.5A18 18 0 1130 50a17.7 17.7 0 01-10-3.2z" />
  <path d="M23 26c0 7 6 13 13 13 1 0 2-1.4 2-2.8 0-.8-.4-1.2-1-1.6l-3.4-2a1.2 1.2 0 00-1.4.2l-1.2 1.4a11.2 11.2 0 01-5.2-5.2l1.4-1.2a1.2 1.2 0 00.2-1.4l-2-3.4c-.4-.6-.8-1-1.6-1-1.4 0-2.8 1-2.8 2z" /></svg>
);
export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...lineBase(p)}><path d="M18 12h8l4 10-5 3a26 26 0 0012 12l3-5 10 4v8a4 4 0 01-4 4C26 48 12 34 12 16a4 4 0 016-4z" /></svg>
);
export const IconPin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...lineBase(p)}><path d="M28 50s16-15 16-27a16 16 0 10-32 0c0 12 16 27 16 27z" /><circle cx="28" cy="23" r="5.5" /></svg>
);
