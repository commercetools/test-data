import { TBuilder } from '@/core';
import {
  TAttributeDefinitionDraft,
  TAttributeDefinitionDraftGraphql,
  TAttributeDefinitionDraftRest,
} from '../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';

const populateBuilder = <
  T extends
    | TAttributeDefinitionDraftRest
    | TAttributeDefinitionDraftGraphql
    | TAttributeDefinitionDraft,
>(
  builder: TBuilder<T>
) =>
  builder
    .attributeConstraint(undefined)
    .inputHint(undefined)
    .isSearchable(false)
    .inputTip(undefined);

export const restPreset = (): TBuilder<TAttributeDefinitionDraftRest> =>
  populateBuilder(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TAttributeDefinitionDraftGraphql> =>
  populateBuilder(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TAttributeDefinitionDraft> =>
  populateBuilder(CompatModelBuilder());
