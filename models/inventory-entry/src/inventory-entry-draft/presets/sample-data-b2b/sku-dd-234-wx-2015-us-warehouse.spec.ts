import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDd234Wx2015UsWarehouse preset`, () => {
  it(`should return a skuDd234Wx2015UsWarehouse preset when built for rest`, () => {
    const skuDd234Wx2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuDd234Wx2015UsWarehouse()
      .build();
    expect(skuDd234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2015UsWarehouse preset when built for graphql`, () => {
    const skuDd234Wx2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDd234Wx2015UsWarehouse()
      .build();
    expect(skuDd234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2015UsWarehouse preset when built for legacy rest`, () => {
    const skuDd234Wx2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDd234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuDd234Wx2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDd234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
