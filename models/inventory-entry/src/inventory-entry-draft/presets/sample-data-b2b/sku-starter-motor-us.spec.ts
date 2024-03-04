import type { TInventoryEntryDraft } from '../../../types';
import skuStarterMotorUs from './sku-starter-motor-us';

describe(`with skuStarterMotorUs preset and us-warehouse channel`, () => {
  it(`should return a skuStarterMotorUs preset`, () => {
    const skuStarterMotorUsPreset =
      skuStarterMotorUs().build<TInventoryEntryDraft>();
    expect(skuStarterMotorUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuStarterMotorUs preset when built for graphql`, () => {
    const skuStarterMotorUsPresetGraphql =
      skuStarterMotorUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuStarterMotorUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
