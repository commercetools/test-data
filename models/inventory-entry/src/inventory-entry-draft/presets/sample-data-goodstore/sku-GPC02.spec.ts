
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuGPC02 from './sku-GPC02';

describe('With skuGPC02 preset', () => {
    it('should return skuGPC02 preset', () => {
        const skuGPC02Preset = skuGPC02().build<TInventoryEntryDraft>();
        expect(skuGPC02Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuGPC02 preset when built for GraphQL', () => {
        const skuGPC02PresetGraphql = skuGPC02().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuGPC02PresetGraphql).toMatchInlineSnapshot(``);
    });
});


