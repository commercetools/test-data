import {
  b2cRetailStoreRest,
  b2cRetailStoreGraphql,
  b2cRetailStore,
} from './b2c-retail-store';

export const restPresets = {
  b2cRetailStore: b2cRetailStoreRest,
};

export const graphqlPresets = {
  b2cRetailStore: b2cRetailStoreGraphql,
};

export const compatPresets = {
  b2cRetailStore: b2cRetailStore,
};
