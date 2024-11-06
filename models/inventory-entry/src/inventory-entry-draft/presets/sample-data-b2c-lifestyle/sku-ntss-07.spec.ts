import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNtss07 preset`, () => {
  it(`should return a skuNtss07 preset when built for rest`, () => {
    const skuNtss07Preset = InventoryEntryDraftRest.presets.skuNtss07().build();
    expect(skuNtss07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss07 preset when built for graphql`, () => {
    const skuNtss07Preset = InventoryEntryDraftGraphql.presets
      .skuNtss07()
      .build();
    expect(skuNtss07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss07 preset when built for legacy rest`, () => {
    const skuNtss07Preset = InventoryEntryDraft.presets
      .skuNtss07()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss07 preset when built for legacy graphql`, () => {
    const skuNtss07Preset = InventoryEntryDraft.presets
      .skuNtss07()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss07Preset).toMatchInlineSnapshot();
  });
});
