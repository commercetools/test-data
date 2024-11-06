import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuUu789UvRedDefaultWarehouse preset`, () => {
  it(`should return a skuUu789UvRedDefaultWarehouse preset when built for rest`, () => {
    const skuUu789UvRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuUu789UvRedDefaultWarehouse()
      .build();
    expect(skuUu789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvRedDefaultWarehouse preset when built for graphql`, () => {
    const skuUu789UvRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuUu789UvRedDefaultWarehouse()
        .build();
    expect(skuUu789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
