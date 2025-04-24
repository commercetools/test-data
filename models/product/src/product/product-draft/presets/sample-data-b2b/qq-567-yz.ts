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

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const railroadWheeledExcavatorsCategory = CategoryDraft.presets.sampleDataB2B
  .railroadWheeledExcavators()
  .build<TCategoryDraft>();

const qq567Yz = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('qq567-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('QQ567 YZ Railroad Schienenradbagger')
        ['it-IT']('QQ567 YZ Escavatore su Ruote per Ferrovie')
        ['nl-NL']('QQ567 YZ Spoorweg Wiellader Graafmachine')
        ['fr-FR']('QQ567 YZ Railroad Excavatrice sur roues pour chemin de fer')
        ['en-AU']('QQ567 YZ Railroad Wheeled Excavator')
        ['es-ES']('QQ567 YZ Railroad Excavadora de ruedas para ferrocarril')
        ['en-GB']('QQ567 YZ Railroad Wheeled Excavator')
        ['en-NZ']('QQ567 YZ Railroad Wheeled Excavator')
        ['pt-PT']('QQ567 YZ Escavadeira Rodoviária para Ferrovias')
        ['en-US']('QQ567 YZ Railroad Wheeled Excavator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Schienenradbagger mit hoher Kapazität und fortschrittlichen Funktionen für effizienten Bahnbau.')
        [
          'it-IT'
        ]('Escavatore su ruote per ferrovie ad alta capacità con caratteristiche avanzate per la costruzione efficiente di ferrovie.')
        [
          'nl-NL'
        ]('Hoogcapaciteits spoorweg wiellader graafmachine met geavanceerde functies voor efficiënte spoorwegbouw.')
        [
          'fr-FR'
        ]('Excavatrice sur roues pour chemin de fer haute capacité avec des fonctionnalités avancées pour une construction ferroviaire efficace.')
        [
          'en-AU'
        ]('High-capacity railroad wheeled excavator with advanced features for efficient railway construction.')
        [
          'es-ES'
        ]('Excavadora de ruedas para ferrocarril de alta capacidad con características avanzadas para una construcción ferroviaria eficiente.')
        [
          'en-GB'
        ]('High-capacity railroad wheeled excavator with advanced features for efficient railway construction.')
        [
          'en-NZ'
        ]('High-capacity railroad wheeled excavator with advanced features for efficient railway construction.')
        [
          'pt-PT'
        ]('Escavadeira rodoviária de alta capacidade com características avançadas para construção eficiente de ferrovias.')
        [
          'en-US'
        ]('High-capacity railroad wheeled excavator with advanced features for efficient railway construction.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('qq567-yz')
        ['it-IT']('qq567-yz')
        ['nl-NL']('qq567-yz')
        ['fr-FR']('qq567-yz')
        ['en-AU']('qq567-yz')
        ['es-ES']('qq567-yz')
        ['en-GB']('qq567-yz')
        ['en-NZ']('qq567-yz')
        ['pt-PT']('qq567-yz')
        ['en-US']('qq567-yz')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.qq567Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.qq567Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.qq567Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(railroadWheeledExcavatorsCategory.key!),
    ]);

export default qq567Yz;
