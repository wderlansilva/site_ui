export interface Interactor<T> {
  execute( ...args: any[]): T;
}
