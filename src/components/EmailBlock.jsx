
const EmailBlock = (props) => {
    let formatedHREF = "mailto:" + props.email;
    return (
        <a href={formatedHREF}>{props.email}</a>
    );
};

export default EmailBlock;
