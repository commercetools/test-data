import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rusticOvenCasserole01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RCC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(2599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(2599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(2599))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Rustic%20Oven%20Casserol-VzPB_cq7.jpeg'
        )
        .dimensions({ w: 4746, h: 3710 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('product-description')
        .value({
          'de-DE':
            'Die rustikale Keramik-Kasserolle eignet sich ideal zum Backen oder Braten von Aufläufen, Eintöpfen oder anderen Ofengerichten. Im traditionellen Stil gehalten, hat die Ofenform ein rustikales Aussehen, ist in erdigen Farben und mit strukturierter Oberfläche und unebenen Rändern gestaltet.  Die Dicke des Materials macht sie langlebig und temperaturfest, sodass Risse und Absplitterungen ausgeschlossen werden können. Das Material ist zudem so beständig, dass es nicht auf saure oder scharfe Speisen reagiert. Die Aromen der Gerichte bleiben somit jederzeit unverändert.  Das Design der Keramikform sorgt für rustikalen Charme in der Küche und im Essbereich. Besonders in der kalten Jahreszeit eignet sich die Ofenform außerdem ideal zum Servieren warmer und herzhafter Speisen.  Für die Reinigung der rustikalen Servierform empfiehlt es sich, sie nach vollständigem Abkühlen mit warmem Seifenwasser zu waschen. Sie sollte vor der Lagerung gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Eine rustikale Auflaufform aus Keramik ist ein praktisches und ästhetisch ansprechendes Kochgeschirr, das jeder Küche einen Hauch von Wärme und Charakter verleiht. Die robuste Machart und das klassische Design machen sie zum Must-have der Küchenausstattung für Hobbyköche und Köche gleichermaßen.',
          'en-GB':
            "A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.",
          'en-US':
            "A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.",
        }),
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Does not include lid',
          'en-US': '- Does not include lid',
          'de-DE': '- Ohne Deckel',
        }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({
          'en-GB': 'Terracotta',
          'de-DE': 'Terrakotta',
          'en-US': 'Terracotta',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#E3793E', 'de-DE': '#E3793E', 'en-US': '#E3793E' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFA500',
          label: { 'de-DE': 'Orange', 'en-GB': 'Orange', 'en-US': 'Orange' },
        }),
    ]);

export default rusticOvenCasserole01;
