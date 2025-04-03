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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const rusticOvenCasseroleProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const rusticOvenCasserole = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('rustic-oven-casserole')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Rustic Oven Casserole')
        ['en-GB']('Rustic Oven Casserole')
        ['de-DE']('Rustikale Auflaufform')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Die rustikale Keramik-Kasserolle eignet sich ideal zum Backen oder Braten von Aufläufen, Eintöpfen oder anderen Ofengerichten. Im traditionellen Stil gehalten, hat die Ofenform ein rustikales Aussehen, ist in erdigen Farben und mit strukturierter Oberfläche und unebenen Rändern gestaltet.  Die Dicke des Materials macht sie langlebig und temperaturfest, sodass Risse und Absplitterungen ausgeschlossen werden können. Das Material ist zudem so beständig, dass es nicht auf saure oder scharfe Speisen reagiert. Die Aromen der Gerichte bleiben somit jederzeit unverändert.  Das Design der Keramikform sorgt für rustikalen Charme in der Küche und im Essbereich. Besonders in der kalten Jahreszeit eignet sich die Ofenform außerdem ideal zum Servieren warmer und herzhafter Speisen.  Für die Reinigung der rustikalen Servierform empfiehlt es sich, sie nach vollständigem Abkühlen mit warmem Seifenwasser zu waschen. Sie sollte vor der Lagerung gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Eine rustikale Auflaufform aus Keramik ist ein praktisches und ästhetisch ansprechendes Kochgeschirr, das jeder Küche einen Hauch von Wärme und Charakter verleiht. Die robuste Machart und das klassische Design machen sie zum Must-have der Küchenausstattung für Hobbyköche und Köche gleichermaßen.')
        [
          'en-GB'
        ]("A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.")
        [
          'en-US'
        ]("A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.")
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('rustic-oven-casserole')
        ['en-GB']('rustic-oven-casserole')
        ['de-DE']('rustikaler-ofentopf')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(rusticOvenCasseroleProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.rusticOvenCasserole01()
    )
    .categories([]);

export default rusticOvenCasserole;
