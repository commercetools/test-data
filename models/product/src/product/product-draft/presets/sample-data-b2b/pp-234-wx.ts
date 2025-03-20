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

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const railroadWheeledExcavatorsCategory = CategoryDraft.presets.sampleDataB2B
  .railroadWheeledExcavators()
  .build<TCategoryDraft>();

const pp234Wx = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('pp234-wx')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('PP234 WX Railroad Schienenradbagger')
        ['it-IT']('PP234 WX Escavatore su Ruote per Ferrovie')
        ['nl-NL']('PP234 WX Spoorweg Wiellader Graafmachine')
        ['fr-FR']('PP234 WX Railroad Excavatrice sur roues pour chemin de fer')
        ['en-AU']('PP234 WX Railroad Wheeled Excavator')
        ['es-ES']('PP234 WX Railroad Excavadora de ruedas para ferrocarril')
        ['en-GB']('PP234 WX Railroad Wheeled Excavator')
        ['en-NZ']('PP234 WX Railroad Wheeled Excavator')
        ['pt-PT']('PP234 WX Escavadeira com Rodas para Ferrovias')
        ['en-US']('PP234 WX Railroad Wheeled Excavator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Spezialisierter Schienenradbagger für effiziente Arbeiten auf Eisenbahngleisen.')
        [
          'it-IT'
        ]('Escavatore su ruote specializzato per ferrovie per operazioni efficienti sui binari ferroviari.')
        [
          'nl-NL'
        ]('Gespecialiseerde spoorweg wiellader graafmachine voor efficiënte operaties op spoorwegen.')
        [
          'fr-FR'
        ]('Excavatrice sur roues spécialisée pour des opérations efficaces sur les voies ferrées.')
        [
          'en-AU'
        ]('Specialized railroad wheeled excavator for efficient operations on railway tracks.')
        [
          'es-ES'
        ]('Excavadora de ruedas especializada para operaciones eficientes en vías férreas.')
        [
          'en-GB'
        ]('Specialized railroad wheeled excavator for efficient operations on railway tracks.')
        [
          'en-NZ'
        ]('Specialized railroad wheeled excavator for efficient operations on railway tracks.')
        [
          'pt-PT'
        ]('Escavadeira com rodas especializada para ferrovias para operações eficientes em trilhos ferroviários.')
        [
          'en-US'
        ]('Specialized railroad wheeled excavator for efficient operations on railway tracks.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('pp234-wx')
        ['it-IT']('pp234-wx')
        ['nl-NL']('pp234-wx')
        ['fr-FR']('pp234-wx')
        ['en-AU']('pp234-wx')
        ['es-ES']('pp234-wx')
        ['en-GB']('pp234-wx')
        ['en-NZ']('pp234-wx')
        ['pt-PT']('pp234-wx')
        ['en-US']('pp234-wx')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(heavyEarthmovingAndConstructionEquipmentProductType.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.pp234Wx01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.pp234Wx02(),
      ProductVariantDraft.presets.sampleDataB2B.pp234Wx03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(railroadWheeledExcavatorsCategory.key!),
    ]);

export default pp234Wx;
