import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDd234Wx2023EuWarehouse preset`, () => {
  it(`should return a skuDd234Wx2023EuWarehouse preset when built for rest`, () => {
    const skuDd234Wx2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuDd234Wx2023EuWarehouse()
      .build();
    expect(skuDd234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2023EuWarehouse preset when built for graphql`, () => {
    const skuDd234Wx2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDd234Wx2023EuWarehouse()
      .build();
    expect(skuDd234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2023EuWarehouse preset when built for legacy rest`, () => {
    const skuDd234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDd234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuDd234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDd234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
