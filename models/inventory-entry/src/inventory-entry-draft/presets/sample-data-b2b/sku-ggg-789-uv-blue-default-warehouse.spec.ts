import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGgg789UvBlueDefaultWarehouse preset`, () => {
  it(`should return a skuGgg789UvBlueDefaultWarehouse preset when built for rest`, () => {
    const skuGgg789UvBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuGgg789UvBlueDefaultWarehouse().build();
    expect(skuGgg789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuGgg789UvBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuGgg789UvBlueDefaultWarehouse()
        .build();
    expect(skuGgg789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
