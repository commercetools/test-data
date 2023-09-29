import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const vanillaCandle01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('VC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(999))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308745883-yypEo7X3.jpeg'
        )
        .dimensions({ w: 5819, h: 3879 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_310474610-dhOQAd9h.jpeg'
        )
        .dimensions({ w: 6214, h: 4143 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Comes in glass jar\n- 300 grams',
        'en-US': '- Comes in glass jar\n- 300 grams',
        'de-DE': '- Wird im Glas geliefert\n- 300 Gramm',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
        'en-US':
          'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
        'de-DE':
          'Eine Kerze mit Vanilleduft ist eine beliebte und zeitlose Wahl, um jedem Zuhause eine warme und einladende Atmosphäre zu verleihen. Die Kerze besteht aus hochwertigem Wachs, das mit dem reichhaltigem und cremigen Vanilleduft versehen ist.  Die Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht. Angezündet verströmt sie ein beruhigendes Aroma und erfüllt den Raum mit dem süßen Duft von Vanille. Der Duft wird oft mit Wärme, Gemütlichkeit und Entspannung in Verbindung gebracht und eignet sich daher perfekt für die Einstimmung auf einen gemütlichen Abend oder um eine beruhigende Atmosphäre in einem Schlaf- oder Wohnbereich zu schaffen.  Diese Kerze ist eine klassische und beruhigende Wahl, um jedem Zuhause etwas mehr Wärme und Gemütlichkeit zu verleihen. Ihr süßes und beruhigendes Aroma trägt dazu bei, eine entspannte und einladende Atmosphäre zu schaffen, was sie zu einer beliebten Wahl für den Einsatz im Schlaf- oder Wohnbereich und in Badezimmern macht.',
      }),
    ]);

export default vanillaCandle01;
