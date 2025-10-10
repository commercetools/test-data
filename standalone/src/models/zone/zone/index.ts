// export * as ZoneDraft from '../zone/zone-draft';
// export * as Zone from '.';

// export { default as random } from './builders';
// export { default as presets } from '../zone/presets';
// export { default as draftPresets } from '../zone/zone-draft/presets';
// export * from './types';

import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ZoneRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ZoneGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ZoneRest` or `ZoneGraphql` instead.
 */
export const Zone = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
