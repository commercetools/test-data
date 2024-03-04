import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2015Us from './sku-rr890-op-2015-us';

describe(`with skuRr890Op2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuRr890Op2015Us preset`, () => {
    const skuRr890Op2015UsPreset =
      skuRr890Op2015Us().build<TInventoryEntryDraft>();
    expect(skuRr890Op2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuRr890Op2015Us preset when built for graphql`, () => {
    const skuRr890Op2015UsPresetGraphql =
      skuRr890Op2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
