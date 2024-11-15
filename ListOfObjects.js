import React from 'react';

function ListOfObjects(props) {
    const employees=[
        {
            id:123,
            name:'sandeep',
            address:'hyderabad',
            age:28,
            salary:2000,
        },
        {
            id:124,
            name:'suresh',
            address:'banglore',
            age:32,
            salary:4000,
        },
        {
            id:125,
            name:'mahesh',
            address:'delhi',
            age:29,
            salary:9000,
        },
        {
            id:126,
            name:'rajesh',
            address:'mumbai',
            age:31,
            salary:7000,
        }
]
    const personsList=employees.map(person=><h2 key={person.id}>{person.name}  {person.age} {person.address} {person.salary}</h2>)
    return (
        <div>
           <h1>Employees Info:</h1> {personsList}
        </div>
    );
}

export default ListOfObjects;