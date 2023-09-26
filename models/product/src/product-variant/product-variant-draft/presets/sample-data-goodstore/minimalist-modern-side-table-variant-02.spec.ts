import type { TProductVariantDraft } from '../../../types';
import minimalistModernSideTableVariant02 from './minimalist-modern-side-table-variant-02';
describe(`with minimalistModernSideTableVariant02 preset`, () => {
  it('should return a sample minimalistModernSideTableVariant02 product preset', () => {
    const minimalistModernSideTableVariant02Preset =
      minimalistModernSideTableVariant02().build<TProductVariantDraft>();
    expect(minimalistModernSideTableVariant02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Walnut",
              "en-GB": "Walnut",
              "en-US": "Walnut",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#d69169",
              "en-GB": "#d69169",
              "en-US": "#d69169",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Golden Pecan",
              "en-GB": "Golden Pecan",
              "en-US": "Golden Pecan",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#d69169",
              "en-GB": "#d69169",
              "en-US": "#d69169",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
              "en-GB": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
              "en-US": "- 4 legged side table
      - Walnut legs
      - Pre-assembled",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein minimalistischer Beistelltisch mit runder Platte und 4 schräg zulaufenden Beinen ist ein schlichtes und stilvolles Möbelstück, das jedem Wohnraum einen Hauch zeitgemäßer Eleganz verleihen kann. Der Tisch hat eine runde oder runde Platte aus Holz.  Die Tischplatte wird von vier sich verjüngenden Beinen getragen, die leicht angewinkelt sind und dem Tisch ein einzigartiges und modernes Aussehen verleihen. Die Beine sind aus Holz.  Das minimalistische Design des Beistelltisches betont Einfachheit und Funktionalität, mit einem sauberen und übersichtlichen Look, der sowohl stilvoll als auch praktisch ist. Die kompakte Größe des Tisches macht ihn zur idealen Wahl für kleine Wohnräume oder als Akzentstück in einem größeren Raum.  Der Tisch kann zur Präsentation von Dekorationsgegenständen wie Vasen, Bilderrahmen oder Skulpturen oder als funktionale Ablage für Getränke, Snacks oder Bücher verwendet werden. Durch sein schlichtes und unaufdringliches Design fügt es sich nahtlos in eine Vielzahl von Einrichtungsstilen ein, von modern und zeitgenössisch bis hin zu traditionell und rustikal.  Insgesamt ist ein minimalistischer Beistelltisch mit runder Platte und 4 schräg zulaufenden Beinen ein stilvolles und vielseitiges Möbelstück, das jedem Wohnraum einen Hauch von Raffinesse verleihen kann. Sein schlankes und einfaches Design, kombiniert mit seinen funktionalen Eigenschaften, machen es zu einer praktischen und stilvollen Wahl für jedes Zuhause.",
              "en-GB": "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
              "en-US": "A minimalist side table with a round top and 4 tapered legs at a slant is a simple and stylish piece of furniture that can add a touch of contemporary elegance to any living space. The table features a round or circular top that is made of wood.  The top of the table is supported by four tapered legs that are set at a slight angle, giving the table a unique and modern look. The legs are made of wood.  The minimalist design of the side table emphasizes simplicity and functionality, with a clean and uncluttered look that is both stylish and practical. The table's compact size makes it an ideal choice for small living spaces or as an accent piece in a larger room.  The table can be used to display decorative items such as vases, picture frames, or sculptures, or as a functional surface for drinks, snacks, or books. Its simple and unobtrusive design allows it to blend seamlessly with a variety of interior design styles, from modern and contemporary to traditional and rustic.  Overall, a minimalist side table with a round top and 4 tapered legs at a slant is a stylish and versatile piece of furniture that can add a touch of sophistication to any living space. Its sleek and simple design, combined with its functional features, make it a practical and stylish choice for any home.",
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
        ],
        "images": [
          {
            "dimensions": {
              "h": 6026,
              "w": 5883,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_308570077-dEUwL6Ta.jpeg",
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
              "centAmount": 4999,
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
              "centAmount": 4999,
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
              "centAmount": 4999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MMST-02",
      }
    `);
  });
});
