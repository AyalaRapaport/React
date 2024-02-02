import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Logo from "./Logo"
import wolt from '../Assets/Images/wolt.webp'
import '../Css/Delivers.css'
const Delivers = () => {
    const nav = useNavigate();
    const { isAdd } = useParams();
    const [addressAdded, setAddressAdded] = useState(false);
    const [join, setJoin] = useState(false);
    const [recognizeLocation, setRecognizeLocation] = useState(false);
    const [currentAddress, setCurrentAddress] = useState("");
    useEffect(() => {
        if (isAdd==='true') {
            setAddressAdded(true);
        }
        else{
            setAddressAdded(false);
        }
    }, [isAdd]);
    useEffect(() => {
        let apiKey = 'AIzaSyBNVjEXhyDOUvcCECJFY5x_OGKt38dxVBk';

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                let geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

                fetch(geocodingApiUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'OK') {
                            setCurrentAddress(data.results[0].formatted_address);
                            setRecognizeLocation(true);
                        } else {
                            console.error('שגיאה בשליפת כתובת');
                        }
                    })
                    .catch(error => console.error('שגיאה בשליפת כתובת:', error));
            });
        } else {
            console.log("הדפדפן לא תומך בגישה למיקום");
        }
    }, []);
    return (

        <>
            <Logo />
            {!addressAdded && !join &&
                <>
                    <p> ?רוצה לקבל הודעות על משלוחים באזורך </p>
                    <button id="join" onClick={() => { setJoin(true); }}
                    style={{ width: '80%'}} >!!!כן</button> </>
                   
            }
            {!addressAdded && join && recognizeLocation && (
                <div className="btnContainer">
                    <input className="btnLocation" value={"זהה מיקום"} type="button" onClick={() => nav(`recognizeLocation/${currentAddress}`)} />
                    <input className="btnLocation" value={" בחר מיקום"} type="button" onClick={() => nav('chooseLocation')} />
                </div>
            )}
            {!addressAdded && join && !recognizeLocation && (
                <input value={" בחר מיקום"} type="button" onClick={() => nav('chooseLocation')} />
            )

            }
            {addressAdded && (
                <>
                    <p>כתובתך רשומה נעדכנך על משלוחים בסביבתך</p>
                    <button onClick={()=>{setAddressAdded(false);nav('/delivers/'+false);}}>שינוי כתובת</button>
                </>
            )}
            <Outlet />
            <img id='image' src={wolt} alt="wolt" />
        </>
    );
};

export default Delivers;
