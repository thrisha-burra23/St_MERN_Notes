import { Component } from "react";

class TimerApp extends Component{
    constructor(){
        super();
        this.state={
            seconds:0,
            isLoading:true,
            error:"",
             intervalId:null,
             data:[],
             isDataEmpty:false,
             userName:"Thrisha"

        }
    }

    componentDidMount(){
        console.log("Componet mounted successfully");
        this.intervalId=setInterval(function(){
            this.setState({seconds:this.state.seconds+1})
        }.bind(this),1000)
        
    }

    componentDidUpdate(prevProps,prevState){
if(prevState.isLoading != this.state.isLoading){
    console.log("State changed......");
    
}
    }

    componentWillUnmount(){
        // cleanup

        clearInterval(this.intervalId)
    }

    render(){
        return(
            <>
            <h1>Timer Starts:{this.state.seconds}</h1>
            {this.state.isLoading && <p>Loading......</p>}
            {this.state.isDataEmpty && <p>DAta is empty!!</p>}
            </>
        )
    }
}

