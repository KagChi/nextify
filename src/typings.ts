/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type React from "react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface BaseConditionOptions {
    when: boolean;
    fallback: React.ReactNode;
}

