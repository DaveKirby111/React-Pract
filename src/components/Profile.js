function Profile(props) {

    const {fname, lname} = props;

    return <p>Name: {fname} {lname}
    {props.children}
    </p>;
}

export default Profile;