import React, { useState } from 'react';

const Table = ({ children }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Just a table</th>
                </tr>
            </thead>
            {children}
        </table>
    );
}

const CollapsibleTableBody = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <tbody>
            {children(collapsed, toggleCollapse, '321321')}
        </tbody>
    );
}

const FunctionAsChildren = () => {
    return (
        <Table>
            <CollapsibleTableBody>
                {(collapsed, toggleCollapse, test) => {
                    console.log(test)
                    if (collapsed) {
                        return (
                            <tr>
                                <td>
                                    <button onClick={toggleCollapse}>Open</button>
                                </td>
                            </tr>
                        );
                    } else {
                        return (
                            <tr>
                                <td>
                                    <button onClick={toggleCollapse}>Closed</button>
                                </td>
                                <td>CollapsedContent</td>
                            </tr>
                        );
                    }
                }}
            </CollapsibleTableBody>
        </Table>
    )
}

export { FunctionAsChildren }
