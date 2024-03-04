import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2019Us from './sku-f890-op-2019-us';

describe(`with skuF890Op2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuF890Op2019Us preset`, () => {
    const skuF890Op2019UsPreset =
      skuF890Op2019Us().build<TInventoryEntryDraft>();
    expect(skuF890Op2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuF890Op2019Us preset when built for graphql`, () => {
    const skuF890Op2019UsPresetGraphql =
      skuF890Op2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
