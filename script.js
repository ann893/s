document.getElementById('playButton').addEventListener('click', function() {
    const video = document.getElementById('video');
    const leftImage = document.getElementById('leftImage');
    const rightImage = document.getElementById('rightImage');

    video.style.display = 'block'; // Показываем видео
    video.play(); // Запускаем видео
    this.style.display = 'none'; // Скрываем кнопку

    leftImage.style.display = 'block'; // Показываем левую картинку
    rightImage.style.display = 'block'; // Показываем правую картинку
});