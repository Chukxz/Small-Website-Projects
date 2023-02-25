var ulList = document.getElementById('ul');
var done = document.getElementById("done");
var textarea = document.getElementById("mytextarea");
var btn = document.getElementById("removebtn");

done.onclick = function() {

    if (textarea.value !== "") {

        if (textarea.value.length < 10000) {

            console.log(textarea.value.length + " characters.");
            var liList = document.createElement("li");
            var text = document.createTextNode(textarea.value);
            liList.appendChild(text);
            ulList.appendChild(liList);
            btn.style.display = "block";
            var btnli = document.createElement("li");
            var btntext = document.createTextNode("x");
            btnli.appendChild(btntext);
            btn.appendChild(btnli);

            btnli.onclick = function() {
                btn.removeChild(btnli);
                ulList.removeChild(liList);

                if (ulList.hasChildNodes() === false) {
                    ulList.style.display = "none";
                    btn.style.display = "none";
                }

            }

            textarea.value = "";
            liList.style.display = "block";
            liList.style.borderBottomStyle = "solid";
            liList.style.borderBottomWidth = "2px";
            liList.style.borderBottomColor = "black";
            ulList.style.display = "block";
            btn.style.display = "block";


        } else alert("You cannot input more than 10000 characters (including spaces).");

    } else {
        alert("Please enter a value");
    };

};