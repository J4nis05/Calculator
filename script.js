function myFunction() {
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var operation = document.getElementById("op").value;
    var res = 0;
    //console.log("Halloooo", operation);

    if (operation == "Plus") {
        res = Number(x) + Number(y);
        document.getElementById("demo").innerHTML = res;
        console.log(" + ");
    }

    else if (operation == "Minus") {
        res = Number(x) - Number(y);
        document.getElementById("demo").innerHTML = res;
        console.log(" - ")
    }

    else if (operation == "Mal") {
        res = Number(x) * Number(y);
        document.getElementById("demo").innerHTML = res;
        console.log(" * ")
    }

    else if (operation == "Durch") {
        res = Number(x) / Number(y);
        document.getElementById("demo").innerHTML = res;
        console.log(" : ")
    }
}

function myFunction2() {
    if (new Date().getHours() < 18) {
        document.getElementById("demo").innerHTML = "Good day!";
        console.log("Date:", new Date());
    } else {
        document.getElementById("demo").innerHTML = "Good evening!";
        console.log("Date:", new Date());
    }
}
