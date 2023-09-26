import type { TProductVariantDraft } from '../../../types';
import wilmaChairVariant01 from './wilma-chair-variant-01';
describe(`with wilmaChairVariant01 preset`, () => {
  it('should return a sample wilmaChairVariant01 product preset', () => {
    const wilmaChairVariant01Preset =
      wilmaChairVariant01().build<TProductVariantDraft>();
    expect(wilmaChairVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Kissenbezüge sind abnehmbar und maschinenwaschbar",
              "en-GB": "- Cushion covers are removable and machine washable",
              "en-US": "- Cushion covers are removable and machine washable",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein getufteter armloser Futon-Stuhl hat ein einfaches und modernes Design mit gepolstertem Sitz und Rückenlehne mit getufteten Details für zusätzlichen Komfort und Stil. Dem Stuhl fehlen Armlehnen, um mehr Flexibilität und Benutzerfreundlichkeit zu ermöglichen. Die Polsterung besteht aus strapazierfähigem Stoff, der leicht zu reinigen und zu pflegen ist. Insgesamt ist ein getufteter Futonstuhl ohne Armlehnen ein praktisches und stilvolles Möbelstück, das in einer Vielzahl von Umgebungen verwendet werden kann, z. B. in einem Wohnzimmer, Schlafzimmer oder Heimbüro.",
              "en-GB": "A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.",
              "en-US": "A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Creme",
              "en-GB": "Cream",
              "en-US": "Cream",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Schwarzes Eisen",
              "en-GB": "Black Iron",
              "en-US": "Black Iron",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#000",
              "en-GB": "#000",
              "en-US": "#000",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#E4DCC1",
              "en-GB": "#E4DCC1",
              "en-US": "#E4DCC1",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFFFF0",
              "label": {
                "de-DE": "Elfenbein",
                "en-GB": "Ivory",
                "en-US": "Ivory",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3200,
              "w": 2400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Wilma%20Chair-CXpAOu8I.jpeg",
          },
          {
            "dimensions": {
              "h": 3200,
              "w": 2400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_547299128-yG__9MPQ.jpeg",
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
              "centAmount": 29900,
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
              "centAmount": 29900,
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
              "centAmount": 29900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "NJOP-09",
      }
    `);
  });
});
