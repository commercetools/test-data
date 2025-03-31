import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const cocktailStrainerProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const cocktailStrainer = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('cocktail-strainer')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Cocktail Strainer')
        ['en-GB']('Cocktail Strainer')
        ['de-DE']('Cocktailsieb')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A strainer for cocktail shakers is a bar tool used to strain ice and other solid ingredients from mixed drinks, while pouring the liquid portion of the cocktail into a serving glass. It is made of metal, with a flat, perforated disc that fits over the mouth of the shaker. The strainer is held in place by placing a finger over the small, handle-like protrusion on one side of the disc, while pouring the liquid out through the larger opening on the other side. The perforated disc helps to filter out any small bits of ice or fruit that might be left in the mixture, resulting in a smooth and refined cocktail. The strainer also has a spring around the edge of the disc that helps to hold it securely in place over the shaker, preventing any spills or drips.')
        [
          'en-US'
        ]('A strainer for cocktail shakers is a bar tool used to strain ice and other solid ingredients from mixed drinks, while pouring the liquid portion of the cocktail into a serving glass. It is made of metal, with a flat, perforated disc that fits over the mouth of the shaker. The strainer is held in place by placing a finger over the small, handle-like protrusion on one side of the disc, while pouring the liquid out through the larger opening on the other side. The perforated disc helps to filter out any small bits of ice or fruit that might be left in the mixture, resulting in a smooth and refined cocktail. The strainer also has a spring around the edge of the disc that helps to hold it securely in place over the shaker, preventing any spills or drips.')
        [
          'de-DE'
        ]('Dieses Sieb für Cocktailshaker ist ein Barwerkzeug, das verwendet wird, um Eis und andere feste Zutaten aus Mixgetränken zu trennen, während der flüssige Teil des Cocktails in ein Servierglas gegossen wird. Das Sieb besteht aus Metall und passt über die Öffnung eines klassischen Cocktail-Shakers. Das Sieb wird an Ort und Stelle gehalten, indem man einen Finger über den kleinen, griffartigen Vorsprung auf einer Seite des Siebes legt, während man die Flüssigkeit durch die größere Öffnung auf der anderen Seite ausgießt. Das Sieb hilft dabei, kleine Eis- oder Fruchtstücke herauszufiltern, die in der Mischung zurückbleiben könnten, was zu einem smoothen und raffinierten Cocktail führt. Das Sieb hat auch eine Feder um den Rand, die hilft, es sicher über dem Shaker zu halten und so ein Verschütten oder Tropfen zu verhindern.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('cocktail-strainer')
        ['de-DE']('cocktailsieb')
        ['en-US']('cocktail-strainer')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(cocktailStrainerProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.cocktailStrainer01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(barAccessoriesDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default cocktailStrainer;
