function submitHandler(event) {
    event.preventDefault();

    // Variables for form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var country = null;
    var countryRadio = document.getElementsByName("country");
    var preferreddate = document.getElementById("preferredDate").value;
    var licenceagreement = document.getElementById("checkbox").value;

    // Find the selected country
    for (var i = 0; i < countryRadio.length; i++) {
        if (countryRadio[i].checked) {
            country = countryRadio[i].value;
            break;
        }
    }

    // Create a JSON object with form data
    var formData = {
        username: username,
        password: password,
        country: country,
        preferreddate: preferreddate,
        licenceagreement: licenceagreement,
    };

    console.log(formData);
}