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

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const roadGradersCategory = CategoryDraft.presets.sampleDataB2B
  .roadGraders()
  .build<TCategoryDraft>();

const aa123Qr = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('aa123-qr')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('AA123 QR Straßenplanierer')
        ['it-IT']('AA123 QR Livellatrice Stradale')
        ['en-UK']('AA123 QR Road Grader')
        ['nl-NL']('AA123 QR Wegnivelleermachine')
        ['fr-FR']('AA123 QR Niveleuse routière')
        ['en-AU']('AA123 QR Road Grader')
        ['es-ES']('AA123 QR Niveladora de carreteras')
        ['en-GB']('AA123 QR Road Grader')
        ['en-NZ']('AA123 QR Road Grader')
        ['pt-PT']('AA123 QR Niveladora de Estradas')
        ['en-US']('AA123 QR Road Grader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Vielseitiger Straßenplanierer für präzises Nivellieren und Planieren von Straßenoberflächen.'
        )
        ['it-IT'](
          'Livellatrice stradale versatile per livellamento e graduazione precisi delle superfici stradali.'
        )
        ['en-UK'](
          'Versatile road grader for precise leveling and grading of road surfaces.'
        )
        ['nl-NL'](
          'Veelzijdige wegnivelleermachine voor precieze nivellering en egalisering van wegoppervlakken.'
        )
        ['fr-FR'](
          'Niveleuse routière polyvalente pour le nivellement et le nivellement précis des surfaces routières.'
        )
        ['en-AU'](
          'Versatile road grader for precise leveling and grading of road surfaces.'
        )
        ['es-ES'](
          'Niveladora de carreteras versátil para el nivelado preciso y la nivelación de superficies de carreteras.'
        )
        ['en-GB'](
          'Versatile road grader for precise leveling and grading of road surfaces.'
        )
        ['en-NZ'](
          'Versatile road grader for precise leveling and grading of road surfaces.'
        )
        ['pt-PT'](
          'Niveladora de estradas versátil para nivelamento preciso e graduação de superfícies rodoviárias.'
        )
        ['en-US'](
          'Versatile road grader for precise leveling and grading of road surfaces.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('aa123-qr')
        ['it-IT']('aa123-qr')
        ['en-UK']('aa123-qr')
        ['nl-NL']('aa123-qr')
        ['fr-FR']('aa123-qr')
        ['en-AU']('aa123-qr')
        ['es-ES']('aa123-qr')
        ['en-GB']('aa123-qr')
        ['en-NZ']('aa123-qr')
        ['pt-PT']('aa123-qr')
        ['en-US']('aa123-qr')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.aa123Qr01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.aa123Qr02(),
      ProductVariantDraft.presets.sampleDataB2B.aa123Qr03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(roadGradersCategory.key!),
    ]);

export default aa123Qr;
