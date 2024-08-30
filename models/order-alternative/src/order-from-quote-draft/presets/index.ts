import * as emptyPresets from './empty/empty';
import * as sampleDataB2BPresets from './sample-data-b2b/eagle-heavy-lift-technologies-inc-us-quote-1';

export const restPresets = {
  empty: emptyPresets.restPreset,
  sampleDataB2BPresets: sampleDataB2BPresets.restPreset,
};

export const graphqlPresets = {
  empty: emptyPresets.graphqlPreset,
  sampleDataB2BPresets: sampleDataB2BPresets.graphqlPreset,
};
