import React, { Component } from 'react';
import AlbumItem from './AlbumItem/AlbumItem';

class ListofAlbumItems extends Component {
    state = {
        albums: [
            {
                id: 1,
                name: 'Album',
                link: '#',
                date: '',
                tracks: '12',
                artists: [],
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 2,
                name: 'Album',
                link: '#',
                date: '',
                tracks: '12',
                artists: [],
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 3,
                name: 'Album',
                link: '#',
                date: '',
                tracks: '12',
                artists: [],
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 4,
                name: 'Album',
                link: '#',
                date: '',
                tracks: '12',
                artists: [],
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 5,
                name: 'Album',
                link: '#',
                date: '',
                tracks: '12',
                artists: [],
                img: 'https://picsum.photos/160/130'
            }
        ]
    }
    render() {
        const {albums} = this.state;

        return (
            <div className="p-2">
               <h4>Album</h4>
               <div className="d-flex justify-content-around">
                {albums.map(album => (
                    <AlbumItem
                        key={album.id}
                        album={album}
                    />
                ))}
               </div>
            </div>
        )
    }
}

export default ListofAlbumItems;
