import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIii567YzRedDefaultWarehouse preset`, () => {
  it(`should return a skuIii567YzRedDefaultWarehouse preset when built for rest`, () => {
    const skuIii567YzRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuIii567YzRedDefaultWarehouse()
      .build();
    expect(skuIii567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzRedDefaultWarehouse preset when built for graphql`, () => {
    const skuIii567YzRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuIii567YzRedDefaultWarehouse()
        .build();
    expect(skuIii567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
