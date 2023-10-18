import Image from "next/image";
export default function Produto({params}){
  const {slug} = params;

  return(
    <>
    <h1>TESTE {slug}</h1>
    <Image src={'/images/caminho_para_imagem_bone.jpg'} alt={slug} width={200} height={200}>
      
    </Image>
    </>
  )
}
// // pages/produtos.js
// import { useRouter } from 'next/router';
// import Image from 'next/image';

// const Produtos = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   // Mapeamento dos produtos para as imagens correspondentes
//   const produtosImagens = {
//     camisa: '/public/images/caminho_para_imagem_camisa.jpg',
//     calca: '/public/images/caminho_para_imagem_calca.jpg',
//     sapato: '/public/images/caminho_para_imagem_sapato.jpg',
//     bone: '/public/images/caminho_para_imagem_bone.jpg',
//     oculos: '/public/images/caminho_para_imagem_oculos.jpg',
//   };

//   // Verificar se o produto existe no mapeamento
//   const imagem = produtosImagens[slug];

//   return (
//     <div>
//       <h1>Produtos</h1>
//       <div className="card">
//         {imagem ? (
//           <div>
//             <h2>{slug}</h2>
//             <Image src={imagem} alt={slug} width={200} height={200} />
//           </div>
//         ) : (
//           <p>Produto não encontrado</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Produtos;
