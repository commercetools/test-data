import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc567YzGreenEuWarehouse preset`, () => {
  it(`should return a skuCcc567YzGreenEuWarehouse preset when built for rest`, () => {
    const skuCcc567YzGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuCcc567YzGreenEuWarehouse()
      .build();
    expect(skuCcc567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzGreenEuWarehouse preset when built for graphql`, () => {
    const skuCcc567YzGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCcc567YzGreenEuWarehouse()
      .build();
    expect(skuCcc567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
