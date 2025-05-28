import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20232 from './jj-234-wx-2023-2';

describe(`with jj234Wx20232 preset`, () => {
  it(`should return a jj234Wx20232 preset`, () => {
    const jj234Wx20232Preset = jj234Wx20232().build<TStandalonePriceDraft>();
    expect(jj234Wx20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-2",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jj234Wx20232 preset when built for graphql`, () => {
    const jj234Wx20232PresetGraphql =
      jj234Wx20232().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-2",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
