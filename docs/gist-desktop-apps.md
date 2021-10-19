---
title: Gist Desktop Apps
---

Whilst on the face of it [Gist Desktop Apps](https://sharpscript.net/sharp-apps/gist-desktop-apps) appear to be similar to 
Electron Apps that utilizes a .NET Core backend instead of Node.js, it employs a shared architecture where
all Apps are run with the same [app dotnet tool](https://docs.servicestack.net/netcore-windows-desktop) installable with:

```bash
$ dotnet tool install -g app
```

Where it enables a number of unique features: 

## Ultra Lightweight Desktop Apps

Unlike Electron which bundles Chromium with every install, all [Sharp Desktop Apps](https://sharpscript.net/sharp-apps/) utilize the same 
[app dotnet tool](https://docs.servicestack.net/netcore-windows-desktop) which in addition to the 
latest version of Chromium, also includes many popular .NET server + client JS/CSS framework libraries - 
saving Vue Desktop Apps from having to include them. This effectively reducing their footprint to just App-specific Server + Client logic, 
so whilst a Hello World Electron App can require **>100MB**, this Vue Desktop Project Template bundles down 
to a **15kb .zip** - which includes the 14kb uncompressed .NET Server **.dll**. 

## Launch Desktop Apps from URLs

Thanks to their light footprint Desktop Apps can be launched directly from URLs using the `app://` URL Scheme, e.g.
a modified version of this Project Template can be launched from:

<h3><a href="app://vuedesktop">app://vuedesktop</a></h3>

Which uses the unique [global alias your app was published with](https://sharpscript.net/sharp-apps/gist-desktop-apps#publishing-gist-apps). 

## Deep Links

It's also possible to pass additional params to enable deep links into Apps 
[ServiceStack Studio utilizes](https://docs.servicestack.net/studio#starting-servicestack-studio)
to be able download, run & immediately invoke App specific functionality like connecting to a remote site, e.g:

```bash
app://studio?connect=https://localhost:5001
```

## Create customized Apps by mixing in Gists

Another unique feature of Gist Desktop Apps is being able to mix in multiple files into the App's directory to
create custom App builds, e.g. the [SharpData](https://sharpscript.net/sharp-apps/sharpdata) generic RDBMS UI viewer
utilizes this feature to copy & immediately open an embedded SQLite database for querying: 

 - [app://sharpdata?mix=northwind.sharpdata](app://sharpdata?mix=northwind.sharpdata)
 - [app://sharpdata?mix=chinook.sharpdata](app://sharpdata?mix=chinook.sharpdata)

## Launch from public or private GitHub Repos

If preferred Desktop Apps can also be published & launched directly from your GitHub Repo which can be launched with `app://{user}/{repo}`, e.g`:

- **[app://sharp-apps/redis](app://sharp-apps/redis)** - Redis Admin App 
- **[app://sharp-apps/blog](app://sharp-apps/blog)** - SQLite powered Blog App 
- **[app://sharp-apps/spirals](app://sharp-apps/spirals)** - SVG Spirals App
- **[app://sharp-apps/rockwind](app://sharp-apps/rockwind)** - Multi Layout CMS + DB Admin UI Example

::: info Tip
Can open by pasting above links in browsers URL as GitHub doesn't render links with custom URL Schemes
:::

If your repo has published releases it will use your most recent release, otherwise it uses the master archive. 

## Private Repos & Gists

Apps can also be launched from private Gists and Repos by either having end users configure the GitHub Access Token
with access to the private gist or repo in the `GITHUB_TOKEN` Environment variable or can be specified in the URL
or command-line with: 

```bash
app://user/repo?token={GITHUB_TOKEN}
$ app open user/repo -token {GITHUB_TOKEN}
```

## Copy Directory

Another way to distribute & run Apps is to **XCOPY** the `/dist` folder which users can launch by running `app` command in 
the App's folder or by specifying the path to the app's `app.settings`, e.g: 

```bash
$ app C:\path\to\app\app.settings
```

Where you can also [create a Windows Shortcut](https://docs.servicestack.net/netcore-windows-desktop#create-windows-desktop-shortcuts) 
for a more integrated Desktop App: 

```bash
$ cd C:\path\to\app
$ app shortcut
```

::: info Tip
Add `favicon.ico` to use your own icon in the shortcut
:::

## Cross Platform Support

Whilst the `app` dotnet tool is Windows-only, all Sharp Apps can also be run cross-platform on macOS/Linux with the 
[x dotnet tool](https://docs.servicestack.net/dotnet-tool) where it will open in the users preferred browser, e.g:

```bash
$ x open vuedesktop 
```

## Always uses latest version

Thanks to their tiny footprints the default behavior is to always download & run the latest version of the App when 
published to a Gist or Repo which automatically happens when launching Apps using the `app://` URL Scheme or `app open` command.

If preferred you can save 1-3 seconds on an App's launch time by using the `app:` URL scheme or `app run` command where
it will instead load the previously downloaded version, e.g:

```bash
app:vuedesktop
$ app run vuedesktop
```
