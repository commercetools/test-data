import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20193 from './y-567-yz-2019-3';

describe(`with y567Yz20193 preset`, () => {
  it(`should return a y567Yz20193 preset`, () => {
    const y567Yz20193Preset = y567Yz20193().build<TStandalonePriceDraft>();
    expect(y567Yz20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-3",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3289000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a y567Yz20193 preset when built for graphql`, () => {
    const y567Yz20193PresetGraphql =
      y567Yz20193().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-3",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3289000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
