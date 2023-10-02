
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuGPC03 from './sku-GPC03';

describe('With skuGPC03 preset', () => {
    it('should return skuGPC03 preset', () => {
        const skuGPC03Preset = skuGPC03().build<TInventoryEntryDraft>();
        expect(skuGPC03Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuGPC03 preset when built for GraphQL', () => {
        const skuGPC03PresetGraphql = skuGPC03().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuGPC03PresetGraphql).toMatchInlineSnapshot(``);
    });
});


