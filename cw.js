function main() {
    //problem1();
    problem2();
    //problem3();

}

function problem1() {

    let input= prompt("Enter a sentence.");
    let words= input.split(" ");

    function evryOtherword() {

            for (var i=0; i<words.length;i++){
                let w = words[i];
                if (i%2===0){
                   w = w.toUpperCase();

                }
                console.log(w);

            }

         }


       evryOtherword();


}

function problem2() {

    let input2= prompt("Enter a word in all caps or all lowercase.");

    function opposite(userInput) {
        if (userInput===userInput.toLowerCase()){
            console.log(userInput.toUpperCase())
        }
        else if (userInput===userInput.toUpperCase()){
            console.log(userInput.toLowerCase())
        }
        else {
            console.log("i said all caps or all lowercase!!")
        }

    }
    opposite(input2);
}


function problem3() {



}

main();