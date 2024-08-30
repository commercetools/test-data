import * as emptyPresets from './empty/empty';
import * as sampleDataFashionPresets from './sample-data-fashion/sample-australia-cart-01';

export const restPresets = {
  empty: emptyPresets.restPreset,
  sampleDataFashion: sampleDataFashionPresets.restPreset,
};

export const graphqlPresets = {
  empty: emptyPresets.graphqlPreset,
  sampleDataFashion: sampleDataFashionPresets.graphqlPreset,
};
