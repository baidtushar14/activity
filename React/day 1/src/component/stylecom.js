import './mystyle.css'

const myStyle = {
    'width': '200px',
    'height': '200px',
    'backgroundColor': 'red'
}
function Style() {
    const result=76;
    return (
        <>
            <div style={myStyle}>
                This is style.js file
            </div>
            <div className='container'>
            </div>
            <div style={{backgroundColor:'green',textAlign:'center'}}>
                Inline Testiing
            </div>
            <h1 style={{color: result>35?'green':'red'}}>Result: {result}</h1>
        </>
    )
}
export default Style;