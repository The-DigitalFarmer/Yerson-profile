export default function EnlaceExterno({ href, nuevaPestana = true, children, ...atributos }) {
  return (
    <a
      {...atributos}
      href={href}
      target={nuevaPestana ? "_blank" : undefined}
      rel={nuevaPestana ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
