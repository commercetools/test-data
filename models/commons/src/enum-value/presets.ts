import EnumValue from './builder';

const presets = {
  red: () => EnumValue().key('red').label('Red color'),
  blue: () => EnumValue().key('blue').label('Blue color'),
  green: () => EnumValue().key('green').label('Green color'),
};

export default presets;
