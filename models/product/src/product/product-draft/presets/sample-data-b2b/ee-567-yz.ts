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
import { ProductVariantDraft } from '../../../../product-variant';
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

const fineGradersCategory = CategoryDraft.presets.sampleDataB2B
  .fineGraders()
  .build<TCategoryDraft>();

const ee567Yz = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('ee567-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('EE567 YZ Feinplanierer')
        ['it-IT']('EE567 YZ Livellatrice Fine')
        ['nl-NL']('EE567 YZ Fijnnivelleermachine')
        ['fr-FR']('EE567 YZ Niveleuse fine')
        ['en-AU']('EE567 YZ Fine Grader')
        ['es-ES']('EE567 YZ Niveladora fina')
        ['en-GB']('EE567 YZ Fine Grader')
        ['en-NZ']('EE567 YZ Fine Grader')
        ['pt-PT']('EE567 YZ Niveladora Fina')
        ['en-US']('EE567 YZ Fine Grader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Feinplanierer mit hoher Kapazität und fortschrittlichen Funktionen für effizientes Finish von Oberflächen.')
        [
          'it-IT'
        ]('Livellatrice fine ad alta capacità con caratteristiche avanzate per una finitura efficiente delle superfici.')
        [
          'nl-NL'
        ]('Hoogcapaciteits fijnnivelleermachine met geavanceerde functies voor efficiënte oppervlakteafwerking.')
        [
          'fr-FR'
        ]('Niveleuse fine haute capacité avec des fonctionnalités avancées pour une finition de surface efficace.')
        [
          'en-AU'
        ]('High-capacity fine grader with advanced features for efficient surface finishing.')
        [
          'es-ES'
        ]('Niveladora fina de alta capacidad con características avanzadas para un acabado de superficie eficiente.')
        [
          'en-GB'
        ]('High-capacity fine grader with advanced features for efficient surface finishing.')
        [
          'en-NZ'
        ]('High-capacity fine grader with advanced features for efficient surface finishing.')
        [
          'pt-PT'
        ]('Niveladora fina de alta capacidade com recursos avançados para acabamento eficiente de superfícies.')
        [
          'en-US'
        ]('High-capacity fine grader with advanced features for efficient surface finishing.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ee567-yz')
        ['it-IT']('ee567-yz')
        ['nl-NL']('ee567-yz')
        ['fr-FR']('ee567-yz')
        ['en-AU']('ee567-yz')
        ['es-ES']('ee567-yz')
        ['en-GB']('ee567-yz')
        ['en-NZ']('ee567-yz')
        ['pt-PT']('ee567-yz')
        ['en-US']('ee567-yz')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ee567Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.ee567Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.ee567Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(fineGradersCategory.key!),
    ]);

export default ee567Yz;
