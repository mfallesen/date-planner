import React from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'




export default function SearchBar(props) {

    return (
        <Container>

            <Form size='large'>
                <Form.Field>
                    <label> Where can we take you tonight?</label>
                    <input placeholder='Search City Here!' />
                    <Checkbox label='Lets do a show afterwards'/>
                </Form.Field>
                
                <Button primary type='submit' >Find Dinner!</Button>
            </Form>
        </Container>
    )
}