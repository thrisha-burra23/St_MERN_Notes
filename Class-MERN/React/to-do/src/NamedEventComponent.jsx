 function NamedEventComponent({onSmash,children}){
return(
    <button onClick={onSmash}>
        {children}
    </button>
)
}

export default NamedEventComponent;