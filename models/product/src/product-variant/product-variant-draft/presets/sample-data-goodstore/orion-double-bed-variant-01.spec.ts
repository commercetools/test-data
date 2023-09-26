import type { TProductVariantDraft } from '../../../types';
import orionDoubleBedVariant01 from './orion-double-bed-variant-01';
describe(`with orionDoubleBedVariant01 preset`, () => {
  it('should return a sample orionDoubleBedVariant01 product preset', () => {
    const orionDoubleBedVariant01Preset =
      orionDoubleBedVariant01().build<TProductVariantDraft>();
    expect(orionDoubleBedVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage im Lieferumfang enthalten
      - Matratze nicht im Lieferumfang enthalten",
              "en-GB": "- Assembly included at delivery
      - Mattress not included",
              "en-US": "- Assembly included at delivery
      - Mattress not included",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Queensize-Bett mit getuftetem Kopfteil und Plattform sowie Stahlbeinen ist ein modernes und stilvolles Möbelstück. Das Kopfteil ist hoch und breit und hat ein getuftetes Design. Der für das Kopfteil verwendete Stoff ist weich und luxuriös und bietet einen bequemen Platz zum Anlehnen, wenn man sich im Bett aufrichtet.  Das Bett wird vom Boden auf einer Plattform angehoben, die von schlanken und robusten Stahlbeinen getragen wird. Die Plattform bietet eine solide und stabile Grundlage für die Matratze und verleiht dem Bett gleichzeitig ein sauberes und minimalistisches Aussehen.  Insgesamt ist dieses Queensize-Bett ein schönes und funktionales Stück, das sich perfekt für ein modernes Schlafzimmer mit minimalistischer oder industrieller Ästhetik eignet.",
              "en-GB": "A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.",
              "en-US": "A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Salbei",
              "en-GB": "Sage",
              "en-US": "Sage",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#718C86",
              "en-GB": "#718C86",
              "en-US": "#718C86",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Stahl",
              "en-GB": "Steel",
              "en-US": "Steel",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#CCCCCC ",
              "en-GB": "#CCCCCC ",
              "en-US": "#CCCCCC ",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#808080",
              "label": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3621,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Orion%20Twin%20Bed-t5ZMuQok.jpeg",
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
              "centAmount": 159900,
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
              "centAmount": 159900,
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
              "centAmount": 159900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "OTB-07",
      }
    `);
  });
});
