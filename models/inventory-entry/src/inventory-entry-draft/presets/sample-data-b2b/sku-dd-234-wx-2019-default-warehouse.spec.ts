import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDd234Wx2019DefaultWarehouse preset`, () => {
  it(`should return a skuDd234Wx2019DefaultWarehouse preset when built for rest`, () => {
    const skuDd234Wx2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuDd234Wx2019DefaultWarehouse()
      .build();
    expect(skuDd234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2019DefaultWarehouse preset when built for graphql`, () => {
    const skuDd234Wx2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuDd234Wx2019DefaultWarehouse()
        .build();
    expect(skuDd234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuDd234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDd234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuDd234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDd234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
