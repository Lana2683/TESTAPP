import React, { Component } from 'react';
import ArtistItem from './ArtistItem/ArtistItem';

class ListofArtistItems extends Component {
    state = {
        artists: [
            {
                id: 1,
                name: 'Artist',
                link: '#',
                genre: 'indie',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 2,
                name: 'Artist',
                link: '#',
                genre: 'pop',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 3,
                name: 'Artist',
                link: '#',
                genre: 'jazz',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 4,
                name: 'Artist',
                link: '#',
                genre: 'pop',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 5,
                name: 'Artist',
                link: '#',
                genre: 'jazz',
                img: 'https://picsum.photos/160/130'
            }
        ]
    }
    render() {
        const {artists} = this.state;

        return (
            <div className="p-2">
               <h4>Artist</h4>
               <div className="d-flex justify-content-around">
                {artists.map(artist => (
                    <ArtistItem
                        key={artist.id}
                        artist={artist}
                    />
                ))}
               </div>
            </div>
        )
    }
}

export default ListofArtistItems;
