import { FunctionComponent } from "react";
interface ObfuscatableValueProps {
    /**
     * value to be displayed
     */
    value?: string | number;
    /**
     * handler called when obfuscation is requested for the current value
     */
    onObfuscationRequested?: () => void;
    /**
     * indicates whether the value is editable or not
     */
    editable?: boolean;
}
/**
 * Component displaying a value and a cross when editable props is set to true
 * Consumer is notified thanks to obfuscate property that the value displayed must be obfuscated
 */
export declare const ObfuscatableValue: FunctionComponent<ObfuscatableValueProps>;
export {};
