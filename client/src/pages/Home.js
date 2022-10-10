import styled from "styled-components";
import Menu from "../components/Menu";
import MenuResponsive from "../components/MenuResponsive";
import Background from "../components/Background";

export default function Home(){
    console.log(window.innerWidth)
    return(
        <>
            <WindowContainer>
                {window.innerWidth > 750 ? 
                    <Menu />
                    :
                    <MenuResponsive />
                }
                <Background>
                    
                </Background>
            </WindowContainer>
        </>
    )
}

const WindowContainer = styled.div``