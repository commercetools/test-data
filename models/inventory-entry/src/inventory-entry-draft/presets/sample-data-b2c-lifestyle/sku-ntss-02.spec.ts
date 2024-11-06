import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNtss02 preset`, () => {
  it(`should return a skuNtss02 preset when built for rest`, () => {
    const skuNtss02Preset = InventoryEntryDraftRest.presets.skuNtss02().build();
    expect(skuNtss02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss02 preset when built for graphql`, () => {
    const skuNtss02Preset = InventoryEntryDraftGraphql.presets
      .skuNtss02()
      .build();
    expect(skuNtss02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss02 preset when built for legacy rest`, () => {
    const skuNtss02Preset = InventoryEntryDraft.presets
      .skuNtss02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss02 preset when built for legacy graphql`, () => {
    const skuNtss02Preset = InventoryEntryDraft.presets
      .skuNtss02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss02Preset).toMatchInlineSnapshot();
  });
});
