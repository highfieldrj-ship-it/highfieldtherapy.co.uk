fetch('./info.json')
    .then(response => response.json())
    .then(data => {
        const slots = {
            Title: 'Title',
            Welcome: 'Welcome',
            situationText: 'Situation',
            problemText: 'Problem',
            implicationText: 'Implication',
            payoffText: 'Payoff',
            ctaBtn: 'Cta',
            aboutText: 'About',
            therapyText: 'Therapy',
            feesText: 'Fees',
            contactText: 'Contact',
            Email: 'Email'
        };

        for (const id in slots) {
            const el = document.getElementById(id);
            if (el) el.textContent = data[slots[id]];
        }

        const submitBtn = document.getElementById('submitBtn');
        submitBtn.textContent = data.submitBtn;
        submitBtn.addEventListener('click', () => {
            window.location.href = 'mailto:' + data.Email;
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
