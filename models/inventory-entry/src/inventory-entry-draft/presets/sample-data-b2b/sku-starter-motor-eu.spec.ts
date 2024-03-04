import type { TInventoryEntryDraft } from '../../../types';
import skuStarterMotorEu from './sku-starter-motor-eu';

describe(`with skuStarterMotorEu preset and eu-warehouse channel`, () => {
  it(`should return a skuStarterMotorEu preset`, () => {
    const skuStarterMotorEuPreset =
      skuStarterMotorEu().build<TInventoryEntryDraft>();
    expect(skuStarterMotorEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuStarterMotorEu preset when built for graphql`, () => {
    const skuStarterMotorEuPresetGraphql =
      skuStarterMotorEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuStarterMotorEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": undefined,
      }
    `);
  });
});
