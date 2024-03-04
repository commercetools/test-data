import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2015Us from './sku-a789-bc-2015-us';

describe(`with skuA789Bc2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuA789Bc2015Us preset`, () => {
    const skuA789Bc2015UsPreset =
      skuA789Bc2015Us().build<TInventoryEntryDraft>();
    expect(skuA789Bc2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2015Us preset when built for graphql`, () => {
    const skuA789Bc2015UsPresetGraphql =
      skuA789Bc2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
