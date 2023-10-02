
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuTTSS01 from './sku-TTSS01';

describe('With skuTTSS01 preset', () => {
    it('should return skuTTSS01 preset', () => {
        const skuTTSS01Preset = skuTTSS01().build<TInventoryEntryDraft>();
        expect(skuTTSS01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuTTSS01 preset when built for GraphQL', () => {
        const skuTTSS01PresetGraphql = skuTTSS01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuTTSS01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


