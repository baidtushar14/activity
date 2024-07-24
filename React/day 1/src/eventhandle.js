function EventHandle(){
    const handleclick=()=>{
        alert("Button is clicker");
        console.log("Button Clicked");
    }
    return(
        <button onClick={handleclick}>Click Me</button>
    );
}
export default EventHandle;