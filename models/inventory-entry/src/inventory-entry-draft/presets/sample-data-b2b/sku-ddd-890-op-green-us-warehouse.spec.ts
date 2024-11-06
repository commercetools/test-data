import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDdd890OpGreenUsWarehouse preset`, () => {
  it(`should return a skuDdd890OpGreenUsWarehouse preset when built for rest`, () => {
    const skuDdd890OpGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuDdd890OpGreenUsWarehouse()
      .build();
    expect(skuDdd890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpGreenUsWarehouse preset when built for graphql`, () => {
    const skuDdd890OpGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDdd890OpGreenUsWarehouse()
      .build();
    expect(skuDdd890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
