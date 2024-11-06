import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIii567YzGreenEuWarehouse preset`, () => {
  it(`should return a skuIii567YzGreenEuWarehouse preset when built for rest`, () => {
    const skuIii567YzGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuIii567YzGreenEuWarehouse()
      .build();
    expect(skuIii567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzGreenEuWarehouse preset when built for graphql`, () => {
    const skuIii567YzGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIii567YzGreenEuWarehouse()
      .build();
    expect(skuIii567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
