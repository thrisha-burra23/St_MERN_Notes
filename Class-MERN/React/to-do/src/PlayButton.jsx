import ButtonProps from "./ButtonProps";

function PlayButton({message}){

    function handleClick(){
        alert("button Clicked......")
    }

    return(
        <>
            <ButtonProps onclick={handleClick} message={message} />
        </>
    )
}

export default PlayButton;