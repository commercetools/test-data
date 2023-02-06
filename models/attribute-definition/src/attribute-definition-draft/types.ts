import type { TBuilder } from '@commercetools-test-data/core';
import { AttributeDefinitionDraft } from '@commercetools/platform-sdk';

export type TAttributeDefinitionDraft = AttributeDefinitionDraft;

export type TAttributeDefinitionDraftGraphql = TAttributeDefinitionDraft & {
  __typename: TAttributeDefinitionDraft['name'];
};

export type TAttributeDefinitionDraftBuilder =
  TBuilder<TAttributeDefinitionDraft>;
export type TCreateAttributeDefinitionDraftBuilder =
  () => TAttributeDefinitionDraftBuilder;
