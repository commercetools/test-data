import type {
  TCategoryDraft} from '@commercetools-test-data/category';
import {
  CategoryDraft
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

const fineGradersCategory = CategoryDraft.presets.sampleDataB2B
  .fineGraders()
  .build<TCategoryDraft>();

const ff890Op = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('ff890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('FF890 OP Feinplanierer')
        ['it-IT']('FF890 OP Livellatrice Fine')
        ['nl-NL']('FF890 OP Fijnnivelleermachine')
        ['fr-FR']('FF890 OP Niveleuse fine')
        ['en-AU']('FF890 OP Fine Grader')
        ['es-ES']('FF890 OP Niveladora fina')
        ['en-GB']('FF890 OP Fine Grader')
        ['en-NZ']('FF890 OP Fine Grader')
        ['pt-PT']('FF890 OP Niveladora Fina')
        ['en-US']('FF890 OP Fine Grader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Vielseitiger Feinplanierer mit speziellen Funktionen für präzises Nivellieren von Oberflächen.'
        )
        ['it-IT'](
          'Livellatrice fine versatile con caratteristiche specializzate per la graduazione precisa delle superfici.'
        )
        ['nl-NL'](
          'Veelzijdige fijnnivelleermachine met gespecialiseerde functies voor precieze oppervlakte egalisatie.'
        )
        ['fr-FR'](
          'Niveleuse fine polyvalente avec des fonctionnalités spécialisées pour un nivellement précis des surfaces.'
        )
        ['en-AU'](
          'Versatile fine grader with specialized features for precise surface grading.'
        )
        ['es-ES'](
          'Niveladora fina versátil con características especializadas para la nivelación precisa de superficies.'
        )
        ['en-GB'](
          'Versatile fine grader with specialized features for precise surface grading.'
        )
        ['en-NZ'](
          'Versatile fine grader with specialized features for precise surface grading.'
        )
        ['pt-PT'](
          'Niveladora fina versátil com recursos especializados para graduação precisa de superfícies.'
        )
        ['en-US'](
          'Versatile fine grader with specialized features for precise surface grading.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ff890-op')
        ['it-IT']('ff890-op')
        ['nl-NL']('ff890-op')
        ['fr-FR']('ff890-op')
        ['en-AU']('ff890-op')
        ['es-ES']('ff890-op')
        ['en-GB']('ff890-op')
        ['en-NZ']('ff890-op')
        ['pt-PT']('ff890-op')
        ['en-US']('ff890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ff890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.ff890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.ff890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(fineGradersCategory.key!),
    ]);

export default ff890Op;
