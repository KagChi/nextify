import React from "react";
import { PartialBy, BaseConditionOptions } from "../../types";

export interface ShowConditionOptions extends PartialBy<BaseConditionOptions, "fallback"> {
    children: React.ReactNode;
}

export const Show = ({ when, children, fallback }: ShowConditionOptions) => {
    if (when && React.isValidElement(children)) {
        return (
            <>
                {children}
            </>
        );
    }

    return (
        <>
            {fallback}
        </>
    )
}
