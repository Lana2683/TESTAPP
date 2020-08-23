import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TrackItem extends Component {
    render() {
        const {track} = this.props;

        return (
            <div className="card mr-1 pb-1 text-left">
                <img class="card-img-top" src={track.img} />
                <div class="card-title my-1 pl-2">
                    <h5>{track.name}</h5>
                    <a href={track.albumLink} className="mb-0">
                        Album: {track.albumName}
                    </a>
                    <br/>
                    <a href={track.artistLink} className="mt-0">
                        Artist: {track.artistName}
                    </a>
                </div>
                
                <p class="card-text pl-2">
                    Duration: {track.duration}
                    <br/>
                    Popularity: {track.popularity}
                </p>
            </div>
        )
    }
}

TrackItem.propTypes = {
    track: PropTypes.object.isRequired
}

export default TrackItem;
