export const GETTER_SERVICE = Symbol('GETTER_SERVICE');

export interface Getter {
  get(url: string): Promise<unknown>;
}
