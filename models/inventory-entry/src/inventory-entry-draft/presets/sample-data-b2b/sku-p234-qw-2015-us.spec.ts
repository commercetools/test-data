import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2015Us from './sku-p234-qw-2015-us';

describe(`with skuP234Qw2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuP234Qw2015Us preset`, () => {
    const skuP234Qw2015UsPreset =
      skuP234Qw2015Us().build<TInventoryEntryDraft>();
    expect(skuP234Qw2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuP234Qw2015Us preset when built for graphql`, () => {
    const skuP234Qw2015UsPresetGraphql =
      skuP234Qw2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
