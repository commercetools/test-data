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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const ivoryPlateProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const platesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .plates()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .servingPlatters()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dinnerware()
  .build<TCategoryDraft>();

const ivoryPlate = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('ivory-plate')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Ivory Plate')
        ['en-GB']('Ivory Plate')
        ['de-DE']('Elfenbeinteller')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.')
        [
          'en-US'
        ]('This ivory plate is a high-end dish designed for both functional and aesthetic purposes. It is made of high-quality porcelain and has a smooth surface that is both elegant and durable.  The plate is circular in shape and has a flat surface with a slight curve at the edges. The ivory color is a creamy, off-white shade that is warm and inviting, adding a touch of sophistication to any dining setting.  The design of the plate is what sets it apart, as it has been crafted by a skilled designer with an eye for detail.   The plate is a standalone piece intended for special occasions or display. It is ideal for serving appetizers or desserts, and its size and shape make it easy to handle and pass around the table.  Overall, a round designer plate made of ivory is a luxurious and stylish choice for fine dining or special occasions. Its unique design and high-quality construction make it a statement piece that is sure to impress guests and elevate any dining experience.')
        [
          'de-DE'
        ]('Dieser Elfenbeinteller ist ein High-End-Geschirr, das sowohl für funktionale als auch für ästhetische Zwecke entworfen wurde. Es besteht aus hochwertigem Porzellan und hat eine glatte Oberfläche, die sowohl elegant als auch langlebig ist.  Der Teller ist kreisförmig und hat eine flache Oberfläche mit einer leichten Rundung an den Rändern. Die Elfenbeinfarbe ist ein cremiger, cremefarbener Farbton, der warm und einladend ist und jedem Esszimmer einen Hauch von Raffinesse verleiht.  Das Design des Tellers zeichnet ihn aus, da er von einem erfahrenen Designer mit viel Liebe zum Detail gefertigt wurde.  Der Teller ist ein eigenständiges Stück, das für besondere Anlässe oder zur Präsentation bestimmt ist. Es ist ideal zum Servieren von Vorspeisen oder Desserts, und seine Größe und Form machen es einfach, es zu handhaben und auf dem Tisch herumzureichen.  Insgesamt ist ein runder Designerteller aus Elfenbein eine luxuriöse und stilvolle Wahl für gehobene Speisen oder besondere Anlässe. Sein einzigartiges Design und seine hochwertige Konstruktion machen es zu einem Statement-Stück, das Gäste beeindrucken und jedes kulinarische Erlebnis aufwerten wird.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('ivory-plate')
        ['en-GB']('ivory-plate')
        ['de-DE']('elfenbeinteller')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(ivoryPlateProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.ivoryPlate01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(platesDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
      KeyReferenceDraft.presets.category().key(servewareDraft.key!),
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
    ]);

export default ivoryPlate;
