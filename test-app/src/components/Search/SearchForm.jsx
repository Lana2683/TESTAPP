import React, { Component } from 'react';
import SearchField from './SearchField/SearchField';
import SearchButton from './SearchButton/SearchButton';
import ListofTypeButtoms from './ListofTypeButtons/ListofTypeButtons';
import ListofLimitButtons from './ListofLimitButtons/ListofLimitButtons';

class SearchForm extends Component {
    render() {
        return (
            <div className="bg-primary py-4" style={{minHeight: "100%", width: "260px"}}>
                <form className="d-flex flex-column">
                    <h2>I want to find</h2>
                    <SearchField />
                    <ListofTypeButtoms />
                    <ListofLimitButtons />
                    <SearchButton />
                </form>  
            </div>
        )
    }
}

export default SearchForm;
