const mascotas = [
  { nombre: "ferris", ancho: 90, alto: 54 },
  { nombre: "ninfa", ancho: 63, alto: 49 },
];

export default function MascotasTerminal() {
  return (
    <div className="consola-mascotas" aria-hidden="true">
      {mascotas.map(({ nombre, ancho, alto }) => {
        const sprite = `/assets/mascotas/${nombre}`;

        return <img className={`mascota-${nombre}`} key={nombre} src={`${sprite}.gif`} alt="" width={ancho} height={alto} loading="eager" decoding="async" />;
      })}
    </div>
  );
}
