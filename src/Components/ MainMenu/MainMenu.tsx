import { Link } from "react-router-dom"
import s from "./MainMenu.module.scss"
import { useState } from "react"

const MainMenu = () => {
    const [preview, setPreview] = useState(true)




    if (preview) {
        return <div className={s.preview} onClick={() => setPreview((prev) => !prev)}>
            ХУЙ
        </div>
    }

    return (
        <div className={s.mainMenu}>
            <Link className={s.mainMenuItem} to={"/projects"}>PROJECTS</Link>
            <Link className={s.mainMenuItem} to={"/shop"}>SHOP</Link>
            <Link className={s.mainMenuItem} to={"/contact"}>CONTACT</Link>
            <Link className={s.mainMenuItem} to={"/about"}>ABOUT</Link>
        </div>
    )
}

export default MainMenu