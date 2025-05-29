import * as beddingBundlePresets from './bedding-bundle';
import * as furnitureAndDecorPresets from './furniture-and-decor';
import * as productSetsPresets from './product-sets';

export const restPresets = {
  beddingBundle: beddingBundlePresets.restPreset,
  furnitureAndDecor: furnitureAndDecorPresets.restPreset,
  productSets: productSetsPresets.restPreset,
};

export const graphqlPresets = {
  beddingBundle: beddingBundlePresets.graphqlPreset,
  furnitureAndDecor: furnitureAndDecorPresets.graphqlPreset,
  productSets: productSetsPresets.graphqlPreset,
};

export const compatPresets = {
  beddingBundle: beddingBundlePresets.compatPreset,
  furnitureAndDecor: furnitureAndDecorPresets.compatPreset,
  productSets: productSetsPresets.compatPreset,
};
