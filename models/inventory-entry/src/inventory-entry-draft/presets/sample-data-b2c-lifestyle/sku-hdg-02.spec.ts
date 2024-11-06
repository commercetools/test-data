import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHdg02 preset`, () => {
  it(`should return a skuHdg02 preset when built for rest`, () => {
    const skuHdg02Preset = InventoryEntryDraftRest.presets.skuHdg02().build();
    expect(skuHdg02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuHdg02 preset when built for graphql`, () => {
    const skuHdg02Preset = InventoryEntryDraftGraphql.presets
      .skuHdg02()
      .build();
    expect(skuHdg02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuHdg02 preset when built for legacy rest`, () => {
    const skuHdg02Preset = InventoryEntryDraft.presets
      .skuHdg02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHdg02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuHdg02 preset when built for legacy graphql`, () => {
    const skuHdg02Preset = InventoryEntryDraft.presets
      .skuHdg02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHdg02Preset).toMatchInlineSnapshot();
  });
});
