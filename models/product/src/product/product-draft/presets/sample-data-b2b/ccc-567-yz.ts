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

const heavyLiftingAndSpecializedEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyLiftingAndSpecializedEquipment()
    .build<TProductTypeDraft>();

const productionDrillsCategory = CategoryDraft.presets.sampleDataB2B
  .productionDrills()
  .build<TCategoryDraft>();

const ccc567Yz = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('ccc567-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('CCC567 YZ Produktionsbohrer')
        ['it-IT']('CCC567 YZ Trapano per Produzione')
        ['nl-NL']('CCC567 YZ Productieboor')
        ['fr-FR']('CCC567 YZ Forage de production')
        ['en-AU']('CCC567 YZ Production Drill')
        ['es-ES']('CCC567 YZ Perforadora de producción')
        ['en-GB']('CCC567 YZ Production Drill')
        ['en-NZ']('CCC567 YZ Production Drill')
        ['pt-PT']('CCC567 YZ Perfuratriz de Produção')
        ['en-US']('CCC567 YZ Production Drill')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Robuster Produktionsbohrer mit fortschrittlichen Bohrfähigkeiten für kontinuierliche Bergbauoperationen im Schwerlastbereich.'
        )
        ['it-IT'](
          'Trapano robusto per produzione con capacità avanzate di trapanazione per operazioni minerarie continue e pesanti.'
        )
        ['nl-NL'](
          'Robuuste productieboor met geavanceerde boorcapaciteiten voor continue zware mijnbouwoperaties.'
        )
        ['fr-FR'](
          'Forage de production robuste avec des capacités de forage avancées pour des opérations minières continues et intensives.'
        )
        ['en-AU'](
          'Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.'
        )
        ['es-ES'](
          'Perforadora de producción robusta con capacidades avanzadas de perforación para operaciones mineras continuas y de servicio pesado.'
        )
        ['en-GB'](
          'Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.'
        )
        ['en-NZ'](
          'Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.'
        )
        ['pt-PT'](
          'Perfuratriz de produção robusta com capacidades avançadas de perfuração para operações contínuas de mineração pesada.'
        )
        ['en-US'](
          'Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ccc567-yz')
        ['it-IT']('ccc567-yz')
        ['nl-NL']('ccc567-yz')
        ['fr-FR']('ccc567-yz')
        ['en-AU']('ccc567-yz')
        ['es-ES']('ccc567-yz')
        ['en-GB']('ccc567-yz')
        ['en-NZ']('ccc567-yz')
        ['pt-PT']('ccc567-yz')
        ['en-US']('ccc567-yz')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ccc567Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.ccc567Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.ccc567Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(productionDrillsCategory.key!),
    ]);

export default ccc567Yz;
