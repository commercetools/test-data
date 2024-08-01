import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import wineBottleOpener from './wine-bottle-opener';

describe(`with wineBottleOpener preset`, () => {
  it(`should return a wineBottleOpener preset`, () => {
    const wineBottleOpenerPreset = wineBottleOpener().build<TProductDraft>();
    expect(wineBottleOpenerPreset).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "bar-accessories",
      "typeId": "category",
    },
    {
      "key": "bar-and-glassware",
      "typeId": "category",
    },
    {
      "key": "kitchen",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": {
    "de": undefined,
    "de-DE": "Mit diesem praktischen Korkenzieher wird das Öffnen von Weinflaschen zur leichten Übung. Der Korkenzieher hat eine spitze Spiralschraube, die in den Korken gedreht wird, und einen Griff oder Hebel, mit dem der Korken aus der Flasche gehoben wird. Ein weiteres Feature des Korkenziehers im Hebelstil ist ein Flaschenöffner.",
    "en": undefined,
    "en-GB": "A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.",
    "en-US": "A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.",
    "fr": undefined,
  },
  "key": "wine-bottle-opener",
  "masterVariant": {
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
        "name": "color",
        "value": {
          "de-DE": "Weiß:#FFFFFF",
          "en-GB": "White:#FFFFFF",
          "en-US": "White:#FFFFFF",
        },
      },
      {
        "name": "finish",
        "value": {
          "de-DE": "Silber:#C0C0C0",
          "en-GB": "Silver:#C0C0C0",
          "en-US": "Silver:#C0C0C0",
        },
      },
    ],
    "images": [
      {
        "dimensions": {
          "h": 3456,
          "w": 5184,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wine_Bottle_Opener-1.1.jpeg",
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
          "centAmount": 199,
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
          "centAmount": 199,
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
          "centAmount": 199,
          "currencyCode": "USD",
        },
      },
    ],
    "sku": "WOP-09",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Korkenzieher",
    "en": undefined,
    "en-GB": "Wine Bottle Opener",
    "en-US": "Wine Bottle Opener",
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
    "de-DE": "wein-flaschenffner",
    "en": undefined,
    "en-GB": "wine-bottle-opener",
    "en-US": "wine-bottle-opener",
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

  it(`should return a wineBottleOpener preset when built for graphql`, () => {
    const wineBottleOpenerPresetGraphql =
      wineBottleOpener().buildGraphql<TProductDraftGraphql>();
    expect(wineBottleOpenerPresetGraphql).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "bar-accessories",
      "typeId": "category",
    },
    {
      "key": "bar-and-glassware",
      "typeId": "category",
    },
    {
      "key": "kitchen",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": [
    {
      "locale": "en-US",
      "value": "A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.",
    },
    {
      "locale": "de-DE",
      "value": "Mit diesem praktischen Korkenzieher wird das Öffnen von Weinflaschen zur leichten Übung. Der Korkenzieher hat eine spitze Spiralschraube, die in den Korken gedreht wird, und einen Griff oder Hebel, mit dem der Korken aus der Flasche gehoben wird. Ein weiteres Feature des Korkenziehers im Hebelstil ist ein Flaschenöffner.",
    },
    {
      "locale": "en-GB",
      "value": "A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.",
    },
  ],
  "key": "wine-bottle-opener",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": "{"en-GB":"- Stainless steel","en-US":"- Stainless steel","de-DE":"- Edelstahl"}",
      },
      {
        "name": "color",
        "value": "{"en-US":"White:#FFFFFF","en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF"}",
      },
      {
        "name": "finish",
        "value": "{"en-US":"Silver:#C0C0C0","en-GB":"Silver:#C0C0C0","de-DE":"Silber:#C0C0C0"}",
      },
    ],
    "images": [
      {
        "dimensions": {
          "height": 3456,
          "width": 5184,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wine_Bottle_Opener-1.1.jpeg",
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
            "centAmount": 199,
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
            "centAmount": 199,
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
            "centAmount": 199,
            "currencyCode": "USD",
          },
        },
      },
    ],
    "sku": "WOP-09",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Wine Bottle Opener",
    },
    {
      "locale": "en-GB",
      "value": "Wine Bottle Opener",
    },
    {
      "locale": "de-DE",
      "value": "Korkenzieher",
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
      "value": "wine-bottle-opener",
    },
    {
      "locale": "en-GB",
      "value": "wine-bottle-opener",
    },
    {
      "locale": "de-DE",
      "value": "wein-flaschenffner",
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
