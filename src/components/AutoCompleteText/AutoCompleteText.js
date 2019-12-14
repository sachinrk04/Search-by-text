import React, { Component } from 'react';
import './AutoCompleteText.css';

class AutoCompleteText extends Component {
    constructor(props) {
        super(props);
        this.items = [
            'Sachin',
            'Rishabh',
            'Sudeep',
            'Ram',
            'Mohan'
        ];
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v)); 
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected = (value) => {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }));
    }

    renderSuggestions = () => {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map(item => <li onClick={() => this.suggestionSelected(item)} key={item}>{item}</li>)}
            </ul>
        )
    }

    render() {
        const { text } = this.state;
        return (
            <React.Fragment>
                <div className="AutoCompleteText">
                    {/* <input onChange={(e) => console.log(e.target.value)} type="text" /> */}
                    <input value={text} onChange={this.onTextChanged} type="text" />
                    {/* <ul>
                        {this.items.map(item => <li key={item }>{item}</li>)}
                    </ul> */}
                    {this.renderSuggestions()}
                </div>
            </React.Fragment>
        );
    }
}

export default AutoCompleteText;