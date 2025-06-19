import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import dumpTrucks from './dump-trucks';

const dumpTrucksCategory = dumpTrucks().build<TCategoryDraft>();

const rigidDumpTrucks = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Starre Kipper')
        ['it-IT']('Camion Ribaltabili Rigidi')
        ['nl-NL']('Starre Kipwagens')
        ['fr-FR']('Camions-bennes rigides')
        ['en-AU']('Rigid Dump Trucks')
        ['es-ES']('Camiones volquete rígidos')
        ['en-GB']('Rigid Dump Trucks')
        ['en-NZ']('Rigid Dump Trucks')
        ['pt-PT']('Caminhões Basculantes Rígidos')
        ['en-US']('Rigid Dump Trucks')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kipper mit starrem Rahmen')
        ['it-IT']('Camion ribaltabili con telaio rigido')
        ['nl-NL']('Kipwagens met een star frame')
        ['fr-FR']('Camions-bennes avec une structure rigide')
        ['en-AU']('Dump trucks with a rigid frame')
        ['es-ES']('Camiones volquete con estructura rígida')
        ['en-GB']('Dump trucks with a rigid frame')
        ['en-NZ']('Dump trucks with a rigid frame')
        ['pt-PT']('Caminhões basculantes com estrutura rígida')
        ['en-US']('Dump trucks with a rigid frame')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('starre_kipper')
        ['it-IT']('rigid_dump_trucks')
        ['nl-NL']('rigid_dump_trucks')
        ['fr-FR']('camions_bennes_rigides')
        ['en-AU']('rigid_dump_trucks')
        ['es-ES']('camiones_volquete_rigidos')
        ['en-GB']('rigid_dump_trucks')
        ['en-NZ']('rigid_dump_trucks')
        ['pt-PT']('rigid_dump_trucks')
        ['en-US']('rigid_dump_trucks')
    )
    .key('rigid-dump-trucks')
    .orderHint('0.000017113644847521911712808')
    .parent(KeyReferenceDraft.presets.category().key(dumpTrucksCategory.key!));

export default rigidDumpTrucks;
