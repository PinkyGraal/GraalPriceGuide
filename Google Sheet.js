document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform validation
    var graalID = document.getElementById('inGameName').value.trim();
    var inGameName = document.getElementById('gang').value.trim();

    // Regex pattern to allow only letters and numbers
    var regex = /^[a-zA-Z0-9\s]*$/;

    if (graalID === '' || inGameName === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!regex.test(graalID) || !regex.test(inGameName)) {
        alert('Please enter only letters and numbers.');
        return;
    }

    // Check length of input
    if (graalID.length > 15 || inGameName.length > 15) {
        alert('Please limit each field to 15 characters or less.');
        return;
    }

    // Send form data if validation passes
    var formData = new FormData(this);
    fetch('https://script.google.com/macros/s/AKfycbySgupAv-fXXq7I7Ev_yUig-GMVQf0X73Hshdyy59GHFDRc9mo1DINCvGluDVgTiA9F/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        if (!text.trim()) {
            throw new Error('Response is empty');
        }
        try {
            const data = JSON.parse(text);
            if (data.success) {
                // Display modal
                document.getElementById('myModal2').style.display = 'block';
                document.getElementById('myForm').reset(); // Reset the form fields
            } else {
                throw new Error('Invalid response from the server');
            }
        } catch (error) {
            throw new Error('Response is not valid JSON');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred.');
    });
});

// Close the modal when the user clicks on the close button
document.getElementsByClassName('close2')[0].addEventListener('click', function() {
    document.getElementById('myModal2').style.display = 'none';
});
