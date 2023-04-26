import { type HTMLAttributes } from "react";
interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
    [key: string]: any;
    link: string;
    wide?: boolean;
    width?: number | string;
    height?: number | string;
    frameBorder?: number | string;
    allow?: string;
}
export declare const Spotify: ({ link, style, wide, width, height, frameBorder, allow, ...props }: SpotifyProps) => JSX.Element;
export {};
