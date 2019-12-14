import React, { Component } from 'react';

class HideableText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
        }
    }

    toggleIsHidden = () => {
        this.setState( (currentState) => ({
            isHidden: !currentState.isHidden
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={() => this.toggleIsHidden()}>Toggle</button>
                    {!this.state.isHidden && this.props.text}
                </div>
            </React.Fragment>
        );
    }
}

export default HideableText;