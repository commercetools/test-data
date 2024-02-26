import type { TStandalonePriceDraft } from '../../../types';
import hydraulicHose7 from './hydraulic-hose-7';

describe(`with hydraulicHose7 preset`, () => {
  it(`should return a hydraulicHose7 preset`, () => {
    const hydraulicHose7Preset =
      hydraulicHose7().build<TStandalonePriceDraft>();
    expect(hydraulicHose7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-7",
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hydraulicHose7 preset when built for graphql`, () => {
    const hydraulicHose7PresetGraphql =
      hydraulicHose7().buildGraphql<TStandalonePriceDraft>();
    expect(hydraulicHose7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-7",
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
