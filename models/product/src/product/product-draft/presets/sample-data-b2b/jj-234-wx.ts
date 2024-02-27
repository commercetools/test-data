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

const landfillCompactorsCategory = CategoryDraft.presets.sampleDataB2B
  .landfillCompactors()
  .build<TCategoryDraft>();

const jj234Wx = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('jj234-wx')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('JJ234 WX Deponie-Verdichter')
        ['it-IT']('JJ234 WX Compattatore per Discariche')
        ['en-UK']('JJ234 WX Landfill Compactor')
        ['nl-NL']('JJ234 WX Stortplaatsverdichter')
        ['fr-FR']('JJ234 WX Compacteur de décharge')
        ['en-AU']('JJ234 WX Landfill Compactor')
        ['es-ES']('JJ234 WX Compactador de vertedero')
        ['en-GB']('JJ234 WX Landfill Compactor')
        ['en-NZ']('JJ234 WX Landfill Compactor')
        ['pt-PT']('JJ234 WX Compactador de Aterro')
        ['en-US']('JJ234 WX Landfill Compactor')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Hochleistungs-Deponie-Verdichter für effiziente Verdichtung von Abfällen auf Deponiestandorten.'
        )
        ['it-IT'](
          'Compattatore per discariche ad alta capacità per la compattazione efficiente dei rifiuti nei siti di discarica.'
        )
        ['en-UK'](
          'High-capacity landfill compactor for efficient compaction of waste in landfill sites.'
        )
        ['nl-NL'](
          'Hoogcapaciteits stortplaatsverdichter voor efficiënte verdichting van afval op stortplaatsen.'
        )
        ['fr-FR'](
          'Compacteur de décharge haute capacité pour le compactage efficace des déchets sur les sites d&#39;enfouissement.'
        )
        ['en-AU'](
          'High-capacity landfill compactor for efficient compaction of waste in landfill sites.'
        )
        ['es-ES'](
          'Compactador de vertedero de alta capacidad para la compactación eficiente de residuos en vertederos.'
        )
        ['en-GB'](
          'High-capacity landfill compactor for efficient compaction of waste in landfill sites.'
        )
        ['en-NZ'](
          'High-capacity landfill compactor for efficient compaction of waste in landfill sites.'
        )
        ['pt-PT'](
          'Compactador de aterro de alta capacidade para compactação eficiente de resíduos em aterros sanitários.'
        )
        ['en-US'](
          'High-capacity landfill compactor for efficient compaction of waste in landfill sites.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('jj234-wx')
        ['it-IT']('jj234-wx')
        ['en-UK']('jj234-wx')
        ['nl-NL']('jj234-wx')
        ['fr-FR']('jj234-wx')
        ['en-AU']('jj234-wx')
        ['es-ES']('jj234-wx')
        ['en-GB']('jj234-wx')
        ['en-NZ']('jj234-wx')
        ['pt-PT']('jj234-wx')
        ['en-US']('jj234-wx')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.jj234Wx01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.jj234Wx02(),
      ProductVariantDraft.presets.sampleDataB2B.jj234Wx03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(landfillCompactorsCategory.key!),
    ]);

export default jj234Wx;
