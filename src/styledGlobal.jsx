import styled from "styled-components"
import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const PainelDeVideo = styled.section`
    padding-left: 20px;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    `

export const ContainerMain = styled.main`
    min-height: 95vh;
    display: flex;
    margin-bottom: 1vh

`
