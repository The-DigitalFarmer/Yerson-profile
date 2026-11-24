const tituloTerminal = [
  " █████  ████  ██  ██ ██████  ████   █████ ██████  ████",
  "██     ██  ██ ███ ██   ██   ██  ██ ██       ██   ██  ██",
  "██     ██  ██ ██ ███   ██   ██████ ██       ██   ██  ██",
  "██     ██  ██ ██  ██   ██   ██  ██ ██       ██   ██  ██",
  " █████  ████  ██  ██   ██   ██  ██  █████   ██    ████",
];

export default function TituloContactoTerminal() {
  return (
    <span className="titulo-contacto-terminal" role="img" aria-label="Contacto">
      {tituloTerminal.map((fila) => <span aria-hidden="true" key={fila}>{fila}</span>)}
    </span>
  );
}
