import { TemplateRef, Type } from '@angular/core';

export interface ViewRef {
  getElement(): Element | string;

  detectChanges(): void;

  destroy(): void;
}

type ExcludeFunctionPropertyNames<T> = {
  [Key in keyof T]: T[Key] extends Function ? never : Key;
}[keyof T];

export type ExcludeFunctions<T> = Pick<T, ExcludeFunctionPropertyNames<T>>;
export type Content = string | TemplateRef<any> | Type<any>;

export function isTemplateRef(value: any): value is TemplateRef<any> {
  return value instanceof TemplateRef;
}

export function isComponent(value: any): value is Type<any> {
  return typeof value === 'function';
}

export function isString(value: any): value is string {
  return typeof value === 'string';
}
