import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="body-home">
      <div className="about-TCC">
        <h1>Sobre o TCC</h1>
        <p>
          Data science para cibersegurança: utilizando metodos para neutralizar
          hacks,
          <Link to="TCC">
            <strong> Clique aqui para acessar o TCC.</strong>
          </Link>
        </p>
      </div>
      <div className="institutional-school">
        <div className="text-institutional">
          <h1 className="h-text">Centro Universitário Padre Anchieta</h1>
          <h3>Sobre a Instituição</h3>
          <p id="about-institutional">
            A história desta Instituição está ligada ao idealismo de seu
            fundador, o prof. Pedro Clarismundo Fornari que, em 8 de dezembro de
            1941, liderando um grupo de professores, propõe a criação das
            Escolas Padre Anchieta, cujo patrono está ligado ao propósito
            educacional brasileiro. Sob esse ideal, tem início o funcionamento
            da escola, em 1942, com o antigo curso Propedêutico (Ginásio
            Comercial) e o Curso de Contador (atual Técnico de Contabilidade).
            Acompanhando o crescimento de Jundiaí e atendendo as necessidades de
            sua população, a direção das Escolas Padre Anchieta, em mais de 60
            anos de atividades, tem oferecido à região cursos de alta
            qualidade.Na educação infantil e no ensino fundamental, tendo como
            preocupação formar a base do desenvolvimento escolar, as Escolas
            Padre Anchieta vem trabalhando com um sistema já desenvolvido,
            reconhecido e respeitado no país - Sistema Moderna - que objetiva a
            formação integral do aluno.
          </p>
        </div>
      </div>
      <h1 className="h-txt">Autores</h1>
      <div className="about-us">
        <div className="div-img-assets"></div>
        <div className="infos-pessoais">
          <h3 className="h-txt ">Juliano Cesar Magoga </h3>
          <p className="p-txt">Idade: 23 Anos</p>
        </div>
      </div>
    </div>
  )
}
