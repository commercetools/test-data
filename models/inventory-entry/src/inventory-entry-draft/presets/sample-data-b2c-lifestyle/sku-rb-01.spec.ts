import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRb01 preset`, () => {
  it(`should return a skuRb01 preset when built for rest`, () => {
    const skuRb01Preset = InventoryEntryDraftRest.presets.skuRb01().build();
    expect(skuRb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRb01 preset when built for graphql`, () => {
    const skuRb01Preset = InventoryEntryDraftGraphql.presets.skuRb01().build();
    expect(skuRb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRb01 preset when built for legacy rest`, () => {
    const skuRb01Preset = InventoryEntryDraft.presets
      .skuRb01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRb01 preset when built for legacy graphql`, () => {
    const skuRb01Preset = InventoryEntryDraft.presets
      .skuRb01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRb01Preset).toMatchInlineSnapshot();
  });
});
