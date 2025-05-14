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

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const wheeledExcavatorsForMiningCategory = CategoryDraft.presets.sampleDataB2B
  .wheeledExcavatorsForMining()
  .build<TCategoryDraft>();

const nn456St = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('nn456-st')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('NN456 ST Radbagger für Bergbau')
        ['it-IT']('NN456 ST Escavatore su Ruote per Miniere')
        ['nl-NL']('NN456 ST Wiellader voor Mijnbouw')
        ['fr-FR']("NN456 ST Excavatrice sur roues pour l'exploitation minière")
        ['en-AU']('NN456 ST Wheeled Excavator for Mining')
        ['es-ES']('NN456 ST Excavadora de ruedas para minería')
        ['en-GB']('NN456 ST Wheeled Excavator for Mining')
        ['en-NZ']('NN456 ST Wheeled Excavator for Mining')
        ['pt-PT']('NN456 ST Escavadeira com Rodas para Mineração')
        ['en-US']('NN456 ST Wheeled Excavator for Mining')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Radbagger mit hoher Kapazität und speziellen Funktionen für effiziente Bergbauoperationen.')
        [
          'it-IT'
        ]('Escavatore su ruote ad alta capacità con caratteristiche specializzate per operazioni di estrazione efficienti.')
        [
          'nl-NL'
        ]('Hoogcapaciteits wiellader met gespecialiseerde functies voor efficiënte mijnbouwoperaties.')
        [
          'fr-FR'
        ]('Excavatrice sur roues haute capacité avec des fonctionnalités spécialisées pour des opérations minières efficaces.')
        [
          'en-AU'
        ]('High-capacity wheeled excavator with specialized features for efficient mining operations.')
        [
          'es-ES'
        ]('Excavadora de ruedas de alta capacidad con características especializadas para operaciones mineras eficientes.')
        [
          'en-GB'
        ]('High-capacity wheeled excavator with specialized features for efficient mining operations.')
        [
          'en-NZ'
        ]('High-capacity wheeled excavator with specialized features for efficient mining operations.')
        [
          'pt-PT'
        ]('Escavadeira com rodas de alta capacidade com recursos especializados para operações eficientes de mineração.')
        [
          'en-US'
        ]('High-capacity wheeled excavator with specialized features for efficient mining operations.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('nn456-st')
        ['it-IT']('nn456-st')
        ['nl-NL']('nn456-st')
        ['fr-FR']('nn456-st')
        ['en-AU']('nn456-st')
        ['es-ES']('nn456-st')
        ['en-GB']('nn456-st')
        ['en-NZ']('nn456-st')
        ['pt-PT']('nn456-st')
        ['en-US']('nn456-st')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.nn456St01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.nn456St02(),
      ProductVariantDraft.presets.sampleDataB2B.nn456St03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(wheeledExcavatorsForMiningCategory.key!),
    ]);

export default nn456St;
