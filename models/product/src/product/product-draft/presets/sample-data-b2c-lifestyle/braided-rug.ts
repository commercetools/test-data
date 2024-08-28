import type {
  TCategoryDraft} from '@commercetools-test-data/category';
import {
  CategoryDraft
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
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const braidedRugProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const braidedRug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('braided-rug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Braided Rug')
        ['en-GB']('Braided Rug')
        ['de-DE']('Geflochtener Teppich')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.')
        [
          'en-US'
        ]('A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.')
        [
          'de-DE'
        ]('Dieser geflochtene, runde Juteteppich für das Wohnzimmer ist ein stilvolles und natürliches Wohnaccessoire, welches jedem Raum Wärme und Struktur verleiht. Der Teppich besteht aus strapazierfähigen und nachhaltigen Jutefasern, die zu einer runden Form zusammengeflochten sind.  Das Flechtmuster des Teppichs erzeugt eine strukturierte Oberfläche, die sowohl weich als auch strapazierfähig ist. Die Naturfasern der Jute verleihen dem Teppich ein warmes und erdiges Aussehen und machen ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu rustikal und unkonventionell.  Die runde Form des Teppichs ist ideal, um einen gemütlichen und intimen Sitzbereich in einem größeren Wohnzimmer zu schaffen oder um einem kleineren Raum visuelle Finesse zu verleihen. Ein geflochtener runder Juteteppich eine stilvolle und natürliche Möglichkeit, einem Wohnzimmer Wärme und Textur zu verleihen. Seine langlebige und nachhaltige Konstruktion, kombiniert mit seinem warmen und erdigen Aussehen, machen es zu einem vielseitigen und zeitlosen Wohnaccessoire, an dem Sie jahrelang Freude haben werden.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('braided-rug')
        ['en-GB']('braided-rug')
        ['de-DE']('geflochtener-teppich')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(braidedRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.braidedRug01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(rugsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default braidedRug;
