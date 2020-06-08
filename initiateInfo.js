// chrome.storage.sync.get(function(result){console.log(result)})
var piazzaList = document.getElementById('piazzaList')
var syllabusList = document.getElementById('syllabusList')
var courseraList = document.getElementById('courseraList')


window.onload = function () {

    var element = document.getElementById("piazzaCIT591");

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

                if (!items.CIT591) {
                    element = document.getElementById("piazzaCIT591");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("syllabusCIT591");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("courseraCIT591")
                    element.parentNode.removeChild(element);
                }

                if (!items.CIT592) {
                    element = document.getElementById("piazzaCIT592");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("syllabusCIT592");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("courseraCIT592")
                    element.parentNode.removeChild(element);
                }

                if (!items.CIT593) {
                    element = document.getElementById("piazzaCIT593");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("syllabusCIT593");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("courseraCIT593")
                    element.parentNode.removeChild(element);
                }

                if (!items.CIT594) {
                    element = document.getElementById("piazzaCIT594");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("syllabusCIT594");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("courseraCIT594")
                    element.parentNode.removeChild(element);
                }

                if (!items.CIT595) {
                    element = document.getElementById("piazzaCIT595");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("syllabusCIT595");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("courseraCIT595")
                    element.parentNode.removeChild(element);
                }

                if (!items.CIT596) {
                    element = document.getElementById("piazzaCIT596");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("syllabusCIT596");
                    element.parentNode.removeChild(element);

                    element = document.getElementById("courseraCIT596")
                    element.parentNode.removeChild(element);
                }
            } else {
                console.log("Error loading info from Chrome")
            }
        }
    )
}
