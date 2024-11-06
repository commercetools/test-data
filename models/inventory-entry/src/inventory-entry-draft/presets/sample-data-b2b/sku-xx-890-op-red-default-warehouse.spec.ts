import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuXx890OpRedDefaultWarehouse preset`, () => {
  it(`should return a skuXx890OpRedDefaultWarehouse preset when built for rest`, () => {
    const skuXx890OpRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuXx890OpRedDefaultWarehouse()
      .build();
    expect(skuXx890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpRedDefaultWarehouse preset when built for graphql`, () => {
    const skuXx890OpRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuXx890OpRedDefaultWarehouse()
        .build();
    expect(skuXx890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
