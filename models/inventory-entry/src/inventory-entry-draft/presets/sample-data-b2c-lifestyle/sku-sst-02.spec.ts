import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSst02 preset`, () => {
  it(`should return a skuSst02 preset when built for rest`, () => {
    const skuSst02Preset = InventoryEntryDraftRest.presets.skuSst02().build();
    expect(skuSst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSst02 preset when built for graphql`, () => {
    const skuSst02Preset = InventoryEntryDraftGraphql.presets
      .skuSst02()
      .build();
    expect(skuSst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSst02 preset when built for legacy rest`, () => {
    const skuSst02Preset = InventoryEntryDraft.presets
      .skuSst02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSst02 preset when built for legacy graphql`, () => {
    const skuSst02Preset = InventoryEntryDraft.presets
      .skuSst02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSst02Preset).toMatchInlineSnapshot();
  });
});
