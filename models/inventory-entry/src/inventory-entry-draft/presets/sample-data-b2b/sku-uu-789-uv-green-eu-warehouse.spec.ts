import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuUu789UvGreenEuWarehouse preset`, () => {
  it(`should return a skuUu789UvGreenEuWarehouse preset when built for rest`, () => {
    const skuUu789UvGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuUu789UvGreenEuWarehouse()
      .build();
    expect(skuUu789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvGreenEuWarehouse preset when built for graphql`, () => {
    const skuUu789UvGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuUu789UvGreenEuWarehouse()
      .build();
    expect(skuUu789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
