import { Attribute, AttributeDefinition } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

// This is the REST representation
export type TAttribute = Attribute;

export type TReferenceExpandable = {
  id: String;
};

// This is the generator "catchall" representation
export type TAttributeDefault = TAttribute & {
  attributeDefinition: AttributeDefinition;
  referencedResource: TReferenceExpandable;
  referencedResourceSet: Array<TReferenceExpandable>;
};

export type TAttributeGraphql = TAttributeDefault & {
  __typename: 'RawProductAttribute';
};

export type TAttributeBuilder = TBuilder<TAttributeDefault>;
export type TCreateAttributeBuilder = () => TAttributeBuilder;
