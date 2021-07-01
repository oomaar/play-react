import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import {
    Container,
    SubContainer,
    Section,
    List,
    Item,
    Link,
} from "./styledHover";

const Hover = () => {
    return (
        <Container>
            <SubContainer>
                <Section>
                    <List>
                        <Item>
                            <Link className="facebook" href="#"><FaFacebookF /></Link>
                        </Item>
                        <Item>
                            <Link className="instagram" href="#"><FiInstagram /></Link>
                        </Item>
                        <Item>
                            <Link className="github" href="#"><AiFillGithub /></Link>
                        </Item>
                        <Item>
                            <Link className="twitter" href="#"><AiOutlineTwitter /></Link>
                        </Item>
                    </List>
                </Section>
            </SubContainer>
        </Container>
    );
};

export default Hover;
