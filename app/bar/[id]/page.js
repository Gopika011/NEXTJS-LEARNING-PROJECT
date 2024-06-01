import DrinksList from '@/components/drinksList';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

async function getDrink(id)
{
    const response = await fetch(`${url}${id}`);

    if(!response.ok){
      throw new Error("Failed to fetch a drink");
    }

    return response.json();
}


const DrinkPage =async ({params}) => {
  console.log(params.id); 
  const data = await getDrink(params.id);

  const name = data?.drinks[0].strDrink;
  const instruct = data?.drinks[0].strInstructions;
  const thumb = data?.drinks[0].strDrinkThumb;
  console.log(name); 

  return (
    <div>
      <Link href="/bar"><button className='btn btn-primary px-5'>Back</button></Link>

      <h1 className='text-2xl my-10'>{name}</h1>
      <Image width={300} height={300} src={thumb} className='w-48 h-48 rounded shadow-lg mb-8'></Image>
      <p>{instruct}</p>
    </div>
  )
}

export default DrinkPage


//[id] - dynamic pages in bar


//fetch id with the id in the url of the page


//id of the url page is fetched by params - params.id


/*
const name = data?.drinks[0].strDrink;

drinks is the object type

it has arrays of objects
take first array since a specific drink is being searched so only one array element
take strDrink object type to get the name
*/