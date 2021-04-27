import React, { Component } from "react";
declare type Event = "resize" | "domChange";
interface DomListenerProps {
    /**
     * Function called on DOM modification or window resize with the new document height as first parameter and `resize`|`domChange` as second parameter depending on the origin of the update.
     */
    onUpdate: (height: number, event: Event) => void;
}
/**
 * Component that will listen to:
 * - any changes in the children tree (any DOM modification),
 * - any resize event happening on the current page.
 * Every time one of this event occur the `onUpdate` prop will be called with the new document height of the listened window and the event originating the update
 */
export declare class DomListener extends Component<DomListenerProps> {
    observer: MutationObserver;
    private readonly onResize;
    private readonly onDomChange;
    constructor(props: DomListenerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onUpdateHeight(event: Event): () => void;
    render(): React.ReactNode;
}
export {};
