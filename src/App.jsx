import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/global.css'
import Gaalerry from './components/galerry';
import Footer from './components/footer';
import NavbarHome from './components/navbar';

import Galerry from './components/galeimg';



export default function App() {
  return (
    <>
      <NavbarHome />

      <section className='container'>
        <h1 className="degrade text-center mt-4">
          A Magia da Inteligência Artificial em Imagens
        </h1>
        <p className="text-center text-white mt-2 mb-4">
          Estas imagens foram produzidas com a ajuda de algoritmos de inteligência
          artificial. Através da combinação de palavras foi possível gerar
          resultados visualmente deslumbrantes e surpreendentes. Os avanços da IA
          é possivel criar imagens que desafiam a imaginação. Estas imagens são de
          minha autoria, e note que com a evolução da tecnologia pode trazer
          vantagens surpreendentes, aumentando nossa capacidade criativa e nos
          levando além de nossas possibilidades individuais.
        </p>
      </section>

      <Gaalerry />
      <Footer />
      <Galerry />
    </>
  )
}