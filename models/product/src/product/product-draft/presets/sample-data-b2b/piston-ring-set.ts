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

const pistonRingSet = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('piston-ring-set')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kolbenringsatz')
        ['it-IT']('Set di anelli del pistone')
        ['nl-NL']('Zuigerverenset')
        ['fr-FR']('Jeu de segments de piston')
        ['es-ES']('Juego de anillos de pistón')
        ['pt-PT']('Conjunto de anéis de pistão')
        ['en-US']('Piston Ring Set')
        ['en-GB']('Piston Ring Set')
        ['en-AU']('Piston Ring Set')
        ['en-NZ']('Piston Ring Set')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Dichtet den Verbrennungsraum ab und reguliert das Öl.')
        ['it-IT']("Sigilla la camera di combustione e regola l'olio.")
        ['nl-NL']('Dicht de verbrandingskamer af en reguleert de olie.')
        ['fr-FR']("Scelle la chambre de combustion et régule l'huile.")
        ['es-ES']('Sella la cámara de combustión y regula el aceite.')
        ['pt-PT']('Veda a câmara de combustão e regula o óleo.')
        ['en-US']('Seals the combustion chamber and regulates oil.')
        ['en-GB']('Seals the combustion chamber and regulates oil.')
        ['en-AU']('Seals the combustion chamber and regulates oil.')
        ['en-NZ']('Seals the combustion chamber and regulates oil.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('piston-ring-set')
        ['it-IT']('piston-ring-set')
        ['nl-NL']('piston-ring-set')
        ['fr-FR']('piston-ring-set')
        ['es-ES']('piston-ring-set')
        ['pt-PT']('piston-ring-set')
        ['en-US']('piston-ring-set')
        ['en-GB']('piston-ring-set')
        ['en-AU']('piston-ring-set')
        ['en-NZ']('piston-ring-set')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.pistonRingSet01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default pistonRingSet;
