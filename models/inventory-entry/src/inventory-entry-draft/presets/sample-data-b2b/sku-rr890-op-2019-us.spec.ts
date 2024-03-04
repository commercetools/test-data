import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2019Us from './sku-rr890-op-2019-us';

describe(`with skuRr890Op2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuRr890Op2019Us preset`, () => {
    const skuRr890Op2019UsPreset =
      skuRr890Op2019Us().build<TInventoryEntryDraft>();
    expect(skuRr890Op2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRr890Op2019Us preset when built for graphql`, () => {
    const skuRr890Op2019UsPresetGraphql =
      skuRr890Op2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
