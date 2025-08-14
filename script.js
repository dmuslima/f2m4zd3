function loadVoices() {
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voiceSelect');
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

// Загружаем список голосов при изменении
speechSynthesis.onvoiceschanged = loadVoices;

function speakText() {
    const text = document.getElementById('textInput').value;
    const voiceSelect = document.getElementById('voiceSelect');
    const voices = speechSynthesis.getVoices();

    if (!text) {
        alert('Введите текст для озвучивания!');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices[voiceSelect.value];
    utterance.voice = selectedVoice;

    speechSynthesis.speak(utterance);
}

// Автоматическая загрузка голосов
loadVoices();
  