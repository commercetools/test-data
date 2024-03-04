import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2015Default from './sku-p234-qw-2015-default';

describe(`with skuP234Qw2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuP234Qw2015Default preset`, () => {
    const skuP234Qw2015DefaultPreset =
      skuP234Qw2015Default().build<TInventoryEntryDraft>();
    expect(skuP234Qw2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuP234Qw2015Default preset when built for graphql`, () => {
    const skuP234Qw2015DefaultPresetGraphql =
      skuP234Qw2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
