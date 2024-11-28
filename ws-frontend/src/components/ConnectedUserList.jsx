export default (props) => {
    const users = props.users;
    return(
        <div className="container">
            <h1 className="display-4">Connected Users</h1>
            {users.map(username => (
                <div key={username}>
                    <p className="lead">{username}</p>
                </div>
            ))}
        </div>
    );
};