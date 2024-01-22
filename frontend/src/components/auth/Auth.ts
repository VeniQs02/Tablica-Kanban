import React from "react";
import axios from "axios";

async function hasUserTokenExpired(storedToken: String): Promise<boolean> {
    // sprawdzenie czy token nie wygasl, jak wygasl to ustawiamy na pusty string
    let responseResult = true;
    try {
        const response = await axios.post("auth/expire", storedToken);
        console.log("auth/expire result: " + response.data)
        responseResult = response.data;
    } catch (error) {
    if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
            console.log("Clearing expired token from local storage")
            localStorage.setItem('jwtToken', '')
            window.location.replace("/login")
        } else {
            console.error('Unexpected error with token. Details: ', error);
        }
    } else {
        console.error('Received exception is not an instance of an AxiosError');
    }
}
    return responseResult;
}

export default hasUserTokenExpired;