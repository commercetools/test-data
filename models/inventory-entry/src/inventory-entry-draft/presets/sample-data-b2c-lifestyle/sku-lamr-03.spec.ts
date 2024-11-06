import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLamr03 preset`, () => {
  it(`should return a skuLamr03 preset when built for rest`, () => {
    const skuLamr03Preset = InventoryEntryDraftRest.presets.skuLamr03().build();
    expect(skuLamr03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLamr03 preset when built for graphql`, () => {
    const skuLamr03Preset = InventoryEntryDraftGraphql.presets
      .skuLamr03()
      .build();
    expect(skuLamr03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLamr03 preset when built for legacy rest`, () => {
    const skuLamr03Preset = InventoryEntryDraft.presets
      .skuLamr03()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLamr03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLamr03 preset when built for legacy graphql`, () => {
    const skuLamr03Preset = InventoryEntryDraft.presets
      .skuLamr03()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLamr03Preset).toMatchInlineSnapshot();
  });
});
