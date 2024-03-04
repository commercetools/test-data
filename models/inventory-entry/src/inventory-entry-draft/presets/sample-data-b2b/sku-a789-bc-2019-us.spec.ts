import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2019Us from './sku-a789-bc-2019-us';

describe(`with skuA789Bc2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuA789Bc2019Us preset`, () => {
    const skuA789Bc2019UsPreset =
      skuA789Bc2019Us().build<TInventoryEntryDraft>();
    expect(skuA789Bc2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2019Us preset when built for graphql`, () => {
    const skuA789Bc2019UsPresetGraphql =
      skuA789Bc2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
