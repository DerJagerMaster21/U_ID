function updateTimeAndDate() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date();
    const time = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });

    timeElement.textContent = time;
    dateElement.textContent = date.charAt(0).toUpperCase() + date.slice(1);
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();

document.getElementById('fullscreen-btn').addEventListener('click', () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Safari
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE11
        document.documentElement.msRequestFullscreen();
    }
});

function createClouds() {
    const background = document.querySelector('.background');

    const cloud1 = document.createElement('div');
    cloud1.className = 'cloud';
    background.appendChild(cloud1);

    const cloud2 = document.createElement('div');
    cloud2.className = 'cloud-2';
    background.appendChild(cloud2);

    const cloud3 = document.createElement('div');
    cloud3.className = 'cloud-3';
    background.appendChild(cloud3);

    const cloud4 = document.createElement('div');
    cloud4.className = 'cloud-4';
    background.appendChild(cloud4);
}

createClouds();
