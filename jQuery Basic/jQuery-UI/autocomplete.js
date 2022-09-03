var cities = ["New York", "Navi Mumbai", "Mumbai", "Delhi", "Chennai", "Bengaluru", "Ahmedabad", "Bhavnagar", "Tokyo", "Hawai", "Bora-Bora","Hydrabad", "Pune", "Chicago", "New Jersey", "Washington DC", "Paris", "Berlin", "Rajkot", "Baroda", "Palitana", "Toronto", "Dubai"];

$(document).ready(function () {
    $('#city').autocomplete({
        source: cities,
    },
    {
        autoFocus: true,
        delay: 0,
        minLength:0,
    });
});