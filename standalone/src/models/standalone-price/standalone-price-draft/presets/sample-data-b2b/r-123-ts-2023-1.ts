import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const r123Ts20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('r123-ts-2023-1')
    .sku('r123-ts-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1254000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default r123Ts20231;
