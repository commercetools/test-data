import type { TBuilder } from '@/core';
import { TMcSettingsVariantPricesListView } from '@/graphql-types';

// There's not REST model as this entity only exists in the MC Settings GraphQL API
export type TVariantPricesListViewGraphql = TMcSettingsVariantPricesListView;

export type TCreateVariantPricesListViewBuilder =
  () => TBuilder<TVariantPricesListViewGraphql>;
