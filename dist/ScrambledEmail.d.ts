import React from 'react';
export interface IScrambledEmailProps {
    readonly email: string;
    readonly text: string;
    readonly className: string;
}
export declare const ScrambledEmail: React.FC<IScrambledEmailProps>;
