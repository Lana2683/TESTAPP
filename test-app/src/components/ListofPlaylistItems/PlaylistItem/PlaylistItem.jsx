import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlaylistItem extends Component {
    render() {
        const {playList} = this.props;

        return (
            <div className="card mr-1 pb-1 text-left">
                <img class="card-img-top" src={playList.img} />
                <a href={playList.link}>
                    <h5 class="card-title my-1 pl-2">{playList.name}</h5>
                </a>
                <p class="card-text pl-2">
                    Owner: {playList.owner}
                    <br/>
                    Count: {playList.count}
                </p>
            </div>
        )
    }
}

PlaylistItem.propTypes = {
    playList: PropTypes.object.isRequired
} 

export default PlaylistItem;
