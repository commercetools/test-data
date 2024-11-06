import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGgg789UvGreenUsWarehouse preset`, () => {
  it(`should return a skuGgg789UvGreenUsWarehouse preset when built for rest`, () => {
    const skuGgg789UvGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuGgg789UvGreenUsWarehouse()
      .build();
    expect(skuGgg789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvGreenUsWarehouse preset when built for graphql`, () => {
    const skuGgg789UvGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGgg789UvGreenUsWarehouse()
      .build();
    expect(skuGgg789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
