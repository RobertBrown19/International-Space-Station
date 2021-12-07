let apiEndpoint = "http://api.open-notify.org/iss-now.json";

function turnResponseIntoObject(res) {
    return res.json();
}

function handleInformation(data) {
    // debugger;
    let paragraph = document.querySelector("p");
    let message = `The current location of the Internation Space Station is latitude: ${data.iss_position.latitude} longitude: ${data.iss_position.longitude}`;
    paragraph.innerText = message;
}

function fetchData () {
    fetch(apiEndpoint).then(turnResponseIntoObject).then(handleInformation);
}

setInterval(fetchData, 100);