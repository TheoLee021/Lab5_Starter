// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textarea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore > img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) option.textContent += ' — DEFAULT';
      option.value = i;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', () => {
    const text = textarea.value;
    if (!text || voiceSelect.value === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[Number(voiceSelect.value)];

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face with open mouth';
    };
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}
