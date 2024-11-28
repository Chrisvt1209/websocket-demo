export default (props) => {
    const updatedUsername = props.updatedUsername;
    const currentUsername = props.currentUsername;

    return (
        <div>
            <p>What is your username?</p>
            <input
                type="text"
                name="username"
                onChange={e => updatedUsername(e.target.value)}
                defaultValue={currentUsername}
            />
        </div>
    )
}