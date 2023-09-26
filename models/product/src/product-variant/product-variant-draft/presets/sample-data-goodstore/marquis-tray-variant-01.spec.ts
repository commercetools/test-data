import type { TProductVariantDraft } from '../../../types';
import marquisTrayVariant01 from './marquis-tray-variant-01';
describe(`with marquisTrayVariant01 preset`, () => {
  it('should return a sample marquisTrayVariant01 product preset', () => {
    const marquisTrayVariant01Preset =
      marquisTrayVariant01().build<TProductVariantDraft>();
    expect(marquisTrayVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Tablett",
              "en-GB": "- Includes 1 tray",
              "en-US": "- Includes 1 tray",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Dieses Serviertablett aus Holz ist ideal zum Servieren einer Vielzahl von Speisen und Getränken, einschließlich Vorspeisen, Hauptgerichten, Cocktails und Kaffee. Es kann sowohl in ungezwungener als auch in formeller Umgebung verwendet werden und ist eine beliebte Wahl für Mahlzeiten im Freien, Picknicks und Grillabende.  Serviertabletts aus Holz sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können mit einem feuchten Tuch abgewischt oder mit Wasser und Seife gewaschen werden.  Insgesamt ist ein Serviertablett aus Holz eine funktionale und stilvolle Wahl zum Servieren von Speisen und Getränken. Sein natürliches Material und seine einzigartige Textur verleihen jedem Essbereich Wärme und Charakter, während seine Vielseitigkeit und Praktikabilität es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern machen.",
              "en-GB": "This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.",
              "en-US": "This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFA500",
              "label": {
                "de-DE": "Orange",
                "en-GB": "Orange",
                "en-US": "Orange",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4784,
              "w": 5056,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Marquis%20Tray-AGdsW5Ot.jpeg",
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
              "centAmount": 399,
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
              "centAmount": 399,
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
              "centAmount": 399,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MWT-01",
      }
    `);
  });
});
