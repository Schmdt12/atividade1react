import { MenuVertical } from './Nav';
import { MenuBotoes } from './Nav';
import './lateral.css';

function lateral(){
    return(
    <MenuVertical>
        <ul>
            <MenuBotoes>Início</MenuBotoes>
            <MenuBotoes>Em alta</MenuBotoes>
            <MenuBotoes>Inscrições</MenuBotoes>
            <hr></hr>
            <MenuBotoes>Originais</MenuBotoes>
            <MenuBotoes>Histórico</MenuBotoes>
        </ul>
    </MenuVertical>
    )
}

export default lateral