import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2019Us from './sku-p234-qw-2019-us';

describe(`with skuP234Qw2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuP234Qw2019Us preset`, () => {
    const skuP234Qw2019UsPreset =
      skuP234Qw2019Us().build<TInventoryEntryDraft>();
    expect(skuP234Qw2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuP234Qw2019Us preset when built for graphql`, () => {
    const skuP234Qw2019UsPresetGraphql =
      skuP234Qw2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
