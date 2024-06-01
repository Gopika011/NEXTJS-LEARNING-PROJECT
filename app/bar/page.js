import DrinksList from "@/components/drinksList";
import React from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

export default async function Bar()
{
    await new Promise((resolve) => setTimeout(resolve,1000));
    const response = await fetch(url);

    if(!response.ok)
    {
        throw new Error("failed to fetch data");
    }

    const data = await response.json();
    //console.log(data);
    //console.log("hi");
    return (
        <div>
            <DrinksList drinks={data.drinks}></DrinksList>
        </div>
    )
}