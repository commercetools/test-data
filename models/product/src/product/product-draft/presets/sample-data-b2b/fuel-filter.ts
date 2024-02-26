import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant';
import { ProductDraft } from '../../../index';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const genericProductProductType = ProductTypeDraft.presets.sampleDataB2B
  .genericProduct()
  .build<TProductTypeDraft>();

const sparePartsCategory = CategoryDraft.presets.sampleDataB2B
  .spareParts()
  .build<TCategoryDraft>();

const fuelFilter = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('fuel-filter')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kraftstofffilter')
        ['it-IT']('Filtro del carburante')
        ['nl-NL']('Brandstoffilter')
        ['fr-FR']('Filtre à carburant')
        ['es-ES']('Filtro de combustible')
        ['pt-PT']('Filtro de combustível')
        ['en-US']('Fuel Filter')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Entfernt Schmutz und Verunreinigungen aus dem Kraftstoff.')
        ['it-IT']('Rimuove detriti e contaminanti dal carburante.')
        ['nl-NL']('Verwijdert vuil en verontreinigingen uit de brandstof.')
        ['fr-FR']('Élimine les débris et les contaminants du carburant.')
        ['es-ES']('Elimina residuos y contaminantes del combustible.')
        ['pt-PT']('Remove detritos e contaminantes do combustível.')
        ['en-US']('Removes debris and contaminants from fuel.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('fuel-filter')
        ['it-IT']('fuel-filter')
        ['nl-NL']('fuel-filter')
        ['fr-FR']('fuel-filter')
        ['es-ES']('fuel-filter')
        ['pt-PT']('fuel-filter')
        ['en-US']('fuel-filter')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.fuelFilter01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default fuelFilter;
