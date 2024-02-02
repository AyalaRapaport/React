import { useRef, useState } from 'react';
import css from '../Css/CourierDetails.css'
import Logo from './Logo';

const CourierDetails = () => {
    const refName = useRef();
    const refEmail = useRef();
    const refPhone = useRef();
    const refId = useRef();

    const [isCorrect, setIsCorrect] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidIsraeliId, setIsValidIsraeliId] = useState(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
    const [isConfirm,setIsConfirm]=useState(false);

    const handleConfirmation = () => {
        const isNameValid = /^[A-Za-z\s]+$/u.test(refName.current.value)&&refName.current.value.length>1;
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(refEmail.current.value);
        const isIsraeliIdValid = /^\d{9}$/.test(refId.current.value);
        const isPhoneNumberValid = /^\d{10}$/.test(refPhone.current.value);

        setIsConfirm(true);
        setIsValidName(isNameValid);
        setIsValidEmail(isEmailValid);
        setIsValidIsraeliId(isIsraeliIdValid);
        setIsValidPhoneNumber(isPhoneNumberValid);

        if (isNameValid && isEmailValid && isIsraeliIdValid && isPhoneNumberValid) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    return (
        <>
            <link href={css} rel="stylesheet" />
            <Logo />
            {!isCorrect && (
                <div className="container">
                    <form>
                        <div className="row">
                            <h3>פרטי שליח</h3>
                            <label htmlFor="name"><i className="fa fa-user"></i> שם מלא</label>
                            <input ref={refName} type="text" maxLength="25" id="fname" name="firstname" placeholder="John M. Doe" required />
                            {!isValidName &&isConfirm&& (
                                <span className="error-message">שם לא תקין</span>
                            )}
                            <label htmlFor='id'><i className="fa fa-envelope"></i> תעודת זהות</label>
                            <input ref={refId} type="text" id="id" name="id" placeholder="123456789" />
                            {!isValidIsraeliId &&isConfirm&& (
                                <span className="error-message">תעודת זהות לא תקינה</span>
                            )}
                            <label htmlFor="email"><i className="fa fa-envelope"></i> אימייל</label>
                            <input ref={refEmail} type="text" id="email" name="email" placeholder="john@example.com" />
                            {!isValidEmail &&isConfirm&& (
                                <span className="error-message">אימייל לא תקין</span>
                            )}
                            <label><i className="fa fa-envelope"></i> טלפון</label>
                            <input ref={refPhone} type="text" id="phone" name="phone" placeholder="050-2345678" />
                            {!isValidPhoneNumber &&isConfirm&& (
                                <span className="error-message">מספר טלפון לא תקין</span>
                            )}
                            <input className="btn" type='button' value={"אישור"} onClick={handleConfirmation} />
                            <div className="row">
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {isCorrect && (
                <div>
                    <h3> wolt מזל טוב!! הצטרפת ל</h3>
                    <p>פרטייך נשמרו במערכת,ניתן לשנותם באיזור האישי</p>
                    <p>בכל שעה שתרצה ניתן להכנס לאיזור האישי ולצפות במשלוחים באזורך</p>
                </div>
            )}
        </>
    );
}

export default CourierDetails;
