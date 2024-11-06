import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAaa789UvBlueDefaultWarehouse preset`, () => {
  it(`should return a skuAaa789UvBlueDefaultWarehouse preset when built for rest`, () => {
    const skuAaa789UvBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuAaa789UvBlueDefaultWarehouse().build();
    expect(skuAaa789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuAaa789UvBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuAaa789UvBlueDefaultWarehouse()
        .build();
    expect(skuAaa789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
