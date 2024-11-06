import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJjj890OpGreenUsWarehouse preset`, () => {
  it(`should return a skuJjj890OpGreenUsWarehouse preset when built for rest`, () => {
    const skuJjj890OpGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuJjj890OpGreenUsWarehouse()
      .build();
    expect(skuJjj890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpGreenUsWarehouse preset when built for graphql`, () => {
    const skuJjj890OpGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJjj890OpGreenUsWarehouse()
      .build();
    expect(skuJjj890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
