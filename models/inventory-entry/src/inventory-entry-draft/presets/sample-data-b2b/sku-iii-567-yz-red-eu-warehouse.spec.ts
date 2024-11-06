import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIii567YzRedEuWarehouse preset`, () => {
  it(`should return a skuIii567YzRedEuWarehouse preset when built for rest`, () => {
    const skuIii567YzRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuIii567YzRedEuWarehouse()
      .build();
    expect(skuIii567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzRedEuWarehouse preset when built for graphql`, () => {
    const skuIii567YzRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIii567YzRedEuWarehouse()
      .build();
    expect(skuIii567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzRedEuWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
