declare type TargetContext = '_self' | '_blank';
declare type Nullable<T> = T | null;
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
