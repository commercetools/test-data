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

const deepMiningExcavatorsCategory = CategoryDraft.presets.sampleDataB2B
  .deepMiningExcavators()
  .build<TCategoryDraft>();

const a789Bc = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('a789-bc')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('A789 BC Tiefbergbaubagger')
        ['it-IT']('A789 BC Escavatore per Miniere Profonde')
        ['nl-NL']('A789 BC Diepe Mijnbouw Graafmachine')
        ['fr-FR']('A789 BC Excavateur minier profond')
        ['en-AU']('A789 BC Deep Mining Excavator')
        ['es-ES']('A789 BC Excavadora minera profunda')
        ['en-GB']('A789 BC Deep Mining Excavator')
        ['en-NZ']('A789 BC Deep Mining Excavator')
        ['pt-PT']('A789 BC Escavadeira para Mineração Profunda')
        ['en-US']('A789 BC Deep Mining Excavator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Fortgeschrittener Tiefbergbaubagger mit Präzisionskontrolle für die Gewinnung von Ressourcen aus der Tiefe.'
        )
        ['it-IT'](
          'Escavatore avanzato per miniere profonde con controllo di precisione per l&#39;estrazione di risorse in profondità.'
        )
        ['nl-NL'](
          'Geavanceerde diepe mijnbouw graafmachine met precisiecontrole voor het extraheren van grondstoffen uit de diepte.'
        )
        ['fr-FR'](
          'Excavateur minier profond avancé avec contrôle de précision pour l&#39;extraction de ressources en profondeur.'
        )
        ['en-AU'](
          'Advanced deep mining excavator with precision control for extracting resources from depth.'
        )
        ['es-ES'](
          'Excavadora minera profunda avanzada con control de precisión para extraer recursos desde la profundidad.'
        )
        ['en-GB'](
          'Advanced deep mining excavator with precision control for extracting resources from depth.'
        )
        ['en-NZ'](
          'Advanced deep mining excavator with precision control for extracting resources from depth.'
        )
        ['pt-PT'](
          'Escavadeira avançada para mineração profunda com controle de precisão para extração de recursos das profundezas.'
        )
        ['en-US'](
          'Advanced deep mining excavator with precision control for extracting resources from depth.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('a789-bc')
        ['it-IT']('a789-bc')
        ['nl-NL']('a789-bc')
        ['fr-FR']('a789-bc')
        ['en-AU']('a789-bc')
        ['es-ES']('a789-bc')
        ['en-GB']('a789-bc')
        ['en-NZ']('a789-bc')
        ['pt-PT']('a789-bc')
        ['en-US']('a789-bc')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.a789Bc01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.a789Bc02(),
      ProductVariantDraft.presets.sampleDataB2B.a789Bc03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(deepMiningExcavatorsCategory.key!),
    ]);

export default a789Bc;
