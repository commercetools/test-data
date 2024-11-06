import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuD234Wx2015DefaultWarehouse preset`, () => {
  it(`should return a skuD234Wx2015DefaultWarehouse preset when built for rest`, () => {
    const skuD234Wx2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuD234Wx2015DefaultWarehouse()
      .build();
    expect(skuD234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2015DefaultWarehouse preset when built for graphql`, () => {
    const skuD234Wx2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuD234Wx2015DefaultWarehouse()
        .build();
    expect(skuD234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuD234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuD234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuD234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuD234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
