import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuBR0983 from './sku-BR0983';

describe('With skuBR0983 preset', () => {
  it('should return skuBR0983 preset', () => {
    const skuBR0983Preset = skuBR0983().build<TInventoryEntryDraft>();
    expect(skuBR0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "BR-0983",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuBR0983 preset when built for GraphQL', () => {
    const skuBR0983PresetGraphql =
      skuBR0983().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBR0983PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "BR-0983",
        "supplyChannel": undefined,
      }
    `);
  });
});
