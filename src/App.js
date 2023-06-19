import "./index.css"
import Header from "./components/header/Header.js"
import Footer from "./components/footer/Footer.js"
import Lateral from "./components/lateral/Lateral.js"
import Card from "./components/card/card"
import StyledGlobal, { ContainerMain, PainelDeVideo, TelaInteira } from "./styledGlobal"

function App(){

  function reproduzV(){
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <>
    <StyledGlobal/>
    {/* <div class="tela-inteira"> */}
    <TelaInteira>
        <Header/>
        <ContainerMain>
            <Lateral/>
            <PainelDeVideo>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=1}"}
               titulo = {"Titulo 1"}/>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=}"}
               titulo = {"Titulo 2"}/>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=3}"}
               titulo = {"Titulo 3"}/>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=4"}
               titulo = {"Titulo 4"}/>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=5}"}
               titulo = {"Titulo 5"}/>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=6}"}
               titulo = {"Titulo 6"}/>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=7}"}
               titulo = {"Titulo 7"}/>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=8}"}
               titulo = {"Titulo 8"}/>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=9}"}
               titulo = {"Titulo 9"}/>
              <Card reproduz = {reproduzV}
               link={"https://picsum.photos/400/400?a=10}"}
               titulo = {"Titulo 10"}/>
            </PainelDeVideo>     
        </ContainerMain>
        <Footer/>
    {/* </div> */}
    </TelaInteira>
    </>

  );
}

export default App;
