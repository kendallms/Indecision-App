import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

// pull the state out of constructor 
// convert all 4 event handlers to class properties (arror funcs)
// delete the constructor 
// start with class properties and end with methods

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
         this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        } 

       this.setState((prevState) => (
           {options: prevState.options.concat(option)}) );
    }

    handleModalClose = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
        if (options) {
             this.setState(() => ({options: options}))
            }
        }
        catch(e){
            // Do nothing at all 
        };
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('saving data')
    }
    componentWillUnmount(){
        console.log('bye bye')
    }

    render(){
        const subtitle = "Helping you decide what the hell to do";
        return (
            <div className='container'>
             <Header subtitle={subtitle}/>
             <div>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <div className='widget'>
                    <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                    <AddOption 
                    handleAddOption={this.handleAddOption}
                    />
                </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleModalClose={this.handleModalClose}
                />
            </div>
        )
    };
}

IndecisionApp.defaultProps = {
    options: []
}

