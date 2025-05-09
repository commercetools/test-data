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

const genericProductProductType = ProductTypeDraft.presets.sampleDataB2B
  .genericProduct()
  .build<TProductTypeDraft>();

const sparePartsCategory = CategoryDraft.presets.sampleDataB2B
  .spareParts()
  .build<TCategoryDraft>();

const taperedRollerBearing = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('tapered-roller-bearing')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kegelrollenlager')
        ['it-IT']('Cuscinetto a rulli conici')
        ['nl-NL']('Kegellager')
        ['fr-FR']('Roulement à rouleaux coniques')
        ['es-ES']('Rodamiento de rodillos cónicos')
        ['pt-PT']('Rolamento de rolos cônicos')
        ['en-US']('Tapered Roller Bearing')
        ['en-GB']('Tapered Roller Bearing')
        ['en-AU']('Tapered Roller Bearing')
        ['en-NZ']('Tapered Roller Bearing')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Wird in Radnaben und anderen Komponenten verwendet.')
        ['it-IT']('Utilizzato nei mozzi delle ruote e in altri componenti.')
        ['nl-NL']('Gebruikt in wielnaven en andere componenten.')
        ['fr-FR']('Utilisé dans les moyeux de roue et autres composants.')
        ['es-ES']('Se utiliza en bujes de rueda y otros componentes.')
        ['pt-PT']('Usado em cubos de roda e outros componentes.')
        ['en-US']('Used in wheel hubs and other components.')
        ['en-GB']('Used in wheel hubs and other components.')
        ['en-AU']('Used in wheel hubs and other components.')
        ['en-NZ']('Used in wheel hubs and other components.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('tapered-roller-bearing')
        ['it-IT']('tapered-roller-bearing')
        ['nl-NL']('tapered-roller-bearing')
        ['fr-FR']('tapered-roller-bearing')
        ['es-ES']('tapered-roller-bearing')
        ['pt-PT']('tapered-roller-bearing')
        ['en-US']('tapered-roller-bearing')
        ['en-GB']('tapered-roller-bearing')
        ['en-AU']('tapered-roller-bearing')
        ['en-NZ']('tapered-roller-bearing')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(genericProductProductType.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2B.taperedRollerBearing01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default taperedRollerBearing;
