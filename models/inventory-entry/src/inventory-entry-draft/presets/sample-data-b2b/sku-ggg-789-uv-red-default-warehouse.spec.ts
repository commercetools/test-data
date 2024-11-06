import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGgg789UvRedDefaultWarehouse preset`, () => {
  it(`should return a skuGgg789UvRedDefaultWarehouse preset when built for rest`, () => {
    const skuGgg789UvRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuGgg789UvRedDefaultWarehouse()
      .build();
    expect(skuGgg789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvRedDefaultWarehouse preset when built for graphql`, () => {
    const skuGgg789UvRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuGgg789UvRedDefaultWarehouse()
        .build();
    expect(skuGgg789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
