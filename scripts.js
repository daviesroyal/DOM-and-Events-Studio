// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){

    let takeoffButton = document.getElementById('takeoff');
    let landButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
    let flightStatus = document.getElementById('flightStatus');

    takeoffButton.addEventListener('click', function(){
        let takeoffConfirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (takeoffConfirmation === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            document.getElementById('spaceShuttleHeight').innerHTML = 10000;
        }
    });

    landButton.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'Shuttle has landed.';
        document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
    });

    abortButton.addEventListener('click', function(){
        let abortConfirmation = window.confirm('Confirm that you want to abort the mission.');
        if (abortConfirmation === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        }
    });

    let directionButtons = document.getElementsByTagName('button');

    for (let i = 0; i < directionButtons.length; i++) {
        if (directionButtons[i].innerHTML === 'Right') {
            directionButtons[i].addEventListener('click', function(){
                document.getElementById('rocket');
            });
        } else if (directionButtons[i].innerHTML === 'Left') {
            directionButtons[i].addEventListener('click', function(){
                document.getElementById('rocket');
            });
        } else if (directionButtons[i].innerHTML === 'Up') {
            directionButtons[i].addEventListener('click', function(){
                let shuttleHeightUp = Number(document.getElementById('spaceShuttleHeight').innerHTML);
                shuttleHeightUp += 10000;
                document.getElementById('spaceShuttleHeight').innerHTML = shuttleHeightUp;
            });
        } else if (directionButtons[i].innerHTML === 'Down') {
            directionButtons[i].addEventListener('click', function(){
                let shuttleHeightDown = Number(document.getElementById('spaceShuttleHeight').innerHTML);
                shuttleHeightDown -= 10000;
                document.getElementById('spaceShuttleHeight').innerHTML = shuttleHeightDown;
            });
        }
    }
    
});