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
import { productPriceMode } from '../../../constants';
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

const starterMotor = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('starter-motor')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Anlasser')
        ['it-IT']('Motorino di avviamento')
        ['nl-NL']('Startmotor')
        ['fr-FR']('Moteur de démarrage')
        ['es-ES']('Motor de arranque')
        ['pt-PT']('Motor de arranque')
        ['en-US']('Starter Motor')
        ['en-GB']('Starter Motor')
        ['en-AU']('Starter Motor')
        ['en-NZ']('Starter Motor')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Elektromotor, der den Motor startet.')
        ['it-IT']('Motore elettrico che avvia il motore.')
        ['nl-NL']('Elektromotor die de motor start.')
        ['fr-FR']('Moteur électrique qui démarre le moteur.')
        ['es-ES']('Motor eléctrico que arranca el motor.')
        ['pt-PT']('Motor elétrico que arranca o motor.')
        ['en-US']('Electric motor that starts the engine.')
        ['en-GB']('Electric motor that starts the engine.')
        ['en-AU']('Electric motor that starts the engine.')
        ['en-NZ']('Electric motor that starts the engine.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('starter-motor')
        ['it-IT']('starter-motor')
        ['nl-NL']('starter-motor')
        ['fr-FR']('starter-motor')
        ['es-ES']('starter-motor')
        ['pt-PT']('starter-motor')
        ['en-US']('starter-motor')
        ['en-GB']('starter-motor')
        ['en-AU']('starter-motor')
        ['en-NZ']('starter-motor')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.starterMotor01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default starterMotor;
