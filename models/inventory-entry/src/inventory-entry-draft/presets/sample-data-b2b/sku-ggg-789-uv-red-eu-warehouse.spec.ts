import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGgg789UvRedEuWarehouse preset`, () => {
  it(`should return a skuGgg789UvRedEuWarehouse preset when built for rest`, () => {
    const skuGgg789UvRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuGgg789UvRedEuWarehouse()
      .build();
    expect(skuGgg789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvRedEuWarehouse preset when built for graphql`, () => {
    const skuGgg789UvRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGgg789UvRedEuWarehouse()
      .build();
    expect(skuGgg789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvRedEuWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
