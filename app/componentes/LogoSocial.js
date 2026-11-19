export default function LogoSocial({ nombre }) {
  return (
    <img
      className="logo-social"
      src={`/assets/svg/${nombre}.svg`}
      alt=""
      aria-hidden="true"
      width={24}
      height={24}
      decoding="async"
    />
  );
}
