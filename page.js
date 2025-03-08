'use client';

import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        // Load Intercom script
        window.intercomSettings = { app_id: "djsbwoav" };
        
        (function() {
            var w = window;
            var ic = w.Intercom;
            if (typeof ic === "function") {
                ic('reattach_activator');
                ic('update', w.intercomSettings);
            } else {
                var d = document;
                var i = function() { i.c(arguments); };
                i.q = [];
                i.c = function(args) { i.q.push(args); };
                w.Intercom = i;
                var l = function() {
                    var s = d.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = 'https://widget.intercom.io/widget/djsbwoav';
                    var x = d.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                };
                if (document.readyState === 'complete') {
                    l();
                } else {
                    w.addEventListener('load', l, false);
                }
            }
        })();
    }, []);

    return (
        <>
            <head>
                <meta name="trustpilot-one-time-domain-verification-id" content="57dc881a-c4c7-4ca1-b33c-8e19cf134b95" />
                <link rel="icon" href="/whawha.png" type="image/x-icon" />
            </head>
            <style jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body, html {
                    overflow: hidden;
                    height: 100%;
                }
                .iframe-container {
                    width: 100vw;
                    height: 100vh;
                    border: none;
                    overflow: hidden;
                }
                .iframe-container::-webkit-scrollbar {
                    display: none;
                }
                .iframe-container {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            <iframe src="https://harmonious-play-170638.framer.app/" className="iframe-container"></iframe>
        </>
    );
}
