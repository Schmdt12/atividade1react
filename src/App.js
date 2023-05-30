import "./index.css"
import Header from "./components/header/Header.js"
import Footer from "./components/footer/Footer.js"
import Lateral from "./components/lateral/Lateral.js"
import Card from "./components/card/card"

function App(){
  return (
    <>
   <body>
    <div class="tela-inteira">
        <Header/>
        <main>
            <Lateral/>
            <section className="painel-de-videos">
              <Card/>
            </section>     
        </main>
        <Footer/>
    </div>
</body>

    </>
  );
}

export default App;
