import SEO from "@/components/SEO";

// Reprodução do "Gabarito do Quadro Royalties", publicado originalmente em
// athostomichlopes.github.io/easyroyalty-site. O arquivo é uma página HTML
// autocontida (CSS + JS inline, sem dependências de build) copiada
// verbatim para public/gabarito.html — aqui só a carregamos num iframe de
// tela cheia, preservando o comportamento original (quiz, cartas, modal,
// localStorage) sem reescrevê-lo em React.
const Gabarito = () => {
  return (
    <>
      <SEO
        title="Gabarito do Quadro — easyRoyalty"
        description="As respostas certas do Quadro Royalties: direitos autorais, ECAD, royalties de streaming e contratos, explicados pela easyRoyalty."
        canonical="/gabarito"
      />
      <iframe
        src="/gabarito.html"
        title="Gabarito do Quadro Royalties"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </>
  );
};

export default Gabarito;
