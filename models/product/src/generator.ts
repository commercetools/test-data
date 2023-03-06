import { ClientLogging, Reference } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import * as ProductCatalogData from '@commercetools-test-data/product-catalog-data'; // TODO: fix import
import { createRelatedDates } from '@commercetools-test-data/utils';
import { productPriceMode } from './constants';
import { TProduct } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/products#product

const generator = Generator<TProduct>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    version: fake((f) => f.datatype.number()),
    key: fake((f) => f.lorem.slug()),
    productType: fake(() => Reference.random().typeId('product-type')),
    masterData: fake(() => ProductCatalogData.random()),
    taxCategory: fake(() => Reference.random().typeId('tax-category')),
    state: fake(() => Reference.random().typeId('state')),
    reviewRatingStatistics: null,
    priceMode: oneOf(...Object.values(productPriceMode)),
    skus: [],
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
