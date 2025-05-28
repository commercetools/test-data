import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20193 from './jj-234-wx-2019-3';

describe(`with jj234Wx20193 preset`, () => {
  it(`should return a jj234Wx20193 preset`, () => {
    const jj234Wx20193Preset = jj234Wx20193().build<TStandalonePriceDraft>();
    expect(jj234Wx20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-3",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3575000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jj234Wx20193 preset when built for graphql`, () => {
    const jj234Wx20193PresetGraphql =
      jj234Wx20193().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-3",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3575000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
