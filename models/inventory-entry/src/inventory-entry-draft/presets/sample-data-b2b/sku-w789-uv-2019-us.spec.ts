import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2019Us from './sku-w789-uv-2019-us';

describe(`with skuW789Uv2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuW789Uv2019Us preset`, () => {
    const skuW789Uv2019UsPreset =
      skuW789Uv2019Us().build<TInventoryEntryDraft>();
    expect(skuW789Uv2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuW789Uv2019Us preset when built for graphql`, () => {
    const skuW789Uv2019UsPresetGraphql =
      skuW789Uv2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
