import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const CollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

// memoized as we dont want to rerun for every change of state on the page (adding to cart etc).
export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
);