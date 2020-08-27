import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ShowSpinner from '../../components/show-spinner/show-spinner';

import CollectionsOverview from '../../components/collections-overview/collections-overview.jsx';
import CollectionPage from '../collection/collection.jsx';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions.js';

const CollectionsOverviewShowSpinner = ShowSpinner(CollectionsOverview);
const CollectionPageShowSpinner = ShowSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    };

    //Collect snapshot of collections collection from FB.
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        // when collectionRef updates, we recieve the snapshot of collections colleciton.
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);

            // Place loader state here as shop component knows if data has been received yet.
            this.setState({ loading: false });
        })
    }


    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={ `${ match.path }` } render={ (props) => <CollectionsOverviewShowSpinner isLoading={ loading } { ...props } /> } />
                <Route path={ `${ match.path }/:collectionId` } render={ (props) => <CollectionPageShowSpinner isLoading={ loading } { ...props } /> } />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);