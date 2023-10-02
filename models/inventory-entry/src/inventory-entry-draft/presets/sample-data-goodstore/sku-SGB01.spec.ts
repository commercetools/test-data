
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSGB01 from './sku-SGB01';

describe('With skuSGB01 preset', () => {
    it('should return skuSGB01 preset', () => {
        const skuSGB01Preset = skuSGB01().build<TInventoryEntryDraft>();
        expect(skuSGB01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSGB01 preset when built for GraphQL', () => {
        const skuSGB01PresetGraphql = skuSGB01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSGB01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


