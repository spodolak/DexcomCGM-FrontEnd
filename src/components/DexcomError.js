import React from 'react';

const clientId = process.env.REACT_APP_CLIENT_ID;
const host = process.env.REACT_APP_HOST;
const dexcomApiEnvironment = process.env.REACT_APP_DEXCOM_API_ENVIRONMENT;

function DexcomError(props) {
    return (
        <React.Fragment>
            <h1>Oops!</h1>
            <h2>Please log into Dexcom</h2><br></br>
            <a
                className="App-link"
                href={'https://' + dexcomApiEnvironment + '/v2/oauth2/login?client_id=' + clientId + '&redirect_uri=' + host + '&response_type=code&scope=offline_access&state=auth'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => props.onClickingLogIn}
            >
                <button className="outline">
                    Log In
    </button>
            </a>
        </React.Fragment>
    )
}

export default DexcomError;