var saveBtn = document.getElementById('save');

var name = document.getElementById("updatedName");
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
        name = name.value;
        studentID = studentID.value;
        CIT591 = CIT591.value;
        CIT592 = CIT592.value;
        CIT593 = CIT593.value;
        CIT594 = CIT594.value;
        CIT595 = CIT595.value;
        CIT596 = CIT596.value;
        chrome.storage.sync.set({
            "name": name,
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
                document.getElementById('stdout').innerText = 'Save failed';
            }
            else {
                document.getElementById('stdout').innerText = 'Save okay';
            }
        });

        window.close();
    });
}

// document.body.onload = function () {

//     chrome.storage.sync.get(["name", "studentID", "CIT591", "CIT592",
//         "CIT593", "CIT594", "CIT595", "CIT596"], function (items) {
//             if (!chrome.runtime.error) {
//                 console.log(items);

//                 // load user identity
//                 name.value = items.name == null ? "" : items.name;
//                 studentID.value = items.studentID == null ? "" : items.studentID;
//                 // load courses
//                 CIT591.checked = items.CIT591;
//                 CIT592.checked = items.CIT592;
//                 CIT593.checked = items.CIT593;
//                 CIT594.checked = items.CIT594;
//                 CIT595.checked = items.CIT595;
//                 CIT596.checked = items.CIT596;
//             }
//         });
// }

window.onload = function () {

    chrome.storage.sync.get(["name", "studentID", "CIT591", "CIT592",
        "CIT593", "CIT594", "CIT595", "CIT596"], function (items) {
            if (!chrome.runtime.error) {
                console.log(items);

                // load user identity
                name.value = items.name == null ? "" : items.name;
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