import React from 'react'
import { Card, Image } from 'semantic-ui-react'



export default function Restaurant(props) {


    return (
        <Card centered>
            <Card.Content>
                <h1 id="restaurant_name" >{props.restaurant.name}</h1>
            <Image src={props.restaurant.thumb}></Image>
            </Card.Content>
            <Card.Description>

                <p id='hours' >{props.restaurant.timings}</p>
                <p id='menu'><a href={props.restaurant.menu_url} rel='noreferrer noopener' target="_blank">Restaurant Menu</a></p>
                <p>Phone: <a href="tel:"{...props.restaurant.phone_numbers}>{props.restaurant.phone_numbers}</a></p>
            </Card.Description>
            <Card.Content >

            <p id='address'>{props.restaurant.location === undefined ? "No Address Found!" : props.restaurant.location.address}</p>
            
            </Card.Content>



        </Card>




    )
}
