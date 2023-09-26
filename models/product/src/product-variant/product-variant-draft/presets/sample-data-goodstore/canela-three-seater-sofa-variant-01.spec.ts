import type { TProductVariantDraft } from '../../../types';
import canelaThreeSeaterSofaVariant01 from './canela-three-seater-sofa-variant-01';
describe(`with canelaThreeSeaterSofaVariant01 preset`, () => {
  it('should return a sample canelaThreeSeaterSofaVariant01 product preset', () => {
    const canelaThreeSeaterSofaVariant01Preset =
      canelaThreeSeaterSofaVariant01().build<TProductVariantDraft>();
    expect(canelaThreeSeaterSofaVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Lederpolsterung
      - 3-Sitzer",
              "en-GB": "- Leather upholstery 
      - 3 seater",
              "en-US": "- Leather upholstery 
      - 3 seater",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Leder-Dreisitzer-Sofa ist ein Möbelstück, das entworfen wurde, um bequemen Platz für drei Personen zu bieten. Das Sofa ist aus hochwertigem Leder gefertigt, das für seine Langlebigkeit, Stärke und natürliche Schönheit bekannt ist. Das Ledermaterial wird mit Schutzbeschichtungen behandelt, um es widerstandsfähiger gegen Abnutzung, Flecken und Spritzer zu machen.  Das Sofa verfügt über einen stabilen Rahmen aus Holz mit einer Reihe von Federn und Kissen, die den sitzenden Personen Halt und Komfort bieten. Die Kissen sind mit Daunenfedern gefüllt.  Das Ledersofa hat klare Linien und minimale dekorative Elemente für einen moderneren oder zeitgemäßeren Look.  Insgesamt ist ein Leder-Dreisitzer-Sofa ein vielseitiges und stilvolles Möbelstück, das bequeme Sitzgelegenheiten bietet und jedem Wohnraum einen Hauch von Eleganz verleiht.",
              "en-GB": "A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.",
              "en-US": "A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#D2B48C",
              "label": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#CE9A17",
              "en-GB": "#CE9A17",
              "en-US": "#CE9A17",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Kiefer",
              "en-GB": "Pine",
              "en-US": "Pine",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#E4B849",
              "en-GB": "#E4B849",
              "en-US": "#E4B849",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3353,
              "w": 5029,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Canela%203-Seater%20Sofa-y5sV4Zny.jpeg",
          },
          {
            "dimensions": {
              "h": 780,
              "w": 1170,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/sofa%20(1)-Y1K6YUDE.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 259900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 259900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 259900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CTSS-098",
      }
    `);
  });
});
