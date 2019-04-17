import React, { Component } from 'react';


class MovieForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie : "",
            url : "",
            comment : ""
        }; 
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            movie: event.target.movie,
            url : event.target.url,
            comment : event.target.comment
        });
    }
    submitForm(e){
        e.preventDefault();
        const config = {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(url), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
        }
            const url =  "http://campus-bordeaux.ovh:3001/api/quests/movies/";

            fetch(url,config) 
            .then(res => res.json())
             .then(res => {
                 if (res.error) {
                     alert(res.error);
                 } else {
                     alert(`Message alerte film ${res}`)
                 }
             }).catch(e => {
                 console.error(e);
                 alert(`Erreur lors de l\'ajout d\'un jjjjemggggployé`);
             });
    }


    render() {
        return ( 
            <div className="Form">
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Your favorite movie</legend>
                            <label htmlFor="movie">Favorite movie </label>
                            <input 
                            type="text"
                            id="movie"
                            value={this.state.movie}
                            onChange={this.handleChange}
                            />
                            <label htmlFor="movie"> URL </label>
                            <input 
                            type="text"
                            id="url"
                            value={this.state.url}
                            onChange={this.handleChange}
                            />
                            <label htmlFor="movie">Comment </label>
                            <textarea 
                            type="text"
                            id="comment"
                            cols="40"
                            value={this.state.comment}
                            onChange={this.handleChange}
                            />
                            <input type="submit" value="Send" />
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default MovieForm;