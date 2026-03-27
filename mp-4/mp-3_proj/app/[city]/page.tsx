"use client";
import styled from "styled-components"
import {useParams} from "next/navigation";
import useSWR from "swr";

import {Weather} from "@/app/interfaces/weather"
import WeatherCard from "../components/WeatherCard"
const WeatherContentWrapper = styled.main`
    width: 80vw;
    margin: auto;
    background-color: #affbf0;
    min-height: 100vw;
    display:block;
    justify-content: space-between;
`;
const StyledDescription = styled.div`font-family: "Dubai Medium"`
const CityName = styled.h1`
    color: #040000;
    font-size: 2vw;
    margin: 0 auto;
    text-align: center;
    font-family: "Segoe UI Black", Tahoma, Geneva, Verdana, sans-serif;
`;

const WeatherCardsContainer = styled.div`

    background: #a8a4a4;
    border-radius: 20px;
    padding: 8%;
    width: 100%;
    max-width: 480px;
    margin-bottom: 1rem;
    margin: 0 auto;
    margin-top: 8vh;
    margin-bottom: 12vh;
    
`;
const StyledSecond = styled.div` display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;`










const StyledWindSpeed =styled.div`
    background: #ffffff;
    border-radius: 16px;
    padding: 5%;
    width: 30%;
    height:20%;

    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    font-family: "Dubai Medium";`

const StyledHumidity = styled.div `
    background: #ffffff;
    border-radius: 16px;
   
    padding: 5%;
    width: 30%;
    height:20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;

    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    font-family: "Dubai Medium";`

const StyledImage = styled.img`
width:30%;
    
`
const StyledDegrees = styled.div`

font-family: "Segoe UI Black", Tahoma, Geneva, Verdana, sans-serif;
font-size: 3vw;`

const StyledRow = styled.div`
    display: flex;
    align-items: center;
    gap: 3%;
`
export default function MyPage() {
    const params = useParams();


    const { data, error } = useSWR(
        `/api/WeatherData?city=${params.city}`,
        (url) => fetch(url).then((res) => res.json())
    );
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    const weather: Weather = mapApiToWeather(data);

    return(<WeatherContentWrapper><CityName>{params.city}</CityName>
        <CityName>{weather.datetime }</CityName>
        <WeatherCardsContainer>
            <StyledRow>

        <StyledImage src = {`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}></StyledImage>
        <StyledDegrees>{weather.temperature}</StyledDegrees>
            <StyledDescription>{weather.description}</StyledDescription>

        </StyledRow>

        </WeatherCardsContainer>
        <StyledSecond>
            <StyledHumidity><StyledDescription>Humidity</StyledDescription> {weather.humidity}</StyledHumidity>
            <StyledWindSpeed><StyledDescription>WindSpeed</StyledDescription> {weather.windSpeed}</StyledWindSpeed>
            <StyledWindSpeed><StyledDescription>Feels Like</StyledDescription>{weather.feels_like}</StyledWindSpeed>

        </StyledSecond>


    </WeatherContentWrapper>);

}

export function mapApiToWeather(data: any): Weather {

        if(!data?.weather?.[0]){
            throw new Error("Weather is missing")
        }
return(
        {
            city: data.name,
            weatherId: data.weather[0]?.id || 0,
            humidity: data.main?.humidity || 0,
            windSpeed: data.wind?.speed || 0,
            datetime: new Date(data.dt * 1000).toLocaleString(),
            temperature: data.main?.temp  || 0,
            description: data.weather[0]?.description || "",
            conditions: data.main?.temp_min || 0,
            icon: data.weather[0]?.icon || "",
            feels_like: data.main?.feels_like || 0,


        });
}

