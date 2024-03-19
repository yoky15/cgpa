function calculateCGPA() {
    var credits = parseFloat(document.getElementById("credits").value);
    var points = parseFloat(document.getElementById("points").value);
    
    if (isNaN(credits) || isNaN(points)) {
        alert("Please enter valid numbers.");
        return;
    }
    
    var cgpa = points / credits;
    document.getElementById("result").innerHTML = "CGPA: " + cgpa.toFixed(2);
}
