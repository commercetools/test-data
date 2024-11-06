import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuUu789UvGreenDefaultWarehouse preset`, () => {
  it(`should return a skuUu789UvGreenDefaultWarehouse preset when built for rest`, () => {
    const skuUu789UvGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuUu789UvGreenDefaultWarehouse().build();
    expect(skuUu789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuUu789UvGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuUu789UvGreenDefaultWarehouse()
        .build();
    expect(skuUu789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
