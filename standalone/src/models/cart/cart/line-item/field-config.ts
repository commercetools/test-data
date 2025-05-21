import { fake, type TModelFieldsConfig, oneOf } from '@/core';
import { ChannelGraphql } from '@/models/channel';
import {
  CentPrecisionMoney,
  LocalizedString,
  Money,
  Price,
  ReferenceGraphql,
  ReferenceRest,
} from '@/models/commons';
import {
  ProductVariantRest,
  ProductVariantGraphql,
} from '@/models/product/product';
import { ProductType } from '@/models/product-type';
import { TaxRate } from '@/models/tax-category';
import { createRelatedDates } from '@/utils';
import { inventoryMode, lineItemMode, priceMode } from '../cart/constants';
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
  discountedPricePerQuantity: [],
  taxedPrice: null,
  taxedPricePortions: [],
  state: [],
  taxRate: fake(() => TaxRate.random()),
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
    productSlug: fake(() => LocalizedString.presets.ofSlugs()),
    productType: fake(() => ReferenceRest.presets.productTypeReference()),
    variant: fake(() => ProductVariantRest.random()),
    totalPrice: fake(() => CentPrecisionMoney.random()),
    supplyChannel: fake(() => ReferenceRest.presets.channelReference()),
    distributionChannel: fake(() => ReferenceRest.presets.channelReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TLineItemGraphql> = {
  fields: {
    ...commonFieldsConfig,
    name: null,
    productSlug: null,
    productType: fake(() => ProductType.random()),
    variant: fake(() => ProductVariantGraphql.random()),
    totalPrice: fake(() => Money.random()),
    supplyChannel: fake(() => ChannelGraphql.random()),
    distributionChannel: fake(() => ChannelGraphql.random()),
    distributionChannelRef: null,
    nameAllLocales: fake((f) => LocalizedString.random()),
    productSlugAllLocales: fake(() => LocalizedString.presets.ofSlugs()),
    productTypeRef: null,
    supplyChannelRef: null,
    __typename: 'LineItem',
    recurrenceInfo: null,
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
