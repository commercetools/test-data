import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGmct01 preset`, () => {
  it(`should return a skuGmct01 preset when built for rest`, () => {
    const skuGmct01Preset = InventoryEntryDraftRest.presets.skuGmct01().build();
    expect(skuGmct01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGmct01 preset when built for graphql`, () => {
    const skuGmct01Preset = InventoryEntryDraftGraphql.presets
      .skuGmct01()
      .build();
    expect(skuGmct01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGmct01 preset when built for legacy rest`, () => {
    const skuGmct01Preset = InventoryEntryDraft.presets
      .skuGmct01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGmct01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGmct01 preset when built for legacy graphql`, () => {
    const skuGmct01Preset = InventoryEntryDraft.presets
      .skuGmct01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGmct01Preset).toMatchInlineSnapshot();
  });
});
