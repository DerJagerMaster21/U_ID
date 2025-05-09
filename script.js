document.addEventListener('DOMContentLoaded', function() {
    function updateClockAndDate() {
        const now = new Date();
        
        // Hora en formato 24h
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        
        // Fecha en formato: Viernes, 09 May 2025
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        const diaSemana = dias[now.getDay()];
        const dia = String(now.getDate()).padStart(2, '0');
        const mes = meses[now.getMonth()];
        const anio = now.getFullYear();
        document.getElementById('fecha').textContent = `${diaSemana}, ${dia} ${mes} ${anio}`;
    }
    
    updateClockAndDate();
    setInterval(updateClockAndDate, 1000);
});