import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment'

class BirthdayForm extends Component {
    
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleGenerate= this.handleGenerate.bind(this)
        this.renderStuff= this.renderStuff.bind(this)

        this.state = {
            startDate: moment(),
            formCompleted: false
        }


        

    }

    handleChange(date) {
        this.setState({
        startDate: date 
        });
    }

    handleGenerate() {
        this.setState({
            formCompleted: true
        })
   }

   renderStuff() {
       if(this.state.formCompleted) {
            return (
                <h2>
                    this is only appearing if the form haas been completed. show countdowntimer
                        
                </h2>
            )
       } else {
           return (<h2>for has not been completed don' show countdown timer</h2>)
       }
   }

    render() {
        return (
            <div>
                <h1>Birthday Form Component!</h1>
                <Datepicker 
                selected={this.startDate}
                onChange={this.handleChange}
                />
                <a onClick={this.handleGenerate}>Generate Countdown </a>
                {
                    this.renderStuff()
                }
            </div>
        );
     
} 
}

export default BirthdayForm;