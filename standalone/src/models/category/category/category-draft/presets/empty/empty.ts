import { TBuilder } from '@/core';
import type { TCategoryDraftGraphql, TCategoryDraftRest } from '../../../types';
import {
  CategoryDraft,
  CategoryDraftGraphql,
  CategoryDraftRest,
} from '../../index';

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
    .custom(undefined);
};

export const restPreset = () => populateModel(CategoryDraftRest.random());

export const graphqlPreset = () => populateModel(CategoryDraftGraphql.random());

export const compatPreset = () => populateModel(CategoryDraft.random());
