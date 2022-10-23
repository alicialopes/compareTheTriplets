process.stdin.resume();
process.stdin.setEncoding('utf-8');

var inputString  = "";
var inputString_array = "";
var currentline = 0;

process.stdin.on('data', function (data) {
    inputString += data;
});

process.stdin.on('end', function () {
    inputString_array = inputString.split("\n");
    
    main();    
});

function readLine() {
    return inputString_array[currentline++];
}

// codigo
function main() {
    var arrayAlice = readLine().split(' ');
    var arrayBob = readLine().split(' ');

    var alice0 = parseInt(arrayAlice[0]);
    var alice1 = parseInt(arrayAlice[1]);
    var alice2 = parseInt(arrayAlice[2]);
    var bob0 = parseInt(arrayBob[0]);
    var bob1 = parseInt(arrayBob[1]);
    var bob2 = parseInt(arrayBob[2]);
    
    var result = [0, 0];
    
    alice0 > bob0 ? result[0] += 1 : alice0 < bob0 ? result[1] += 1 : result[1] += 0;
    alice1 > bob1 ? result[0] += 1 : alice1 < bob1 ? result[1] += 1 : result[1] += 0;
    alice2 > bob2 ? result[0] += 1 : alice2 < bob2 ? result[1] += 1 : result[1] += 0;
            
    console.log(result[0] + " " + result[1]); 
}
