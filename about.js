const AboutTitle = document.getElementById('AboutTitle');
const AboutContent = document.getElementById('AboutContent');
const AboutSubtitle = document.getElementById('AboutSubtitle');

fetch('./about.json')
    .then(response => response.json())
    .then(data => {
        AboutTitle.textContent = data.AboutTitle;
        AboutContent.textContent = data.AboutContent;
        AboutSubtitle.textContent = data.AboutSubtitle;
    })
    .catch(error => console.error('Error loading JSON:', error));