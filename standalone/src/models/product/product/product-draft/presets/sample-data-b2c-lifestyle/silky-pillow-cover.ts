import { TBuilder } from '@/core';
import { CategoryDraft, TCategoryDraft } from '@/models/category';
import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@/models/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const silkyPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const silkyPillowCover = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('silky-pillow-cover')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Silky Pillow Cover')
        ['en-GB']('Silky Pillow Cover')
        ['de-DE']('Kissenbezug aus Seide')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A silk pillowcase is a luxurious and soft pillow cover made from natural silk fibers. Silk is a natural protein fiber that is produced by certain insect larvae, including the silkworm. The fibers are known for their softness, smoothness, and natural shine, giving silk pillowcases a luxurious and elegant look and feel.  Silk pillowcases are known for their many benefits for the skin and hair. The smooth texture of silk helps reduce friction and irritation on the skin, reducing the risk of wrinkles and fine lines. It also helps prevent hair breakage and frizz, leaving hair looking smoother and more manageable.  Silk pillowcases require some special care, as they are delicate and can easily be damaged by harsh detergents or rough handling. They should be washed by hand or in a gentle cycle with mild detergent, and dried flat or hung to dry.  Overall, a silk pillowcase is a luxurious and elegant choice for any bedroom. Its many benefits for the skin and hair, as well as its soft and smooth texture, make it a popular choice among those looking for a comfortable and indulgent sleeping experience.')
        [
          'en-US'
        ]('A silk pillowcase is a luxurious and soft pillow cover made from natural silk fibers. Silk is a natural protein fiber that is produced by certain insect larvae, including the silkworm. The fibers are known for their softness, smoothness, and natural shine, giving silk pillowcases a luxurious and elegant look and feel.  Silk pillowcases are known for their many benefits for the skin and hair. The smooth texture of silk helps reduce friction and irritation on the skin, reducing the risk of wrinkles and fine lines. It also helps prevent hair breakage and frizz, leaving hair looking smoother and more manageable.  Silk pillowcases require some special care, as they are delicate and can easily be damaged by harsh detergents or rough handling. They should be washed by hand or in a gentle cycle with mild detergent, and dried flat or hung to dry.  Overall, a silk pillowcase is a luxurious and elegant choice for any bedroom. Its many benefits for the skin and hair, as well as its soft and smooth texture, make it a popular choice among those looking for a comfortable and indulgent sleeping experience.')
        [
          'de-DE'
        ]('Der Seidenbezug ist ein luxuriöser und weicher Kissenbezug aus natürlichen Seidenfasern. Seide ist eine natürliche Proteinfaser, die von bestimmten Insektenlarven, einschließlich der Seidenraupe, produziert wird. Die Fasern sind für ihre Weichheit, Geschmeidigkeit und ihren natürlichen Glanz bekannt und verleihen Seidenkissenbezügen ihr luxuriöses und elegantes Aussehen und Gefühl.  Seidenkissenbezüge sind bekannt für die vielen Vorteile für Haut und Haar. Die glatte Textur von Seide trägt dazu bei, Reibung und Irritationen auf der Haut zu reduzieren und das Risiko von Falten und feinen Linien zu verringern. Sie hilft auch dabei, Haarbruch und Frizz zu verhindern, wodurch das Haar glatter und geschmeidiger aussieht.  Kissenbezüge aus Seide erfordern besondere Pflege, da sie empfindlich sind und leicht durch scharfe Reinigungsmittel oder grobe Behandlung beschädigt werden können. Sie sollten von Hand oder im Schonwaschgang mit Feinwaschmittel gewaschen und liegend getrocknet oder zum Trocknen aufgehängt werden.  Ein Kissenbezug aus Seide ist eine luxuriöse und elegante Wahl für jedes Schlafzimmer. Seine vielen Vorteile für Haut und Haar sowie seine weiche und glatte Textur machen es zu einer beliebten Wahl für diejenigen, die ein komfortables und verwöhnendes Schlaferlebnis suchen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('silky-pillow-cover')
        ['en-GB']('silky-pillow-cover')
        ['de-DE']('seidige-kissenhlle')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(silkyPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.silkyPillowCover01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(beddingDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default silkyPillowCover;
