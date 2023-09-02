function submitHandler()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var selectedCountryValue = null;
    var countryRadios = document.getElementsByName("country");

    for (var i = 0; i < countryRadios.length; i++) {
        if (countryRadios[i].checked) {
            selectedCountryValue = countryRadios[i].value;
            break; 
        }
    }


    if(username=="")
    {
        alert("Please enter username");
    }
    if(password=="")
    {
        alert("Please enter password");
    }
    if(selectedCountryValue==null)
    {
        alert("Please select a country");
    }


}