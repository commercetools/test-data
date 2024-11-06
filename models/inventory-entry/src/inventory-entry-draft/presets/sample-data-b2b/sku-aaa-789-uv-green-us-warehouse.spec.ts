import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAaa789UvGreenUsWarehouse preset`, () => {
  it(`should return a skuAaa789UvGreenUsWarehouse preset when built for rest`, () => {
    const skuAaa789UvGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuAaa789UvGreenUsWarehouse()
      .build();
    expect(skuAaa789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvGreenUsWarehouse preset when built for graphql`, () => {
    const skuAaa789UvGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAaa789UvGreenUsWarehouse()
      .build();
    expect(skuAaa789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
