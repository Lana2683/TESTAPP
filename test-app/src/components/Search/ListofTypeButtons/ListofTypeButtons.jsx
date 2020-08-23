import React, { Component } from 'react'

class ListOfTypeButtons extends Component {
    render() {
        return (
            <div class="btn-group p-2" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary btn-sm">Album</button>
                <button type="button" class="btn btn-secondary btn-sm">Artist</button>
                <button type="button" class="btn btn-secondary btn-sm">Playlist</button>
                <button type="button" class="btn btn-secondary btn-sm">Playlist</button>
            </div>
        )
    }
}

export default ListOfTypeButtons;
