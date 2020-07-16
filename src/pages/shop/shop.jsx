import React, { Component } from 'react';
import CollectionsData from './collectionsdata.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
             CollectionsData
        }
    }

    render() {
        return (
            <div className='shop-page'>
                {
                    CollectionsData.map( ({ id, ...extraCollectionProps }) => (
                        <CollectionPreview key={ id } { ...extraCollectionProps } />                    ))
                }
            </div>
        )
    }
}

export default ShopPage;