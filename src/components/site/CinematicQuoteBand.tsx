import { CinematicBand } from "./CinematicBand";

/**
 * Banda dark del home. Conserva su API/uso en page.tsx pero delega en el
 * componente genérico CinematicBand con los valores específicos del home.
 */
export function CinematicQuoteBand() {
  return (
    <CinematicBand
      image="/editorial/editorial-vii-embargo-contenedor.png"
      alt="Contenedor retenido en patio aduanal"
      numeral="V"
      eyebrow="Comercio exterior"
      ariaLabel="Riesgo en comercio exterior"
      lines={[
        "Las multas de comercio",
        "exterior pueden alcanzar el",
        "130% del valor en aduana.",
      ]}
      body="Una clasificación arancelaria o un valor en aduana mal determinados bastan para detonarlas. Respondemos el PAMA, recuperamos la mercancía con garantía y peleamos el fondo ante el TFJA."
      minH="min-h-[80svh]"
    />
  );
}
