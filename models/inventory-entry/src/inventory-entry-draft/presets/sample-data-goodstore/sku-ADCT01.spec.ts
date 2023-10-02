
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuADCT01 from './sku-ADCT01';

describe('With skuADCT01 preset', () => {
    it('should return skuADCT01 preset', () => {
        const skuADCT01Preset = skuADCT01().build<TInventoryEntryDraft>();
        expect(skuADCT01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuADCT01 preset when built for GraphQL', () => {
        const skuADCT01PresetGraphql = skuADCT01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuADCT01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


