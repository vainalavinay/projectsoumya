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

    var employee = "id:101, name:Rohan Kumar, salary:60000";
    var keyValue = employee.split(",");
    var object = {};
    keyValue.forEach(function(pairs)
    {
        var parts = pairs.split(":");
        var key = parts[0].trim();
        var value = parts[1].trim();

        object[key] = value;
    });

    console.log(object.id);
    document.getElementById("json").innerHTML = `   Employee Management System: <br> Employee Id: ${object.id}<br>Employee Name: ${object.name}<br>Employee Salary: ${object.salary}`;
}