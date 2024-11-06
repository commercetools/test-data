import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMtb023 preset`, () => {
  it(`should return a skuMtb023 preset when built for rest`, () => {
    const skuMtb023Preset = InventoryEntryDraftRest.presets.skuMtb023().build();
    expect(skuMtb023Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMtb023 preset when built for graphql`, () => {
    const skuMtb023Preset = InventoryEntryDraftGraphql.presets
      .skuMtb023()
      .build();
    expect(skuMtb023Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMtb023 preset when built for legacy rest`, () => {
    const skuMtb023Preset = InventoryEntryDraft.presets
      .skuMtb023()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMtb023Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMtb023 preset when built for legacy graphql`, () => {
    const skuMtb023Preset = InventoryEntryDraft.presets
      .skuMtb023()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMtb023Preset).toMatchInlineSnapshot();
  });
});
