import React, { Component } from 'react';
import shortid from 'shortid';
class  Form extends Component {
    state = {
        name: '',
        tag: '',
        experionce: 'junior',
        licence: false,
    };    
      
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.resetForm()
    };
    
    handleChange = (e) => {
        const { name, value } = e.currentTarget
        this.setState({
            [name]: value
        })
    };

    resetForm = () => {
        this.setState({ name: '', tag: '', })
    };
    handleLicenceChange = e => {
        this.setState({licence:e.currentTarget.checked})
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label>
          Имя
           <input          
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>
         <label>
          Прозвище
           <input          
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          ></input>
        </label>
        <p>Ваш уровень:</p>
        <label>            
            <input
                type="radio"
                name="experionce"
                value="junior"
                onChange={this.handleChange}
                checked={this.state.experionce==='junior'}
            />Junior
        </label>    
        <label>            
            <input
                type="radio"
                name="experionce"
                value="middle"
                onChange={this.handleChange}
                checked={this.state.experionce==='middle'}
            />Middle
        </label> 
        <label>            
            <input
                type="radio"
                name="experionce"
                value="senior"
                onChange={this.handleChange}
                checked={this.state.experionce==='senior'}
            />Senior
        </label> 
        <label>
            <input 
            type="checkbox" 
            name="licence" 
            checked={this.state.licence} 
            onChange={this.handleLicenceChange}
            /> Согласен с условием
        </label>
        <button type="submit" disabled={!this.state.licence} >Отправить</button>
      </form>
        );
    }
}

export default Form;