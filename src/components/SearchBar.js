import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onForSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onForSubmit} className="ui form">
                    <div className="field">
                        <input type="text" placeholder="Search for a video..." onChange={this.onInputChange} value={this.state.term} />
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBar;