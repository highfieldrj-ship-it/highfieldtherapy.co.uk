const Title = document.getElementById('Title');
const Email = document.getElementById('Email');
const Paragraph = document.getElementById('Paragraph');
const Second_Title = document.getElementById('Second_Title');
const submitBtn = document.getElementById('submitBtn');

fetch('http://127.0.0.1:5500/info.json')
    .then(response => response.json())
    .then(data => {
        Title.textContent = data.Title;
        Email.textContent = data.Email;
        Paragraph.textContent = data.Paragraph;
        Second_Title.textContent = data.Second_Title;
        submitBtn.textContent = data.submitBtn;
    })
    .catch(error => console.error('Error loading JSON:', error));

