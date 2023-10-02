
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuDWEG09 from './sku-DWEG09';

describe('With skuDWEG09 preset', () => {
    it('should return skuDWEG09 preset', () => {
        const skuDWEG09Preset = skuDWEG09().build<TInventoryEntryDraft>();
        expect(skuDWEG09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuDWEG09 preset when built for GraphQL', () => {
        const skuDWEG09PresetGraphql = skuDWEG09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuDWEG09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


