import Image from "next/image";
import Link from "next/link";

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
    codfonte: "/images/codfonte.jpg",
  };

  const imagemSrc = produtosImagens[slug];

  return (
    <>


      <h1>Produto escolhido:</h1>
      {imagemSrc ? (
        <>
        <div className="link-produto">
          <Image src={imagemSrc} alt={slug} width={400} height={400} margin={20}  />
          <Link href="/">Menu</Link>

        </div>
        
        
        </>
      ) : (
        <p>Produto não encontrado</p>
        
      )}
    </>
  );
}
