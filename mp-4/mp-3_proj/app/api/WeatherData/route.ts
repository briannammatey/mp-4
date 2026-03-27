import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const WEATHER_KEY = process.env.API_KEY;

export async function GET(request: Request): Promise<NextResponse> {
    console.log("API KEY:", process.env.API_KEY ? "exists" : "UNDEFINED");

    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    if (!city) {
        return NextResponse.json({ error: "No [city] provided" }, { status: 400 });
    }

    let geoData;
    try {
        geoData = await getGeoData(city);
    } catch (err: any) {
        return NextResponse.json({ error: "Lost Connection"}, { status: 500 });
    }

    if (!geoData || geoData.length < 1) {
        return NextResponse.json({ error: "No [city] found" }, { status: 400 });
    }

    const { lat, lon } = geoData[0];

    let weatherData;
    try {
        weatherData = await getWeatherData(lat, lon);
    } catch (err: any) {
        return NextResponse.json({ error: "Lost Connection" }, { status: 500 });
    }

    return NextResponse.json(weatherData);
}

async function getGeoData(city: string) {
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_KEY}`);
    if (res.status !== 200) throw new Error("Failed to fetch geo data");
    return res.json();
}

async function getWeatherData(lat: number, lon: number) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=imperial`);
    if (res.status !== 200) throw new Error("Failed to fetch weather data");
    return res.json();
}