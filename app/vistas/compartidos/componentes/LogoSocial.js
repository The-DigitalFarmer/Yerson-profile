import ArteAscii from "../../terminal/componentes/ArteAscii";

export default function LogoSocial({ nombre }) {
  const ruta = `/assets/svg/${nombre}.svg`;

  return (
    <>
      <img className="logo-social" src={ruta} alt="" aria-hidden="true" width={24} height={24} decoding="async" />
      <ArteAscii ruta={nombre === "github" ? "github-social" : ruta} />
    </>
  );
}
