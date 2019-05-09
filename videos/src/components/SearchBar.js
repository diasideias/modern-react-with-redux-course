import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = event => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = event => {
        // para prevenir que o formulário submeta da forma padrão (com um enter)
        event.preventDefault()

        //TODO: make sure we call
        // callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                   <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                   </div>
                </form>
            </div>
        )
    }
}

export default SearchBar