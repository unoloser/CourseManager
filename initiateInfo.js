window.onload = function () {
    chrome.storage.sync.get(["name", "studentID", "CIT591", "CIT592",
        "CIT593", "CIT594", "CIT595", "CIT596"], function (items) {
            if (!chrome.runtime.error) {
                if (!items.name == undefined) {
                    var greetings = document.getElementById("greet1");
                    greetings.innerHTML = "Hi! " + items.name;
                }
                if (!items.studentID == undefined) {
                    var greetings = document.getElementById("greet2");
                    greetings.innerHTML = "Student ID: " + items.studentID;
                }


            } else {
                console.log("Error loading info from Chrome")
            }
        }
    );
}