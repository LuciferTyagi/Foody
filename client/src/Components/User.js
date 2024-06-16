const User =  (props) =>{
    return (
        <div className="user-card">
            <h2>Name : {props.name}</h2>
            <h2>Location : {props.location}</h2>
        </div>
    )
}


export default User;