import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlbumItem extends Component {
    render() {
        const {album} = this.props;

        return (
            <div className="card mr-2 pb-1 text-left">
                <img class="card-img-top" src={album.img} />
                <a href={album.link}>
                    <h5 class="card-title my-1 pl-2">{album.name}</h5>
                </a>
                <p class="card-text pl-2">
                    Date: {album.date}
                    <br/>
                    Total tracks: {album.tracks}
                    <br/>
                    List of artists: {album.artists}
                </p>
            </div>
        )
    }
}

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired
}; 

export default AlbumItem;
