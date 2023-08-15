import { JSX } from "solid-js";

export type Component<P = {}> = (props: P) => JSX.Element;
