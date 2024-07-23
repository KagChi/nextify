import React from "react";

export interface ForListOptions<T> {
    each: T[];

    children: (item: T, index: number) => React.ReactNode;
}

export const For = <T,>({ each, children }: ForListOptions<T>) => {
    return <>
        {each.map((item, index) => children(item, index))}
    </>
}