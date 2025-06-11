import * as store01 from './store-01';
import * as store02 from './store-02';
import * as store03 from './store-03';

export const restPresets = {
  store01: store01.restPreset,
  store02: store02.restPreset,
  store03: store03.restPreset,
};

export const graphqlPresets = {
  store01: store01.graphqlPreset,
  store02: store02.graphqlPreset,
  store03: store03.graphqlPreset,
};

export const compatPresets = {
  store01: store01.compatPreset,
  store02: store02.compatPreset,
  store03: store03.compatPreset,
};
