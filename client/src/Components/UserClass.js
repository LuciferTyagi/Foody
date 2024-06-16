import React from "react";

class UserClass extends React.Component{


    constructor(props){
        super(props);
    
        this.state = {

            userInfo:{
                name:"XYZ",
                location:"Default",
                // avatar_url:"https://image"
            }
         };
    }

    async componentDidMount(){
        const data =  await fetch("https://api.github.com/users/LuciferTyagi");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);
    
    }

    render() {
        // const {name , location} = this.props;
        const {name ,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h2>Name : {this.props.name }</h2> */}

                         {/* <h2>Name : {name }</h2> */}
                {/* <h2>Location : {location}</h2> */}
                
                <img src={avatar_url}></img>
                <h2>Name:{name}</h2>
            </div>
        )
        
    }
}

export default UserClass;