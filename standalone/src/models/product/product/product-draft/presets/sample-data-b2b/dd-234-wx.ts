import { TBuilder } from '../../../../../../core';
import {
  CategoryDraft,
  TCategoryDraft,
} from '../../../../../category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '../../../../../product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
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

const fineGradersCategory = CategoryDraft.presets.sampleDataB2B
  .fineGraders()
  .build<TCategoryDraft>();

const dd234Wx = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('dd234-wx')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('DD234 WX Feinplanierer')
        ['it-IT']('DD234 WX Livellatrice Fine')
        ['nl-NL']('DD234 WX Fijnnivelleermachine')
        ['fr-FR']('DD234 WX Niveleuse fine')
        ['en-AU']('DD234 WX Fine Grader')
        ['es-ES']('DD234 WX Niveladora fina')
        ['en-GB']('DD234 WX Fine Grader')
        ['en-NZ']('DD234 WX Fine Grader')
        ['pt-PT']('DD234 WX Niveladora Fina')
        ['en-US']('DD234 WX Fine Grader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Präziser Feinplanierer für sorgfältiges Finish und Nivellierung von Oberflächen.')
        [
          'it-IT'
        ]('Livellatrice fine di precisione per finiture meticolose e graduazione di superfici.')
        [
          'nl-NL'
        ]('Precisie fijnnivelleermachine voor nauwkeurige afwerking en egalisatie van oppervlakken.')
        [
          'fr-FR'
        ]('Niveleuse fine de précision pour une finition méticuleuse et le nivellement des surfaces.')
        [
          'en-AU'
        ]('Precision fine grader for meticulous finishing and grading of surfaces.')
        [
          'es-ES'
        ]('Niveladora fina de precisión para un acabado meticuloso y la nivelación de superficies.')
        [
          'en-GB'
        ]('Precision fine grader for meticulous finishing and grading of surfaces.')
        [
          'en-NZ'
        ]('Precision fine grader for meticulous finishing and grading of surfaces.')
        [
          'pt-PT'
        ]('Niveladora fina de precisão para acabamento meticuloso e graduação de superfícies.')
        [
          'en-US'
        ]('Precision fine grader for meticulous finishing and grading of surfaces.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('dd234-wx')
        ['it-IT']('dd234-wx')
        ['nl-NL']('dd234-wx')
        ['fr-FR']('dd234-wx')
        ['en-AU']('dd234-wx')
        ['es-ES']('dd234-wx')
        ['en-GB']('dd234-wx')
        ['en-NZ']('dd234-wx')
        ['pt-PT']('dd234-wx')
        ['en-US']('dd234-wx')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.dd234Wx01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.dd234Wx02(),
      ProductVariantDraft.presets.sampleDataB2B.dd234Wx03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(fineGradersCategory.key!),
    ]);

export default dd234Wx;
