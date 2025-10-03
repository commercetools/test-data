import { TBuilder } from '@/core';
import {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../../types';
import { AttributeGroupDraftGraphql, AttributeGroupDraftRest } from '../index';

const populatePreset = <
  TModel extends TAttributeGroupDraftRest | TAttributeGroupDraftGraphql,
>(
  builder: TBuilder<TModel>
) => {
  return builder.description(undefined).key(undefined);
};

export const restPreset = (): TBuilder<TAttributeGroupDraftRest> =>
  populatePreset(AttributeGroupDraftRest.random());

export const graphqlPreset = (): TBuilder<TAttributeGroupDraftGraphql> =>
  populatePreset(AttributeGroupDraftGraphql.random());
