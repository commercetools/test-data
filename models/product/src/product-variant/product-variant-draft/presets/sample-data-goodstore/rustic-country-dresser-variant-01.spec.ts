import type { TProductVariantDraft } from '../../../types';
import rusticCountryDresserVariant01 from './rustic-country-dresser-variant-01';
describe(`with rusticCountryDresserVariant01 preset`, () => {
  it('should return a sample rusticCountryDresserVariant01 product preset', () => {
    const rusticCountryDresserVariant01Preset =
      rusticCountryDresserVariant01().build<TProductVariantDraft>();
    expect(rusticCountryDresserVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 3 small drawers and 4 large drawers
      - Nickel drawer handles
      - Assembled on site",
              "en-GB": "- 3 small drawers and 4 large drawers
      - Nickel drawer handles
      - Assembled on site",
              "en-US": "- 3 small drawers and 4 large drawers
      - Nickel drawer handles
      - Assembled on site",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "lightgrey",
              "en-GB": "#C1B7A9",
              "en-US": "lightgrey",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Limed Oak",
              "en-GB": "Limed Oak",
              "en-US": "Limed Oak",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Eine rustikale Landhauskommode mit viel Stauraum ist ein charmantes und praktisches Möbelstück, das jedem Schlafzimmer oder Wohnzimmer Wärme und Charakter verleiht. Die Kommode verfügt über einen stabilen Holzrahmen und einen Vintage-Look, der sowohl rustikal als auch einladend ist.  Die Kommode ist mit einer Reihe von Schubladen in verschiedenen Größen ausgestattet, die ausreichend Stauraum für Kleidung, Bettwäsche und andere Gegenstände bieten. Die Schubladen sind mit Schwalbenschwanzverbindungen und Gleitbeschlägen konstruiert, um sicherzustellen, dass sie langlebig und einfach zu bedienen sind. Die Schubladenfronten sind mit rustikalen Metallgriffen geschmückt, die den Charme und Charakter des Stücks noch verstärken.  Die Oberseite der Kommode bietet zusätzlichen Stauraum, sodass Sie dekorative Gegenstände wie Vasen, Kerzen oder Bilderrahmen präsentieren können.  Insgesamt ist eine rustikale Landhauskommode mit viel Stauraum ein praktisches und stilvolles Möbelstück, das jedem Schlaf- oder Wohnraum Wärme und Charakter verleihen kann. Seine robuste Konstruktion, viel Stauraum und sein charmantes Design machen ihn zu einer funktionalen und schönen Ergänzung für jedes Zuhause mit rustikalem oder ländlichem Einrichtungsstil.",
              "en-GB": "A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.",
              "en-US": "A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.",
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
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305725113--ZsI7lcq.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305725519-jQaojt01.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305724833-zQxn71Iv.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305726730-LruJzato.jpeg",
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
        "sku": "RCD-01",
      }
    `);
  });
});
