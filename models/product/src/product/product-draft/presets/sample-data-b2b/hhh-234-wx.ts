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

const heavyLiftingAndSpecializedEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyLiftingAndSpecializedEquipment()
    .build<TProductTypeDraft>();

const pilingHammersCategory = CategoryDraft.presets.sampleDataB2B
  .pilingHammers()
  .build<TCategoryDraft>();

const hhh234Wx = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('hhh234-wx')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('HHH234 WX Rammpfahlhammer')
        ['it-IT']('HHH234 WX Martello per Pali')
        ['en-UK']('HHH234 WX Piling Hammer')
        ['nl-NL']('HHH234 WX Heihamer')
        ['fr-FR']('HHH234 WX Marteau de battage')
        ['en-AU']('HHH234 WX Piling Hammer')
        ['es-ES']('HHH234 WX Martillo de pilotaje')
        ['en-GB']('HHH234 WX Piling Hammer')
        ['en-NZ']('HHH234 WX Piling Hammer')
        ['pt-PT']('HHH234 WX Martelo de Cravação')
        ['en-US']('HHH234 WX Piling Hammer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Hochleistungs-Rammpfahlhammer für effizientes und präzises Rammen von Fundamenten in Bauprojekten.'
        )
        ['it-IT'](
          'Martello per pali ad alta capacità progettato per piantare pali in modo efficiente e preciso in progetti edili.'
        )
        ['en-UK'](
          'High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.'
        )
        ['nl-NL'](
          'Hoogcapaciteits heihamer ontworpen voor efficiënt en nauwkeurig heien van funderingen in bouwprojecten.'
        )
        ['fr-FR'](
          'Marteau de battage haute capacité conçu pour un fonçage de fondation efficace et précis dans les projets de construction.'
        )
        ['en-AU'](
          'High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.'
        )
        ['es-ES'](
          'Martillo de pilotaje de gran capacidad diseñado para pilotes de cimentación eficientes y precisos en proyectos de construcción.'
        )
        ['en-GB'](
          'High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.'
        )
        ['en-NZ'](
          'High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.'
        )
        ['pt-PT'](
          'Martelo de cravação de alta capacidade projetado para cravação eficiente e precisa de fundações em projetos de construção.'
        )
        ['en-US'](
          'High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('hhh234-wx')
        ['it-IT']('hhh234-wx')
        ['en-UK']('hhh234-wx')
        ['nl-NL']('hhh234-wx')
        ['fr-FR']('hhh234-wx')
        ['en-AU']('hhh234-wx')
        ['es-ES']('hhh234-wx')
        ['en-GB']('hhh234-wx')
        ['en-NZ']('hhh234-wx')
        ['pt-PT']('hhh234-wx')
        ['en-US']('hhh234-wx')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.hhh234Wx01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.hhh234Wx02(),
      ProductVariantDraft.presets.sampleDataB2B.hhh234Wx03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(pilingHammersCategory.key!),
    ]);

export default hhh234Wx;
