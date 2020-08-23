import React, { Component } from 'react';
import PlayListItem from './PlaylistItem/PlaylistItem'

class ListofPlaylistItems extends Component {
    state = {
        playLists: [
            {
                id: 1,
                name: 'Playlist',
                link: '#',
                owner: 'Owner',
                count: '2',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 2,
                name: 'Playlist',
                link: '#',
                owner: 'Owner',
                count: '3',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 3,
                name: 'Playlist',
                link: '#',
                owner: 'Owner',
                count: '4',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 4,
                name: 'Playlist',
                link: '#',
                owner: 'Owner',
                count: '2',
                img: 'https://picsum.photos/160/130'
            },
            {
                id: 5,
                name: 'Playlist',
                link: '#',
                owner: 'Owner',
                count: '3',
                img: 'https://picsum.photos/160/130'
            }
        ]
    }
    render() {
        const {playLists} = this.state;

        return (
            <div className="p-2">
               <h4>Playlist</h4>
               <div className="d-flex justify-content-around">
                {playLists.map(playList => (
                    <PlayListItem
                        key={playList.id}
                        playList={playList}
                    />
                ))}
               </div>
            </div>
        )
    }
}

export default ListofPlaylistItems;
