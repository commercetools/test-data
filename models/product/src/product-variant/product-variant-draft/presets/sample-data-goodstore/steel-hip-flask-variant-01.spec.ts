import type { TProductVariantDraft } from '../../../types';
import steelHipFlaskVariant01 from './steel-hip-flask-variant-01';
describe(`with steelHipFlaskVariant01 preset`, () => {
  it('should return a sample steelHipFlaskVariant01 product preset', () => {
    const steelHipFlaskVariant01Preset =
      steelHipFlaskVariant01().build<TProductVariantDraft>();
    expect(steelHipFlaskVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Edelstahl",
              "en-GB": "- Stainless steel",
              "en-US": "- Stainless steel",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Flachmann aus Stahl ist ein kleiner, gebogener und flacher Behälter aus Edelstahl. Es ist so konzipiert, dass es eine kleine Menge alkoholischer Getränke aufnehmen und transportieren kann, normalerweise etwa 6 bis 10 Unzen. Die Flasche hat einen Scharnier- oder Schraubdeckel, der ein einfaches Öffnen und Schließen ermöglicht, sowie eine kleine Öffnung zum Ausgießen oder Trinken des Inhalts. Die Außenseite des Kolbens ist glatt. Flachmänner werden oft in einer Tasche oder Handtasche für den diskreten Konsum von Alkohol unterwegs getragen.",
              "en-GB": "A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.",
              "en-US": "A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6580,
              "w": 5006,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_326959618-xikecS3x.jpeg",
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
              "centAmount": 599,
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
              "centAmount": 599,
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
              "centAmount": 599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "FLAS-094",
      }
    `);
  });
});
