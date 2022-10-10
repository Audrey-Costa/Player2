import { FaPowerOff, FaUserFriends } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";
import { BsGearFill } from "react-icons/bs";
import { BiJoystick } from "react-icons/bi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MenuResponsive(){
    const navigate = useNavigate();

    function logout(){
        console.log("oi")
        localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_KEY);
        navigate("/login")
    }
    return (
        <>
            <SideMenu>
                <div onClick={()=>navigate("/suggestions")}><p>Find a Friend</p><BiJoystick /></div>
                <div onClick={()=>navigate("/friends")}><p>Friends</p><FaUserFriends /></div>
                <div onClick={()=>navigate("/preferences")}><p>Preferences</p><BsGearFill /></div>
                <div onClick={()=>navigate("/options")}><p>Options</p><IoMdOptions /></div>
                <div onClick={logout}><p>Logout</p><FaPowerOff /></div>
            </SideMenu>
        </>
    )   
}

const SideMenu = styled.div``