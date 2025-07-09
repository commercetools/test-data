import { fake, type TModelFieldsConfig } from '@/core';
import {
  LocalizedString,
  ReferenceGraphql,
  ReferenceRest,
} from '@/models/commons';
import {
  ProductVariantRest,
  ProductVariantGraphql,
} from '@/models/product/product';
import { ProductTypeGraphql } from '@/models/product-type';
import { createRelatedDates } from '@/utils';
import {
  TShoppingListLineItemRest,
  TShoppingListLineItemGraphql,
} from './types';

const [addedAt] = createRelatedDates();

const commonFieldsConfig = {
  addedAt: fake(addedAt),
  custom: null,
  deactivatedAt: null,
  id: fake((f) => f.string.uuid()),
  key: null,
  productId: fake((f) => f.string.uuid()),
  quantity: fake((f) =>
    f.number.int({
      min: 1,
    })
  ),
  variantId: fake((f) => f.number.int({ min: 1 })),
};

export const restFieldsConfig: TModelFieldsConfig<TShoppingListLineItemRest> = {
  fields: {
    ...commonFieldsConfig,
    name: fake(() => LocalizedString.random()),
    productSlug: fake(() => LocalizedString.presets.ofSlugs()),
    productType: fake(() => ReferenceRest.presets.productTypeReference()),
    variant: fake(() => ProductVariantRest.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShoppingListLineItemGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      name: null,
      nameAllLocales: fake(() => LocalizedString.random()),
      productSlug: null,
      productSlugAllLocales: fake(() => LocalizedString.presets.ofSlugs()),
      productType: fake(() => ProductTypeGraphql.random()),
      productTypeRef: null,
      published: fake((f) => f.datatype.boolean()),
      variant: fake(() => ProductVariantGraphql.random()),
      __typename: 'ShoppingListLineItem',
    },
    postBuild: (model) => {
      const name = model.nameAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
        : model.nameAllLocales;
      const productSlug = model.productSlugAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(
            model.productSlugAllLocales
          )
        : model.productSlugAllLocales;
      const productTypeRef = model.productType
        ? ReferenceGraphql.presets
            .productReference()
            .id(model.productType.id)
            .buildGraphql()
        : model.productType;

      return {
        ...model,
        name,
        productSlug,
        productTypeRef,
      };
    },
  };
