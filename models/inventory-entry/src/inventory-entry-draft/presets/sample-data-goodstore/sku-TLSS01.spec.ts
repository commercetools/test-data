
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuTLSS01 from './sku-TLSS01';

describe('With skuTLSS01 preset', () => {
    it('should return skuTLSS01 preset', () => {
        const skuTLSS01Preset = skuTLSS01().build<TInventoryEntryDraft>();
        expect(skuTLSS01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuTLSS01 preset when built for GraphQL', () => {
        const skuTLSS01PresetGraphql = skuTLSS01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuTLSS01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


