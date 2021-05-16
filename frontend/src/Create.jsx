import React from "react";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstname: '', lastname:'', career:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit(event) {

        event.preventDefault();

        fetch("http://localhost:8052/save", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credentials": "true",
                "Content-Type": "application/json",
                "Origin":"*"
            },
            body: JSON.stringify({
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                career: this.state.career
            })
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                alert(JSON.stringify(response));
            });

        event.target.reset();
        return false;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name: <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Last Name: <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Career: <input type="text" name="career" value={this.state.career} onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Save"/>
                <br/>
                <a href="/List">List Bilyoners</a>
            </form>

        );
    }
}

export default Create;  