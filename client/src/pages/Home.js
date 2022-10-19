import styled from "styled-components";
import Menu from "../components/Menu";
import MenuResponsive from "../components/MenuResponsive";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home(){
    const navigate = useNavigate();
    console.log(window.innerWidth)
    useEffect(() => {
        if (!localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)) {
        navigate("/login");
        }
    });
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