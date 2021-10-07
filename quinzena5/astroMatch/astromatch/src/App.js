import react, { useState } from "react"
import { HomePage } from "./pages/Homepage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"

const App = () => {
  const [paginaAtual, setpaginaAtual] = useState("PagePerfil")

    const trocarPagina = () => {
      if (paginaAtual === "PagePerfil"){
        setpaginaAtual("matcheList")
      } else {
        setpaginaAtual("PagePerfil")
      }
    }

  return(
    <div>
      AstroMatch
      {paginaAtual === "PagePerfil" ? <HomePage/> : <MatchesPage/>}
      <button onClick={trocarPagina}>Mudar Pagina</button>
    </div>
  )
}

export default App