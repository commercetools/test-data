import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export * from './reference-draft';

export * as constants from './constants';

export const ReferenceRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ReferenceGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ReferenceRest` or `ReferenceGraphql` exported models instead of `Reference`.
 */
export const Reference = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
  constants,
};
