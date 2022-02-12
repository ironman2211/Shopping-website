import { createSelector } from 'reselect';
const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionURLparam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionURLparam]
  );
export const selectCollectionforpreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);
export const selectIsCollectionFetching=createSelector(
  [selectShop],
  shop => shop.isFetching
)
export const selectIsCollectionLoading=createSelector(
  [selectShop],
  shop => !!shop.collections
)
