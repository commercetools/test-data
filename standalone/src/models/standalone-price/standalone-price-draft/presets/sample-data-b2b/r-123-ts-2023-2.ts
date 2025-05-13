import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const r123Ts20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('r123-ts-2023-2')
    .sku('r123-ts-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1149501))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default r123Ts20232;
