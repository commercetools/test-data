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

const alternator = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('alternator')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Lichtmaschine')
        ['it-IT']('Alternatore')
        ['nl-NL']('Dynamo')
        ['fr-FR']('Alternateur')
        ['es-ES']('Alternador')
        ['pt-PT']('Alternador')
        ['en-US']('Alternator')
        ['en-GB']('Alternator')
        ['en-AU']('Alternator')
        ['en-NZ']('Alternator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Lädt die Batterie und versorgt das elektrische System mit Strom.')
        ['it-IT']('Carica la batteria e alimenta il sistema elettrico.')
        [
          'nl-NL'
        ]('Laadt de accu op en voorziet het elektrische systeem van stroom.')
        ['fr-FR']('Charge la batterie et alimente le système électrique.')
        ['es-ES']('Carga la batería y alimenta el sistema eléctrico.')
        ['pt-PT']('Carrega a bateria e alimenta o sistema elétrico.')
        ['en-US']('Charges the battery and powers the electrical system.')
        ['en-GB']('Charges the battery and powers the electrical system.')
        ['en-AU']('Charges the battery and powers the electrical system.')
        ['en-NZ']('Charges the battery and powers the electrical system.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('alternator')
        ['it-IT']('alternator')
        ['nl-NL']('alternator')
        ['fr-FR']('alternator')
        ['es-ES']('alternator')
        ['pt-PT']('alternator')
        ['en-US']('alternator')
        ['en-GB']('alternator')
        ['en-AU']('alternator')
        ['en-NZ']('alternator')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.alternator01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default alternator;
