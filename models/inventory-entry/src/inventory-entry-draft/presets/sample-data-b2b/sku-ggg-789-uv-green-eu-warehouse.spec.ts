import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGgg789UvGreenEuWarehouse preset`, () => {
  it(`should return a skuGgg789UvGreenEuWarehouse preset when built for rest`, () => {
    const skuGgg789UvGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuGgg789UvGreenEuWarehouse()
      .build();
    expect(skuGgg789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvGreenEuWarehouse preset when built for graphql`, () => {
    const skuGgg789UvGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGgg789UvGreenEuWarehouse()
      .build();
    expect(skuGgg789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
