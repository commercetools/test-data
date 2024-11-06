import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDd234Wx2023DefaultWarehouse preset`, () => {
  it(`should return a skuDd234Wx2023DefaultWarehouse preset when built for rest`, () => {
    const skuDd234Wx2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuDd234Wx2023DefaultWarehouse()
      .build();
    expect(skuDd234Wx2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2023DefaultWarehouse preset when built for graphql`, () => {
    const skuDd234Wx2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuDd234Wx2023DefaultWarehouse()
        .build();
    expect(skuDd234Wx2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuDd234Wx2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDd234Wx2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuDd234Wx2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDd234Wx2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
