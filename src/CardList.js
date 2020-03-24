import React from 'react';
import Card from './Card';
import {robots} from './robots';

const CardList = ({robots}) =>{
    const cardComponent = robots.map((user, i) => {
       return <Card 
        key = {i} 
        id = {user.id} 
        name = {user.name} 
        email = {robots[i].email}
       />
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}
export default CardList;

// when we do a loop like we do in the map method we have to give a unique key  to each of 
// each of these elements otherswise if we want to remove or delete one of these elements react
// does not know which element you mean thats why may change the whole elements