import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWw567YzGreenEuWarehouse preset`, () => {
  it(`should return a skuWw567YzGreenEuWarehouse preset when built for rest`, () => {
    const skuWw567YzGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuWw567YzGreenEuWarehouse()
      .build();
    expect(skuWw567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzGreenEuWarehouse preset when built for graphql`, () => {
    const skuWw567YzGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuWw567YzGreenEuWarehouse()
      .build();
    expect(skuWw567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
