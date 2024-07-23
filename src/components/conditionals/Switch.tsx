import React from "react";
import { PartialBy, BaseConditionOptions } from "../../typings";

export interface SwitchConditionOptions extends PartialBy<BaseConditionOptions, "fallback"> {
    children: React.ReactNode;
}

export const Switch = ({ children, fallback }: SwitchConditionOptions) => {
    const matches = React.Children.toArray(children);
    for (const match of matches) {
        if (React.isValidElement(match) && typeof match === "object" && "props" in match && match.props && "when" in match.props && typeof match.props.when === "boolean" && match.props.when) {
            return (
                <>
                    match
                </>
            );
        }
    }

    return (
        <>
            {fallback}
        </>
    )
}
