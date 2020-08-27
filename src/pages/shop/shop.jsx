import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.jsx';
import CollectionPage from '../collection/collection.jsx';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends Component {
    //Collect snapshot of collections collection from FB.
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        
        // when collectionRef updates, we recieve the snapshot of collections colleciton.
        collectionRef.onSnapshot(async snapshot => {
            convertCollectionsSnapshotToMap(snapshot);
        })
    }


    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={ `${ match.path }` } component={ CollectionsOverview }/>
                <Route path={ `${ match.path }/:collectionId` } component={ CollectionPage } />
            </div>
        );
    }
}

export default ShopPage;