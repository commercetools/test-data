import type { TProductVariantDraft } from '../../../types';
import sandTeaCupVariant01 from './sand-tea-cup-variant-01';
describe(`with sandTeaCupVariant01 preset`, () => {
  it('should return a sample sandTeaCupVariant01 product preset', () => {
    const sandTeaCupVariant01Preset =
      sandTeaCupVariant01().build<TProductVariantDraft>();
    expect(sandTeaCupVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Tasse",
              "en-GB": "- Includes 1 mug",
              "en-US": "- Includes 1 mug",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Der Sand Tea Cup ist eine Art Trinkgefäß, das zum Aufbewahren und Servieren von Tee und/oder Kaffee entwickelt wurde. Es hat eine zylindrische oder leicht konische Form mit einem Fassungsvermögen von etwa 8 bis 16 Unzen und eine hellbräunliche Farbe.  Der Becher ist aus Keramik. Der Körper des Bechers hat glatte Seiten und eine breite Öffnung, die das Eingießen und Trinken von Kaffee oder Tee erleichtert.  Der Griff des Bechers ist so konzipiert, dass er leicht zu greifen ist, mit einer bequemen Form und einer Größe, die für die meisten Hände geeignet ist. Der Boden des Bechers ist normalerweise flach, mit einer stabilen Basis, die hilft, ein Umkippen und Verschütten zu verhindern.  Die Sand Tea Cup ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist dieser Becher ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Genuss eines Heißgetränks zu Hause oder auf der Arbeit eignet. Seine neutrale Farbe und sein schlichtes Design machen ihn zu einer beliebten Wahl für Kaffeeliebhaber, die einen klassischen und dezenten Look bevorzugen.",
              "en-GB": "The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.",
              "en-US": "The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Sand",
              "en-GB": "Sand",
              "en-US": "Sand",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#FFDC94",
              "en-GB": "#FFDC94",
              "en-US": "#FFDC94",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#F5F5DC",
              "label": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4020,
              "w": 6046,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sand%20Tea%20Cup-yM4SUI5o.jpeg",
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
        "sku": "STM-09",
      }
    `);
  });
});
