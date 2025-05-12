import * as empty from './empty';
import sampleDataB2B from './sample-data-b2b';

export const restPresets = {
  empty: empty.restPreset,
  sampleDataB2B: {
    usMediumCustomersCatalog: sampleDataB2B.usMediumCustomersCatalog.restPreset,
    defaultProductSelection: sampleDataB2B.defaultProductSelection.restPreset,
  },
};
export const graphqlPresets = {
  empty: empty.graphqlPreset,
  sampleDataB2B: {
    usMediumCustomersCatalog:
      sampleDataB2B.usMediumCustomersCatalog.graphqlPreset,
    defaultProductSelection:
      sampleDataB2B.defaultProductSelection.graphqlPreset,
  },
};
export const compatPresets = {
  empty: empty.compatPreset,
  sampleDataB2B: {
    usMediumCustomersCatalog:
      sampleDataB2B.usMediumCustomersCatalog.compatPreset,
    defaultProductSelection: sampleDataB2B.defaultProductSelection.compatPreset,
  },
};
