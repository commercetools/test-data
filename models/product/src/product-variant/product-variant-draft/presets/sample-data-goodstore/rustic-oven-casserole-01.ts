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
            'Ein rustikaler Keramik-Ofentopf ist ein Kochgeschirr aus Keramik, das dazu bestimmt ist, im Ofen zum Backen oder Braten von Aufläufen, Eintöpfen oder anderen Gerichten verwendet zu werden. Es hat ein traditionelles und rustikales Aussehen, oft mit erdigen Farben, strukturierten Oberflächen und unebenen Kanten.  Das Keramikmaterial ist dick und langlebig, sodass es hohen Temperaturen im Ofen standhält, ohne zu reißen oder abzusplittern. Es ist auch nicht reaktiv, was bedeutet, dass es nicht mit sauren oder scharfen Speisen interagiert, wodurch sichergestellt wird, dass die Aromen des Gerichts intakt bleiben.  Das rustikale Design des Keramikofentopfes verleiht der Küche und dem Essbereich einen Hauch von Wärme und Charme. Besonders in der kalten Jahreszeit eignet er sich perfekt zum Servieren warmer und herzhafter Speisen.  Um einen rustikalen Ofentopf aus Keramik zu reinigen, empfiehlt es sich, ihn nach Gebrauch abkühlen zu lassen, bevor Sie ihn mit warmem Seifenwasser waschen. Es sollte vor der Lagerung gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Insgesamt ist ein rustikaler Ofentopf aus Keramik ein praktisches und ästhetisch ansprechendes Kochgeschirr, das jeder Küche einen Hauch von Wärme und Charakter verleiht. Seine robuste Konstruktion und sein klassisches Design machen ihn zu einem Grundnahrungsmittel für Hobbyköche und Köche gleichermaßen.',
          'en-GB':
            "A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.",
          'en-US':
            "A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.",
        }),
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Does not include lid',
          'de-DE': '- Ohne Deckel',
          'en-US': '- Does not include lid',
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
