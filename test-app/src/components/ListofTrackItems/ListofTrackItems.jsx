import React, { Component } from 'react';
import TrackItem from './TrackItem/TrackItem';

class ListofTrackItems extends Component {
    state = {
        trackLists: [
            {
                id: 1,
                name: 'Track',
                albumLink: '#',
                albumName: 'Some album',
                artistLink: '#',
                artistName: 'Some artist',
                duration: '3 min',
                popularity: '',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 2,
                name: 'Track',
                albumLink: '#',
                albumName: 'Some album',
                artistLink: '#',
                artistName: 'Some artist',
                duration: '3 min',
                popularity: '',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 3,
                name: 'Track',
                albumLink: '#',
                albumName: 'Some album',
                artistLink: '#',
                artistName: 'Some artist',
                duration: '3 min',
                popularity: '',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 4,
                name: 'Track',
                albumLink: '#',
                albumName: 'Some album',
                artistLink: '#',
                artistName: 'Some artist',
                duration: '3 min',
                popularity: '',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 5,
                name: 'Track',
                albumLink: '#',
                albumName: 'Some album',
                artistLink: '#',
                artistName: 'Some artist',
                duration: '3 min',
                popularity: '',
                img: 'https://picsum.photos/160/130'
            }
        ]
    }
    render() {
        const {trackLists} = this.state;

        return (
            <div className="p-2">
               <h4>Tracklist</h4>
               <div className="d-flex justify-content-around">
                {trackLists.map(track => (
                    <TrackItem
                        key={track.id}
                        track={track}
                    />
                ))}
               </div>
            </div>
        )
    }
}

export default ListofTrackItems;
