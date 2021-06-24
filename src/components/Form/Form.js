import { useForm } from '@formspree/react';
// import { ValidationError } from '@formspree/react';
import {
    Container,
    SubContainer,
    FormForm,
    FormGroup,
    FormLabel,
    FormInput,
    FormTextareaGroup,
    TextAreaLabel,
    FormTextArea,
    FormSubmit,
} from "./styledForm";

const Form = () => {
    const [state, handleSubmit] = useForm("xoqylqqb");

    const formStructure = () => {
        return (
            <SubContainer>
                {/* <FormForm action="https://formspree.io/f/xoqylqqb" method="POST"> */}
                <FormForm onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormInput type="text" id="firstName" name="firstName" required />
                        <FormLabel htmlFor="firstName"><span>First Name</span></FormLabel>
                    </FormGroup>
                    <FormGroup>
                        <FormInput type="text" id="lastName" name="lastName" required />
                        <FormLabel htmlFor="lastName"><span>Last Name</span></FormLabel>
                    </FormGroup>
                    <FormGroup>
                        <FormInput type="email" id="email" name="email" required />
                        <FormLabel htmlFor="email"><span>Email</span></FormLabel>
                    </FormGroup>
                    <FormTextareaGroup>
                        <FormTextArea name="message" id="message" cols="30" rows="10" required></FormTextArea>
                        <TextAreaLabel htmlFor="message"><span>Message</span></TextAreaLabel>
                    </FormTextareaGroup>

                    <FormSubmit type="submit" disabled={state.submitting}>Submit</FormSubmit>
                </FormForm>
            </SubContainer>
        );
    }

    if (state.succeeded) {
        return (
            <>
                {formStructure()}
                <p>Thanks for joining!</p>
            </>
        );
    };

    return (
        <Container>
            {formStructure()}
        </Container>
    );
};

export default Form;
