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

const genericProductProductType = ProductTypeDraft.presets.sampleDataB2B
  .genericProduct()
  .build<TProductTypeDraft>();

const sparePartsCategory = CategoryDraft.presets.sampleDataB2B
  .spareParts()
  .build<TCategoryDraft>();

const ledWorkLight = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('led-work-light')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('LED-Arbeitsleuchte')
        ['it-IT']('Luce di lavoro a LED')
        ['nl-NL']('LED-werklamp')
        ['fr-FR']('Lumière de travail LED')
        ['es-ES']('Luz de trabajo LED')
        ['pt-PT']('Luz de trabalho LED')
        ['en-US']('LED Work Light')
        ['en-GB']('LED Work Light')
        ['en-AU']('LED Work Light')
        ['en-NZ']('LED Work Light')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Bietet Beleuchtung für Arbeiten bei Nacht oder bei schwachem Licht.')
        [
          'it-IT'
        ]('Fornisce illuminazione per lavori notturni o in condizioni di scarsa luce.')
        [
          'nl-NL'
        ]('Zorgt voor verlichting voor nachtwerk of werk bij weinig licht.')
        [
          'fr-FR'
        ]('Fournit un éclairage pour le travail de nuit ou en faible luminosité.')
        [
          'es-ES'
        ]('Proporciona iluminación para trabajar de noche o en condiciones de poca luz.')
        [
          'pt-PT'
        ]('Fornece iluminação para trabalho noturno ou em condições de pouca luz.')
        ['en-US']('Provides illumination for night-time or low-light work.')
        ['en-GB']('Provides illumination for night-time or low-light work.')
        ['en-AU']('Provides illumination for night-time or low-light work.')
        ['en-NZ']('Provides illumination for night-time or low-light work.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('led-work-light')
        ['it-IT']('led-work-light')
        ['nl-NL']('led-work-light')
        ['fr-FR']('led-work-light')
        ['es-ES']('led-work-light')
        ['pt-PT']('led-work-light')
        ['en-US']('led-work-light')
        ['en-GB']('led-work-light')
        ['en-AU']('led-work-light')
        ['en-NZ']('led-work-light')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ledWorkLight01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default ledWorkLight;
