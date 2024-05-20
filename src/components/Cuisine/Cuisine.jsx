// Cuisine.js
import React, { useState } from 'react';
import Card from './Card'
import PBM from '../../assets/PBM.jpg';
import PDP from '../../assets/PDP.jpg';
import PL from '../../assets/PL.jpg';
import MC from '../../assets/MC.jpg';
import MK from '../../assets/MK.jpg';
import MARG from '../../assets/MARG.jpg';
import MAC  from '../../assets/MAC.jpg';
import WSP from '../../assets/WSP.jpg';
import RSP from '../../assets/RSP.jpg';


const Indian = [
  { id: 1, name: "Paneer Butter Masala", Price: 300, image: PBM },
  { id: 2, name: "Paneer Do Pyaza", Price: 300, image: PDP },
  { id: 3, name: "Paneer Lababdaar", Price: 300, image: PL },
  { id: 4, name: "Mushroom Chilly", Price: 300, image: MC },
  { id: 5, name: "Mushroom Kadhai", Price: 300, image: MK }
];

const Italian = [
  { id: 1, name: "Margherita Pizza", Price: 300,image:MARG },
  { id: 2, name: "Cheese and Corn Pizza", Price: 300,image:MARG },
  { id: 3, name: "Mac and Cheese", Price: 300,image:MARG },
  { id: 4, name: "White Sauce Pasta", Price: 300 ,image:MARG},
  { id: 5, name: "Red Sauce Pasta", Price: 300,image:MARG }
];

const Continental = [
  { id: 1, name: "Crispy Calamari Rings", Price: 300 },
  { id: 2, name: "Stuffed Jacket Potatoes", Price: 300 },
  { id: 3, name: "Pancakes", Price: 300 },
  { id: 4, name: "Chicken Sandwich", Price: 300 },
  { id: 5, name: "Caesar Salad", Price: 300 }
];

const Chinese = [
  { id: 1, name: "Hakka Noodles", Price: 300 },
  { id: 2, name: "Veg Manchurian", Price: 300 },
  { id: 3, name: "Spring Rolls", Price: 300 },
  { id: 4, name: "Hot and Sour Soup", Price: 300 },
  { id: 5, name: "Fried Rice", Price: 300 }
];

const Cuisine = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('Indian');

  const getCuisineItems = () => {
    switch (selectedCuisine) {
      case 'Indian':
        return Indian;
      case 'Italian':
        return Italian;
      case 'Continental':
        return Continental;
      case 'Chinese':
        return Chinese;
      default:
        return [];
    }
  };

  return (
    <div className="bg-slate-700 flex">
      <div className="bg-slate-800 w-60 h-screen text-white text-4xl font-thin">
        <div className="pt-20 flex flex-col gap-8">
          <button className="hover:text-cyan-500" onClick={() => setSelectedCuisine('Indian')}>Indian</button>
          <button className="hover:text-cyan-500" onClick={() => setSelectedCuisine('Italian')}>Italian</button>
          <button className="hover:text-cyan-500" onClick={() => setSelectedCuisine('Continental')}>Continental</button>
          <button className="hover:text-cyan-500" onClick={() => setSelectedCuisine('Chinese')}>Chinese</button>
        </div>
        <button className="mt-52 ml-10 border w-40 h-20 hover:text-cyan-500">CART</button>
      </div>
      <div className="p-8 flex flex-wrap">
        {getCuisineItems().map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
