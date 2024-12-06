import UserCard from "./UserCard";

const UserList = ({users}) =>{
    return(
        <div>
            {users.map((user,index)=>(
                <UserCard key={index} name={user.name} email={user.email} />
            ))}
        </div>
    )
}


export default UserList