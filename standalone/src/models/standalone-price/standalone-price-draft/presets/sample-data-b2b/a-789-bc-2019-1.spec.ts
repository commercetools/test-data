import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20191 from './a-789-bc-2019-1';

describe(`with a789Bc20191 preset`, () => {
  it(`should return a a789Bc20191 preset`, () => {
    const a789Bc20191Preset = a789Bc20191().build<TStandalonePriceDraft>();
    expect(a789Bc20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-1",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1512500,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a a789Bc20191 preset when built for graphql`, () => {
    const a789Bc20191PresetGraphql =
      a789Bc20191().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-1",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1512500,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
