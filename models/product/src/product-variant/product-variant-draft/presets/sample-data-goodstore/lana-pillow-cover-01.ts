import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const lanaPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('LPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1099))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1099))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1099))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Lana%20Pillow%20Cover-aVKbCIy1.jpeg'
        )
        .dimensions({ w: 4350, h: 3143 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB':
            '- Machine washable\n- Pillow not included\n- Has a zip enclosure',
          'en-US':
            '- Machine washable\n- Pillow not included\n- Has a zip enclosure',
          'de-DE':
            '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten\n- Verfügt über ein Reißverschlussgehäuse',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.  The microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.  The pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.  Overall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.',
          'en-US':
            'A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.  The microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.  The pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.  Overall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.',
          'de-DE':
            'Ein Mikrofaser-Kissenbezug ist eine Art Textilbezug für ein Kissen, der aus synthetischen Fasern wie Polyester oder Nylon hergestellt wird. Mikrofaser ist bekannt für ihre Weichheit, Haltbarkeit und einfache Pflege. Der Kissenbezug ist so konzipiert, dass er auf ein Kissen in Standardgröße passt, in der Regel etwa 18 Zoll im Quadrat. Er hat eine quadratische Form und ist in einer Vielzahl von Farben und Mustern erhältlich, die zu verschiedenen Einrichtungsstilen und Vorlieben passen. Der Mikrofaserstoff fühlt sich glatt und seidig an, ist sanft zur Haut und bietet eine bequeme Oberfläche zum Schlafen. Außerdem ist er atmungsaktiv und feuchtigkeitsableitend, was dazu beiträgt, die Körpertemperatur zu regulieren und Überhitzung während der Nacht zu vermeiden. Der Kissenbezug wird häufig wegen seiner praktischen und funktionellen Eigenschaften verwendet, wie z. B. seiner Pflegeleichtigkeit und seiner Unempfindlichkeit gegenüber Falten, Flecken und Ausbleichen. Er kann leicht in der Maschine gewaschen und getrocknet werden, was ihn zu einer praktischen und pflegeleichten Option für vielbeschäftigte Haushalte macht. Insgesamt ist ein Mikrofaser-Kissenbezug ein vielseitiges und praktisches Zubehör, das den Komfort und die Haltbarkeit eines Kissens verbessern kann. Er kann sowohl für den täglichen Schlaf als auch für dekorative Zwecke in einer Vielzahl von Umgebungen verwendet werden, z. B. in Schlafzimmern, Gästezimmern und Wohnzimmern.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#ABA9A7', 'de-DE': '#ABA9A7', 'en-US': '#ABA9A7' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({
          'en-GB': 'Feather Gray',
          'de-DE': 'Federgrau',
          'en-US': 'Feather Gray',
        }),
    ]);

export default lanaPillowCover01;
