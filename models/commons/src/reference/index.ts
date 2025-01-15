import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * as Reference from '.';
export * from './reference-draft';

export * as constants from './constants';
export * from './types';

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
export const random = CompatModelBuilder;
export const presets = modelPresets.compatPresets;
