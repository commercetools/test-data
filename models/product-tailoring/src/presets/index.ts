import type { Image } from '@commercetools/platform-sdk';
import { LocalizedString } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCtpImage } from '@commercetools-test-data/graphql-types';
import {
  RestModelBuilder as ProductTailoringRest,
  GraphqlModelBuilder as ProductTailoringGraphql,
} from '../builders';
import {
  RestModelBuilder as ProductTailoringAttributeRest,
  GraphqlModelBuilder as ProductTailoringAttributeGraphql,
} from '../product-tailoring-attribute/builders';
import {
  RestModelBuilder as ProductTailoringDataRest,
  GraphqlModelBuilder as ProductTailoringDataGraphql,
} from '../product-tailoring-data/builders';
import {
  RestModelBuilder as ProductVariantTailoringRest,
  GraphqlModelBuilder as ProductVariantTailoringGraphql,
} from '../product-variant-tailoring/builders';
import type { TProductTailoringRest, TProductTailoringGraphql } from '../types';

const getLocalizedData = () => {
  const name = LocalizedString.presets
    .empty()
    .en('Tailored Product')
    .de('Angepasstes Produkt');

  const description = LocalizedString.presets
    .empty()
    .en('Product tailored for specific market')
    .de('Produkt für spezifischen Markt angepasst');

  const metaTitle = LocalizedString.presets
    .empty()
    .en('Tailored Product - Meta Title')
    .de('Angepasstes Produkt - Meta Titel');

  const metaDescription = LocalizedString.presets
    .empty()
    .en('Meta description for tailored product')
    .de('Meta-Beschreibung für angepasstes Produkt');

  const metaKeywords = LocalizedString.presets
    .empty()
    .en('tailored, product, market')
    .de('angepasst, produkt, markt');

  const slug = LocalizedString.presets
    .empty()
    .en('tailored-product')
    .de('angepasstes-produkt');

  return { name, description, metaTitle, metaDescription, metaKeywords, slug };
};

const createRestImages = (): Image[] => {
  return [
    {
      url: '//product-image-1.jpg',
      dimensions: { w: 800, h: 600 },
      label: 'Product Image 1',
    },
    {
      url: '//product-image-2.jpg',
      dimensions: { w: 400, h: 300 },
      label: 'Product Image 2',
    },
  ];
};

const createGraphqlImages = (): TCtpImage[] => {
  return [
    {
      url: '//product-image-1.jpg',
      dimensions: { width: 800, height: 600 },
      label: 'Product Image 1',
      __typename: 'Image',
    },
    {
      url: '//product-image-2.jpg',
      dimensions: { width: 400, height: 300 },
      label: 'Product Image 2',
      __typename: 'Image',
    },
  ];
};

const createRestVariant = (id: number) => {
  const attributeValue = LocalizedString.presets
    .empty()
    .en(`Color ${id}`)
    .de(`Farbe ${id}`);

  return ProductVariantTailoringRest()
    .id(id)
    .images(createRestImages())
    .attributes([
      ProductTailoringAttributeRest().name('color').value(attributeValue),
      ProductTailoringAttributeRest()
        .name('size')
        .value(LocalizedString.presets.empty().en('M').de('M')),
    ]);
};

const createGraphqlVariant = (id: number) => {
  const attributeValue = LocalizedString.presets
    .empty()
    .en(`Color ${id}`)
    .de(`Farbe ${id}`);

  return ProductVariantTailoringGraphql()
    .id(id)
    .images(createGraphqlImages())
    .attributesRaw([
      ProductTailoringAttributeGraphql()
        .name('color')
        .value({ type: 'ltext', value: attributeValue })
        .__typename('RawProductAttribute'),
      ProductTailoringAttributeGraphql()
        .name('size')
        .value({ type: 'text', value: 'M' })
        .__typename('RawProductAttribute'),
    ])
    .__typename('ProductVariantTailoring');
};

export const restPresets = {
  basic: (): TBuilder<TProductTailoringRest> => {
    const data = getLocalizedData();
    const tailoringData = ProductTailoringDataRest()
      .name(data.name)
      .description(data.description)
      .metaTitle(data.metaTitle)
      .metaDescription(data.metaDescription)
      .metaKeywords(data.metaKeywords)
      .slug(data.slug)
      .variants([
        createRestVariant(1),
        createRestVariant(2),
        createRestVariant(3),
      ]);

    return ProductTailoringRest()
      .key('tailored-product-key')
      .published(true)
      .hasStagedChanges(false)
      .current(tailoringData)
      .staged(tailoringData);
  },
};

export const graphqlPresets = {
  basic: (): TBuilder<TProductTailoringGraphql> => {
    const data = getLocalizedData();
    const tailoringData = ProductTailoringDataGraphql()
      .nameAllLocales(data.name)
      .descriptionAllLocales(data.description)
      .metaTitleAllLocales(data.metaTitle)
      .metaDescriptionAllLocales(data.metaDescription)
      .metaKeywordsAllLocales(data.metaKeywords)
      .slugAllLocales(data.slug)
      .variants([
        createGraphqlVariant(1),
        createGraphqlVariant(2),
        createGraphqlVariant(3),
      ])
      .__typename('ProductTailoringData');

    return ProductTailoringGraphql()
      .key('tailored-product-key')
      .published(true)
      .hasStagedChanges(false)
      .__typename('ProductTailoring')
      .current(tailoringData)
      .staged(tailoringData);
  },
};
