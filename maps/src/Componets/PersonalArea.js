import { useRef, useState } from "react";
import css from '../Css/PersonalArea.css'
import Delivers from "./delivers";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
const PersonalArea = () => {
    let refId = useRef();
    const nav = useNavigate();
    const [isCourier, setIsCourier] = useState(false);
    const [isManager, setIsManager] = useState(false);
    const Enter = () => {
        setIsCourier(true);
        nav('/delivers/' + false)
    }
    return (
        <>
            <link href={css} rel="stylesheet" />
            <Logo/>
            <div id="login">
                <label id="labelId" htmlFor='id' ><i className="fa fa-envelope"></i> הקש מספר תעודת זהות</label>
                <input ref={refId} type="text" id="inputId" name="id" placeholder="123456789" />
                <button onClick={() => Enter()}>הכנס</button>
            </div>
        </>
    );
}

export default PersonalArea;