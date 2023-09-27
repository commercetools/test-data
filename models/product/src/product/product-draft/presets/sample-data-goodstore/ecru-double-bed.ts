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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const ecruDoubleBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodStore
  .beds()
  .build<TCategoryDraft>();

const ecruDoubleBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('ecru-double-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Ecru Double Bed')
        ['de-DE']('Ecru Doppelbett')
        ['en-US']('Ecru Double Bed')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.'
        )
        ['de-DE'](
          'Ein Doppelbett mit Sofakopfteil ist ein einzigartiges und vielseitiges Möbelstück, das den Komfort eines Bettes mit der Funktionalität eines Sofas verbindet. Der Bettrahmen ist rechteckig und groß genug, um eine Standard-Doppelmatratze aufzunehmen. Das Kopfteil hat die Form eines Sofas, das oben am Bettrahmen befestigt ist. Das Kopfteil des Sofas bietet eine bequeme Rückenlehne zum Sitzen im Bett, um zu lesen, fernzusehen oder an einem Laptop zu arbeiten. Das Kopfteil des Sofas ist mit einem weichen und strapazierfähigen Stoff bezogen und bietet eine bequeme Sitzfläche. Insgesamt ist ein Queensize-Bett mit Sofa-Kopfteil ein praktisches und stilvolles Möbelstück, das jedem Schlafzimmer sowohl Komfort als auch Funktionalität verleiht.'
        )
        ['en-US'](
          'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('ecru-double-bed')
        ['de-DE']('ecru-doppelbett')
        ['en-US']('ecru-double-bed')
    )
    .productType(
      KeyReference.presets.productType().key(ecruDoubleBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.ecruDoubleBed01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
    ]);

export default ecruDoubleBed;
