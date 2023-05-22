var display_cmd;
function process() {
    var cmd = document.getElementById("cmd").value;
    var display = output(cmd);
    document.getElementById("display-cmd").innerHTML ="  "+ display_cmd + "|";
    document.getElementById("output").innerHTML = display;
}

function processb(cmd) {
    var display = output(cmd);
    document.getElementById("display-cmd").innerHTML ="  "+ display_cmd + "|";
    document.getElementById("output").innerHTML = display;
}

function output(cmd) {
    switch(cmd) {
        case "whoami":
            display_cmd = "whoami";
            return "Rakesh Kumar<br/>19 y/o<br/>Freelancer<br/>Backend Developer<br/>UI/UX Designer";
            break;

        case "conquest":
            display_cmd = "Achievement";
            return "Publish reverse engineering challenge on Hackthebox.<br/>First Place in edureka debugging, MVIT hackathon.";
            break;

        case "works":
            display_cmd = "ps aux";
            return "Intern at VNET as a Backend Developer.";
            break;

        case "writeups":
            display_cmd = "./ctf-writeups.sh";
            return "Writeup links will be update soon.";
            break;

        case "contact":
            display_cmd = "man rakesh";
            return "Mail: 0xrakeskumar@gmail.com<br/>Instagram: @0xrakesh<br/>Github: @0xrakesh";
            break;

        case "conquer":
            display_cmd = "Achievement";
            return "";
            break;

    }
}