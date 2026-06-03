fetch('./info.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('Title').textContent = data.Title;
        document.getElementById('Welcome').textContent = data.Welcome;
        document.getElementById('aboutText').textContent = data.About;
        document.getElementById('therapyText').textContent = data.Therapy;
        document.getElementById('feesText').textContent = data.Fees;
        document.getElementById('contactText').textContent = data.Contact;
        document.getElementById('Email').textContent = data.Email;

        const submitBtn = document.getElementById('submitBtn');
        submitBtn.textContent = data.submitBtn;
        submitBtn.addEventListener('click', () => {
            window.location.href = 'mailto:' + data.Email;
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
