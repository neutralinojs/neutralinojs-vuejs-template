// MIT License

// Copyright (c) 2018 Neutralinojs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

let myapp = {
    myfunction: () => document.getElementById('info').innerHTML = `${NL_NAME} is running on port ${NL_PORT} inside ${NL_OS}.`
};

var app = new Vue({
    el: '#app',
    data: {
        greeting: 'Welcome to your NeutralinoJs app, using a Vue.js template!',
        neuDocsURL: 'https://neutralinojs.github.io/docs/',
        vueDocsURL: 'http://vuejs.org/guide/',
        getStartedUrl: 'https://neutralinojs.github.io/docs/#/gettingstarted/quickstart',
        repoUrl: 'https://github.com/neutralinojs',
        neutralino: true,
        docsURL: 'http://vuejs.org/guide/',
        discordURL: 'https://chat.vuejs.org',
        forumURL: 'http://forum.vuejs.org/',
        hostingDetails: `${NL_NAME} is running on port ${NL_PORT} inside ${NL_OS}.`
    },
    methods: {
        humanizeURL: function (url) {
            return url
                .replace(/^https?:\/\//, '')
                .replace(/\/$/, '')
        },
        movePages: function () {

        }
    }
})

Neutralino.init({
    load: () => {
       // myapp.myfunction();
    },
    pingSuccessCallback: () => {
        console.log("ping success");
    },
    pingFailCallback: () => {
        console.log("ping fail");
    }
});