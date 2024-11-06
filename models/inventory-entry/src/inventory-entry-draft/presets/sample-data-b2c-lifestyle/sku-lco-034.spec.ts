import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLco034 preset`, () => {
  it(`should return a skuLco034 preset when built for rest`, () => {
    const skuLco034Preset = InventoryEntryDraftRest.presets.skuLco034().build();
    expect(skuLco034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLco034 preset when built for graphql`, () => {
    const skuLco034Preset = InventoryEntryDraftGraphql.presets
      .skuLco034()
      .build();
    expect(skuLco034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLco034 preset when built for legacy rest`, () => {
    const skuLco034Preset = InventoryEntryDraft.presets
      .skuLco034()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLco034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLco034 preset when built for legacy graphql`, () => {
    const skuLco034Preset = InventoryEntryDraft.presets
      .skuLco034()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLco034Preset).toMatchInlineSnapshot();
  });
});
