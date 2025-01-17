import type { TAttributeDefinition } from '@commercetools-test-data/product-type';

export interface TailoringAttribute {
  name: string;
  value: unknown;
  attributeDefinition?: TAttributeDefinition;
}
