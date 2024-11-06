import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuXx890OpBlueDefaultWarehouse preset`, () => {
  it(`should return a skuXx890OpBlueDefaultWarehouse preset when built for rest`, () => {
    const skuXx890OpBlueDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuXx890OpBlueDefaultWarehouse()
      .build();
    expect(skuXx890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuXx890OpBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuXx890OpBlueDefaultWarehouse()
        .build();
    expect(skuXx890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
