import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
} from '../../../types';
import ups from './ups';

describe('with upsShippingMethod preset', () => {
  it('should return a ups preset', () => {
    const upsPreset = ups().build<TShippingMethodDraft>();
    expect(upsPreset.key).toMatchInlineSnapshot(`"ups"`);
    expect(upsPreset.name).toMatchInlineSnapshot(`"UPS"`);
    expect(upsPreset.localizedDescription).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "UPS",
        "fr": undefined,
      }
    `);
    expect(upsPreset.taxCategory).toMatchInlineSnapshot(`
      {
        "key": "standard-tax",
        "typeId": "tax-category",
      }
    `);
    expect(upsPreset.zoneRates).toMatchInlineSnapshot(`[]`);
    expect(upsPreset.isDefault).toMatchInlineSnapshot(`false`);
  });

  it('should return a ups preset when built for graphql', () => {
    const upsPresetGraphql = ups().buildGraphql<TShippingMethodDraftGraphql>();
    expect(upsPresetGraphql.key).toMatchInlineSnapshot(`"ups"`);
    expect(upsPresetGraphql.name).toMatchInlineSnapshot(`"UPS"`);
    expect(upsPresetGraphql.localizedDescription).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "UPS",
        },
      ]
    `);
    expect(upsPresetGraphql.taxCategory).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "standard-tax",
        "typeId": "tax-category",
      }
    `);
    expect(upsPresetGraphql.zoneRates).toMatchInlineSnapshot(`[]`);
    expect(upsPresetGraphql.isDefault).toMatchInlineSnapshot(`false`);
    expect(upsPresetGraphql.__typename).toMatchInlineSnapshot(
      `"ShippingMethodDraft"`
    );
  });
});
