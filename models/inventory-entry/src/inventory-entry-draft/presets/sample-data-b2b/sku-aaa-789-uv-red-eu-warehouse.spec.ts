import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAaa789UvRedEuWarehouse preset`, () => {
  it(`should return a skuAaa789UvRedEuWarehouse preset when built for rest`, () => {
    const skuAaa789UvRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuAaa789UvRedEuWarehouse()
      .build();
    expect(skuAaa789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvRedEuWarehouse preset when built for graphql`, () => {
    const skuAaa789UvRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAaa789UvRedEuWarehouse()
      .build();
    expect(skuAaa789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvRedEuWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
