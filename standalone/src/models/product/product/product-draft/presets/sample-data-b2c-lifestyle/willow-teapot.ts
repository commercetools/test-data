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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const willowTeapotProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const willowTeapot = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('willow-teapot')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Willow Teapot')
        ['en-GB']('Willow Teapot')
        ['de-DE']('Teekanne >Willow<')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('This teapot is made of fine porcelain, commonly known as bone china. It is a delicate and elegant piece of tableware that is designed to brew and serve tea.   The fine china material used in the teapot provides an excellent heat retention capacity, ensuring that the tea stays warm for an extended period. It is also non-porous, which means it does not absorb any flavors or odors from the tea, preserving the purity of the flavor.  To clean a china teapot, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the delicate surface of the teapot.  Overall, a china teapot is a timeless and classic piece of tableware that adds a touch of elegance and sophistication to any tea party or gathering. Its delicate and intricate design, combined with its functionality and heat retention properties, make it a cherished item for tea lovers around the world.')
        [
          'de-DE'
        ]('Diese Teekanne besteht aus feinem Porzellan, allgemein bekannt als Knochenporzellan. Es ist ein zartes und elegantes Geschirr, das zum Aufbrühen und Servieren von Tee bestimmt ist.  Das für die Teekanne verwendete feine Porzellanmaterial hat ein hervorragendes Wärmespeichervermögen und sorgt dafür, dass der Tee lange warm bleibt. Es ist auch nicht porös, was bedeutet, dass es keine Aromen oder Gerüche aus dem Tee aufnimmt, wodurch die Reinheit des Geschmacks erhalten bleibt.  Zum Reinigen einer Teekanne aus Porzellan wird empfohlen, sie von Hand mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die empfindliche Oberfläche der Teekanne beschädigen können.  Die Teekanne aus Porzellan ein zeitloses und klassisches Geschirr, das jeder Teestunde oder Zusammenkunft einen Hauch von Eleganz und Raffinesse verleiht. Ihr zartes und kompliziertes Design, kombiniert mit ihrer Funktionalität und Wärmespeichereigenschaften, macht sie zum idealen Must-have für Teeliebhaber auf der ganzen Welt.')
        [
          'en-GB'
        ]('This teapot is made of fine porcelain, commonly known as bone china. It is a delicate and elegant piece of tableware that is designed to brew and serve tea.   The fine china material used in the teapot provides an excellent heat retention capacity, ensuring that the tea stays warm for an extended period. It is also non-porous, which means it does not absorb any flavors or odors from the tea, preserving the purity of the flavor.  To clean a china teapot, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the delicate surface of the teapot.  Overall, a china teapot is a timeless and classic piece of tableware that adds a touch of elegance and sophistication to any tea party or gathering. Its delicate and intricate design, combined with its functionality and heat retention properties, make it a cherished item for tea lovers around the world.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('willow-teapot')
        ['en-GB']('willow-teapot')
        ['de-DE']('willow-teekanne')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(willowTeapotProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.willowTeapot01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(barAccessoriesDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
    ]);

export default willowTeapot;
