import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20197 from './jj-234-wx-2019-7';

describe(`with jj234Wx20197 preset`, () => {
  it(`should return a jj234Wx20197 preset`, () => {
    const jj234Wx20197Preset = jj234Wx20197().build<TStandalonePriceDraft>();
    expect(jj234Wx20197Preset).toMatchInlineSnapshot(`
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
        "key": "jj234-wx-2019-7",
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jj234Wx20197 preset when built for graphql`, () => {
    const jj234Wx20197PresetGraphql =
      jj234Wx20197().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20197PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "jj234-wx-2019-7",
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
