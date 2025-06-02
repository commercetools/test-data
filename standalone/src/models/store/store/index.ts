import {
  CompatModelBuilder,
  RestModelBuilder,
  GraphqlModelBuilder,
} from './builder';
import * as modelPresets from './presets';
import * as modelStoreDraft from './store-draft';

export * from './types';

export const StoreRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const StoreGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `StoreRest` or `StoreGraphql` exported models instead of  `Store`
 */
export const Store = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};

export const StoreDraftRest = {
  random: modelStoreDraft.StoreDraftRest.random,
  presets: modelStoreDraft.StoreDraftRest.presets,
};

export const StoreDraftGraphql = {
  random: modelStoreDraft.StoreDraftGraphql.random,
  presets: modelStoreDraft.StoreDraftGraphql.presets,
};

/**
 * @deprecated Use `StoreDraftRest` or `StoreDraftGraphql` exported models instead of  `StoreDraft`
 */
export const StoreDraft = {
  random: modelStoreDraft.StoreDraft.random,
  presets: modelStoreDraft.StoreDraft.presets,
};
