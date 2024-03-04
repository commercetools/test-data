import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2019Default from './sku-p234-qw-2019-default';

describe(`with skuP234Qw2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuP234Qw2019Default preset`, () => {
    const skuP234Qw2019DefaultPreset =
      skuP234Qw2019Default().build<TInventoryEntryDraft>();
    expect(skuP234Qw2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuP234Qw2019Default preset when built for graphql`, () => {
    const skuP234Qw2019DefaultPresetGraphql =
      skuP234Qw2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
