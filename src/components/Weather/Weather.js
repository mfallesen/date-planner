import React from 'react'
import { Card, Image } from 'semantic-ui-react'



export default function Weather(props) {
    if (!props.weather.weather) {
        return null
    } 
    let weaIco = props.weather.weather[0].icon || '' 
    let weatherObj = props.weather

    const weatherIcon = `http://openweathermap.org/img/wn/${weaIco}@2x.png`
    return (
        <Card centered>
            <Card.Content>

                <Image floated='right' size='mini' src={weatherIcon}></Image>
                <Card.Header textAlign='left'>Current Weather in {props.city}</Card.Header>
                <Card.Description textAlign='center'>{weatherObj.weather[0].main}</Card.Description>
                <Card.Content textAlign='center'>{weatherObj.main.temp + ' °F'} </Card.Content>
            </Card.Content>
        </Card>
    )
}
