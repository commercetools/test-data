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

const harvestPlateProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const platesDraft = CategoryDraft.presets.sampleDataGoodStore
  .plates()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodStore
  .servingPlatters()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodStore
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const harvestPlate = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('harvest-plate')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Harvest Plate')
        ['en-GB']('Harvest Plate')
        ['de-DE']('Ernteplatte')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.'
        )
        ['en-US'](
          'This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.'
        )
        ['de-DE'](
          'Diese muschelförmige Servierplatte ist ideal zum Servieren von Meeresfrüchten wie Garnelen, Austern oder Sushi-Rollen, kann aber auch für andere Gerichte verwendet werden. Es ist eine beliebte Wahl für Strandpartys, Küstenrestaurants oder für diejenigen, die ihr Zuhause gerne mit nautischen Akzenten dekorieren. Insgesamt ist ein muschelförmiger Servierteller eine einzigartige und stilvolle Wahl zum Servieren von Speisen. Sein natürliches Aussehen und das vom Strand inspirierte Design machen es zu einer lustigen und skurrilen Ergänzung für jeden Essensanlass.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('harvest-plate')
        ['en-GB']('harvest-plate')
        ['de-DE']('ernteplatte')
    )
    .productType(
      KeyReference.presets.productType().key(harvestPlateProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.harvestPlate01()
    )
    .categories([
      KeyReference.presets.category().key(platesDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
    ]);

export default harvestPlate;
