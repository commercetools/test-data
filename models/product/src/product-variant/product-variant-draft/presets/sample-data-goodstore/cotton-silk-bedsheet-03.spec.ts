import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cottonSilkBedsheet03 from './cotton-silk-bedsheet-03';

describe(`with cottonSilkBedsheet03 preset`, () => {
  it(`should return a cottonSilkBedsheet03 preset`, () => {
    const cottonSilkBedsheet03Preset =
      cottonSilkBedsheet03().build<TProductVariantDraft>();
    expect(cottonSilkBedsheet03Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Machine washable
- 600 thread count
- Includes 1 fitted sheet",
        "en-GB": "- Machine washable
- 600 thread count
- Includes 1 fitted sheet",
        "en-US": "- Machine washable
- 600 thread count
- Includes 1 fitted sheet",
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
      "name": "size",
      "value": {
        "en-GB": "King",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 4500,
        "w": 7500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cotton_Silk_Bedsheet-3.1.jpeg",
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
        "centAmount": 1899,
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
        "centAmount": 1899,
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
        "centAmount": 1899,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "CSKW-9822",
}
`);
  });

  it(`should return a cottonSilkBedsheet03 preset when built for graphql`, () => {
    const cottonSilkBedsheet03PresetGraphql =
      cottonSilkBedsheet03().buildGraphql<TProductVariantDraftGraphql>();
    expect(cottonSilkBedsheet03PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","en-US":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet","de-DE":"- Machine washable\\n- 600 thread count\\n- Includes 1 fitted sheet"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
    },
    {
      "name": "size",
      "value": "{"en-GB":"King"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 4500,
        "width": 7500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cotton_Silk_Bedsheet-3.1.jpeg",
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
          "centAmount": 1899,
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
          "centAmount": 1899,
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
          "centAmount": 1899,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "CSKW-9822",
}
`);
  });
});
