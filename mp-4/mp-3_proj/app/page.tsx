"use client";
import Image from "next/image";
import PostPreviews from "@/components/PostPreview";
import styled from "styled-components";
import Link from "next/link";
import {useState} from "react";
const StyledBackground = styled.div
` min-height: 100vh;
    background-color: #d1e0fb;`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #b7cdf3;
    min-height: 30vh;
   

`

const StyledText = styled.h1`
font-family: "Century Gothic",serif;
    font-weight:bold;
    margin: 0 auto; 
    font-size:25px;
    margin-bottom: 2%;
    
    
`
const StyledDescription = styled.p`

    font-size: 20px;
    margin-bottom: 2%;
`
const StyledInput = styled.input`
border-width:2px;
    width:20%;
    height:90%;
    margin-bottom: 2%;
`
const StyledLink = styled(Link)`
    font-family: "Segoe UI Semibold",serif;
    font-size: 20px;
    
`
const StyledBorder = styled.div`
    border-width: thick;
    border-style: solid;
    color: #bc16c5;
    padding:1%;
`



export default function Home() {
    const [city, setCity] = useState("");
  return (
      <StyledBackground>
      <StyledDiv>
          <StyledText>Welcome to your dynamic Weather Application </StyledText>
          <StyledDescription>Enter a city name below to get the current weather</StyledDescription>
          <StyledInput type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)}/>
          <StyledBorder><StyledLink href={`/${city}`}>Get Weather</StyledLink></StyledBorder>
      </StyledDiv>
      </StyledBackground>
  );
}