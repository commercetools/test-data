import { ChannelRest, ChannelGraphql } from '@commercetools-test-data/channel';
import {
  CentPrecisionMoney,
  LocalizedString,
  Price,
  ReferenceGraphql,
  ReferenceRest,
} from '@commercetools-test-data/commons';
import {
  fake,
  type TModelFieldsConfig,
  oneOf,
} from '@commercetools-test-data/core';
import {
  ProductVariantGraphql,
  ProductVariantRest,
} from '@commercetools-test-data/product';
import {} from '@commercetools-test-data/product/src/product-variant';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { inventoryMode, lineItemMode, priceMode } from './constants';
import { TLineItemRest, TLineItemGraphql } from './types';

const [addedAt, lastModifiedAt] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  key: fake((f) => f.string.uuid()),
  productId: fake((f) => f.string.uuid()),
  productKey: fake((f) => f.string.uuid()),
  price: fake(() => Price.random()),
  quantity: fake((f) =>
    f.number.int({
      min: 1,
    })
  ),
  totalPrice: fake(() => CentPrecisionMoney.random()),
  discountedPricePerQuantity: [],
  taxedPrice: fake(() => CentPrecisionMoney.random()),
  taxedPricePortions: [],
  state: [],
  taxRate: null,
  perMethodTaxRate: [],
  priceMode: oneOf(...Object.values(priceMode)),
  lineItemMode: oneOf(...Object.values(lineItemMode)),
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  shippingDetails: null,
  addedAt: fake(addedAt),
  custom: null,
  lastModifiedAt: fake(lastModifiedAt),
};

export const restFieldsConfig: TModelFieldsConfig<TLineItemRest> = {
  fields: {
    ...commonFieldsConfig,
    name: fake(() => LocalizedString.random()),
    variant: fake(() => ProductVariantRest.random()),
    supplyChannel: fake(() => ReferenceRest.random().typeId('channel')),
    distributionChannel: fake(() => ReferenceRest.random().typeId('channel')),
    productSlug: fake((f) => LocalizedString.presets.ofSlugs()),
    productType: fake(() => ReferenceRest.random().typeId('product-type')),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TLineItemGraphql> = {
  fields: {
    ...commonFieldsConfig,
    name: null,
    variant: fake(() => ProductVariantGraphql.random()),
    supplyChannel: fake(() => ChannelGraphql.random()),
    distributionChannel: fake(() => ChannelGraphql.random()),
    productSlug: null,
    productType: fake(() => ReferenceGraphql.random().typeId('product-type')),
    distributionChannelRef: null,
    nameAllLocales: fake(() => LocalizedString.random()),
    productSlugAllLocales: fake(() => LocalizedString.random()),
    productTypeRef: null,
    supplyChannelRef: null,
    __typename: 'LineItem',
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
    const distributionChannelRef = model.distributionChannel
      ? ReferenceGraphql.presets
          .channelReference()
          .id(model.distributionChannel.id)
          .buildGraphql()
      : model.distributionChannel;
    const productTypeRef = model.productType
      ? ReferenceGraphql.presets
          .productReference()
          .id(model.productType.id)
          .buildGraphql()
      : model.productType;
    const supplyChannelRef = model.supplyChannel
      ? ReferenceGraphql.presets
          .channelReference()
          .id(model.supplyChannel.id)
          .buildGraphql()
      : model.supplyChannel;
    return {
      name,
      productSlug,
      distributionChannelRef,
      productTypeRef,
      supplyChannelRef,
    };
  },
};
