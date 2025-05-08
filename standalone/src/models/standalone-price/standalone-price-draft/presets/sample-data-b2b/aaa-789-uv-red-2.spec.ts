import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvRed2 from './aaa-789-uv-red-2';

describe(`with aaa789UvRed2 preset`, () => {
  it(`should return a aaa789UvRed2 preset`, () => {
    const aaa789UvRed2Preset = aaa789UvRed2().build<TStandalonePriceDraft>();
    expect(aaa789UvRed2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-2",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4455000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aaa789UvRed2 preset when built for graphql`, () => {
    const aaa789UvRed2PresetGraphql =
      aaa789UvRed2().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvRed2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-2",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4455000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
