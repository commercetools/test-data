import { TBuilder } from '@/core';
import { LocalizedString } from '@/models/commons';
import type { TCategoryDraftGraphql, TCategoryDraftRest } from '../../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../../builders';

const populateModel = (
  model: TBuilder<TCategoryDraftRest | TCategoryDraftGraphql>
) => {
  return model
    .key(undefined)
    .externalId(undefined)
    .description(undefined)
    .parent(undefined)
    .orderHint(undefined)
    .metaTitle(undefined)
    .metaDescription(undefined)
    .metaKeywords(undefined)
    .assets(undefined)
    .custom(undefined)
    .name(LocalizedString.random())
    .slug(LocalizedString.random());
};

export const restPreset = () => populateModel(RestModelBuilder());

export const graphqlPreset = () => populateModel(GraphqlModelBuilder());

export const compatPreset = <
  TModel extends
    | TCategoryDraftRest
    | TCategoryDraftGraphql = TCategoryDraftRest,
>(): TBuilder<TModel> =>
  populateModel(CompatModelBuilder()) as TBuilder<TModel>;
