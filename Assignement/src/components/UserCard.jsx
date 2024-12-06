const UserCard = ({ name, email }) => {
    return (
      <div className="user-card">
        <h1 className="user-name">{name}</h1>
        <p className="user-email">{email}</p>
      </div>
    );
  };
  
  
  export default UserCard