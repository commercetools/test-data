
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSWB01 from './sku-SWB01';

describe('With skuSWB01 preset', () => {
    it('should return skuSWB01 preset', () => {
        const skuSWB01Preset = skuSWB01().build<TInventoryEntryDraft>();
        expect(skuSWB01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSWB01 preset when built for GraphQL', () => {
        const skuSWB01PresetGraphql = skuSWB01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSWB01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


