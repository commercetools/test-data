import { TBuilder } from '../../../../../../core';
import { CategoryDraft, TCategoryDraft } from '../../../../../category';
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

const heavyLiftingAndSpecializedEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyLiftingAndSpecializedEquipment()
    .build<TProductTypeDraft>();

const quarryingHammersCategory = CategoryDraft.presets.sampleDataB2B
  .quarryingHammers()
  .build<TCategoryDraft>();

const fff456St = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('fff456-st')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('FFF456 ST Steinbruchhammer')
        ['it-IT']('FFF456 ST Martello per Cave')
        ['nl-NL']('FFF456 ST Steengroevehamer')
        ['fr-FR']('FFF456 ST Marteau de carrière')
        ['en-AU']('FFF456 ST Quarrying Hammer')
        ['es-ES']('FFF456 ST Martillo de cantera')
        ['en-GB']('FFF456 ST Quarrying Hammer')
        ['en-NZ']('FFF456 ST Quarrying Hammer')
        ['pt-PT']('FFF456 ST Martelo de Pedreira')
        ['en-US']('FFF456 ST Quarrying Hammer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Schwerlast-Steinbruchhammer für effiziente Gesteinsgewinnung in Steinbruch- und Bergbauoperationen.')
        [
          'it-IT'
        ]("Martello pesante per cave per l'estrazione efficiente di roccia in operazioni di cava e minerarie.")
        [
          'nl-NL'
        ]('Zware steengroevehamer voor efficiënte rotsontginning in steengroeve- en mijnbouwoperaties.')
        [
          'fr-FR'
        ]("Marteau de carrière robuste pour l'extraction efficace de roches dans les opérations de carrière et d'exploitation minière.")
        [
          'en-AU'
        ]('Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.')
        [
          'es-ES'
        ]('Martillo de cantera resistente para una extracción eficiente de rocas en operaciones de canteras y minería.')
        [
          'en-GB'
        ]('Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.')
        [
          'en-NZ'
        ]('Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.')
        [
          'pt-PT'
        ]('Martelo de pedreira de serviço pesado para extração eficiente de rochas em operações de pedreiras e mineração.')
        [
          'en-US'
        ]('Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('fff456-st')
        ['it-IT']('fff456-st')
        ['nl-NL']('fff456-st')
        ['fr-FR']('fff456-st')
        ['en-AU']('fff456-st')
        ['es-ES']('fff456-st')
        ['en-GB']('fff456-st')
        ['en-NZ']('fff456-st')
        ['pt-PT']('fff456-st')
        ['en-US']('fff456-st')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(heavyLiftingAndSpecializedEquipmentProductType.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.fff456St01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.fff456St02(),
      ProductVariantDraft.presets.sampleDataB2B.fff456St03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(quarryingHammersCategory.key!),
    ]);

export default fff456St;
