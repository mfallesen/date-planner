import React from 'react'
import { Card, CardContent, Icon, Image } from 'semantic-ui-react'
import GoogleMaps from '../GoogleMap/GoogleMap'


export default function Restaurant() {
    return (
        <Card centered>
            <Image src='https://place-puppy.com/300x300'></Image>
            <Card.Content>
                <h1 id="restaurant_name">Hello World</h1>

            </Card.Content>
            <Card.Description>

                <p id='hours'>Restaurant Hours</p>
                <p id='menu'>Restaurant Menu</p>
            </Card.Description>
            <Card.Content >

            <p id='address'>Restaurant Address</p>
            {/* <Image fluid src='https://place-puppy.com/300x150'></Image> */}
        <GoogleMaps></GoogleMaps>
            
            </Card.Content>




        </Card>




    )
}
