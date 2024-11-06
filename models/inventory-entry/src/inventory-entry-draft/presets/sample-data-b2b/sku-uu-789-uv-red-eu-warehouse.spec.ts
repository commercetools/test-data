import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuUu789UvRedEuWarehouse preset`, () => {
  it(`should return a skuUu789UvRedEuWarehouse preset when built for rest`, () => {
    const skuUu789UvRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuUu789UvRedEuWarehouse()
      .build();
    expect(skuUu789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvRedEuWarehouse preset when built for graphql`, () => {
    const skuUu789UvRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuUu789UvRedEuWarehouse()
      .build();
    expect(skuUu789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvRedEuWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
