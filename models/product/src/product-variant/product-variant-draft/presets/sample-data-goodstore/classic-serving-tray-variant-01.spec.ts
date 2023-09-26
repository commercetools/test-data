import type { TProductVariantDraft } from '../../../types';
import classicServingTrayVariant01 from './classic-serving-tray-variant-01';
describe(`with classicServingTrayVariant01 preset`, () => {
  it('should return a sample classicServingTrayVariant01 product preset', () => {
    const classicServingTrayVariant01Preset =
      classicServingTrayVariant01().build<TProductVariantDraft>();
    expect(classicServingTrayVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Aus lebensmittelechtem Kunststoff",
              "en-GB": "- Made of food-grade plastic",
              "en-US": "- Made of food-grade plastic",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Dieses klassische Serviertablett ist ein vielseitiger und funktionaler Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das Tablett ist rechteckig, mit erhöhten Kanten und Griffen auf beiden Seiten, wodurch es leicht zu tragen und zu transportieren ist.  Dieses klassische Serviertablett zeichnet sich durch ein einfaches und zeitloses Design mit klaren Linien und einer minimalistischen Ästhetik aus. Es kann für eine Vielzahl von Zwecken verwendet werden, z. B. zum Transport von Getränken und Häppchen, zum Servieren des Frühstücks im Bett oder zum Präsentieren von Dekorationsgegenständen.  Zur Reinigung wird empfohlen, es mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm von Hand zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die Oberfläche des Tabletts beschädigen können.  Insgesamt ist ein klassisches Serviertablett ein praktisches und stilvolles Element, das jeder Umgebung einen Hauch von Raffinesse verleiht. Sein zeitloses Design und seine Vielseitigkeit machen ihn zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen.",
              "en-GB": "This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.",
              "en-US": "This Classic Serving Tray is a versatile and functional item that can be used in a variety of settings. The tray is rectangular, with raised edges and handles on either side, making it easy to carry and transport.  This Classic Serving Tray features a simple and timeless design, with clean lines and a minimalist aesthetic. It can be used for a variety of purposes, such as carrying drinks and appetizers, serving breakfast in bed, or displaying decorative items.  To clean, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the surface of the tray.  Overall, a classic serving tray is a practical and stylish item that adds a touch of sophistication to any setting. Its timeless design and versatility make it a popular choice for serving and displaying food, drinks, and other items.",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#FFF",
              "en-GB": "#FFF",
              "en-US": "#FFF",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Weiß",
              "en-GB": "White",
              "en-US": "White",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFF",
              "label": {
                "de-DE": "Weiss",
                "en-GB": "White",
                "en-US": "White",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 4000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_576051573-RimbK5GO.jpeg",
          },
          {
            "dimensions": {
              "h": 4160,
              "w": 6240,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_569763663-QLatH53Y.jpeg",
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
              "centAmount": 299,
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
              "centAmount": 299,
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
              "centAmount": 299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CST-01",
      }
    `);
  });
});
