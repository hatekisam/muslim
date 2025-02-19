import { CSSProperties } from "react";
import { darkenColor } from "./util";

type Props = {
    readonly style?: CSSProperties;
    readonly mainColor: string;
}

function SurahNameDecorationSVG({ style, mainColor }: Props) {
    const highDarkStyle = {
        fill: darkenColor(mainColor, 50),
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 1004.7 142"
            style={style}
        >
            <path d="M837.4 20.3c2.8 2.7 7.3 1.1 7.8-2.8.7-5.5-5.6-7.8-9.9-5.9-5 2.2-7.4 9-6.2 14.2 1.6 6.9 8.3 8.1 14.4 7.7 10.3-.6 21.8-.7 27.5 9.7 5 9.1 1.1 20.6-8.9 24.1-10.5 3.7-22.6-6.3-19.5-17.5 1.6-5.8 7.2-10.5 13.4-9.4 2.9.5 5.7 2.3 7.3 4.8 1 1.5 1.4 3 1.5 4.8 0 5-1.6 5.1-4.9.5 1.4.8 2.7-1.4 1.3-2.2-4.2-2.4-9.6.7-8.5 5.8 1.2 6 8.8 6.6 12.5 2.6 4.6-4.9 2.3-12.7-2.5-16.5-5-3.9-11.9-4-17-.2-12.6 9.3-5.5 29.1 9.2 31 14.9 2 25.4-14 20.1-27.2-3.2-7.9-10.3-12.4-18.7-13.5-5.4-.7-10.5.5-15.8.3-4.9-.2-9.1-2.8-8.8-8.3.1-1.6.7-3.5 1.4-4.9.5-.7 1-1.3 1.5-2 4.8-3.6 5.9-2.2 3.4 4.1-.4-.3-1 .4-.6.8z"
                style={highDarkStyle}
            />
            <path d="M866.4 28.4c-6.5 3.5-8.8 2.7-6.8-2.2-.5-2.3.2-3.8 2.2-4.5 1.9-1.5 4.6-1.8 6.9-1 4.2 1.3 5.8 5.5 8.1 8.8 2.3 3.4 5.3 6.4 9.2 7.9 7.4 2.7 16.3-2 15.4-10.6-.7-6.9-8.9-11.3-14.9-7.6-5.4 3.3-4.2 12.6 3 11.2 1.4-.3 1-2.3-.3-2.4.2-2.4.4-4.7.6-7.1 1.2 0 2.4.1 3.5.1 2.2.6 4.4 2.6 5.1 4.7 1.6 4.8-2.5 9.4-7.2 9.7-7.1.5-11.1-5.9-14.5-10.9-3.5-5.2-9.3-8.7-15.5-5.4-4.4 2.4-7.1 9-2.8 12.8 3.5 3.1 8.4 1 8.8-3.5.1-.3-.7-.4-.8 0z"
                style={highDarkStyle}
            />
            <path d="M875.8 46.9c2.6-4.5 7.6-7.8 13-6.6 5.3 1.2 9.3 6.2 9.4 11.5.2 6.3-5.8 12.7-12.4 9.9-3.1-1.3-5-4.6-4.1-7.9.5-1.8 1.6-3.3 3.4-4 .9-.6 1.8-.6 2.8-.2 3.6-.1 3.7 2.1.6 6.7-.8.1-1.2 1.4-.2 1.5 3.6.5 6.4-2.5 5.8-6.1-.9-4.5-6-6.2-9.9-4.7-9.6 3.8-5.6 17.4 3.7 18.2 11.9 1 16.5-13.8 10.1-22.1-6.3-8.1-19.9-7-23.2 3.3-.3.7.7 1.1 1 .5z"
                style={highDarkStyle}
            />
            <path d="M898.3 59.1c3-5.2 7.4-10.6 13.9-10.9 5.8-.2 9.5 4.3 13.1 8.1 5.1 5.4 11.4 10.1 19.2 9.7 14.4-.8 18.2-19.2 4.1-24.3-5.4-1.9-12.9-1.7-16.6 3.3-3.4 4.6-2.2 11.4 2.8 14.3 4 2.4 11.9 1.7 12.5-4.2.4-3.9-3.8-6.7-6.9-4.2-.9.8.1 1.9 1 1.8.1 5-1.7 6.3-5.2 4-2.1-1.3-3.2-3.2-3.3-5.8 0-4 3.1-6.5 6.7-7.3 6-1.2 15.1 2 15.3 9.2.2 6.6-6.3 10.4-12.2 10.2-5.8-.2-10.7-3.7-14.6-7.6-4.6-4.5-9-9.9-16-9.5-7.2.5-12.1 6.3-15 12.4-.2.9.8 1.5 1.2.8z"
                style={highDarkStyle}
            />
            <path d="M914.3 46.3c-3.9-4.3-7.5-9.4-3.2-15.1 1.9-2.6 5.2-4.5 8.5-3.1 1.6.6 3.2 2.3 3.3 4.2.2 3.8-6.3 5.8-6.9.6-.1-1-1.7-1.4-1.9-.2-.7 4.8 4.7 8.2 8.7 5.1 4.5-3.4 2.7-10-2.1-12-12.9-5.5-19.9 18.6-6.8 21.1.4 0 .6-.4.4-.6zM933.4 36.4c-.5 2 .8 4.2 3 4.2 2 0 3.9-1.9 3.1-4-.8-2-3.8-2.9-5.1-.8-1.1 1.8.1 4.3 2.2 4.4.5 0 1-.3 1.2-.7.8-1.4.5-3.1-1.2-3.6-.8-.2-1.5.5-1.3 1.3.1.3.2.8.1.9.4-.2.8-.5 1.2-.7.5 0-.1.2.1-.1-.1 0 0-.2 0-.2-.1.1.1.1.2.2.2.1.3.2.3.5 0 .6-.9.8-1.3.8-.9-.2-1.3-1.3-1.4-2.1 0-.5-.9-.8-1.1-.1zM858.6 71c24.5 2 49.5.9 74 .9h35.9c11.8 0 24.5 1.3 36.2-.3 1.1-.2 1.1-2.1 0-2.2-11.4-1.5-23.7-.3-35.1-.3h-37c-24.5.1-49.5-1.1-74 .9-.6.2-.6.9 0 1z"
                style={highDarkStyle}
            />
            <path d="M957.4 65.1c2.6-.3 2.9-3.1.8-4.5-3.1-2-7.1 1.2-7.2 4.3-.3 4.3 4.6 6.4 8.3 5.9 2.2-.3 4.1-1.6 5.9-3 1.6-1.3 3-2.9 4.6-4.3 1.9-2 4.3-3.2 7.1-3.6 6.7 5.9 7.1 7.8 1.1 5.6.9.2 1.5-.9.9-1.5-2.9-3.1-7.5.2-6.8 4.1 1.1 5.7 8.4 5.1 11.2 1.2 3.1-4.4.7-10.6-4.6-11.8-3.4-.7-6.6 1-9.2 3-1.9 1.5-3.4 3.5-5.2 5.1-1.4 1.2-2.6 2.2-4.4 2.7-.9.5-1.8.6-2.7.3-2.3.1-2.2-1.4.4-4.2-.6.3-.5.8-.2.7zM905.4 55.6c3.9-7 7.4 1.8 8.5 4.2.8 1.7 1.9 3.4 3.5 4.7 2.6 2.1 6.6 2.8 8.5-.4.6-.9-.1-2.3-1.3-2.2-1.5.1-3 .3-4.3-.5-1.5-.9-2.3-3-3.2-4.4-1.3-2-3.2-4.3-5.5-5.2-2.7-1.1-7.3.2-6.6 3.8 0 .1.3.1.4 0zM902.4 58.8c2.5-1.9 2.7 2.9 2.7 4.2 0 1.4.2 3.1 1.3 4 2.4 2.1 6.5-.2 5-3.3-.5-1.1-2-.9-2.6 0 0 0-.5.2-.7.2-.6-.1-.9-.9-1-1.4-.4-1.4-.2-2.9-1.2-4.1-1-1.3-3.2-1.8-4.1-.2-.2.4.3.9.6.6zM838.1 121.6c.2 2 .5 4 .7 6-1.4-.6-2.8-1.3-4.1-1.9-1.1-.9-2-2.9-2.4-4.3-1.2-4.1 0-8.8 4.3-10.3 4.7-1.7 10.5.1 15.4 0 7.8-.1 15.6-2.5 20.4-9 8.8-11.9 2.7-29.8-12.6-32-14.7-2.1-26.5 15.3-17.3 27.6 3.8 5.1 10.4 7.6 16.5 5.3 5.8-2.2 10.1-8.2 8.4-14.6-1.6-5.9-9.9-9.7-13.7-3.5-3.3 5.3 2.4 10.9 7.6 7.9 1.4-.8.2-3-1.3-2.2 3.2-4.6 4.9-4.4 4.9.6 0 1.8-.5 3.3-1.5 4.8-1.6 2.5-4.4 4.3-7.3 4.8-6.2 1.2-11.8-3.6-13.4-9.4-3.1-11.2 9.1-21.2 19.5-17.5 10.1 3.5 13.9 15 8.9 24.1-5.7 10.4-17.2 10.2-27.5 9.7-6.1-.3-12.8.8-14.4 7.7-1.2 5.1 1.1 11.9 6.2 14.1 4.3 1.9 10.6-.4 9.9-5.9-.5-3.9-5-5.5-7.8-2.8-.6.4 0 1.1.6.8z"
                style={highDarkStyle}
            />
            <path d="M867.2 112.6c-.3-4.4-5.2-6.5-8.7-3.5-4.4 3.8-1.8 10.5 2.7 12.9 5.8 3.1 11.6.2 15-4.7 3.5-4.9 6.7-11.1 13.5-11.5 4.8-.3 9.5 3.2 8.8 8.4-.3 2.3-1.7 4-3.7 5.1-1 .8-2.1 1.1-3.3.9-3.5.7-4.3-1.7-2.4-7 1.3 0 1.7-2.1.3-2.4-6.7-1.4-8.6 7.1-3.7 10.8 6 4.4 14.8 0 15.6-7.2.9-8.2-7.4-13-14.6-10.8-4 1.2-7.2 4.1-9.5 7.5-2.2 3-3.5 6.5-6.9 8.4-2.2 1.2-4.5 1.8-7 1-1.1-.7-2.2-1.3-3.3-2-3.5-7.5-1.4-9.4 6.2-5.7.3.4 1.1.3 1-.2z"
                style={highDarkStyle}
            />
            <path d="M874.7 94.6c3.3 10.3 16.9 11.3 23.2 3.3 6.5-8.3 1.8-23.1-10.1-22.1-9.3.8-13.3 14.3-3.7 18.2 3.7 1.4 8.5 0 9.8-4.1 1.1-3.8-1.8-7.3-5.6-6.7-.9.2-.6 1.4.2 1.5.4 2.2.9 4.3 1.3 6.5-1.2.2-2.5.3-3.7.5-1.5-.3-3.3-1.8-4-3.1-1.7-3.1-.1-7.1 2.7-8.9 6.6-4.1 13.6 2.9 13.4 9.5-.1 5.1-3.8 10-8.8 11.4-5.6 1.6-10.9-1.7-13.6-6.4-.3-.6-1.3-.2-1.1.4z"
                style={highDarkStyle}
            />
            <path d="M897.3 82.6c2.9 6.1 7.8 11.9 15 12.4 7.1.4 11.5-5 16-9.5 3.9-3.9 8.9-7.5 14.6-7.6 5.9-.2 12.4 3.6 12.2 10.2-.2 7.2-9.3 10.5-15.3 9.2-3.6-.7-6.8-3.2-6.7-7.3.1-2.5 1.2-4.4 3.3-5.8 3.5-2.3 5.2-.9 5.2 4-.9-.2-1.9 1-1 1.8 3.1 2.5 7.3-.3 6.9-4.2-.6-5.8-8.5-6.6-12.5-4.2-4.9 2.9-6.2 9.7-2.8 14.3 3.7 5 11.2 5.2 16.6 3.3 14.2-5 10.3-23.4-4.1-24.3-7.8-.4-14.1 4.3-19.2 9.7-3.6 3.8-7.3 8.3-13.1 8.1-6.6-.3-11-5.7-13.9-10.9-.6-.5-1.6.2-1.2.8z"
                style={highDarkStyle}
            />
            <path d="M914 94.3c-6 1.2-8.2 8.8-6.5 13.9 1.7 5.4 7.7 9.6 13.3 7.2 4.7-2 6.5-8.4 2.2-11.9-4-3.2-9.5.1-8.9 5 .2 1.2 1.8.7 1.9-.2.6-4.9 7-2.9 6.9.6-.1 1.4-1.3 3.1-2.5 3.8-3.3 1.9-7.3 0-9.3-2.8-4.1-5.8-.7-10.7 3.2-15.1.2-.2 0-.6-.3-.5zM934.5 104.5c.1-.8.6-1.9 1.4-2.1.4-.1 1.3.2 1.3.8 0 .3-.6.6-.5.7-.2-.3.3-.3-.1-.2-.4-.2-.8-.4-1.2-.7.1.1 0 .7-.1.9-.2.8.5 1.5 1.3 1.3 1.7-.4 1.9-2.2 1.2-3.6-.2-.4-.7-.7-1.2-.7-2.1.1-3.3 2.6-2.2 4.4 1.3 2.1 4.3 1.2 5.1-.8.7-2-1.1-4-3.1-4-2.1 0-3.5 2.3-3 4.2.2.7 1.1.5 1.1-.2zM858.6 71c24.5 2 49.5.9 74 .9h35.9c11.8 0 24.5 1.3 36.2-.3 1.1-.2 1.1-2.1 0-2.2-11.4-1.5-23.7-.3-35.1-.3h-37c-24.5.1-49.5-1.1-74 .9-.6.2-.6.9 0 1z"
                style={highDarkStyle}
            />
            <path d="M957.3 76.5c-.5-1.4-1-2.7-1.5-4.1.7-.1 1.4-.2 2.2-.3 2 .1 4 1.4 5.5 2.6 1.8 1.6 3.3 3.5 5.1 5 2.5 2.2 5.6 4.1 9 3.7 5.7-.6 8.8-7.1 5.4-11.8-2.6-3.6-9.3-4.6-11 .5-1.3 4.1 3.5 8.1 6.7 4.8.6-.7 0-1.8-.9-1.5 6-2.2 5.7-.3-1.1 5.6-2.8-.4-5.1-1.6-7.1-3.6-1.6-1.4-2.9-3-4.6-4.3-1.7-1.4-3.6-2.6-5.9-3-3.7-.5-8.6 1.5-8.3 5.9.2 3.2 4.2 6.4 7.2 4.3 2.1-1.4 1.8-4.2-.8-4.5-.1.1-.2.6.1.7zM904.9 85.6c-.7 3.6 3.9 4.9 6.6 3.8 2.2-.9 3.9-2.9 5.2-4.8 1-1.4 1.6-2.9 2.8-4.1 1.5-1.5 3-1.4 5-1.2 1.2.1 1.8-1.3 1.3-2.2-1.9-3.2-5.9-2.4-8.5-.4-1.4 1.2-2.5 2.8-3.3 4.4-1.2 2.5-4.8 11.5-8.6 4.4-.1-.1-.4-.1-.5.1zM901.8 82.9c1 1.5 3.1 1.1 4.1-.2.8-1.1.8-2.4 1.1-3.7.1-.5.3-1.7 1-1.8.2-.1.8.2.8.2.6.9 2.1 1.1 2.6 0 1.4-3.1-2.6-5.3-5-3.3-1.1.9-1.3 2.5-1.3 3.8 0 1.3-.1 6.4-2.7 4.5-.3-.4-.8.1-.6.5zM169.3 21.2c-2.8 2.7-7.3 1.1-7.8-2.8-.7-5.5 5.6-7.8 9.9-5.9 5 2.2 7.4 9 6.2 14.2-1.6 6.9-8.3 8.1-14.4 7.7-10.3-.6-21.8-.7-27.5 9.7-5 9.1-1.1 20.6 8.9 24.1 10.5 3.7 22.6-6.3 19.5-17.5-1.6-5.8-7.2-10.5-13.4-9.4-2.9.5-5.7 2.3-7.3 4.8-1 1.5-1.4 3-1.5 4.8 0 5 1.6 5.1 4.9.5-1.4.8-2.7-1.4-1.3-2.2 4.2-2.4 9.6.7 8.5 5.8-1.2 6-8.8 6.6-12.5 2.6-4.6-4.9-2.3-12.7 2.5-16.5 5-3.9 11.9-4 17-.2 12.6 9.3 5.5 29.1-9.2 31-14.9 2-25.4-14-20.1-27.2 3.2-7.9 10.4-12.4 18.6-13.5 5.4-.7 10.5.5 15.9.3 4.9-.2 9.1-2.8 8.8-8.3-.1-1.6-.6-3.5-1.4-4.9-.5-.7-1-1.3-1.5-2-4.8-3.6-5.9-2.3-3.4 4.1.5-.3 1 .4.6.8z"
                style={highDarkStyle}
            />
            <path d="M140.3 29.3c6.5 3.5 8.8 2.7 6.8-2.2.5-2.3-.2-3.8-2.2-4.5-1.9-1.5-4.6-1.8-6.9-1-4.2 1.3-5.8 5.5-8.1 8.8-2.3 3.4-5.3 6.4-9.2 7.9-7.4 2.7-16.3-2-15.4-10.6.7-6.9 8.9-11.3 14.9-7.6 5.4 3.3 4.2 12.6-3 11.2-1.4-.3-1-2.3.3-2.4-.2-2.4-.4-4.7-.6-7.1-1.2 0-2.4.1-3.5.1-2.2.6-4.4 2.6-5.1 4.7-1.6 4.8 2.5 9.4 7.2 9.7 7.1.5 11.1-5.9 14.5-10.9 3.5-5.2 9.4-8.7 15.5-5.4 4.4 2.4 7.1 9 2.8 12.8-3.5 3.1-8.4 1-8.8-3.5 0-.3.7-.4.8 0z"
                style={highDarkStyle}
            />
            <path d="M130.9 47.8c-2.6-4.5-7.6-7.8-13-6.6-5.3 1.2-9.3 6.2-9.4 11.5-.2 6.3 5.8 12.7 12.4 9.9 3.1-1.3 5-4.6 4.1-7.9-.5-1.8-1.6-3.3-3.4-4-.9-.6-1.8-.6-2.8-.2-3.6-.1-3.7 2.1-.6 6.7.8.1 1.2 1.4.2 1.5-3.6.5-6.4-2.5-5.8-6.1.9-4.5 6-6.2 9.9-4.7 9.6 3.8 5.6 17.4-3.7 18.2-11.9 1-16.5-13.8-10.1-22.1 6.3-8.1 19.9-7 23.2 3.3.3.7-.6 1.1-1 .5z"
                style={highDarkStyle}
            />
            <path d="M108.4 60c-3-5.2-7.4-10.6-13.9-10.9-5.8-.2-9.5 4.3-13.1 8.1-5.1 5.4-11.4 10.1-19.2 9.7-14.4-.9-18.3-19.3-4.1-24.3 5.4-1.9 12.9-1.7 16.6 3.3 3.4 4.6 2.2 11.4-2.8 14.3-4 2.4-11.9 1.7-12.5-4.2-.4-3.9 3.8-6.7 6.9-4.2.9.8-.1 1.9-1 1.8-.1 5 1.7 6.3 5.2 4 2.1-1.3 3.2-3.2 3.3-5.8 0-4-3.1-6.5-6.7-7.3-6-1.2-15.1 2-15.3 9.2-.2 6.6 6.3 10.4 12.2 10.2 5.8-.2 10.7-3.7 14.6-7.6 4.6-4.5 9-9.9 16-9.5 7.2.5 12.1 6.3 15 12.4.2.9-.8 1.5-1.2.8z"
                style={highDarkStyle}
            />
            <path d="M92.5 47.2c3.9-4.3 7.5-9.4 3.2-15.1-1.9-2.6-5.2-4.5-8.5-3.1-1.6.6-3.2 2.3-3.3 4.2-.2 3.8 6.3 5.8 6.9.6.1-1 1.7-1.4 1.9-.2.7 4.8-4.7 8.2-8.7 5.1-4.5-3.4-2.7-10 2.1-12C99 21.2 106 45.3 92.9 47.8c-.5 0-.7-.4-.4-.6zM73.3 37.3c.5 2-.8 4.2-3 4.2-2 0-3.9-1.9-3.1-4 .8-2 3.8-2.9 5.1-.8 1.1 1.8-.1 4.3-2.2 4.4-.5 0-1-.3-1.2-.7-.8-1.4-.5-3.1 1.2-3.6.8-.2 1.5.5 1.3 1.3-.1.3-.2.8-.1.9-.4-.2-.8-.5-1.2-.7-.5 0 .1.2-.1-.1.1 0 0-.2 0-.2.1.1-.1.1-.2.2-.2.1-.3.2-.3.5 0 .6.9.8 1.3.8.9-.2 1.3-1.3 1.4-2.1 0-.5 1-.8 1.1-.1zM148.2 71.9c-24.5 2-49.5.9-74 .9H38.3c-11.8 0-24.5 1.3-36.2-.3-1.1-.1-1.1-2-.1-2.2 11.4-1.5 23.7-.3 35.2-.3h37c24.5.1 49.5-1.1 74 .9.5.2.5.9 0 1z"
                style={highDarkStyle}
            />
            <path d="M49.3 66c-2.6-.3-2.9-3.1-.8-4.5 3.1-2 7 1.2 7.2 4.3.3 4.3-4.6 6.4-8.3 5.9-2.2-.3-4.1-1.6-5.9-3-1.6-1.3-3-2.9-4.6-4.3-1.9-2-4.3-3.2-7-3.6-6.7 5.9-7.1 7.8-1.1 5.6-.9.2-1.5-.9-.9-1.5 2.9-3.1 7.5.2 6.8 4.1-1.1 5.7-8.4 5.1-11.1 1.2-3.1-4.4-.7-10.6 4.6-11.8 3.4-.7 6.6 1 9.2 3 1.9 1.5 3.4 3.5 5.2 5.1 1.4 1.2 2.6 2.2 4.5 2.7.9.5 1.8.6 2.7.3 2.3.1 2.2-1.4-.5-4.2.4.3.4.8 0 .7zM101.4 56.5c-3.9-7-7.4 1.8-8.5 4.2-.8 1.7-1.9 3.4-3.5 4.7-2.6 2.1-6.6 2.8-8.5-.4-.6-.9.1-2.3 1.3-2.2 1.5.1 3 .3 4.3-.5 1.5-.9 2.3-3 3.2-4.4 1.3-2 3.2-4.3 5.5-5.2 2.7-1.1 7.3.2 6.6 3.8 0 .1-.3.1-.4 0zM104.3 59.7c-2.5-1.9-2.7 2.9-2.7 4.2 0 1.4-.2 3.1-1.3 4-2.4 2.1-6.5-.2-5-3.3.5-1.1 2-.9 2.6 0 0 0 .5.2.7.2.6-.1.9-.9 1-1.4.4-1.4.2-2.9 1.2-4.1 1-1.3 3.2-1.8 4.1-.2.3.4-.2.9-.6.6zM168.7 122.5c-.2 2-.5 4-.7 6 1.4-.6 2.8-1.3 4.1-1.9 1.1-.9 2-2.9 2.4-4.3 1.2-4.1 0-8.8-4.3-10.3-4.7-1.7-10.5.1-15.4 0-7.8-.1-15.6-2.5-20.4-9-8.8-11.9-2.7-29.8 12.6-32 14.6-2.1 26.5 15.3 17.3 27.6-3.8 5.1-10.4 7.6-16.5 5.3-5.8-2.2-10.1-8.2-8.4-14.6 1.6-5.9 9.9-9.7 13.7-3.5 3.3 5.3-2.4 10.9-7.6 7.9-1.4-.8-.2-3 1.3-2.2-3.2-4.6-4.9-4.4-4.9.6 0 1.8.5 3.3 1.5 4.8 1.6 2.5 4.4 4.3 7.3 4.8 6.2 1.2 11.8-3.6 13.4-9.4 3.1-11.2-9.1-21.2-19.5-17.5-10.1 3.5-13.9 15-8.9 24.1 5.7 10.4 17.2 10.2 27.5 9.7 6.1-.3 12.8.8 14.4 7.7 1.2 5.1-1.1 11.9-6.2 14.1-4.3 1.9-10.6-.4-9.9-5.9.5-3.9 5-5.5 7.8-2.8.5.4-.1 1.1-.6.8z" style={highDarkStyle} />
            <path d="M139.5 113.5c.3-4.4 5.2-6.5 8.7-3.5 4.4 3.8 1.8 10.5-2.7 12.9-5.8 3.1-11.6.2-15-4.7-3.5-4.9-6.7-11.1-13.5-11.5-4.8-.3-9.5 3.2-8.8 8.4.3 2.3 1.7 4 3.7 5.1 1 .8 2.1 1.1 3.3.9 3.5.7 4.3-1.7 2.4-7-1.3 0-1.7-2.1-.3-2.4 6.7-1.4 8.6 7.1 3.7 10.8-6 4.4-14.8 0-15.6-7.2-.9-8.2 7.4-13 14.6-10.8 4 1.2 7.2 4.1 9.5 7.5 2.2 3 3.5 6.5 6.9 8.4 2.2 1.2 4.5 1.8 7 1 1.1-.7 2.2-1.3 3.3-2 3.5-7.5 1.4-9.4-6.2-5.7-.3.4-1 .3-1-.2z" style={highDarkStyle} />
            <path d="M132 95.5c-3.3 10.3-16.9 11.3-23.2 3.3-6.5-8.3-1.8-23.1 10.1-22.1 9.3.8 13.3 14.3 3.7 18.2-3.7 1.4-8.5 0-9.8-4.1-1.1-3.8 1.8-7.3 5.6-6.7.9.2.6 1.4-.2 1.5-.4 2.2-.9 4.3-1.3 6.5 1.2.2 2.5.3 3.7.5 1.5-.3 3.3-1.8 4-3.1 1.7-3.1.1-7.1-2.7-8.9-6.6-4.1-13.6 2.9-13.4 9.5.1 5.1 3.8 10 8.8 11.4 5.6 1.6 10.9-1.7 13.6-6.4.4-.6 1.3-.2 1.1.4z" style={highDarkStyle} />
            <path d="M109.5 83.5c-2.9 6.1-7.8 11.9-15 12.4-7.1.4-11.5-5-16-9.5-3.9-3.9-8.9-7.5-14.6-7.6-5.9-.2-12.4 3.6-12.2 10.2.2 7.2 9.3 10.5 15.3 9.2 3.6-.7 6.8-3.2 6.7-7.3-.1-2.5-1.2-4.4-3.3-5.8-3.5-2.3-5.2-.9-5.2 4 .9-.2 1.9 1 1 1.8-3 2.5-7.3-.3-6.9-4.2.6-5.8 8.5-6.6 12.5-4.2 4.9 2.9 6.2 9.7 2.8 14.3-3.7 5-11.2 5.2-16.6 3.3-14.2-5-10.3-23.4 4.1-24.3 7.8-.4 14.1 4.3 19.2 9.7 3.6 3.8 7.3 8.3 13.1 8.1 6.6-.3 11-5.7 13.9-10.9.5-.5 1.5.2 1.2.8z" style={highDarkStyle} />
            <path d="M92.8 95.2c6 1.2 8.2 8.8 6.5 13.9-1.7 5.4-7.7 9.6-13.3 7.2-4.7-2-6.5-8.4-2.2-11.9 4-3.2 9.5.1 8.9 5-.2 1.2-1.8.7-1.9-.2-.6-4.9-7-2.9-6.9.6.1 1.4 1.3 3.1 2.5 3.8 3.3 1.9 7.3 0 9.3-2.8 4.1-5.8.7-10.7-3.2-15.1-.3-.2 0-.6.3-.5zM72.2 105.4c-.1-.8-.6-1.9-1.4-2.1-.4-.1-1.3.2-1.3.8 0 .3.6.6.5.7.2-.3-.3-.3.1-.2.4-.2.8-.4 1.2-.7-.1.1 0 .7.1.9.2.8-.5 1.5-1.3 1.3-1.7-.4-1.9-2.2-1.2-3.6.2-.4.7-.7 1.2-.7 2.1.1 3.3 2.6 2.2 4.4-1.3 2.1-4.3 1.2-5.1-.8-.7-2 1.1-4 3.1-4 2.1 0 3.5 2.3 3 4.2-.1.7-1 .5-1.1-.2zM148.2 71.9c-24.5 2-49.5.9-74 .9H38.3c-11.8 0-24.5 1.3-36.2-.3-1.1-.1-1.1-2-.1-2.2 11.4-1.5 23.7-.3 35.2-.3h37c24.5.1 49.5-1.1 74 .9.5.2.5.9 0 1z" style={highDarkStyle} />
            <path d="M49.4 77.4c.5-1.4 1-2.7 1.5-4.1-.7-.1-1.5-.2-2.2-.3-2 .1-4 1.4-5.5 2.6-1.8 1.6-3.3 3.5-5.1 5-2.5 2.2-5.6 4.1-9 3.7-5.7-.6-8.8-7.1-5.5-11.8 2.6-3.6 9.3-4.6 11 .5 1.3 4.1-3.5 8.1-6.7 4.8-.6-.7 0-1.8.9-1.5-6-2.2-5.7-.3 1.1 5.6 2.8-.4 5.1-1.6 7-3.6 1.6-1.4 2.9-3 4.6-4.3 1.7-1.4 3.6-2.6 5.9-3 3.7-.5 8.5 1.5 8.3 5.9-.2 3.2-4.2 6.4-7.2 4.3-2.1-1.4-1.8-4.2.8-4.5.4.1.4.6.1.7zM101.8 86.5c.7 3.6-3.9 4.9-6.6 3.8-2.2-.9-3.9-2.9-5.2-4.8-1-1.4-1.6-2.9-2.8-4.1-1.5-1.5-3-1.4-5-1.2-1.2.1-1.8-1.3-1.3-2.2 1.9-3.2 5.9-2.4 8.5-.4 1.4 1.2 2.5 2.8 3.3 4.4 1.2 2.5 4.8 11.5 8.6 4.4.2-.2.5-.1.5.1zM104.9 83.8c-1 1.5-3.1 1.1-4.1-.2-.8-1.1-.8-2.4-1.1-3.7-.1-.5-.3-1.7-1-1.8-.2-.1-.8.2-.8.2-.6.9-2.1 1.1-2.6 0-1.4-3.1 2.6-5.3 5-3.3 1.1.9 1.3 2.5 1.3 3.8 0 1.3.1 6.4 2.7 4.5.4-.4.8.1.6.5z" style={highDarkStyle} />
        </svg>
    )
}

export default SurahNameDecorationSVG