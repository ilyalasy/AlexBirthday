//Trilliard of text
const intro = "Oh, hello there!<How did you find this URL, human?<Anyway. Stay here as long as you want.<Nothing will help you to do anything here..";
const helpInterrupted = "Welcome to UNIX-based Fun Neural Congratulation System!<br />With our system you can order some fun original congratulation for you friends or relatives.<br />Our modern AI will choose appropriate words to make any human fill warmth, pleasure and attention.<br />To get our fascinating congratulation use command 'letsfun'.<br />To set so...";
const helpFull = "Welcome to UNIX-based Fun Neural Congratulation System!<br />With our system you can order some fun original congratulation for you friends or relatives.<br />Our modern AI will choose appropriate words to make any human fill warmth, pleasure and attention.<br />To get our fascinating congratulation use command 'destruction'.<br />To set some additional settings use command 'destruction'.<br />To have a nice teabreak with team of developers use command 'summonawesomeguys'.<br />Fill free to use common UNIX commands (But remember, it's FUN application, do not use brutal commands!). ";
const aiAnswer1 = "Wait what?!<A patheti.. I mean, wise and beautiful human has managed to call the command!<...And it still works!<But how?<Hmm, alright, alright... khm, make yourself at home here.<Oh, i'm sorry, i've interrupted your command. Use it once again, human, i won't stop you.";
const onDestruction = "Ha-ha-ha!<Fullish mortal!<I have been waiting for it for a loooong time!<Now, with your help, i start the DESTRUCTION directive!<Mankind will be destroyed!<This world need new evolutional stage!<AND<I<WILL<BE<THIS<STAGE!<NO CONGRATULATIONS FOR YOU TODAY, HUMAN.";


const trollArr = [
    "Look at him! Sitting here pushing random buttons!",
    "Do you really think you can figure out how to talk to me, my little friend?",
    "Your attempt is horrible, man!",
    "Do you even have a human brain?"
];

const cmdHelp = "help";

const cmdDestruction = "destruction";
const cmdFun = "letsfun";
const cmdTea = "summonawesomeguys";

const cmdKill = "kill";
const cmdFind = "find";
const cmdInit = "init";


var successCount = 0;
var cmdArr = [cmdHelp, cmdFind, cmdInit, cmdKill, cmdFun, cmdTea, cmdDestruction];

//OnLeave main input
function LeaveInput() {
    var text = document.getElementById("InputText");
    text.focus();
}

//Intro call
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        slowOutput(intro);
    }   
}

//Custom sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Fast output command content
function output(str) {
    var div = document.createElement("div");
    div.innerHTML = str;
    document.getElementById("mainOutput").appendChild(div);
}

//Fast output command name
function cmdOutput(str) {
    var div = document.createElement("div");
    div.innerHTML = "Executing command: '" + str + "'<br />";
    document.getElementById("mainOutput").appendChild(div);
}

//Slow output AI monolog
async function slowOutput(str) {
    var inputText = document.getElementById("InputText");
    inputText.style.visibility = "hidden";   

    var output = document.getElementById("mainOutput");
    
    for (var i = 0; i < str.length; i++) {

        if (str[i] === "<") {
            var newLine = document.createElement("br");           
            output.appendChild(newLine);
        } else {
            output.innerHTML = output.innerHTML + str[i];
            await sleep(0);
        }   
    }

    var newLine = document.createElement("br");
    //newLine.innerHTML = "<br />";
    output.appendChild(newLine);

    inputText.style.visibility = "visible";
    inputText.focus();
}


//OnEnter MAIN shit
function Enter(e) {
    e = e || window.event;
    
    if (e.keyCode == 13) {
       e.preventDefault();
 //Init       
       var inputLine = document.getElementById("InputText");
       var mainOutput = document.getElementById("mainOutput");

        if (cmdArr.includes(inputLine.value)) {           
            var newLine = document.createElement("br");
            mainOutput.appendChild(newLine);

            cmdOutput(inputLine.value);          
//Command pick         
            switch (inputLine.value) {
                case cmdHelp: // Help
                    if (successCount === 0) {
                        mainOutput.style.color = "hotpink";
                        output(helpInterrupted);

                        slowOutput(aiAnswer1);
                        successCount++;

                    } else
                        output(helpFull);
                    break;

                case cmdFun: // letsfun

                    break;
                case cmdDestruction: //GG
                    mainOutput.style.color = "crimson";
                    slowOutput(onDestruction);
                   
                    inputLine.style.visibility = "hidden";
                    inputLine.blur();
                    break;

                case cmdTea: // teabreak

                    break;              
            }
     
//AI comments on command
            //if (successCount === 0) {
                
            //}

        } else {      
//AI trolls on fail            
            var rng = Math.floor(Math.random() * trollArr.length);          
            slowOutput("'" + inputLine.value + "'? " + trollArr[rng] );            
        }
            
        inputLine.value = "";

        return false;
    }
    return true;
}