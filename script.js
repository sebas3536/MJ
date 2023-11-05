document.addEventListener("DOMContentLoaded", function () {
    const $days = document.getElementById("days");
    const $hours = document.getElementById("hours");
    const $minutes = document.getElementById("minutes");
    const $seconds = document.getElementById("seconds");
    const $finalMessage = document.querySelector(".final-sms");

    // Fecha objetivo
    const countdownDate = new Date("12 07, 2023 08:00:00").getTime();

    // Actualiza la cuenta regresiva cada segundo
    const interval = setInterval(function () {
        // Obtiene la fecha actual y los milisegundos
        const now = new Date().getTime();

        // Calcula la diferencia de tiempo entre la fecha objetivo y la fecha actual
        const distance = countdownDate - now;

        // Calcula días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualiza los elementos HTML con los valores calculados
        $days.innerHTML = days;
        $hours.innerHTML = hours;
        $minutes.innerHTML = minutes;
        $seconds.innerHTML = ("0" + seconds).slice(-2);

        // Cuando llega a 0, detén la cuenta regresiva y muestra el mensaje final
        if (distance < 0) {
            clearInterval(interval);
            $finalMessage.style.transform = "translateY(0)";
        }
    }, 1000);
})
