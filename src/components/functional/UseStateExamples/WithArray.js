import React from 'react';

export const WithArray = () => {
    const [people, setPeople] = React.useState([
        { id: 1, name: 'john' },
        { id: 2, name: 'peter' },
        { id: 3, name: 'susan' },
        { id: 4, name: 'anna' },
    ]);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    return (
        <>
            {
                people.map((person) => {
                    const { id, name } = person;
                    return (
                        <div key={id} className='d-flex mb-2'>
                            <h4 className="mr-3">{name}</h4>
                            <button onClick={() => removeItem(id)}>X</button>
                        </div>
                    );
                })
            }
            <button className="mt-3" onClick={() => setPeople([])}>
                clear items
            </button>
        </>
    );
};
