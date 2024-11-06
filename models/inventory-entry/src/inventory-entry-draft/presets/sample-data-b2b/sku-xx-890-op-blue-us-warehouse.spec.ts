import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuXx890OpBlueUsWarehouse preset`, () => {
  it(`should return a skuXx890OpBlueUsWarehouse preset when built for rest`, () => {
    const skuXx890OpBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuXx890OpBlueUsWarehouse()
      .build();
    expect(skuXx890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpBlueUsWarehouse preset when built for graphql`, () => {
    const skuXx890OpBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuXx890OpBlueUsWarehouse()
      .build();
    expect(skuXx890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
