
const EmailBlock = (props) => {
    let formatedHREF = "mailto:" + props.email;
    return (
        <a className="user-emai" href={formatedHREF}>{props.email}</a>
    );
};

export default EmailBlock;
