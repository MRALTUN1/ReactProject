import React from "react";

class List extends React.Component {


    constructor(props) {
        super(props);
        this.state = {contents: []}
    }

    componentDidMount() {
        const apiUrl = 'http://localhost:8052/list';
        fetch(apiUrl, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credentials": "true",
                "Content-Type": "application/json",
                "Origin":"*"
            }
        })
            .then((response) => response.json())
            .then(data =>
                this.setState({
                    contents: data
                })
            )
    }
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Career</th>
                </tr>
                </thead>
                <tbody>
                {this.state.contents && this.state.contents.map(c => {
                    return <tr>
                        <td>{c.firstName}</td>
                        <td>{c.lastName}</td>
                        <td>{c.career}</td>
                    </tr>
                })}
                </tbody>
                <a href="/Create">Add Bilyoner</a>

            </table>

        );
    }
}
export default List;