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

const constructionLoadersCategory = CategoryDraft.presets.sampleDataB2B
  .constructionLoaders()
  .build<TCategoryDraft>();

const c789Uv = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('c789-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('C789 UV Bau-Lader')
        ['it-IT']('C789 UV Caricatore per Costruzioni')
        ['nl-NL']('C789 UV Bouwlader')
        ['fr-FR']('C789 UV Chargeur de construction')
        ['en-AU']('C789 UV Construction Loader')
        ['es-ES']('C789 UV Cargador de construcción')
        ['en-GB']('C789 UV Construction Loader')
        ['en-NZ']('C789 UV Construction Loader')
        ['pt-PT']('C789 UV Carregadeira de Construção')
        ['en-US']('C789 UV Construction Loader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Baulader mit hoher Kapazität und fortschrittlichen Funktionen für anspruchsvolle Bauaufgaben.')
        [
          'it-IT'
        ]('Caricatore per costruzioni ad alta capacità con caratteristiche avanzate per compiti gravosi di costruzione.')
        [
          'nl-NL'
        ]('Hoogcapaciteits bouwlader met geavanceerde functies voor zware bouwtaken.')
        [
          'fr-FR'
        ]('Chargeur de construction haute capacité avec des fonctionnalités avancées pour les tâches de construction intensives.')
        [
          'en-AU'
        ]('High-capacity construction loader with advanced features for heavy-duty construction tasks.')
        [
          'es-ES'
        ]('Cargador de construcción de alta capacidad con características avanzadas para tareas de construcción pesada.')
        [
          'en-GB'
        ]('High-capacity construction loader with advanced features for heavy-duty construction tasks.')
        [
          'en-NZ'
        ]('High-capacity construction loader with advanced features for heavy-duty construction tasks.')
        [
          'pt-PT'
        ]('Carregadeira de construção de alta capacidade com recursos avançados para tarefas pesadas de construção.')
        [
          'en-US'
        ]('High-capacity construction loader with advanced features for heavy-duty construction tasks.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('c789-uv')
        ['it-IT']('c789-uv')
        ['nl-NL']('c789-uv')
        ['fr-FR']('c789-uv')
        ['en-AU']('c789-uv')
        ['es-ES']('c789-uv')
        ['en-GB']('c789-uv')
        ['en-NZ']('c789-uv')
        ['pt-PT']('c789-uv')
        ['en-US']('c789-uv')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.c789Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.c789Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.c789Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(constructionLoadersCategory.key!),
    ]);

export default c789Uv;
