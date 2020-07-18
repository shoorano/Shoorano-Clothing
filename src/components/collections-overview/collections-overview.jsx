import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';

import { CollectionsForPreview } from '../../redux/shop/shop.selector.js';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map( ({ id, ...extraCollectionProps }) => (
                <CollectionPreview key={ id } { ...extraCollectionProps } />                    ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: CollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);