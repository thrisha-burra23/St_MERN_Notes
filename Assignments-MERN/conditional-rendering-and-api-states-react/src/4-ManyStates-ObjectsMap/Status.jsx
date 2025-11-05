import StatusView from "./StatusViews"

const Status=()=>{

  let  data="hello from data";
    return <StatusView status="ready"  data={data}/>
}

export default Status;