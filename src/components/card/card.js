import { ContainerCard, ContainerImagem } from "./oioi";
import { H4 } from "../footer/Rodape";

function Card(props){

    return(
        <>
               <ContainerCard onClick={props.reproduz}>
                    <ContainerImagem src={props.link} alt=""></ContainerImagem>
                    <H4>{props.titulo}</H4>
                {/* </div> */}
                </ContainerCard>
        </>
)}

export default Card;