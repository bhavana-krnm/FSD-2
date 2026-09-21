import React, { useState, useEffect } from "react";

function UserList() {
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {                      
                setError(err.message);
                setLoading(false);
            });
    }, []);
    return (
        <div style={{ padding: "20px" }}>
            <h2>User List from API</h2>

            {loading && <h3>Loading...</h3>}

            {error && <h3>{error}</h3>}

            <div style={{textAlign: "center"}}>
                <table border="1" cellPadding="10" cellSpacing="0" style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;