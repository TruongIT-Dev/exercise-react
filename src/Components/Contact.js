import React from "react";
import { Button, Container, Icon, Select, TextInput, Textarea } from "react-materialize";

const handleSubmit = (e) => {
    e.preventDefault()
}



export default function Contact() {
    return (
        <Container>
            <h3>Contact us</h3>
            <form onSubmit={handleSubmit}>
                <TextInput id="TextInput-38" label="Your Name" />
                <TextInput id="TextInput-39" label="Your Phone" />
                <TextInput email id="TextInput-46" label="Email" validate />
                <Select id="Select-46" multiple={false} onChange={function noRefCheck() { }} value="">
                    <option disabled value="">
                        Choose your favourite nation
                    </option>
                    <option value="1">
                        England
                    </option>
                    <option value="2">
                        France
                    </option>
                    <option value="3">
                        Spain
                    </option>
                </Select>
                <Textarea icon={<Icon></Icon>} id="Textarea-28" label="Your Content" />
                <Button>Submit</Button>
            </form>
        </Container>
    )
}