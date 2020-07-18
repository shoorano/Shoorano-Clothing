import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector.js';

import CollectionItem from '../../components/collection-item/collection-item.jsx';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h1 className="title"> { title } </h1>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={ item.id } item={ item } />)
                }
            </div>
        </div>
    );
};

// ownProps allows us to access the url ID to be used in selectCollection selector.
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);