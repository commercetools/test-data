import { empty, emptyDraftRest, emptyDraftGraphql } from './empty';
import sampleDataB2B from './sample-data-b2b';
import * as sampleDataB2CLifestyle from './sample-data-b2c-lifestyle';
import * as sampleDataFashion from './sample-data-fashion';

export const restPresets = {
  empty: emptyDraftRest,
  sampleDataFashion: sampleDataFashion.restPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.restPresets,
};

export const graphqlPresets = {
  empty: emptyDraftGraphql,
  sampleDataFashion: sampleDataFashion.graphqlPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.graphqlPresets,
};

export const compatPresets = {
  empty: empty,
  sampleDataFashion: sampleDataFashion.compatPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.compatPresets,
};
