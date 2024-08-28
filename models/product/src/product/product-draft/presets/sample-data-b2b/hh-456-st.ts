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

const pneumaticRollersCategory = CategoryDraft.presets.sampleDataB2B
  .pneumaticRollers()
  .build<TCategoryDraft>();

const hh456St = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('hh456-st')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('HH456 ST Pneumatische Walze')
        ['it-IT']('HH456 ST Rullo Pneumatico')
        ['nl-NL']('HH456 ST Pneumatische Wals')
        ['fr-FR']('HH456 ST Rouleau pneumatique')
        ['en-AU']('HH456 ST Pneumatic Roller')
        ['es-ES']('HH456 ST Rodillo neumático')
        ['en-GB']('HH456 ST Pneumatic Roller')
        ['en-NZ']('HH456 ST Pneumatic Roller')
        ['pt-PT']('HH456 ST Rolo Pneumático')
        ['en-US']('HH456 ST Pneumatic Roller')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Vielseitiger Pneumatikwalze für effektive Verdichtung verschiedener Oberflächen.'
        )
        ['it-IT'](
          'Rullo pneumatico versatile per la compattazione efficace di varie superfici.'
        )
        ['nl-NL'](
          'Veelzijdige pneumatische wals voor effectieve verdichting van diverse oppervlakken.'
        )
        ['fr-FR'](
          'Rouleau pneumatique polyvalent pour la compactage efficace de diverses surfaces.'
        )
        ['en-AU'](
          'Versatile pneumatic roller for effective compaction of various surfaces.'
        )
        ['es-ES'](
          'Rodillo neumático versátil para la compactación efectiva de diversas superficies.'
        )
        ['en-GB'](
          'Versatile pneumatic roller for effective compaction of various surfaces.'
        )
        ['en-NZ'](
          'Versatile pneumatic roller for effective compaction of various surfaces.'
        )
        ['pt-PT'](
          'Rolo pneumático versátil para compactação eficaz de várias superfícies.'
        )
        ['en-US'](
          'Versatile pneumatic roller for effective compaction of various surfaces.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('hh456-st')
        ['it-IT']('hh456-st')
        ['nl-NL']('hh456-st')
        ['fr-FR']('hh456-st')
        ['en-AU']('hh456-st')
        ['es-ES']('hh456-st')
        ['en-GB']('hh456-st')
        ['en-NZ']('hh456-st')
        ['pt-PT']('hh456-st')
        ['en-US']('hh456-st')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.hh456St01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.hh456St02(),
      ProductVariantDraft.presets.sampleDataB2B.hh456St03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(pneumaticRollersCategory.key!),
    ]);

export default hh456St;
