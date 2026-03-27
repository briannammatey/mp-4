import styled from "styled-components";
import{Weather} from "@/app/interfaces/weather";
export default function WeatherCard(props: Weather){

    return (
        <div>
        <h2>{props.datetime}</h2>
        <h2>{props.city}</h2>
            <h2>{props.temperature}</h2>
            <h2>{props.datetime}</h2>
            <h2>{props.temperature}</h2>
            <h2>{props.windSpeed}</h2>
            <h2>{props.weatherId}</h2>
            <h2>{props.description}</h2>

            </div>
    )
}