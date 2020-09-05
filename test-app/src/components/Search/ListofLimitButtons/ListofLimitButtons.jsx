import React, { Component } from 'react'

class ListofLimitButtons extends Component {
    render() {
        return (
            <div class="btn-group p-2" role="group">
                <button type="button" class="btn btn-primary btn-sm">20</button>
                <button type="button" class="btn btn-primary btn-sm">30</button>
                <button type="button" class="btn btn-primary btn-sm">40</button>
                <button type="button" class="btn btn-primary btn-sm">50</button>
            </div>
        )
    }
}

export default ListofLimitButtons;
