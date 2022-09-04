import {contacts} from "./constants";
import {Wrapper, Block, Link, ColorBackground} from "./styles";

const Contacts = () => {
    return (
        <Wrapper>
            {
                contacts.map(contact => (
                    <Block key={contact.id} image={contact.image}>
                        <Link href={contact.link} target='_blank'>
                            <ColorBackground color={contact.color}>
                                {contact.icon}
                            </ColorBackground>
                        </Link>
                    </Block>
                ))
            }
        </Wrapper>
    )
}

export default Contacts;