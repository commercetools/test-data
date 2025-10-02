import { TBuilder } from '@/core';
import {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../../types';
import {
  AttributeGroupDraftGraphql,
  AttributeGroupDraftRest,
  AttributeGroupDraft,
} from '../index';

const populatePreset = <
  TModel extends TAttributeGroupDraftRest | TAttributeGroupDraftGraphql,
>(
  builder: TBuilder<TModel>
) => {
  return builder.name('').description(undefined).attributes([]);
};

export const restPreset = (): TBuilder<TAttributeGroupDraftRest> =>
  populatePreset(AttributeGroupDraftRest.random());

export const graphqlPreset = (): TBuilder<TAttributeGroupDraftGraphql> =>
  populatePreset(AttributeGroupDraftGraphql.random());

export const compatPreset = (): TBuilder<
  TAttributeGroupDraftRest | TAttributeGroupDraftGraphql
> => populatePreset(AttributeGroupDraft.random());
