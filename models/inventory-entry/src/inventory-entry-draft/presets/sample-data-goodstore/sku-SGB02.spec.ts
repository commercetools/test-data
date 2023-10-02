
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSGB02 from './sku-SGB02';

describe('With skuSGB02 preset', () => {
    it('should return skuSGB02 preset', () => {
        const skuSGB02Preset = skuSGB02().build<TInventoryEntryDraft>();
        expect(skuSGB02Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSGB02 preset when built for GraphQL', () => {
        const skuSGB02PresetGraphql = skuSGB02().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSGB02PresetGraphql).toMatchInlineSnapshot(``);
    });
});


