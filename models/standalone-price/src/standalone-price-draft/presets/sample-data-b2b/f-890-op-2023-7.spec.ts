import type { TStandalonePriceDraft } from '../../../types';
import f890Op20237 from './f-890-op-2023-7';

describe(`with f890Op20237 preset`, () => {
  it(`should return a f890Op20237 preset`, () => {
    const f890Op20237Preset = f890Op20237().build<TStandalonePriceDraft>();
    expect(f890Op20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-7",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a f890Op20237 preset when built for graphql`, () => {
    const f890Op20237PresetGraphql =
      f890Op20237().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-7",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
