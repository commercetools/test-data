import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBa092 preset`, () => {
  it(`should return a skuBa092 preset when built for rest`, () => {
    const skuBa092Preset = InventoryEntryDraftRest.presets.skuBa092().build();
    expect(skuBa092Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBa092 preset when built for graphql`, () => {
    const skuBa092Preset = InventoryEntryDraftGraphql.presets
      .skuBa092()
      .build();
    expect(skuBa092Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBa092 preset when built for legacy rest`, () => {
    const skuBa092Preset = InventoryEntryDraft.presets
      .skuBa092()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBa092Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBa092 preset when built for legacy graphql`, () => {
    const skuBa092Preset = InventoryEntryDraft.presets
      .skuBa092()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBa092Preset).toMatchInlineSnapshot();
  });
});
