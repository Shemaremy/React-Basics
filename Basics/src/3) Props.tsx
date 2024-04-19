
function Toprops(props: { name: string }){                    // Specify the object type

    return(                                                   // props.name is like props a key helping us get the value of name
        <div>
            <h1>{props.name}</h1>                             
        </div>
    );
}
 
export default Toprops;