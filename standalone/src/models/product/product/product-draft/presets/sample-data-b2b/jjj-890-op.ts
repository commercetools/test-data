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

const pilingHammersCategory = CategoryDraft.presets.sampleDataB2B
  .pilingHammers()
  .build<TCategoryDraft>();

const jjj890Op = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('jjj890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('JJJ890 OP Rammpfahlhammer')
        ['it-IT']('JJJ890 OP Martello per Pali')
        ['nl-NL']('JJJ890 OP Heihamer')
        ['fr-FR']('JJJ890 OP Marteau de battage')
        ['en-AU']('JJJ890 OP Piling Hammer')
        ['es-ES']('JJJ890 OP Martillo de pilotaje')
        ['en-GB']('JJJ890 OP Piling Hammer')
        ['en-NZ']('JJJ890 OP Piling Hammer')
        ['pt-PT']('JJJ890 OP Martelo de Cravação')
        ['en-US']('JJJ890 OP Piling Hammer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Rammpfahlhammer für verschiedene Rammarbeiten im Bau und in Infrastrukturprojekten geeignet.')
        [
          'it-IT'
        ]('Martello versatile per pali adatto per vari compiti di piantare pali in progetti di costruzione e infrastruttura.')
        [
          'nl-NL'
        ]('Veelzijdige heihamer geschikt voor diverse heiwerkzaamheden in bouw- en infrastructuurprojecten.')
        [
          'fr-FR'
        ]("Marteau de battage polyvalent adapté à diverses tâches de fonçage de fondation dans des projets de construction et d'infrastructure.")
        [
          'en-AU'
        ]('Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.')
        [
          'es-ES'
        ]('Martillo de pilotaje versátil adecuado para diversas tareas de pilotes de cimentación en proyectos de construcción e infraestructura.')
        [
          'en-GB'
        ]('Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.')
        [
          'en-NZ'
        ]('Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.')
        [
          'pt-PT'
        ]('Martelo de cravação versátil adequado para várias tarefas de cravação de fundações em projetos de construção e infraestrutura.')
        [
          'en-US'
        ]('Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('jjj890-op')
        ['it-IT']('jjj890-op')
        ['nl-NL']('jjj890-op')
        ['fr-FR']('jjj890-op')
        ['en-AU']('jjj890-op')
        ['es-ES']('jjj890-op')
        ['en-GB']('jjj890-op')
        ['en-NZ']('jjj890-op')
        ['pt-PT']('jjj890-op')
        ['en-US']('jjj890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.jjj890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.jjj890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.jjj890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(pilingHammersCategory.key!),
    ]);

export default jjj890Op;
