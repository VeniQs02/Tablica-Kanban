import axios from "axios";

const userService = {
    hasUserTokenExpired,
    login,
    getUserData,
    changeEmail,
    changePassword
}

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

async function login(formData: any) {
    const userData = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        jwt: "",
    };

    try {
        const response = await axios.post("auth/login", formData);
        if (response.status === 204) {
            console.log('User with the given username does not exist');
            window.alert('User with the given username does not exist!')
            return;
        }
        userData.jwt = response.data.jwtToken
        userData.username = response.data.username
        userData.email = response.data.email
        userData.firstName = response.data.firstName
        userData.lastName = response.data.lastName

        localStorage.setItem('jwtToken', userData.jwt);
        localStorage.setItem('loggedInUser', JSON.stringify(userData))
        console.log("Login successful. Token and user saved in local storage");
        window.location.replace("/home") // or userAccount
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 401) {
                console.log('Incorrect password');
                window.alert('Incorrect password!')
            } else {
                console.error('Error logging in: ', error);
            }
        } else {
            console.error('Received exception is not an instance of an AxiosError');
        }
    }
}

function getUserData() {
    const userData = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        jwt: "",
    };

    const storedUserData = localStorage.getItem('loggedInUser');

    if (storedUserData) {
        let parsedUserData = JSON.parse(storedUserData);
        userData.jwt = parsedUserData.jwt
        userData.username = parsedUserData.username
        userData.email = parsedUserData.email
        userData.firstName = parsedUserData.firstName
        userData.lastName = parsedUserData.lastName
    } else {
        userData.jwt = ""
        userData.username = ""
        userData.email = ""
        userData.firstName = ""
        userData.lastName = ""
    }

    return userData;
}

async function changeEmail(formData: any) {
    const userData = {
        username: "",
        email: "",
    };

    const loggedInUser = getUserData();
    console.log(loggedInUser)
    if (!(loggedInUser)) {
        console.log("Could not fetch user data!")
    }
    userData.username = loggedInUser.username;
    userData.email = formData.email;
    console.log(userData)
    try {
        const response = await axios.post("user/changeEmail", userData);
        if (response.status === 200) {
            console.log('Email changed successfully!');
            window.alert('Email changed successfully!')
            return;
        }
        console.log("Possible DB connection issues or some other error occured")
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 304) {
                console.log('Email could not be changed.');
                window.alert('Email could not be changed.')
                return;
            }
            console.error('Error changing email: ', error);
        } else {
            console.error('Received exception is not an instance of an AxiosError');
        }
    }
}

async function changePassword(formData: any) {
    const userData = {
        username: "",
        password: "",
    };

    const storedUserData = localStorage.getItem('loggedInUser');

    if (storedUserData) {
        let parsedUserData = JSON.parse(storedUserData);
        userData.username = parsedUserData.username
    }
    userData.password = formData.password;
    try {
        const response = await axios.post("user/changePassword", userData);
        if (response.status === 200) {
            console.log('Password changed successfully!');
            window.alert('Password changed successfully!')
            return;
        }
        console.log("Possible DB connection issues or some other error occured")
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 304) {
                console.log('Password could not be changed.');
                window.alert('Password could not be changed.')
                return;
            }
        } else {
            console.error('Received exception is not an instance of an AxiosError');
        }
    }
}

export default userService;
