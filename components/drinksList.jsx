import Link from "next/link";
import React from "react";
import Image from "next/image";

const DrinksList = ({ drinks }) => {
  return (
    <div>
      {/*<ul className="menu menu-vertical">*/}
      <ul className="grid sm:grid-cols-2 gap-6 mt-6">
        {drinks?.map((drink) => (
          <li key={drink.idDrink}>
            <Link href={`/bar/${drink.idDrink}`}>
              <div className="relative w-60 h-60 mb-4">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="rounded-md object-cover"
                ></Image>
              </div>

              {drink.strDrink}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinksList;

//if you click on any of the list it will get rerouted to the id in bar - dynamic
//url - bar/id
