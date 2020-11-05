// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){

    let takeoffButton = document.getElementById('takeoff');
    let landButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
    let flightStatus = document.getElementById('flightStatus');
    let backgroundColor = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');

    takeoffButton.addEventListener('click', function(){
        let takeoffConfirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (takeoffConfirmation === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            backgroundColor.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = 10000;
        }
    });

    landButton.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'Shuttle has landed.';
        backgroundColor.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;
        document.getElementById('rocket').style.transform = 'initial';
    });

    abortButton.addEventListener('click', function(){
        let abortConfirmation = window.confirm('Confirm that you want to abort the mission.');
        if (abortConfirmation === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            backgroundColor.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
            document.getElementById('rocket').style.transform = 'initial';
        }
    });

    let directionButtons = document.getElementsByTagName('button');

    for (let i = 0; i < directionButtons.length; i++) {
        if (directionButtons[i].innerHTML === 'Right') {
            directionButtons[i].addEventListener('click', function(){
                document.getElementById('rocket').style.transform = 'translateX(10px)';
            });
        } else if (directionButtons[i].innerHTML === 'Left') {
            directionButtons[i].addEventListener('click', function(){
                document.getElementById('rocket').style.transform = 'translateX(-10px)';
            });
        } else if (directionButtons[i].innerHTML === 'Up') {
            directionButtons[i].addEventListener('click', function(){
                let shuttleHeightUp = Number(shuttleHeight.innerHTML);
                shuttleHeightUp += 10000;
                shuttleHeight.innerHTML = shuttleHeightUp;
            });
        } else if (directionButtons[i].innerHTML === 'Down') {
            directionButtons[i].addEventListener('click', function(){
                let shuttleHeightDown = Number(shuttleHeight.innerHTML);
                shuttleHeightDown -= 10000;
                shuttleHeight.innerHTML = shuttleHeightDown;
            });
        }
    }
    
});