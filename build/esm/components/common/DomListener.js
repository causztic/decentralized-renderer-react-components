import React, { Component } from "react";
import ReactDOM from "react-dom";
/**
 * Component that will listen to:
 * - any changes in the children tree (any DOM modification),
 * - any resize event happening on the current page.
 * Every time one of this event occur the `onUpdate` prop will be called with the new document height of the listened window and the event originating the update
 */
// explicitly use Component as for some reason using React.Component make props documentation disappearing
export class DomListener extends Component {
    constructor(props) {
        super(props);
        this.onResize = this.onUpdateHeight("resize").bind(this);
        this.onDomChange = this.onUpdateHeight("domChange").bind(this);
        this.observer = new MutationObserver(this.onDomChange);
    }
    componentDidMount() {
        // eslint-disable-next-line react/no-find-dom-node
        const rootNode = ReactDOM.findDOMNode(this);
        if (rootNode) {
            this.observer.observe(rootNode, { attributes: true, childList: true, subtree: true, characterData: true });
            // need an initial trigger, make it run on next tick :shrug:
            setTimeout(this.onUpdateHeight);
        }
        window.addEventListener("resize", this.onResize); // ResizeObserver not good enough
    }
    componentWillUnmount() {
        this.observer.disconnect();
        window.removeEventListener("resize", this.onResize);
    }
    onUpdateHeight(event) {
        return () => this.props.onUpdate(document.documentElement.offsetHeight, event);
    }
    render() {
        return React.createElement("div", null, this.props.children);
    }
}
//# sourceMappingURL=DomListener.js.map