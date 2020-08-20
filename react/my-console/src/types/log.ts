export enum methodEnum {
  log, info, warn, debug, error
}

export type EnumKeys = keyof typeof methodEnum;


export type  methodEnumInterface = {
  [key in EnumKeys]: (...args: []) => void
}