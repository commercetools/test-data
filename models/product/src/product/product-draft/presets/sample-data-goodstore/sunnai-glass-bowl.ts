import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const sunnaiGlassBowlProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .productSets()
    .build<TProductTypeDraft>();

const bowlsDraft = CategoryDraft.presets.sampleDataGoodStore
  .bowls()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const bakewareDraft = CategoryDraft.presets.sampleDataGoodStore
  .bakeware()
  .build<TCategoryDraft>();

const sunnaiGlassBowl = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('sunnai-glass-bowl')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Sunnai Glass Bowl')
        ['en-GB']('Sunnai Glass Bowl')
        ['de-DE']('Sunnai Glasschale')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.\n\nThe glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.\n\nOverall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.'
        )
        ['en-GB'](
          'These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.\n\nThe glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.\n\nOverall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.'
        )
        ['de-DE'](
          'Diese Glasschalen sind ideal zum Servieren einer Vielzahl von Speisen, darunter Salate, Obst, Desserts und Snacks. Sie sind eine beliebte Wahl für formelle Dinnerpartys und besondere Anlässe sowie für den täglichen Gebrauch.\n\nDas Glas ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gereingt werden. Die Schale ist zudem spülmaschinenfest. Das Glasmaterial ist so verarbeitet, dass es keine Aromen oder Gerüche aus den Lebensmitteln aufnimmt.\n\nInsgesamt ist eine Glasschale eine schöne und praktische Wahl zum Präsentieren und Servieren von Speisen. Seine Transparenz und Einfachheit machen es zu einem vielseitigen und zeitlosen Stück, das für eine Vielzahl von Anlässen verwendet werden kann.'
        )
    )
    .metaDescription(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.\n\nThe glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.\n\nOverall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.'
        )
        ['en-GB'](
          'These glass bowls are ideal for serving a variety of foods, including salads, fruits, desserts, and snacks. They are a popular choice for formal dinner parties and special occasions, as well as for everyday use.\n\nThe glass material is easy to clean and maintain, and can be washed with soap and water or in a dishwasher. It is also non-reactive, meaning it will not absorb any flavors or odors from the food.\n\nOverall, a glass bowl used for serving food is a beautiful and practical choice for presenting and serving food. Its transparency and simplicity make it a versatile and timeless piece that can be used for a variety of occasions and settings.'
        )
        ['de-DE'](
          'Diese Glasschalen sind ideal zum Servieren einer Vielzahl von Speisen, darunter Salate, Obst, Desserts und Snacks. Sie sind eine beliebte Wahl für formelle Dinnerpartys und besondere Anlässe sowie für den täglichen Gebrauch.\n\nDas Glas ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gereingt werden. Die Schale ist zudem spülmaschinenfest. Das Glasmaterial ist so verarbeitet, dass es keine Aromen oder Gerüche aus den Lebensmitteln aufnimmt.\n\nInsgesamt ist eine Glasschale eine schöne und praktische Wahl zum Präsentieren und Servieren von Speisen. Seine Transparenz und Einfachheit machen es zu einem vielseitigen und zeitlosen Stück, das für eine Vielzahl von Anlässen verwendet werden kann.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('sunnai-glass-bowl')
        ['en-GB']('sunnai-glass-bowl')
        ['de-DE']('sunnai-glaskugel')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(sunnaiGlassBowlProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.sunnaiGlassBowl01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.sunnaiGlassBowl02(),
    ])
    .categories([
      KeyReference.presets.category().key(bowlsDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(bakewareDraft.key!),
    ]);

export default sunnaiGlassBowl;
