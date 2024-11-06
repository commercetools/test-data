import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAaa789UvGreenDefaultWarehouse preset`, () => {
  it(`should return a skuAaa789UvGreenDefaultWarehouse preset when built for rest`, () => {
    const skuAaa789UvGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuAaa789UvGreenDefaultWarehouse()
        .build();
    expect(skuAaa789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuAaa789UvGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuAaa789UvGreenDefaultWarehouse()
        .build();
    expect(skuAaa789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
