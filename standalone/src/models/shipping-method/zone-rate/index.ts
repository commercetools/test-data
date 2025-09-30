import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

export * as ZoneRateDraft from './zone-rate-draft';
export * from './types';

export const ZoneRateRest = {
  random: RestModelBuilder,
};

export const ZoneRateGraphql = {
  random: GraphqlModelBuilder,
};

/**
 * @deprecated Use `ZoneRateRest` or `ZoneRateGraphql` exported models instead of `ZoneRate`.
 */
export const ZoneRate = {
  random: CompatModelBuilder,
};
