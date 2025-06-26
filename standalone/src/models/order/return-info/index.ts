import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatReturnInfoModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ReturnInfoRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ReturnInfoGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated use `ReturnInfoRest` or `ReturnInfoGraphql` instead
 */
export const ReturnInfo = {
  random: CompatReturnInfoModelBuilder,
  presets: modelPresets.compatPresets,
};
