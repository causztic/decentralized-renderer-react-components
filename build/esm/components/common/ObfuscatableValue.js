import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { noop } from "../../utils";
/**
 * Component displaying a value and a cross when editable props is set to true
 * Consumer is notified thanks to obfuscate property that the value displayed must be obfuscated
 */
export const ObfuscatableValue = ({ value, onObfuscationRequested = noop, editable = false, }) => value ? (React.createElement("div", { onClick: () => {
        if (editable) {
            onObfuscationRequested();
        }
    }, style: { display: "inline-block" } },
    value,
    " ",
    editable && (React.createElement(FontAwesomeIcon, { title: "Obfuscate value", icon: faTimes, style: { color: "red", cursor: "pointer" } })))) : null;
//# sourceMappingURL=ObfuscatableValue.js.map