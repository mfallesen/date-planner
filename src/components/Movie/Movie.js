import React from 'react'
import { Card, Image, List } from 'semantic-ui-react'


export default function Movie() {
    return (
        <Card centered>
            <Image src='https://place-puppy.com/300x200'></Image>
            <Card.Header>Insert Movie Name Here</Card.Header>
            <Card.Content>
                <List>
                    <List.Item>
                        Movie Theater
                    </List.Item>
                    <List.Item>
                        Movie Times
                    </List.Item>

                </List>
            </Card.Content>
        </Card>
    )
}
