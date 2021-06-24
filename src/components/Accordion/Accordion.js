import { accordionData } from "./accordionData";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
    Container,
    SubContainer,
    AccordionSection,
    AccordionContainer,
    AccordionWrap,
    DropDown,
} from "./styledAccordion";
import { useState } from "react";

const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            // if clicked item is already, active then close it.
            return setClicked(null);
        };

        setClicked(index);
    };

    return (
        <Container>
            <SubContainer>
                <IconContext.Provider value={{
                    color: '#00FFB9',
                    size: '25px'
                }}>
                    <AccordionSection>
                        <AccordionContainer>
                            {accordionData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <AccordionWrap
                                            onClick={() => toggle(index)}
                                        >
                                            <h1>{item.title}</h1>
                                            <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                        </AccordionWrap>
                                        {clicked === index ? (
                                            <DropDown>
                                                <p>{item.desc}</p>
                                            </DropDown>
                                        ) : (
                                            null
                                        )}
                                    </div>
                                )
                            })}
                        </AccordionContainer>
                    </AccordionSection>
                </IconContext.Provider>
            </SubContainer>
        </Container>
    );
};

export default Accordion;
