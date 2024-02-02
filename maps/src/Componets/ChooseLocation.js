import React, { useEffect, useRef, useState } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import Map from "./Map";
const ChooseLocation = () => {
    const inputRef = useRef('');
    const searchBox = useRef(null);
    const nav = useNavigate();
    const [address, setAddress] = useState('');
    const [isAdd, setIsadd] = useState(false);

    const handlePlaceChanged = () => {
        const newAddress = inputRef.current.value;
        setAddress(newAddress);
        setIsadd(true);
        console.log(newAddress);
    };

    const addAddress = (newAddress) => {
        nav('/delivers/' + true);
    };

    return (
        <>
            <StandaloneSearchBox onLoad={(ref) => (searchBox.current = ref)} onPlacesChanged={handlePlaceChanged}>
                <input
                    className="form-control w-50  p-2 search-box-inp"
                    ref={inputRef}
                    type="text"
                    placeholder="Enter an address"
                    autoComplete="on"
                />
            </StandaloneSearchBox>
            {address && <Map location={address} />}
            {isAdd&&<button id="confirm" onClick={() => addAddress(address)}>אישור</button>
            }        </>
    );
};

export default ChooseLocation;
