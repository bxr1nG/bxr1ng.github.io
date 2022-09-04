import {StandardComponentProps} from "./types";
import {StyledIconFactory} from "./styles";

const ContactIcon = ({icon}: StandardComponentProps) => {
    const StyledIcon = StyledIconFactory(icon);

    return (
        <StyledIcon/>
    )
}

export default ContactIcon