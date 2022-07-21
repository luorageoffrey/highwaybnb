


/* function validate(){
    if(){

    }
} */
let nts = document.getElementById('notes');
function validate() {
    if (nts.value === NaN) {
        alert('Please provide us with some notes')
    }
    else {
        alert("Submitted succesfully.")
    }
}


