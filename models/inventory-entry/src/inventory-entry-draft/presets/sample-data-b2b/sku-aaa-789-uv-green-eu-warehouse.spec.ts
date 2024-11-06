import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAaa789UvGreenEuWarehouse preset`, () => {
  it(`should return a skuAaa789UvGreenEuWarehouse preset when built for rest`, () => {
    const skuAaa789UvGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuAaa789UvGreenEuWarehouse()
      .build();
    expect(skuAaa789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvGreenEuWarehouse preset when built for graphql`, () => {
    const skuAaa789UvGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAaa789UvGreenEuWarehouse()
      .build();
    expect(skuAaa789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
