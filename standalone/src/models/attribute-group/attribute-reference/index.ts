import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as AttributeReferencePresets from './presets';
export * from './types';

export const AttributeReferenceRest = {
  random: RestModelBuilder,
  presets: AttributeReferencePresets.restPresets,
};

export const AttributeReferenceGraphql = {
  random: GraphqlModelBuilder,
  presets: AttributeReferencePresets.graphqlPresets,
};
