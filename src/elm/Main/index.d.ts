/*
 * Elm Type Definitions
 *
 * This file is intended to provide a type-safe interface between Elm and
 * Typescript and should be edited with great care and exclusively when one of
 * the following modification are made on the Elm side:
 * - adding ports or modifying the signature of existing ones
 * - modifying the definition of the `Flags` type
 * - modifying the `Program` type
 *
 * Mapping between Elm types and TS types is provided here as a reference:
 * - `Int`      -> `number`
 * - `Float`    -> `number`
 * - `Bool`     -> `boolean`
 * - `String`   -> `string`
 * - `Maybe a`  -> `a | null`
 * - `List a`   -> `Array<a>`
 * - `Array a`  -> `Array<a>`
 * - `(a, b)`   -> `[a, b]`     (works for any size of Elm tuples)
 * - `Records`  -> JS `Object`  (well-typed)
 * - `Value`    -> arbitrary `JSON`
 */

/** Elm runtime entrypoint. */
export namespace Elm {
  /** Elm `Main` module. */
  export namespace Main {
    /** Initialize an Elm `App` with the provided `Config`. */
    export function init(config: Config): App;
  }
}

/** The Elm application type after initialization. */
export interface App {
  readonly ports: Ports;
}

/**
 * On initialization, the Elm runtime expects an `Element` node to take over
 * when the application type is one of the following:
 * - `Browser.sandbox`
 * - `Browser.element`
 *
 * This is not required for the following application types because the Elm
 * runtime will take over the whole page or run headless:
 * - `Browser.document`
 * - `Browser.application`
 * - `Platform.worker`
 *
 * If flags are expected on the Elm side (ie. when the application type is not
 * `Browser.sandbox` and `Flags` is not an alias for `()`), they **must** be
 * provided on initialization.
 */
export type Config = {
  readonly node?: Element | null;
  readonly flags: Flags;
}

/**
 * A value of type `Flags` is provided to Elm on initialization.
 *
 * This type can be modified to match the corresponding `Flags` type on the
 * Elm side.
 */
export type Flags = string;

/**
 * The `Ports` interface represents the complete communication API between Elm
 * and Typescript.
 *
 * Any incoming port from Elm must be mapped in this interface by a field of
 * the same name with type `Cmd<a>` where `a` is the type of the values
 * received from Elm.
 *
 * Any outgoing port to Elm must also be mapped by a field of the same name
 * with type `Sub<a>` where `a` is the type of the values send to Elm.
 */
export type Ports = {
  readonly command: Cmd<Action>;
  readonly notification: Sub<Message>;
}

/** Type of commands coming from Elm to perform on the JS side. */
export type Action = LoadAction | LogAction | StoreAction;

/** Type of messages to send from JS to notify the Elm side. */
export type Message = TickMessage;

/** API for incoming ports from Elm. */
export type Cmd<T> = {
  subscribe(callback: (value: T) => void): void;
  unsubscribe(callback: (value: T) => void): void;
}

/** API for outgoing ports to Elm */
export type Sub<T> = {
  send(value: T): void;
}

export type LoadAction = {
  readonly kind: 'load';
  readonly value: null;
}

export type LogAction = {
  readonly kind: 'log';
  readonly value: string;
}

export type StoreAction = {
  readonly kind: 'store';
  readonly value: number;
}

export type TickMessage = {
  readonly kind: 'tick';
  readonly value: number;
}
