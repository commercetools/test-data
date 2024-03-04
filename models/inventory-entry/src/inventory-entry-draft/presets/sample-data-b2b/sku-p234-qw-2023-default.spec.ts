import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2023Default from './sku-p234-qw-2023-default';

describe(`with skuP234Qw2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuP234Qw2023Default preset`, () => {
    const skuP234Qw2023DefaultPreset =
      skuP234Qw2023Default().build<TInventoryEntryDraft>();
    expect(skuP234Qw2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuP234Qw2023Default preset when built for graphql`, () => {
    const skuP234Qw2023DefaultPresetGraphql =
      skuP234Qw2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
