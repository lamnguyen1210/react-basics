import React, { useState } from 'react';

// 1. The list and items are static–they are not computed and do not change;
// 2. The items in the list have no ids;
// 3. The list is never reordered or filtered.
// When all of them are met, you may safely use the index as a key.

const Item = (props) => {
    return (
        <div className="form-group">
            <label className="col-xs-4 control-label">{props.name}</label>
            <div className="col-xs-8">
                <input type='text' className='form-control' />
            </div>
        </div>
    )
}

export const ItemKey = () => {
    const [list, setList] = useState([
        { name: 'Foo1444610101010', id: 1444610101010 },
        { name: 'Bar1444600000000', id: 1444600000000 }
    ]);

    const userInput = () => {
        const firstItems = Array.from(document.querySelectorAll('.form-group:first-child input'));
        firstItems.forEach((item) => item.value = 'It is ' + (new Date()).toTimeString())
    }

    const addItem = () => {
        const id = +new Date();
        setList([{ name: 'Baz' + id, id }, ...list])
    }

    return (
        <div>
            <b>How to use: </b>
                First write something in the inputs
                (or <button onClick={userInput}>simulate it</button>).
                Then hit <em>Add item</em> and see what happens…
            <hr />
            <button className='btn btn-primary' onClick={addItem}><b>Add item</b> to the beginning of the list</button>
            <h3>Dangerous <code>key=index</code></h3>
            <form>
                {list.map((todo, index) =>
                    <Item {...todo}
                        key={index}
                    />
                )}
            </form>
            <h3>Better <code>key=id</code></h3>
            <form>
                {list.map((todo) =>
                    <Item {...todo}
                        key={todo.id} />
                )}
            </form>
        </div>
    )
}
