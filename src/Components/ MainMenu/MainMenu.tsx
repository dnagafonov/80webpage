import s from "./MainMenu.module.scss"
import { useState } from "react"

const MainMenu = () => {
    const [preview, setPreview] = useState(true)

    // const workProgress = "хуйня, завтра сделаю"

    if (preview) {
        return <div className={s.preview} onClick={() => setPreview((prev) => !prev)}>
            ХУЙ
        </div>
    }

    return (
        <>
            <ul className={s.MainMenu}>
                {/* ROUTES buit */}
                <li className={s.MainMenu_item}>PROJECTS</li>
                <li className={s.MainMenu_item}>SHOP</li>
                <li className={s.MainMenu_item}>CONTACT</li>
                <li className={s.MainMenu_item}>ABOUT</li>
            </ul>
        </>
    )
}

export default MainMenu