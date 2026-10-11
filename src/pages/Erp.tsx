import { FeatureDetailPage } from "./FeatureDetailPage";

// OJO: la estructura es la misma que Facturación, pero los textos exactos de
// ERP no se verificaron con get_design_context (solo se confirmó Facturación,
// nodo 31:356). Se reutiliza el mismo texto de relleno hasta poder verificarlo.
const CARACT_BODY =
  "Responsible impact watches stand ipsum revision in could already. Version users expectations shoulder heads-up scraps plan attached job principles. Time pee paradigm crank interim / well closing give standup.";
const SECCION = [
  "Regroup digital request roll existing fured tentative open slipstream decisions. Six ground discussion close will running. That unlock goto dear another driving point with. Interim exploratory take reference resources.",
  "Uat let management needle please brainstorming. Closing encourage explore open already loss hop. Get data company.",
];

export function Erp() {
  return (
    <FeatureDetailPage
      eyebrow="ERP"
      heroTitle="Pharetra nulla scelerisque eleifend arcu tellus nunc."
      heroSubtitle="Dignissim tempus fringilla est neque tristique."
      heroImgNote="Ilustración del hero de ERP — exportar desde Figma (frame de la página ERP) y pasarla a src/assets/"
      bandTitle="ERP - Sistema de Planificación de Recursos Empresariales"
      caracteristicas={[1, 2, 3, 4, 5, 6].map((n) => ({ title: `Característica ${n}`, body: CARACT_BODY }))}
      detailSections={[
        { title: "Hours streamline big incentivization nail data is.", paragraphs: SECCION },
        { title: "Hours streamline big incentivization nail data is.", paragraphs: SECCION, reverse: true },
        { title: "Hours streamline big incentivization nail data is.", paragraphs: SECCION },
      ]}
    />
  );
}
