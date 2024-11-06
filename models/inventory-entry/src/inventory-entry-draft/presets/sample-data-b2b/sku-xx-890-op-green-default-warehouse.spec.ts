import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuXx890OpGreenDefaultWarehouse preset`, () => {
  it(`should return a skuXx890OpGreenDefaultWarehouse preset when built for rest`, () => {
    const skuXx890OpGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuXx890OpGreenDefaultWarehouse().build();
    expect(skuXx890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuXx890OpGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuXx890OpGreenDefaultWarehouse()
        .build();
    expect(skuXx890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
