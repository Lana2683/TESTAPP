import React, { Component } from 'react'

class SearchField extends Component {
    render() {
        return (
            <div className="p-2">
                <input className="form-control-sm w-100" type="text" placeholder="Find something..." />
            </div>
        )
    }
}

export default SearchField;
