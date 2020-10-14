// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    let takeoffButton = document.getElementById('takeoff');
    let landButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
    let flightStatus = document.getElementById('flightStatus');
    let rightButton = document.getElementsByTagName('button').innerHTML('Right');
    let leftButton = document.getElementsByTagName('button').innerHTML('Left');
    let upButton = document.getElementsByTagName('button').innerHTML('Up');
    let downButton = document.getElementsByTagName('button').innerHTML('Down');
    let shuttleBackground = document.getElementById('shuttleBackground').style.backgroundColor;
    let shuttleHeight = document.getElementById('spaceShuttleHeight').innerHTML;
    takeoffButton.addEventListener('click', function(){
        let takeoffConfirmation = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (takeoffConfirmation === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground = 'blue';
            shuttleHeight = 10000;
        }
    });
    landButton.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'Shuttle has landed.';
        shuttleBackground = 'green';
        shuttleHeight = 0;
    });
    abortButton.addEventListener('click', function(){
        let abortConfirmation = window.confirm('Confirm that you want to abort the mission.');
        if (abortConfirmation === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground = 'green';
            shuttleHeight = 0;
        }
    });
    upButton.addEventListener('click', function(){
        shuttleHeight += 10000;
    });
    downButton.addEventListener('click', function(){
        shuttleHeight -= 10000;
    });
    rightButton.addEventListener('click', function(){
        
    });
    leftButton.addEventListener('click', function(){

    });
});