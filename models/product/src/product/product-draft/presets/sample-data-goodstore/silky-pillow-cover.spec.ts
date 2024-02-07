import type { TProductDraft } from '../../../types';
import silkyPillowCover from './silky-pillow-cover';

describe(`with silkyPillowCover preset`, () => {
  it(`should return a silkyPillowCover preset`, () => {
    const silkyPillowCoverPreset = silkyPillowCover().build<TProductDraft>();
    expect(silkyPillowCoverPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Der Seidenbezug ist ein luxuriöser und weicher Kissenbezug aus natürlichen Seidenfasern. Seide ist eine natürliche Proteinfaser, die von bestimmten Insektenlarven, einschließlich der Seidenraupe, produziert wird. Die Fasern sind für ihre Weichheit, Geschmeidigkeit und ihren natürlichen Glanz bekannt und verleihen Seidenkissenbezügen ihr luxuriöses und elegantes Aussehen und Gefühl.  Seidenkissenbezüge sind bekannt für die vielen Vorteile für Haut und Haar. Die glatte Textur von Seide trägt dazu bei, Reibung und Irritationen auf der Haut zu reduzieren und das Risiko von Falten und feinen Linien zu verringern. Sie hilft auch dabei, Haarbruch und Frizz zu verhindern, wodurch das Haar glatter und geschmeidiger aussieht.  Kissenbezüge aus Seide erfordern besondere Pflege, da sie empfindlich sind und leicht durch scharfe Reinigungsmittel oder grobe Behandlung beschädigt werden können. Sie sollten von Hand oder im Schonwaschgang mit Feinwaschmittel gewaschen und liegend getrocknet oder zum Trocknen aufgehängt werden.  Ein Kissenbezug aus Seide ist eine luxuriöse und elegante Wahl für jedes Schlafzimmer. Seine vielen Vorteile für Haut und Haar sowie seine weiche und glatte Textur machen es zu einer beliebten Wahl für diejenigen, die ein komfortables und verwöhnendes Schlaferlebnis suchen.",
          "en": undefined,
          "en-GB": "A silk pillowcase is a luxurious and soft pillow cover made from natural silk fibers. Silk is a natural protein fiber that is produced by certain insect larvae, including the silkworm. The fibers are known for their softness, smoothness, and natural shine, giving silk pillowcases a luxurious and elegant look and feel.  Silk pillowcases are known for their many benefits for the skin and hair. The smooth texture of silk helps reduce friction and irritation on the skin, reducing the risk of wrinkles and fine lines. It also helps prevent hair breakage and frizz, leaving hair looking smoother and more manageable.  Silk pillowcases require some special care, as they are delicate and can easily be damaged by harsh detergents or rough handling. They should be washed by hand or in a gentle cycle with mild detergent, and dried flat or hung to dry.  Overall, a silk pillowcase is a luxurious and elegant choice for any bedroom. Its many benefits for the skin and hair, as well as its soft and smooth texture, make it a popular choice among those looking for a comfortable and indulgent sleeping experience.",
          "en-US": "A silk pillowcase is a luxurious and soft pillow cover made from natural silk fibers. Silk is a natural protein fiber that is produced by certain insect larvae, including the silkworm. The fibers are known for their softness, smoothness, and natural shine, giving silk pillowcases a luxurious and elegant look and feel.  Silk pillowcases are known for their many benefits for the skin and hair. The smooth texture of silk helps reduce friction and irritation on the skin, reducing the risk of wrinkles and fine lines. It also helps prevent hair breakage and frizz, leaving hair looking smoother and more manageable.  Silk pillowcases require some special care, as they are delicate and can easily be damaged by harsh detergents or rough handling. They should be washed by hand or in a gentle cycle with mild detergent, and dried flat or hung to dry.  Overall, a silk pillowcase is a luxurious and elegant choice for any bedroom. Its many benefits for the skin and hair, as well as its soft and smooth texture, make it a popular choice among those looking for a comfortable and indulgent sleeping experience.",
          "fr": undefined,
        },
        "key": "silky-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Kissen nicht im Lieferumfang enthalten",
                "en-GB": "- Pillow not included",
                "en-US": "- Pillow not included",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#C0C0C0",
                "label": {
                  "de-DE": "Silber",
                  "en-GB": "Silver",
                  "en-US": "Silver",
                },
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#8B9299",
                "en-GB": "#8B9299",
                "en-US": "#8B9299",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Stahl",
                "en-GB": "Steel",
                "en-US": "Steel",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4011,
                "w": 6016,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Silky_Pillow_Cover-1.1.jpeg",
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
                "centAmount": 1999,
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
                "centAmount": 1999,
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
                "centAmount": 1999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "SPC-06",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kissenbezug aus Seide",
          "en": undefined,
          "en-GB": "Silky Pillow Cover",
          "en-US": "Silky Pillow Cover",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "seidige-kissenhlle",
          "en": undefined,
          "en-GB": "silky-pillow-cover",
          "en-US": "silky-pillow-cover",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a silkyPillowCover preset when built for graphql`, () => {
    const silkyPillowCoverPresetGraphql =
      silkyPillowCover().buildGraphql<TProductDraft>();
    expect(silkyPillowCoverPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A silk pillowcase is a luxurious and soft pillow cover made from natural silk fibers. Silk is a natural protein fiber that is produced by certain insect larvae, including the silkworm. The fibers are known for their softness, smoothness, and natural shine, giving silk pillowcases a luxurious and elegant look and feel.  Silk pillowcases are known for their many benefits for the skin and hair. The smooth texture of silk helps reduce friction and irritation on the skin, reducing the risk of wrinkles and fine lines. It also helps prevent hair breakage and frizz, leaving hair looking smoother and more manageable.  Silk pillowcases require some special care, as they are delicate and can easily be damaged by harsh detergents or rough handling. They should be washed by hand or in a gentle cycle with mild detergent, and dried flat or hung to dry.  Overall, a silk pillowcase is a luxurious and elegant choice for any bedroom. Its many benefits for the skin and hair, as well as its soft and smooth texture, make it a popular choice among those looking for a comfortable and indulgent sleeping experience.",
          },
          {
            "locale": "en-US",
            "value": "A silk pillowcase is a luxurious and soft pillow cover made from natural silk fibers. Silk is a natural protein fiber that is produced by certain insect larvae, including the silkworm. The fibers are known for their softness, smoothness, and natural shine, giving silk pillowcases a luxurious and elegant look and feel.  Silk pillowcases are known for their many benefits for the skin and hair. The smooth texture of silk helps reduce friction and irritation on the skin, reducing the risk of wrinkles and fine lines. It also helps prevent hair breakage and frizz, leaving hair looking smoother and more manageable.  Silk pillowcases require some special care, as they are delicate and can easily be damaged by harsh detergents or rough handling. They should be washed by hand or in a gentle cycle with mild detergent, and dried flat or hung to dry.  Overall, a silk pillowcase is a luxurious and elegant choice for any bedroom. Its many benefits for the skin and hair, as well as its soft and smooth texture, make it a popular choice among those looking for a comfortable and indulgent sleeping experience.",
          },
          {
            "locale": "de-DE",
            "value": "Der Seidenbezug ist ein luxuriöser und weicher Kissenbezug aus natürlichen Seidenfasern. Seide ist eine natürliche Proteinfaser, die von bestimmten Insektenlarven, einschließlich der Seidenraupe, produziert wird. Die Fasern sind für ihre Weichheit, Geschmeidigkeit und ihren natürlichen Glanz bekannt und verleihen Seidenkissenbezügen ihr luxuriöses und elegantes Aussehen und Gefühl.  Seidenkissenbezüge sind bekannt für die vielen Vorteile für Haut und Haar. Die glatte Textur von Seide trägt dazu bei, Reibung und Irritationen auf der Haut zu reduzieren und das Risiko von Falten und feinen Linien zu verringern. Sie hilft auch dabei, Haarbruch und Frizz zu verhindern, wodurch das Haar glatter und geschmeidiger aussieht.  Kissenbezüge aus Seide erfordern besondere Pflege, da sie empfindlich sind und leicht durch scharfe Reinigungsmittel oder grobe Behandlung beschädigt werden können. Sie sollten von Hand oder im Schonwaschgang mit Feinwaschmittel gewaschen und liegend getrocknet oder zum Trocknen aufgehängt werden.  Ein Kissenbezug aus Seide ist eine luxuriöse und elegante Wahl für jedes Schlafzimmer. Seine vielen Vorteile für Haut und Haar sowie seine weiche und glatte Textur machen es zu einer beliebten Wahl für diejenigen, die ein komfortables und verwöhnendes Schlaferlebnis suchen.",
          },
        ],
        "key": "silky-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Pillow not included","en-US":"- Pillow not included","de-DE":"- Kissen nicht im Lieferumfang enthalten"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#C0C0C0","label":{"de-DE":"Silber","en-GB":"Silver","en-US":"Silver"}}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#8B9299","de-DE":"#8B9299","en-US":"#8B9299"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Steel","de-DE":"Stahl","en-US":"Steel"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4011,
                "width": 6016,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Silky_Pillow_Cover-1.1.jpeg",
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
                "centPrecision": {
                  "centAmount": 1999,
                  "currencyCode": "EUR",
                },
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
                "centPrecision": {
                  "centAmount": 1999,
                  "currencyCode": "GBP",
                },
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
                "centPrecision": {
                  "centAmount": 1999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "SPC-06",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Silky Pillow Cover",
          },
          {
            "locale": "en-GB",
            "value": "Silky Pillow Cover",
          },
          {
            "locale": "de-DE",
            "value": "Kissenbezug aus Seide",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "silky-pillow-cover",
          },
          {
            "locale": "en-GB",
            "value": "silky-pillow-cover",
          },
          {
            "locale": "de-DE",
            "value": "seidige-kissenhlle",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
