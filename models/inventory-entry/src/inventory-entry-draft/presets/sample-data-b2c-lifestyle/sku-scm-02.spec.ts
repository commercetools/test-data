import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuScm02 preset`, () => {
  it(`should return a skuScm02 preset when built for rest`, () => {
    const skuScm02Preset = InventoryEntryDraftRest.presets.skuScm02().build();
    expect(skuScm02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuScm02 preset when built for graphql`, () => {
    const skuScm02Preset = InventoryEntryDraftGraphql.presets
      .skuScm02()
      .build();
    expect(skuScm02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuScm02 preset when built for legacy rest`, () => {
    const skuScm02Preset = InventoryEntryDraft.presets
      .skuScm02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuScm02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuScm02 preset when built for legacy graphql`, () => {
    const skuScm02Preset = InventoryEntryDraft.presets
      .skuScm02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuScm02Preset).toMatchInlineSnapshot();
  });
});
