import NamedEventComponent from "./NamedEventComponent";

function Toolbar({onPlayMusic, onUpload}){
    return (
        <div>
            <NamedEventComponent onSmash={onPlayMusic}>
                playMovie
            </NamedEventComponent>
            <NamedEventComponent onSmash={onUpload}>
              Upload
            </NamedEventComponent>
        </div>
    )
}

export default Toolbar;