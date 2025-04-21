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

const oilFilter = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('oil-filter')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Ölfilter')
        ['it-IT']("Filtro dell'olio")
        ['nl-NL']('Oliefilter')
        ['fr-FR']('Filtre à huile')
        ['es-ES']('Filtro de aceite')
        ['pt-PT']('Filtro de óleo')
        ['en-US']('Oil Filter')
        ['en-GB']('Oil Filter')
        ['en-AU']('Oil Filter')
        ['en-NZ']('Oil Filter')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Entfernt Verunreinigungen aus dem Motoröl.')
        ['it-IT']("Rimuove le impurità dall'olio motore.")
        ['nl-NL']('Verwijdert verontreinigingen uit de motorolie.')
        ['fr-FR']("Élimine les contaminants de l'huile moteur.")
        ['es-ES']('Elimina los contaminantes del aceite del motor.')
        ['pt-PT']('Remove contaminantes do óleo do motor.')
        ['en-US']('Removes contaminants from engine oil.')
        ['en-GB']('Removes contaminants from engine oil.')
        ['en-AU']('Removes contaminants from engine oil.')
        ['en-NZ']('Removes contaminants from engine oil.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('oil-filter')
        ['it-IT']('oil-filter')
        ['nl-NL']('oil-filter')
        ['fr-FR']('oil-filter')
        ['es-ES']('oil-filter')
        ['pt-PT']('oil-filter')
        ['en-US']('oil-filter')
        ['en-GB']('oil-filter')
        ['en-AU']('oil-filter')
        ['en-NZ']('oil-filter')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.oilFilter01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default oilFilter;
