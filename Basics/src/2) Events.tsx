function A(){
    alert("You clicked blue");
}

function Click(){

    return(
        <button onClick={A}>Events</button>            // Means when the button is clicked, A function will be called
    );
}


export default Click;
