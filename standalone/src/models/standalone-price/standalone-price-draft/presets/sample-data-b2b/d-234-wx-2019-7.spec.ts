import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20197 from './d-234-wx-2019-7';

describe(`with d234Wx20197 preset`, () => {
  it(`should return a d234Wx20197 preset`, () => {
    const d234Wx20197Preset = d234Wx20197().build<TStandalonePriceDraft>();
    expect(d234Wx20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-7",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1080000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a d234Wx20197 preset when built for graphql`, () => {
    const d234Wx20197PresetGraphql =
      d234Wx20197().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-7",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1080000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
