import * as React from 'react';
import * as PapaParse from 'papaparse';
export interface IFileInfo {
    name: string;
    size: number;
    type: string;
}
export interface CSVReaderProps {
    accept?: string;
    cssClass?: string;
    cssInputClass?: string;
    cssLabelClass?: string;
    fileEncoding?: string;
    inputId?: string;
    inputName?: string;
    inputStyle?: object;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    label?: string | React.ReactNode;
    onError?: (error: Error) => void;
    onFileLoaded: (data: Array<any>, fileInfo: IFileInfo, originalFile?: File) => any;
    parserOptions?: PapaParse.ParseConfig;
    disabled?: boolean;
    strict?: boolean;
}
declare const CSVReader: React.FC<CSVReaderProps>;
export default CSVReader;
