import empty from './empty/empty';
import sampleDataFashion from './sample-data-fashion/sample-australia-cart-01';

export const restPresets = {
  empty: empty.rest,
  sampleDataFashion: sampleDataFashion.rest,
};

export const graphqlPresets = {
  empty: empty.graphql,
  sampleDataFashion: sampleDataFashion.graphql,
};
