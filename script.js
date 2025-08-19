document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    function updateDate() {
        const now = new Date();
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        const diaSemana = dias[now.getDay()];
        const dia = String(now.getDate()).padStart(2, '0');
        const mes = meses[now.getMonth()];
        const anio = now.getFullYear();
        
        const fechaElement = document.getElementById('fecha');
        if (fechaElement) {
            fechaElement.textContent = `${diaSemana}, ${dia} ${mes} ${anio}`;
        }
    }
    
    updateClock();
    updateDate();
    setInterval(function() {
        updateClock();
        updateDate();
    }, 1000);
});
