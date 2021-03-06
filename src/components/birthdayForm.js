import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import Clock from './clock';

class BirthdayForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            formCompleted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleGenerate= this.handleGenerate.bind(this);
        this.handleChangeDate=this.handleChangeDate.bind(this);   

    }

    handleChange(date) {
        this.setState({
        startDate: date 
        });
    }

    handleGenerate(event) {
        this.setState({
            formCompleted: true
        })
        event.preventDefault();
   }

   handleChangeDate() {
    this.setState({
        formCompleted: false
    })
   }



    render() {
        return (
            <form onSubmit={this.handleGenerate} className="birthday-container">
                {
                    this.state.formCompleted ?
                    <div className="clock-container">
                        <Clock birthdayFormState={this.state}/>
                        <a className="change-date" onClick={this.handleChangeDate}>Change Date</a>


                    </div>
                    :
                    <div className="date-picker-container">
                        <Datepicker className="date-picker"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        />
                        <div className="submit-container">
                        <input type="submit" value="Generate Countdown" />
                        </div>
                    </div>
                }
                
            </form>
        );
     
} 
}

export default BirthdayForm;