document.addEventListener('DOMContentLoaded', () => {
    // CAMBIO CLAVE 1: Usamos el nuevo ID del contenedor apilado
    const menuStacked = document.getElementById('menuStacked');

    // 1. Definición de los Ítems del Menú (Ajustando iconos para más elegancia)
    const menuItems = [
        // Usamos fa-venus y fa-mars para Damas/Varones
        { label: "Sociedad de Damas/Varones", icon: "fas fa-venus-mars", url: "index3.html" }, 
        // Usamos fa-child/fa-users para Jóvenes/Niños
        { label: "Sociedad de Jovenes/Niños", icon: "fas fa-users-cog", url: "index5.html" },
        // Usamos fa-hand-holding-heart para algo espiritual/promoción
        { label: "Departamento Promocion Espiritual", icon: "fas fa-hand-holding-heart", url: "index4.html" },
    ];
    
    // Eliminada la lógica de posicionamiento circular (circleRadius, itemOffset, angle, x, y)

    // 2. Generación del Menú Apilado
    menuItems.forEach((item) => {
        // Crear elemento A (enlace)
        const menuLink = document.createElement('a');
        menuLink.href = item.url;
        // CAMBIO CLAVE 2: Usamos la clase CSS para el estilo apilado
        menuLink.className = 'menu-link'; 

        // Contenido del botón
        menuLink.innerHTML = `
            <i class="${item.icon}"></i>
            <span>${item.label}</span>
        `;
        
        // El script ahora añade al contenedor 'menuStacked'
        menuStacked.appendChild(menuLink);
    });

    // 3. Función para actualizar el reloj y la fecha (sin cambios, mantiene la funcionalidad)
    function updateTime() {
        const now = new Date();
        
        // Formato de hora (HH:MM:SS)
        const timeString = now.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: false 
        });
        document.getElementById('currentTime').textContent = timeString;

        // Formato de fecha (D:AAAA.MM.DD)
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        document.getElementById('currentDate').textContent = `D:${year}.${month}.${day}`;
    }

    // Actualizar inmediatamente y luego cada segundo
    updateTime();
    setInterval(updateTime, 1000);
});