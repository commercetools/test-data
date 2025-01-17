import type { TLocalizedString } from '@commercetools-test-data/commons';

export interface TProductVariantTailoring {
  id: number;
  sku?: string;
  key?: string;
  images?: Array<{
    url: string;
    dimensions?: {
      w: number;
      h: number;
    };
    label?: string;
  }>;
  attributes?: Array<{
    name: string;
    value: unknown;
  }>;
}

export interface TProductTailoringData {
  name: TLocalizedString;
  description?: TLocalizedString;
  metaTitle?: TLocalizedString;
  metaDescription?: TLocalizedString;
  metaKeywords?: TLocalizedString;
  variants: TProductVariantTailoring[];
}

export interface TProductTailoringDataRest extends TProductTailoringData {}

export interface TProductTailoringDataGraphql extends TProductTailoringData {
  __typename: 'ProductTailoringData';
}
