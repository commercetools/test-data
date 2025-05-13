import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bb456St20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bb456-st-2023-1')
    .sku('bb456-st-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2376000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default bb456St20231;
