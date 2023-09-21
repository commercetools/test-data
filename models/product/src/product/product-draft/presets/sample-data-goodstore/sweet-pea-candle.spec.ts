import type { TProductDraft } from '../../../types';
import sweetPeaCandle from './sweet-pea-candle';
describe(`with sweetPeaCandle preset`, () => {
  it('should return a sample sweetPeaCandle product preset', () => {
    const sweetPeaCandlePreset = sweetPeaCandle().build<TProductDraft>();
    expect(sweetPeaCandlePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "home-accents",
            "typeId": "category",
          },
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "sweet-pea-candle",
      "name": {
            "de-DE": "Süße Erbsenkerze",
            "en-GB": "Sweet Pea Candle",
            "en-US": "Sweet Pea Candle"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "kerze-der-sen-erbse",
            "en-GB": "sweat-pea-candle",
            "en-US": "sweat-pea-candle"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"productspec","value":{"en-GB":"- Comes in glass jar\n- 180 grams","de-DE":"- Wird im Glas geliefert\n- 180 Gramm","en-US":"- Comes in glass jar\n- 180 grams"}},{"name":"product-description","value":{"en-GB":"A small sweet pea scented candle is a charming and delightful addition to any home. The candle is small in size, making it perfect for use on a tabletop or desk.  The candle is made from high-quality wax, which is infused with the sweet and delicate fragrance of sweet pea. The scent is fresh and floral, reminiscent of a blooming garden in the springtime.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a gentle and pleasant aroma, filling the room with the sweet and soothing fragrance of sweet pea. The scent can help to create a relaxing and calming atmosphere, making it perfect for use during a yoga practice, a bubble bath, or a cozy night in.  A sweet pea scented candle is a delightful and charming addition to any home, bringing a touch of nature and tranquility to your living space.","en-US":"A small sweet pea scented candle is a charming and delightful addition to any home. The candle is small in size, making it perfect for use on a tabletop or desk.  The candle is made from high-quality wax, which is infused with the sweet and delicate fragrance of sweet pea. The scent is fresh and floral, reminiscent of a blooming garden in the springtime.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a gentle and pleasant aroma, filling the room with the sweet and soothing fragrance of sweet pea. The scent can help to create a relaxing and calming atmosphere, making it perfect for use during a yoga practice, a bubble bath, or a cozy night in.  A sweet pea scented candle is a delightful and charming addition to any home, bringing a touch of nature and tranquility to your living space.","de-DE":"Eine kleine Kerze mit Duft von süßen Erbsen ist eine charmante und entzückende Ergänzung für jedes Zuhause. Die Kerze ist klein und eignet sich daher perfekt für die Verwendung auf einer Tischplatte oder einem Schreibtisch.  Die Kerze besteht aus hochwertigem Wachs, das mit dem süßen und zarten Duft von Edelerbse durchdrungen ist. Der Duft ist frisch und blumig und erinnert an einen blühenden Garten im Frühling.  Die Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht.  Wenn die Kerze angezündet wird, verströmt sie ein sanftes und angenehmes Aroma und erfüllt den Raum mit dem süßen und beruhigenden Duft von Edelerbse. Der Duft kann dabei helfen, eine entspannende und beruhigende Atmosphäre zu schaffen, was ihn perfekt für die Verwendung während einer Yoga-Praxis, eines Schaumbads oder einer gemütlichen Nacht macht.  Eine Kerze mit Duft von süßen Erbsen ist eine entzückende und charmante Ergänzung für jedes Zuhause und bringt einen Hauch von Natur und Ruhe in Ihren Wohnraum."}},{"name":"colorlabel","value":{"en-GB":"Pink","de-DE":"Rosa","en-US":"Pink"}},{"name":"color","value":{"en-GB":"#FFD6E5","de-DE":"#FFD6E5","en-US":"#FFD6E5"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
