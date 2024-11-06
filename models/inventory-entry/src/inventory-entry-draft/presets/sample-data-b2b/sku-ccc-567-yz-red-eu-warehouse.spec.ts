import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc567YzRedEuWarehouse preset`, () => {
  it(`should return a skuCcc567YzRedEuWarehouse preset when built for rest`, () => {
    const skuCcc567YzRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuCcc567YzRedEuWarehouse()
      .build();
    expect(skuCcc567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzRedEuWarehouse preset when built for graphql`, () => {
    const skuCcc567YzRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCcc567YzRedEuWarehouse()
      .build();
    expect(skuCcc567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzRedEuWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
