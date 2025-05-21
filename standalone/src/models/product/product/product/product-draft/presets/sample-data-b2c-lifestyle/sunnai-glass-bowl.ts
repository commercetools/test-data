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
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const sunnaiGlassBowlProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .productSets()
    .build<TProductTypeDraft>();

const bowlsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bowls()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const bakewareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bakeware()
  .build<TCategoryDraft>();

const sunnaiGlassBowl = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('sunnai-glass-bowl')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Sunnai Glass Bowl')
        ['en-GB']('Sunnai Glass Bowl')
        ['de-DE']('Glasschale >Sunnai<')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.\n\nThe glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.\n\nOverall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.')
        [
          'en-GB'
        ]('These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.\n\nThe glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.\n\nOverall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.')
        [
          'de-DE'
        ]('Diese Glasschalen eignen sich ideal zum Servieren einer Vielzahl von Speisen, darunter Salate, Obst, Desserts und Snacks. Sie sind eine beliebte Wahl für formelle Dinnerpartys und besondere Anlässe sowie für den täglichen Gebrauch.\n\nDas Glas ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gewaschen werden. Die Schale ist zudem spülmaschinenfest. Das Glasmaterial ist so verarbeitet, dass es keine Aromen oder Gerüche aus den Lebensmitteln aufnimmt.\n\nDie Glasschale ist eine schöne und praktische Wahl zum Präsentieren und Servieren von Speisen. Ihre Transparenz und Schlichtheit machen sie zu einem vielseitigen und zeitlosen Begleiter, der für eine Vielzahl von Anlässen verwendet werden kann.\n')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('sunnai-glass-bowl')
        ['en-GB']('sunnai-glass-bowl')
        ['de-DE']('sunnai-glaskugel')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(sunnaiGlassBowlProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.sunnaiGlassBowl01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataB2CLifestyle.sunnaiGlassBowl02(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(bowlsDraft.key!),
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(bakewareDraft.key!),
    ]);

export default sunnaiGlassBowl;
