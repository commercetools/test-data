import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMpc02 preset`, () => {
  it(`should return a skuMpc02 preset when built for rest`, () => {
    const skuMpc02Preset = InventoryEntryDraftRest.presets.skuMpc02().build();
    expect(skuMpc02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMpc02 preset when built for graphql`, () => {
    const skuMpc02Preset = InventoryEntryDraftGraphql.presets
      .skuMpc02()
      .build();
    expect(skuMpc02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMpc02 preset when built for legacy rest`, () => {
    const skuMpc02Preset = InventoryEntryDraft.presets
      .skuMpc02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMpc02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMpc02 preset when built for legacy graphql`, () => {
    const skuMpc02Preset = InventoryEntryDraft.presets
      .skuMpc02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMpc02Preset).toMatchInlineSnapshot();
  });
});
