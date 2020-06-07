window.onload = function () {
    var proctorULink = "https://www.proctoru.com/"
    var proUBtn = document.getElementById("goToExam")
    proUBtn.addEventListener('click', function () {
        window.open(proctorULink);
    })


    chrome.storage.sync.get(["studentName", "studentID", "CIT591", "CIT592",
        "CIT593", "CIT594", "CIT595", "CIT596"], function (items) {
            if (!chrome.runtime.error) {
                if (items.studentName != "undefined") {
                    var greetings = document.getElementById("greet1");
                    greetings.innerText = "Hi! " + items.studentName;
                }
                if (items.studentID != "undefined") {
                    var greetings = document.getElementById("greet2");
                    greetings.innerText = "Student ID: " + items.studentID;
                }




            } else {
                console.log("Error loading info from Chrome")
            }
        }
    )
}
