import {Wrapper, Section, Title, ColorizedTitle} from "./styles";
import BubbleBackground from "../BubbleBackground/BubbleBackground";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import Contacts from "../Contacts/Contacts";

const App = () => {
    return (
        <Wrapper>
            <Section>
                <BubbleBackground/>
                <ParticlesBackground/>
                <Title>Hello, I'm <ColorizedTitle as='span'>Daniil Voshchuk</ColorizedTitle>.
                    <br/>
                    I'm a frontend developer.</Title>
            </Section>
            <Section>
                <Contacts/>
            </Section>
            <Section>Third</Section>
            <Section>Fourth</Section>
            <Section>Fifth</Section>
        </Wrapper>
    );
}

export default App;
