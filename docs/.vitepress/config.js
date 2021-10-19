let container = require('markdown-it-container')

module.exports = {
    title: 'Vue Desktop',
    description: 'Vue Windows Desktop Project Template',
    themeConfig: {
        repo: 'ServiceStack/vuedesktop.com',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        //lastUpdated: false,
        nav: [
            { text: 'Documentation', link: 'https://docs.servicestack.net' },
            { text: '#Script', link: 'https://sharpscript.net' },
            { text: 'servicestack.net', link: 'https://servicestack.net' },
        ],
        sidebar: {
            '/': [
                {
                    "text": "",
                    "children": [
                        {
                            "text": "Introduction",
                            "link": "/"
                        },
                        {
                            "text": "Gist Desktop Apps",
                            "link": "/gist-desktop-apps"
                        },
                        {
                            "text": "Development Model",
                            "link": "/development-model"
                        },
                        {
                            "text": "Native Win32 API Interop",
                            "link": "/native-win32-interop"
                        },
                        {
                            "text": "Publishing Desktop Apps",
                            "link": "/publishing-desktop-apps"
                        }
                    ]
                }
            ],
        }
    },
    head: [
        ['script', { src: 'custom.js' }]
    ],
    markdown: {
        config: md => {
            md.use(container, 'nuget', { 
                render(tokens, idx) {
                    const token = tokens[idx]
                    if (token.nesting === 1) {
                        return `<div class="package-reference-box">
                        <div class="flex">
                            <div class="flex-grow pre-container" style="background:#002440">
                                <pre class="sh copy m-0 p-0 pl-2 py-1 align-middle" style="background:#002440">`
                    } else {
                        return `</pre>
                                    </div>
                                <div class="flex-shrink"><i class="svg-copy inline-block w-8 h-full" title="copy" onclick="copy(this)"></i><b></b></div>
                            </div>
                            <div class="copy-text w-full text-right h-6"></div>
                        </div>\n`
                    }
                }
            })
        }
    }
}
