import type { TProductVariantDraft } from '../../../types';
import cubeJuteBasketVariant01 from './cube-jute-basket-variant-01';
describe(`with cubeJuteBasketVariant01 preset`, () => {
  it('should return a sample cubeJuteBasketVariant01 product preset', () => {
    const cubeJuteBasketVariant01Preset =
      cubeJuteBasketVariant01().build<TProductVariantDraft>();
    expect(cubeJuteBasketVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Jute
      - Vormontiert
      - 1 Fuß x 1 Fuß x 1 Fuß",
              "en-GB": "- Jute
      - Preassembled
      - 1ft x 1ft x 1ft",
              "en-US": "- Jute
      - Preassembled
      - 1ft x 1ft x 1ft",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Würfel-Jutekorb für das Wohnzimmer ist eine praktische und stilvolle Aufbewahrungslösung, die dem Raum Wärme und Struktur verleiht. Der Korb besteht aus natürlichen Jutefasern, die eng miteinander verwoben sind, um eine robuste und langlebige Struktur zu schaffen.  Die Würfelform des Korbs eignet sich perfekt zur Aufbewahrung einer Vielzahl von Gegenständen wie Decken, Zeitschriften, Fernbedienungen oder sogar kleinen Pflanzen. Die offene Oberseite des Korbs ermöglicht einen einfachen Zugriff auf den Inhalt, während die Seiten eine sichere Barriere bieten, um alles ordentlich zu verstauen.  Die neutrale Farbe der Jutefasern ergänzt eine Vielzahl von Einrichtungsstilen, von böhmisch über küstennah bis rustikal. Der Korb kann auf den Boden oder in ein Regal gestellt werden und lässt sich dank seiner kompakten Größe bei Bedarf leicht bewegen.",
              "en-GB": "A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.  The cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.  The neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.",
              "en-US": "A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.  The cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.  The neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.",
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
              "de-DE": "#EEB348",
              "en-GB": "#EEB348",
              "en-US": "#EEB348",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Jute",
              "en-GB": "Jute",
              "en-US": "Jute",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3564,
              "w": 4684,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355946576-nRxA5NAP.jpeg",
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
              "centAmount": 1299,
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
              "centAmount": 1299,
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
              "centAmount": 1299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CJB-01",
      }
    `);
  });
});
