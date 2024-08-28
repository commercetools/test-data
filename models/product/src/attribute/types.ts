import type { Attribute, AttributeDefinition } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TReferenceExpandable = {
  id: String;
};

// Base representation
export type TAttribute = TAttributeRest & {
  attributeDefinition: AttributeDefinition;
  referencedResource: TReferenceExpandable;
  referencedResourceSet: Array<TReferenceExpandable>;
};

export type TAttributeDraft = Attribute;

// REST representation
export type TAttributeRest = Attribute;

// Graphql representation
export type TAttributeGraphql = TAttribute & {
  __typename: 'RawProductAttribute';
};

export type TAttributeDraftGraphql = TAttributeDraft;

export type TAttributeBuilder = TBuilder<TAttribute>;
export type TAttributeDraftBuilder = TBuilder<TAttributeDraft>;
export type TCreateAttributeBuilder = () => TAttributeBuilder;
export type TCreateAttributeDraftBuilder = () => TAttributeDraftBuilder;
