function calculateSalary() {
    let workerParentRows = document.querySelectorAll("div[id^=pracownik]");
    //    console.log(workerParentRows);

    let workersArray = Array.from(workerParentRows);
    //    console.log(workersArray);

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



        //        console.log(salary);
        console.log("Warunek 1");
        console.log(parseInt(document.getElementById(bestWorkers[0]).children.item(1).value));
        console.log(parseInt(hours));
        console.log(parseInt(document.getElementById(bestWorkers[0]).children.item(1).value) + " do " + hours);
        console.log("Warunek 2");
        console.log(parseInt(document.getElementById(bestWorkers[1]).children.item(1).value));
        console.log(parseInt(hours));
        console.log(parseInt(document.getElementById(bestWorkers[1]).children.item(1).value) + " do " + hours);
        console.log("Warunek 3");
        console.log(parseInt(document.getElementById(bestWorkers[2]).children.item(1).value));
        console.log(parseInt(hours));
        console.log(parseInt(document.getElementById(bestWorkers[2]).children.item(1).value) + " do " + hours);
        
        let n = workersArray.length;
        
        for (let i = 0; i < n; i++) {
            if (parseInt(hours) > parseInt(document.getElementById(bestWorkers[0]).children.item(1).value)) {
                //            console.log(Number(document.getElementById(bestWorkers[0]).children.item(1).value));
                //            console.log(hours);
                console.log("zapis if 1");
                bestWorkers[0] = element.getAttribute("id");


            } else if (parseInt(hours) > parseInt(document.getElementById(bestWorkers[1]).children.item(1).value)) {
                //            console.log(Number(document.getElementById(bestWorkers[1]).children.item(1).value));
                //            console.log(hours);
                console.log("zapis if 2");
                bestWorkers[1] = element.getAttribute("id");


            } else if (parseInt(hours) > parseInt(document.getElementById(bestWorkers[2]).children.item(1).value)) {
                //            console.log(Number(document.getElementById(bestWorkers[2]).children.item(1).value));
                //            console.log(hours);
                console.log("zapis if 3");
                bestWorkers[2] = element.getAttribute("id");

            }

            console.log("==================================================");
        }

    })
    console.log(bestWorkers);
}

document.getElementById("oblicz").addEventListener("click", calculateSalary);
