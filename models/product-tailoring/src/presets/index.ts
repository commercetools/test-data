import { LocalizedString } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  RestModelBuilder as ProductTailoringRest,
  GraphqlModelBuilder as ProductTailoringGraphql,
} from '../builders';
import {
  RestModelBuilder as ProductTailoringDataRest,
  GraphqlModelBuilder as ProductTailoringDataGraphql,
} from '../product-tailoring-data/builders';
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

export const restPresets = {
  basic: (): TBuilder<TProductTailoringRest> => {
    const data = getLocalizedData();
    const tailoringData = ProductTailoringDataRest()
      .name(data.name)
      .description(data.description)
      .metaTitle(data.metaTitle)
      .metaDescription(data.metaDescription)
      .metaKeywords(data.metaKeywords)
      .slug(data.slug);

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
