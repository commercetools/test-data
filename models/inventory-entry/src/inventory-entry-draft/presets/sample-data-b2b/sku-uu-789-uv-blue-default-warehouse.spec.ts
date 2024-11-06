import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuUu789UvBlueDefaultWarehouse preset`, () => {
  it(`should return a skuUu789UvBlueDefaultWarehouse preset when built for rest`, () => {
    const skuUu789UvBlueDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuUu789UvBlueDefaultWarehouse()
      .build();
    expect(skuUu789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuUu789UvBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuUu789UvBlueDefaultWarehouse()
        .build();
    expect(skuUu789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
