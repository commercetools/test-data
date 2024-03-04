import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2015Us from './sku-f890-op-2015-us';

describe(`with skuF890Op2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuF890Op2015Us preset`, () => {
    const skuF890Op2015UsPreset =
      skuF890Op2015Us().build<TInventoryEntryDraft>();
    expect(skuF890Op2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuF890Op2015Us preset when built for graphql`, () => {
    const skuF890Op2015UsPresetGraphql =
      skuF890Op2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
