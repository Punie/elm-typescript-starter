/*
  # Elm Type Definitions

  This file is intended to pro vide a type-safe interface between Elm and
  Typescript and should be edited with great care and exclusively when one of
  the following modification are made on the Elm side:
  - adding or modifying the signature of ports
  - modifying the definition of the `Flags` type
  - modifying the `Program` type

  Mapping between Elm types and TS types is provided here as a reference:
  - `Int`      -> `number`
  - `Float`    -> `number`
  - `Bool`     -> `boolean`
  - `String`   -> `string`
  - `Maybe a`  -> `a | null`
  - `List a`   -> `Array<a>`
  - `Array a`  -> `Array<a>`
  - `(a, b)`   -> `[a, b]`     (works for any size of Elm tuples)
  - `Records`  -> JS `Object`  (well-typed)
  - `Value`    -> arbitrary `JSON`
*/


// INITIALISATION

export namespace Elm {
  export namespace Main {
    /** Initialize an Elm `App` with the provided `Config`. */
    export function init(config: Config): App;
  }
}

/** The Elm application type after initialization. */
export interface App {
  ports: Ports;
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
export interface Config {
  node?: Element | null;
  flags: Flags;
}


// ELM - TS INTEROP

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
export interface Ports {
  command: Cmd<Action>;
  notification: Sub<Message>;
}

/** */
export type Action = LogAction | StoreAction;

/** */
export type Message = TickMessage;

/** API for incoming ports from Elm. */
export interface Cmd<T> {
  subscribe(callback: (value: T) => void): void;
  unsubscribe(callback: (value: T) => void): void;
}

/** API for outgoing ports to Elm */
export interface Sub<T> {
  send(value: T): void;
}

export interface LogAction {
  kind: 'log';
  value: string;
}

export interface StoreAction {
  kind: 'store';
  value: number;
}

export interface TickMessage {
  kind: 'tick';
  value: number;
}
