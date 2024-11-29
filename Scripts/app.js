// /scripts/app.js
function moveForward() {
    fetch('/API/move?action=forward')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}

function moveBackward() {
    fetch('/API/move?action=backward')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}

function rotateLeft() {
    fetch('/API/move?action=left')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}

function rotateRight() {
    fetch('/API/move?action=right')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}

function stop() {
    fetch('/API/move?action=stop')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}
