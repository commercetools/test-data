import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPmap01 preset`, () => {
  it(`should return a skuPmap01 preset when built for rest`, () => {
    const skuPmap01Preset = InventoryEntryDraftRest.presets.skuPmap01().build();
    expect(skuPmap01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuPmap01 preset when built for graphql`, () => {
    const skuPmap01Preset = InventoryEntryDraftGraphql.presets
      .skuPmap01()
      .build();
    expect(skuPmap01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuPmap01 preset when built for legacy rest`, () => {
    const skuPmap01Preset = InventoryEntryDraft.presets
      .skuPmap01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPmap01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuPmap01 preset when built for legacy graphql`, () => {
    const skuPmap01Preset = InventoryEntryDraft.presets
      .skuPmap01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPmap01Preset).toMatchInlineSnapshot();
  });
});
