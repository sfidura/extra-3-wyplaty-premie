function calculateSalary() {
    let workerParentRows = document.querySelectorAll("div[id^=pracownik]");
    //    console.log(workerParentRows);

    let workersArray = Array.from(workerParentRows);
    //    console.log(workersArray);

    let preBestWorkers = workersArray;
    let bestWorkers = ["pracownik1", "pracownik2", "pracownik3"];

    workersArray.forEach(function (element, index) {
        //        console.log(element.getAttribute("id"));
        let hours = document.getElementById(element.getAttribute("id")).children.item(1).value;
        //        console.log(hours);
        let payPerHour = document.getElementById(element.getAttribute("id")).children.item(2).value;
        //        console.log(payPerHour);

        let calculatedSalary = hours * payPerHour;
        //        console.log(calculatedSalary);

        let premiumSalary = 0;
        if (hours > 160) {
            let premiumHours = hours - 160;
            premiumSalary = premiumHours * payPerHour * 2;
        }

        calculatedSalary = calculatedSalary + premiumSalary;

        let salary = document.getElementById(element.getAttribute("id")).children.item(3);
        salary.innerHTML = calculatedSalary;

        if (hours < 100) {
            document.getElementById(element.getAttribute("id")).style.backgroundColor = "red";
            document.getElementById(element.getAttribute("id")).children.item(1).style.backgroundColor = "red";
            document.getElementById(element.getAttribute("id")).children.item(2).style.backgroundColor = "red";
        }


        // Tutaj zaczynam wielkie poszukiwania trzech najlepszych pracowników...

        preBestWorkers.forEach(function (element, index) {
            let hours = document.getElementById(element.getAttribute("id")).children.item(1).value;

            let n = preBestWorkers.length;

            for (let i = 0; i < n; i++) {
                if (parseInt(hours) > parseInt(document.getElementById(bestWorkers[0]).children.item(1).value)) {
                    bestWorkers[0] = element.getAttribute("id");
                }
            }
        });

        preBestWorkers.forEach(function (element, index) {
            if (element.getAttribute("id") == bestWorkers[0]) {
                preBestWorkers.splice(index, 1);
            }
        });

        preBestWorkers.forEach(function (element, index) {
            let hours = document.getElementById(element.getAttribute("id")).children.item(1).value;

            let n = preBestWorkers.length;

            for (let i = 0; i < n; i++) {
                if (parseInt(hours) > parseInt(document.getElementById(bestWorkers[1]).children.item(1).value)) {
                    bestWorkers[1] = element.getAttribute("id");
                }
            }
        });

        preBestWorkers.forEach(function (element, index) {
            if (element.getAttribute("id") == bestWorkers[1]) {
                preBestWorkers.splice(index, 1);
            }
        });

        preBestWorkers.forEach(function (element, index) {
            let hours = document.getElementById(element.getAttribute("id")).children.item(1).value;

            let n = preBestWorkers.length;

            for (let i = 0; i < n; i++) {
                if (parseInt(hours) > parseInt(document.getElementById(bestWorkers[2]).children.item(1).value)) {
                    bestWorkers[2] = element.getAttribute("id");
                }
            }
        });

    });

    console.log(bestWorkers);
    
    console.log(document.querySelector("div[id=" + bestWorkers[0] +"]").children.item(0).value);
    
    /*document.querySelector("h3").insertAdjacentHTML("afterend", "<p>" + document.querySelector("div[id=" + bestWorkers[0] +"]").children.item(0).value + "</p>");*/
    
    bestWorkers.forEach(function(element, index){
        let newP =  document.querySelector("h3").createElement("p");
        newP = document.createTextNode(document.getElementById(element).children.item(0).value);
        document.querySelector("h3").parentElement.appendChild(newP);
    })
}




document.getElementById("oblicz").addEventListener("click", calculateSalary);
