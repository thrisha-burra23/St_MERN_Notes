function MsgBox({userName,textColor}){

    const styles={color:textColor}
return(
    <>
    <h1 style={styles}>Hello {userName}</h1>
    </>
)
}

export default MsgBox;