declare namespace RsPack {
  export namespace NodeRequire {
    export interface Context {
      keys(): string[];
      (id: string): unknown;
      resolve(id: string): string;
    }
  }
}

declare interface NodeRequire {
  /**
   * Creates a context for the given directory. The context will only require files that match the filter.
   * It's useful for dynamically requiring files.
   *
   * @param {string} directory The directory to create a context for.
   * @param {boolean} [includeSubdirs] Whether to include subdirectories.
   * @param {(string | RegExp)} [filter] A filter to match files against.
   * @param {("sync" | "eager" | "weak" | "lazy" | "lazy-once")} [mode] The mode to use.
   * @return {RsPack.NodeRequire.Context} The context.
   * @memberof NodeRequire
   */
  context(
    directory: string,
    includeSubdirs?: boolean,
    filter?: string | RegExp,
    mode?: "sync" | "eager" | "weak" | "lazy" | "lazy-once"
  ): RsPack.NodeRequire.Context;
}
