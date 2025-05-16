import * as empty from './empty';
import * as sampleDataB2B from './sample-data-b2b';

export const restPresets = {
  empty: empty.restPreset,
  sampleDataB2B: sampleDataB2B.restPresets,
};
export const graphqlPresets = {
  empty: empty.graphqlPreset,
  sampleDataB2B: sampleDataB2B.graphqlPresets,
};
export const compatPresets = {
  empty: empty.compatPreset,
  sampleDataB2B: sampleDataB2B.compatPresets,
};
