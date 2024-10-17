document.getElementById('playVideo').addEventListener('click', function() {
    // alert('Video player functionality would be implemented here.');
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // alert('Button clicked! Functionality would be implemented here.');
    });
});

const video = document.getElementById('learningVideo');
const playButton = document.getElementById('playVideo');

playButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playButton.textContent = 'Pause Video';
    } else {
        video.pause();
        playButton.textContent = 'Play Video';
    }
});