import "./ProfileCard.css"

function ProfileCard({name,title, bio }){
    return(
        <div className="profile">
            <h1>{name}</h1>
            <h4>{title}</h4>
            <p>{bio}</p>
        </div>
    )
}

export default ProfileCard;