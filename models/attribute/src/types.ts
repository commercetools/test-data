import { Attribute, AttributeDefinition } from '@commercetools/platform-sdk';
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

// REST representation
export type TAttributeRest = Attribute;

// Graphql representation
export type TAttributeGraphql = TAttribute & {
  __typename: 'RawProductAttribute';
};

export type TAttributeBuilder = TBuilder<TAttribute>;
export type TCreateAttributeBuilder = () => TAttributeBuilder;
