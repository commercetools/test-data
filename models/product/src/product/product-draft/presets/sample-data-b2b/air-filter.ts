import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { productPriceMode } from '../../../constants';
import type { TProductDraft } from '../../../types';
import { ProductDraft } from '../../index';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const genericProductProductType = ProductTypeDraft.presets.sampleDataB2B
  .genericProduct()
  .build<TProductTypeDraft>();

const sparePartsCategory = CategoryDraft.presets.sampleDataB2B
  .spareParts()
  .build<TCategoryDraft>();

const airFilter = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('air-filter')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Luftfilter')
        ['it-IT']('Filtro aria')
        ['nl-NL']('Luchtfilter')
        ['fr-FR']('Filtre à air')
        ['es-ES']('Filtro de aire')
        ['pt-PT']('Filtro de ar')
        ['en-US']('Air Filter')
        ['en-GB']('Air Filter')
        ['en-AU']('Air Filter')
        ['en-NZ']('Air Filter')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Filtert die in den Motor eindringende Luft, um Motorverschleiß zu verhindern.')
        [
          'it-IT'
        ]("Filtra l'aria che entra nel motore per prevenire l'usura del motore.")
        [
          'nl-NL'
        ]('Filtert de lucht die de motor binnenkomt om motorslijtage te voorkomen.')
        [
          'fr-FR'
        ]("Filtre l'air entrant dans le moteur pour prévenir l'usure du moteur.")
        [
          'es-ES'
        ]('Filtra el aire que entra en el motor para prevenir el desgaste del motor.')
        [
          'pt-PT'
        ]('Filtra o ar que entra no motor para prevenir o desgaste do motor.')
        ['en-US']('Filters air entering the engine to prevent engine wear.')
        ['en-GB']('Filters air entering the engine to prevent engine wear.')
        ['en-AU']('Filters air entering the engine to prevent engine wear.')
        ['en-NZ']('Filters air entering the engine to prevent engine wear.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('air-filter')
        ['it-IT']('air-filter')
        ['nl-NL']('air-filter')
        ['fr-FR']('air-filter')
        ['es-ES']('air-filter')
        ['pt-PT']('air-filter')
        ['en-US']('air-filter')
        ['en-GB']('air-filter')
        ['en-AU']('air-filter')
        ['en-NZ']('air-filter')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(genericProductProductType.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.airFilter01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default airFilter;
