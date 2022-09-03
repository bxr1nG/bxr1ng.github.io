import {Wrapper, Section, Title, ColorizedTitle} from "./styles";
import BubbleBackground from "../BubbleBackground/BubbleBackground";

const App = () => {
    return (
        <Wrapper>
            <Section>
                <BubbleBackground/>
                <Title>Hello, I'm <ColorizedTitle as='span'>Daniil Voshchuk</ColorizedTitle>.
                    <br/>
                    I'm a frontend developer.</Title>
            </Section>
            <Section>Second</Section>
            <Section>Third</Section>
            <Section>Fourth</Section>
            <Section>Fifth</Section>
        </Wrapper>
    );
}

export default App;
