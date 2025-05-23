import {
  AttributeDefinition,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpAttributeDefinition,
  TCtpAttributeDefinitionDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TAttributeDefinitionRest` or `TAttributeDefinitionGraphql` instead
 */
export type TAttributeDefinition = AttributeDefinition;

/**
 * @deprecated use `TAttributeDefinitionDraftRest` or `TAttributeDefinitionDraftGraphql` instead
 */
export type TAttributeDefinitionDraft = AttributeDefinitionDraft;

// REST types
export type TAttributeDefinitionRest = AttributeDefinition;
export type TAttributeDefinitionDraftRest = AttributeDefinitionDraft;

// GraphQL types
export type TAttributeDefinitionGraphql = TCtpAttributeDefinition;
export type TAttributeDefinitionDraftGraphql = TCtpAttributeDefinitionDraft;

// Builders types
export type TCreateAttributeDefinitionBuilder<
  TAttributeDefinitionModel extends
    | TAttributeDefinitionRest
    | TAttributeDefinitionDraftRest
    | TAttributeDefinitionGraphql
    | TAttributeDefinitionDraftGraphql,
> = () => TBuilder<TAttributeDefinitionModel>;
