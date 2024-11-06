import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuUu789UvGreenUsWarehouse preset`, () => {
  it(`should return a skuUu789UvGreenUsWarehouse preset when built for rest`, () => {
    const skuUu789UvGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuUu789UvGreenUsWarehouse()
      .build();
    expect(skuUu789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvGreenUsWarehouse preset when built for graphql`, () => {
    const skuUu789UvGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuUu789UvGreenUsWarehouse()
      .build();
    expect(skuUu789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
