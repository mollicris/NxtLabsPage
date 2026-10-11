import { FeatureDetailPage } from "./FeatureDetailPage";

// Textos exactos del nodo 31:356 de Figma (aún son texto de relleno en el diseño).
const CARACT = {
  title: "",
  body: "Responsible impact watches stand ipsum revision in could already. Version users expectations shoulder heads-up scraps plan attached job principles. Time pee paradigm crank interim / well closing give standup.",
};

export function Facturacion() {
  return (
    <FeatureDetailPage
      eyebrow="FACTURACIÓN"
      heroTitle="Pharetra nulla scelerisque eleifend arcu tellus nunc."
      heroSubtitle="Dignissim tempus fringilla est neque tristique."
      heroImgNote="otrofacturacion.png (559×407) — exportar desde Figma, nodo 31:625, y pasarlo a src/assets/"
      bandTitle="Sistema de facturación"
      caracteristicas={[1, 2, 3, 4, 5, 6].map((n) => ({ ...CARACT, title: `Característica ${n}` }))}
      detailSections={[
        {
          title: "Hours streamline big incentivization nail data is.",
          paragraphs: [
            "Regroup digital request roll existing fured tentative open slipstream decisions. Six ground discussion close will running. That unlock goto dear another driving point with. Interim exploratory take reference resources.",
            "Uat let management needle please brainstorming. Closing encourage explore open already loss hop. Get data company.",
          ],
        },
        {
          title: "Hours streamline big incentivization nail data is.",
          reverse: true,
          paragraphs: [
            "Other cta ping panel alarming make if best resources business. Due data asserts make playing plan close. Market unlock weeks language finance. Clean moving event parking bells define teams. Invested window money field incompetent nor would me mindfulness sexy.",
            "Or organic own switch customer fured driving three who's team. I define important bake keep eye mifflin exploratory bells feelers. 30,000ft shelf-ware of price journey exploratory product.",
          ],
        },
        {
          title: "Hours streamline big incentivization nail data is.",
          tight: true,
          paragraphs: [
            "Power build sop pollination economy. Performance teeth able stop speed. Ballpark synergy encourage skulls hurting performance wiggle book us container. Room boil discussion people panel player-coach then replied. Hours and that look team hits. Those whistles shoot growth message high left. Competitors hits high leverage stakeholder elephant where teams.",
            "Skulls native working would problem so take. Out replied cross-pollination incentivization reach finish for most.",
          ],
        },
      ]}
    />
  );
}
