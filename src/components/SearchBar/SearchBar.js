import React, { useState } from 'react'
import { Button, Checkbox, Container, Form, } from 'semantic-ui-react'
import './SearchBar.css'




export default function SearchBar(props) {

    const preventDefault = (event) => event.preventDefault();

    

    return (
        <Container  className='shrink-down bg-blur'>
            <Container className='shrink-down'>

                <Form inverted size='large'>
                    <Form.Field>
                        <label id='search-header'> Where can we take you tonight?</label>
                        <input onChange={props.onCityInputChange} value={props.city} name='city' placeholder='Search City Here!' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='Lets do a show afterwards' />
                    </Form.Field>

                    <Button primary type='submit' >Find Dinner!</Button>
                </Form>
            </Container>
        </Container>
    )
}
