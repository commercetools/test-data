import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWw567YzRedEuWarehouse preset`, () => {
  it(`should return a skuWw567YzRedEuWarehouse preset when built for rest`, () => {
    const skuWw567YzRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuWw567YzRedEuWarehouse()
      .build();
    expect(skuWw567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzRedEuWarehouse preset when built for graphql`, () => {
    const skuWw567YzRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuWw567YzRedEuWarehouse()
      .build();
    expect(skuWw567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzRedEuWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
