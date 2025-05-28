import type { TStandalonePriceDraft } from '../../../types';
import airFilter1 from './air-filter-1';

describe(`with airFilter1 preset`, () => {
  it(`should return a airFilter1 preset`, () => {
    const airFilter1Preset = airFilter1().build<TStandalonePriceDraft>();
    expect(airFilter1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-1",
        "recurrencePolicy": undefined,
        "sku": "air-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a airFilter1 preset when built for graphql`, () => {
    const airFilter1PresetGraphql =
      airFilter1().buildGraphql<TStandalonePriceDraft>();
    expect(airFilter1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "air-filter-1",
        "recurrencePolicy": undefined,
        "sku": "air-filter",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
