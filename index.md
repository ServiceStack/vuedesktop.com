# vue-desktop

.NET 5.0 Vue Windows Desktop App Project Template.

This Project Template lets you create .NET Core Vue Single Page Apps that can also be packaged & 
deployed as [Gist Desktop Apps](https://sharpscript.net/sharp-apps/gist-desktop-apps) which is 
ideal for quickly & effortlessly creating & deploying small to medium .NET Core Windows Desktop Apps 
packaged within a Chromium Web Vue UI within minutes!

Create new project with [app dotnet tool](https://docs.servicestack.net/netcore-windows-desktop):

    $ dotnet tool install -g app
    $ app new vue-desktop ProjectName

> YouTube: [youtu.be/kRnQSWdqH6U](https://youtu.be/kRnQSWdqH6U)

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-screenshot.png)](https://youtu.be/kRnQSWdqH6U)

### Why Chromium Desktop Apps?

With the investment into advancing Web Browsers & Web technologies, many new modern Desktop Apps developed today like: 
Spotify, VS Code, GitHub Desktop, Skype, Slack, Discord, Whats App, Microsoft Teams, etc.
are being built using Web Technologies and rendered with a Chromium webview, using either the popular [Electron Framework](https://www.electronjs.org/) 
or the [Chromium Embedded Framework (CEF)](http://opensource.spotify.com/cefbuilds/index.html) directly.

Following [VS Code frequent releases](https://code.visualstudio.com/updates/) makes it clear why they've decided on 
developing it with Web Technologies using Electron where they've been able to iterate faster and ship new features at 
an unprecedented pace. In addition to its superior productivity, they're able to effortlessly support multiple Operating Systems
as well as enable reuse for running on the Web as done with its [Monaco Editor](https://microsoft.github.io/monaco-editor/)
powering VS Code as well as innovative online solutions like [GitHub Code Spaces](https://github.com/features/codespaces).

These attributes in addition to the amount of investment that major technology companies like Google, Apple, Microsoft & 
Firefox invest each year in improving Web & browser technologies will ensure the platform will be continually supported
& improved unlike most Desktop UI Technologies. 

## Comparison with Blazor WASM

What technology to use for Chromium Desktop Apps?

The latest solution for building Single Page Apps being promoted for .NET is https://blazor.net/ where for Client Apps
suggests to use Blazor WASM which in an overview lets you run C# in the browser by running linked/tree-shaken .dll's in 
[interpreted mode](https://blog.stevensanderson.com/2018/02/06/blazor-intro/#interpreted-mode) by the dotnet runtime 
which is itself compiled & running as WASM. We can see a glimpse of this in action by viewing .dll's being loaded in the 
JS Debug Inspector: 

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/blazor-jsdebug.png)

### Disadvantages of Blazor

The main value proposition of Blazor appears to be running C# in the browser, which while a technically impressive feat,
requires a tonne of complexity to achieve that results in worse end-user UX. It works using a development model based on 
Razor - a technology [we're not fond of](https://docs.servicestack.net/why-not-razor) due to its reliance on 
heavy/complicated tooling and should be noted that historically whenever .NET invented their own development model
for the Web in ASP.NET Web Forms or Silverlight, they've ended up being abandoned.

Another reason we're not fond of technologies like Blazor is from experience in having to support "crippled" .NET Runtimes 
on platforms where only a subset of functionality of .NET is available, where we've lost untold time & effort trying to 
diagnose & track down runtime issues in Windows Phone, Silverlight & Xamarin iOS due to platform restrictions
([we're already seeing](https://forums.servicestack.net/t/possible-to-allow-setting-of-usecookies-property-in-jsonhttpclient/8618) reported in Blazor), 
differing implementation behavior or .NET libraries heavy use of reflection that's problematic in AOT environments.

Even without the drawbacks, going against the momentum of established Web UI Technologies like [Vue](https://github.com/vuejs/vue) 
& [React](https://github.com/facebook/react), their vibrant communities & [awesome ecosystems](https://github.com/vuejs/awesome-vue)
in favor of an uncertain foreign development model reliant on heavy/complex tooling that only a single vendor can provide 
serving only a single language ecosystem just to be able to use C# in the browser isn't a desirable goal as modern JS/TypeScript 
offer a more productive & enjoyable Reactive UI development model than any C#/XAML UI Framework we've used.

Ultimately as [staunch enemy's of complexity](https://docs.servicestack.net/service-complexity-and-dto-roles) we're
philosophically against reliance on heavy complicated tooling and instead have adopted a Vue Chromium Desktop approach
for the development of [ServiceStack Studio](https://docs.servicestack.net/studio) - an App that 
[wouldn't have been feasible](https://docs.servicestack.net/releases/v5.9#highly-productive-live-reloading-development-experience)
if needing to use any C# & XAML UI FX or WinForms historically used to develop .NET Desktop Apps.  

### Blazor WASM Starting Project Template

But as it's the latest technology developed & promoted by .NET PR it's going to be the Web UI technology compared to most,
so this project template is based on the UI of an empty Blazor WASM project, rewritten to use Vue SPA UI & a back-end 
.NET Core App. It's an enhanced version that also includes examples of commonly useful features: 

  1. [Home page](https://github.com/NetCoreTemplates/vue-desktop/blob/master/src/components/Home.ts) includes example of using 
[TypeScript Service Reference](https://docs.servicestack.net/typescript-add-servicestack-reference) to consume typed APIs  
  2. [Fetch data page](https://github.com/NetCoreTemplates/vue-desktop/blob/master/src/components/FetchData.ts) sources it's
data from an embedded SQLite database querying an [AutoQuery Service](https://docs.servicestack.net/autoquery-rdbms)
  3. Utilizes [built-in SVG support](https://docs.servicestack.net/svg) for using Material Design & Custom SVG Icons 
  4. Utilizes [Win 32 Integration](https://sharpscript.net/sharp-apps/win32) showcasing how to call Win32 APIs from the UI

#### Distributed App Size

The first comparison is a direct result of the approaches used in each technology, where in addition to all your App's 
assets Blazor WASM has to also bundle a dotnet WASM runtime & linked/tree-shaken .dll's. Whilst `app` Desktop Apps
is on opposite side of the spectrum where it only requires distribution of **App-specific functionality** as all popular 
Vue JS libraries, Bootstrap CSS, Material Design SVG icons or ServiceStack .dll's used are pre-bundled with the global `app` dotnet tool.

For the comparison we ran the `publish-app` script & Blazor's **Publish to Folder** tool & compared the **.zip** of each folder which resulted in:

#### `15kb` Vue Desktop App vs `6207kb` Blazor WASM (413x smaller)

The end result that even our **enhanced** Blazor WASM starting project template is **413.8x** or **2.6x** orders of magnitude smaller than Blazor WASM.
A more apt comparison of its tiny footprint, is the enhanced Vue Desktop App is over **4x** smaller than
[Blazor WASM's 65kb partial screenshot of its App](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-5.0): 

![](https://docs.microsoft.com/en-us/aspnet/core/blazor/index/_static/dialog.png?view=aspnetcore-5.0)

In addition, the `app` tool also bundles a Chromium Desktop App shell in order for your Vue Desktop Apps to appear like Native Desktop Apps, 
to get the same experience with Blazor WASM App you would also need to manage the installation of a Chromium wrapper like 
[Chromely](https://github.com/chromelyapps/Chromely). 

When App sizes are this small you have a lot more flexibility in how to distribute & manage the App, which is how Vue Desktop Apps
can be published to Gists and always download & open the latest released version - enabling **transparent updates by default**.  

#### Live Reload

A notable omission from a modern UI FX is there doesn't to be any kind of Live Reload capability for any page, including static **.html** or **.css** resources.

Vue Desktop Apps naive live reload feature works as you'd expect where the UI automatically refreshes on each file change, e.g:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-livereload.gif)

This is a good example of why we prefer to avoid complex tooling as what's normally a [trivially implementable feature](https://docs.servicestack.net/hot-reloading) 
requires much more effort & time to implement when you're reliant on a complex architecture & heavy tooling.

The only build tool required to enable Live Reload in Vue Desktop Apps is TypeScript's watch feature which monitors and automatically 
transpiles all `*.ts` file changes: 

    $ tsc -w

#### Reload Time

The lack of a live reload feature is exacerbated when having to manually reload your App to view every change which has
noticeable delay in Blazor WASM which is otherwise instant in a normal .NET Core Web App:

#### Blazor WASM
![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/blazorwasm-refresh.gif)

#### Vue Desktop
![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-refresh.gif)

### Opinionated App Launcher

The `app` dotnet tool is essentially just a .NET Core Desktop App launcher hosted within a Chromium Desktop Shell, 
whether it's launching our [app Desktop Apps](https://sharpscript.net/sharp-apps/) or existing 
[.NET Core Web App .dll or .exe's](https://docs.servicestack.net/netcore-windows-desktop#launch-net-core-app-inside-a-windows-chromium-desktop-app).

It's opinionated in the shared libraries it includes, namely:
 - Vue, React & jQuery
 - Bootstrap CSS
 - Material Design & Fontawesome SVG icons
 - [ServiceStack .NET Packages](https://www.nuget.org/profiles/servicestack) & Dependencies

> You can use your own client/server libraries but they'd need to be distributed with the App  

Intended for developing small/medium Desktop Apps that can be published to a GitHub Gist (or repo) & opened over a URL, e,g:
[Redis Admin UI](https://sharpscript.net/sharp-apps/redis), generic [DB Viewer](https://sharpscript.net/sharp-apps/sharpdata)
or our [ServiceStack Studio](https://docs.servicestack.net/studio) API Management tool which all package down to small footprints. 

Given you can [build & distribute an App within minutes](https://youtu.be/kRnQSWdqH6U), it's suitable for quick UI's around 
a single purpose Task you may want to distribute internally, e.g. a dynamic reporting viewer, edit forms, surveys, email composer, or
see the [Desktop App Index](https://sharpscript.net/sharp-apps/app-index) for other examples.

### FREE!

To remove friction & barriers to adoption all [app](https://docs.servicestack.net/netcore-windows-desktop) and 
[x](https://docs.servicestack.net/dotnet-tool) dotnet tools used to run all [Sharp and Gist Desktop Apps](https://sharpscript.net/sharp-apps/) 
utilize an unrestricted suite of [ServiceStack](https://servicestack.net) Software that can be developed & distributed free without a commercial license.

#### Alternative Modern Desktop Solutions

We don't recommend this template for flagships Desktop App worked on by large teams, in that case you're better off building your own 
custom Chromium Desktop App bundle [as Spotify does](https://engineering.atspotify.com/2019/03/25/building-spotifys-new-web-player/) where
you're able to access full control over CEF APIs, it's rendering, integration and Chromium features.
If you're looking looking to Chromotize a .NET Core Desktop App you can use our [ServiceStack.CefGlue](https://github.com/ServiceStack/ServiceStack.CefGlue)
.NET Standard 2.0 NuGet package of the [CefGlue](https://gitlab.com/xiliumhq/chromiumembedded/cefglue) C# CEF Bindings project.

If you're not using .NET Core, [Electron](https://www.electronjs.org/) is the most likely best choice for building Desktop Apps with Web Technologies.  

If you'd also want to develop native iOS / Android Apps from a shared code-base then [Flutter Desktop](https://medium.com/flutter/flutter-and-desktop-3a0dd0f8353e)
is looking like the most promising technology under active development in that space.

## Desktop or Server Deployments

Whilst this project template is intended for creating Desktop Apps, it's essentially just a .NET Core Web App wrapped 
in a shared Chromium Desktop Shell which means it can also be deployed the same as any other .NET Core Web App by
generating a published build:

    $ dotnet publish -c Release

Then [copying the published release builds for Server deployments](https://docs.servicestack.net/netcore-deploy-rsync).


----

[Gist Desktop Apps >](/gist-desktop-apps)
