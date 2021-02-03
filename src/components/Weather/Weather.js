import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function Weather() {
    return (
        <Card centered>
            <Card.Content>

                <Image floated='right' size='mini' src='https://place-puppy.com/100x100'></Image>
                <Card.Header textAlign='left'>Weather</Card.Header>
                <Card.Description textAlign='left'> weather outlook for date</Card.Description>
            </Card.Content>
        </Card>
    )
}
