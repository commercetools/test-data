import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGpc02 preset`, () => {
  it(`should return a skuGpc02 preset when built for rest`, () => {
    const skuGpc02Preset = InventoryEntryDraftRest.presets.skuGpc02().build();
    expect(skuGpc02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGpc02 preset when built for graphql`, () => {
    const skuGpc02Preset = InventoryEntryDraftGraphql.presets
      .skuGpc02()
      .build();
    expect(skuGpc02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGpc02 preset when built for legacy rest`, () => {
    const skuGpc02Preset = InventoryEntryDraft.presets
      .skuGpc02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGpc02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGpc02 preset when built for legacy graphql`, () => {
    const skuGpc02Preset = InventoryEntryDraft.presets
      .skuGpc02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGpc02Preset).toMatchInlineSnapshot();
  });
});
