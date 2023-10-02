
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuGPC01 from './sku-GPC01';

describe('With skuGPC01 preset', () => {
    it('should return skuGPC01 preset', () => {
        const skuGPC01Preset = skuGPC01().build<TInventoryEntryDraft>();
        expect(skuGPC01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuGPC01 preset when built for GraphQL', () => {
        const skuGPC01PresetGraphql = skuGPC01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuGPC01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


