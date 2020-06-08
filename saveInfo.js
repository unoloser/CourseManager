// chrome.storage.sync.get(function(result){console.log(result)})
var saveBtn = document.getElementById('save');

var studentName = document.getElementById("updatedName");
var studentID = document.getElementById("updatedID");
var CIT591 = document.getElementById("CIT591");
var CIT592 = document.getElementById("CIT592");
var CIT593 = document.getElementById("CIT593");
var CIT594 = document.getElementById("CIT594");
var CIT595 = document.getElementById("CIT595");
var CIT596 = document.getElementById("CIT596");

if (saveBtn) {
    saveBtn.addEventListener('click', function () {
        // document.getElementById('stdout').innerText = 'loaded'
        studentName = studentName.value;
        studentID = studentID.value;
        // document.getElementById('stdout').innerText = studentName;
        CIT591 = CIT591.checked;
        CIT592 = CIT592.checked;
        CIT593 = CIT593.checked;
        CIT594 = CIT594.checked;
        CIT595 = CIT595.checked;
        CIT596 = CIT596.checked;
        chrome.storage.sync.set({
            "studentName": studentName,
            "studentID": studentID,
            "CIT591": CIT591,
            "CIT592": CIT592,
            "CIT593": CIT593,
            "CIT594": CIT594,
            "CIT595": CIT595,
            "CIT596": CIT596,
        }, function () {
            if (chrome.runtime.error) {
                console.log("Runtime error.");
            }
        });

        window.close();
    });
}


window.onload = function () {

    chrome.storage.sync.get(["studentName", "studentID", "CIT591", "CIT592",
        "CIT593", "CIT594", "CIT595", "CIT596"], function (items) {
            if (!chrome.runtime.error) {
                // load user identity
                studentName.value = items.studentName == null ? "" : items.studentName;
                studentID.value = items.studentID == null ? "" : items.studentID;
                // load courses
                CIT591.checked = items.CIT591;
                CIT592.checked = items.CIT592;
                CIT593.checked = items.CIT593;
                CIT594.checked = items.CIT594;
                CIT595.checked = items.CIT595;
                CIT596.checked = items.CIT596;
            }
        });
}