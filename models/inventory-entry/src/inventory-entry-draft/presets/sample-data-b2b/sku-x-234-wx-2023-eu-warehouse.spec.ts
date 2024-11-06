import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX234Wx2023EuWarehouse preset`, () => {
  it(`should return a skuX234Wx2023EuWarehouse preset when built for rest`, () => {
    const skuX234Wx2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuX234Wx2023EuWarehouse()
      .build();
    expect(skuX234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2023EuWarehouse preset when built for graphql`, () => {
    const skuX234Wx2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuX234Wx2023EuWarehouse()
      .build();
    expect(skuX234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2023EuWarehouse preset when built for legacy rest`, () => {
    const skuX234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuX234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
