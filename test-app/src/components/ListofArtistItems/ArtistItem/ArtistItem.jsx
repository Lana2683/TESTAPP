import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArtistItem extends Component {
    render() {
        const {artist} = this.props;

        return (
            <div className="card mr-1 pb-1 text-left">
                <img class="card-img-top" src={artist.img} />
                <a href={artist.link}>
                    <h5 class="card-title my-1 pl-2">{artist.name}</h5>
                </a>
            <p class="card-text pl-2">Genre: {artist.genre}</p>
            </div>
        )
    }
}

ArtistItem.propTypes = {
    artist: PropTypes.object.isRequired
} 

export default ArtistItem;
