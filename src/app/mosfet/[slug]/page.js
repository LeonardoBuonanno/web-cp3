import Image from "next/images";

export default function Produto({ params }) {
  const { slug } = params;
  console.log("aaa", slug);

  // Mapeamento dos produtos para as imagens correspondentes
  const produtosImagens = {
    camisa: "/images/caminho_para_imagem_camisa.jpg",
    calca: "/images/caminho_para_imagem_calca.jpg",
    sapato: "/images/caminho_para_imagem_sapato.jpg",
    bone: "/images/caminho_para_imagem_bone.jpg",
    oculos: "/images/caminho_para_imagem_oculos.jpg",
  };

  const imagemSrc = produtosImagens[slug];

  return (
    <>
      <h1>{imagemSrc}</h1>{" "}
      {imagemSrc ? (
        <Image src={imagemSrc} alt={slug} width={200} height={200} />
      ) : (
        <p>Produto não encontrado</p>
      )}
    </>
  );
}
