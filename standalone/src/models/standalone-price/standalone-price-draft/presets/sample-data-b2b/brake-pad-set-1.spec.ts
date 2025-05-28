import type { TStandalonePriceDraft } from '../../../types';
import brakePadSet1 from './brake-pad-set-1';

describe(`with brakePadSet1 preset`, () => {
  it(`should return a brakePadSet1 preset`, () => {
    const brakePadSet1Preset = brakePadSet1().build<TStandalonePriceDraft>();
    expect(brakePadSet1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-1",
        "recurrencePolicy": undefined,
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a brakePadSet1 preset when built for graphql`, () => {
    const brakePadSet1PresetGraphql =
      brakePadSet1().buildGraphql<TStandalonePriceDraft>();
    expect(brakePadSet1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-1",
        "recurrencePolicy": undefined,
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
