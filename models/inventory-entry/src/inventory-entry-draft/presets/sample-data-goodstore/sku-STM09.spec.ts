
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSTM09 from './sku-STM09';

describe('With skuSTM09 preset', () => {
    it('should return skuSTM09 preset', () => {
        const skuSTM09Preset = skuSTM09().build<TInventoryEntryDraft>();
        expect(skuSTM09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSTM09 preset when built for GraphQL', () => {
        const skuSTM09PresetGraphql = skuSTM09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSTM09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


