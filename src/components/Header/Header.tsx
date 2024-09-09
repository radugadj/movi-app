
import { Tab, useTheme, useMediaQuery} from "@mui/material";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import {NavLink} from "react-router-dom";
import "./Header.scss";





export const menuItem = [
    {name: "Главное", link: "/"},
    {name: "Сейчас смотрят", link: "now_playing"},
    {name: "Популярное", link: "popular"},
]

const Header = () => {
    
    const themes = useTheme();
    const isMatching = useMediaQuery(themes.breakpoints.down("md"));

    return (
        <header className="header__container">
            
            <div className="header">
                        <h1 className="header__title">pixema</h1>
                         
                    
                    {isMatching ? (
                        <BurgerMenu/>
                    ) : (
                        <>
                            <div className="navLinks">
                                {menuItem.map((nav, index) => (
                                    <NavLink to={nav.link} key={index}>
                                        <Tab className="links" label={nav.name} />
                                    </NavLink>

                                ))}
                            </div>
                        </>
                    )}
          
               
            </div>


        </header>
    )
}

export default Header;