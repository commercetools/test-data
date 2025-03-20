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

const railroadWheeledExcavatorsCategory = CategoryDraft.presets.sampleDataB2B
  .railroadWheeledExcavators()
  .build<TCategoryDraft>();

const rr890Op = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('rr890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('RR890 OP Railroad Schienenradbagger')
        ['it-IT']('RR890 OP Escavatore su Ruote per Ferrovie')
        ['nl-NL']('RR890 OP Spoorweg Wiellader Graafmachine')
        ['fr-FR']('RR890 OP Railroad Excavatrice sur roues pour chemin de fer')
        ['en-AU']('RR890 OP Railroad Wheeled Excavator')
        ['es-ES']('RR890 OP Railroad Excavadora de ruedas para ferrocarril')
        ['en-GB']('RR890 OP Railroad Wheeled Excavator')
        ['en-NZ']('RR890 OP Railroad Wheeled Excavator')
        ['pt-PT']('RR890 OP Escavadeira Rodoviária para Ferrovias')
        ['en-US']('RR890 OP Railroad Wheeled Excavator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Schienenradbagger mit speziellen Funktionen für verschiedene Aufgaben im Bahnbau.')
        [
          'it-IT'
        ]('Escavatore su ruote per ferrovie versatile con caratteristiche specializzate per vari compiti nella costruzione di ferrovie.')
        [
          'nl-NL'
        ]('Veelzijdige spoorweg wiellader graafmachine met gespecialiseerde functies voor diverse spoorwegbouwtaken.')
        [
          'fr-FR'
        ]('Excavatrice sur roues polyvalente avec des fonctionnalités spécialisées pour diverses tâches de construction ferroviaire.')
        [
          'en-AU'
        ]('Versatile railroad wheeled excavator with specialized features for various railway construction tasks.')
        [
          'es-ES'
        ]('Excavadora de ruedas versátil con características especializadas para diversas tareas de construcción ferroviaria.')
        [
          'en-GB'
        ]('Versatile railroad wheeled excavator with specialized features for various railway construction tasks.')
        [
          'en-NZ'
        ]('Versatile railroad wheeled excavator with specialized features for various railway construction tasks.')
        [
          'pt-PT'
        ]('Escavadeira rodoviária versátil com características especializadas para várias tarefas de construção ferroviária.')
        [
          'en-US'
        ]('Versatile railroad wheeled excavator with specialized features for various railway construction tasks.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('rr890-op')
        ['it-IT']('rr890-op')
        ['nl-NL']('rr890-op')
        ['fr-FR']('rr890-op')
        ['en-AU']('rr890-op')
        ['es-ES']('rr890-op')
        ['en-GB']('rr890-op')
        ['en-NZ']('rr890-op')
        ['pt-PT']('rr890-op')
        ['en-US']('rr890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.rr890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.rr890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.rr890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(railroadWheeledExcavatorsCategory.key!),
    ]);

export default rr890Op;
