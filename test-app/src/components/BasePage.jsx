import React, { Component } from 'react';
import SearchForm from './Search/SearchForm';
import Header from './Header/Header';
import ListofArtistItems from './ListofArtistItems/ListofArtistItems';
import ListofTrackItems from './ListofTrackItems/ListofTrackItems';
import ListofPlaylistItems from './ListofPlaylistItems/ListofPlaylistItems';
import ListofAlbumItems from './ListofAlbumItems/ListofAlbumItems';

class BasePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="d-flex">
                    <SearchForm />
                    <div style={{width: "100vh"}}>
                        <ListofArtistItems />
                        <hr/>
                        <ListofTrackItems />
                        <hr/>
                        <ListofPlaylistItems />
                        <hr/>
                        <ListofAlbumItems />
                    </div>
                </div>    
            </div>
        )
    }
}

export default BasePage;
