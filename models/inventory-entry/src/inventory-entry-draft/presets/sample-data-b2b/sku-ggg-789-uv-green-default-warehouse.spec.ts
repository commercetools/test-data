import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGgg789UvGreenDefaultWarehouse preset`, () => {
  it(`should return a skuGgg789UvGreenDefaultWarehouse preset when built for rest`, () => {
    const skuGgg789UvGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuGgg789UvGreenDefaultWarehouse()
        .build();
    expect(skuGgg789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuGgg789UvGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuGgg789UvGreenDefaultWarehouse()
        .build();
    expect(skuGgg789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
