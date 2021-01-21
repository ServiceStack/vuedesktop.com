---
slug: publishing-desktop-apps
title: Publishing Desktop Apps
---

The lightweight footprint of Vue Desktop Apps allows for multiple deployment options, including:

  1. Publish to a Gist
  2. Publish to a GitHub Repo
  3. Publish to .zip and run with `app` tool
  4. Publish to self-contained .zip (bundled with app tool)

Our recommendation is to publish Sharp Desktop Apps to Gists (as done with [ServiceStack Studio](https://docs.servicestack.net/studio)) so they can be launched with the Custom URL Scheme:

    app://vuedesktop

Where it can be launched from a HTML `<a/>` link in a web page, directly in any **browsers URL bar** or **File Explorer**.

Desktop Apps published to GitHub repos can be opened using `<user>/<repo>`, e.g:

    app://mythz/vuedesktop

Where it downloads & extracts the latest Release `.zip` archive (or master if none), before running the app, so can take a little longer to launch for small Apps.

All apps run the latest version by default so it's always up-to-date, but you can speed up App launch times by running the last installed app using the `app:` Custom URL Scheme:

    app:vuedesktop

For Gist deployed Apps, it will run the last downloaded app or download & run the latest App gist if it's the first time it's run.

For GitHub repo Apps, you can download and install them locally with:

    $ app install mythz/vuedesktop

Where the downloaded version can be **run** using its `<repo>` name, e.g:

    app:vuedesktop

Both Gist and Desktop Apps can be uninstalled using `app uninstall`, e.g:

    $ app uninstall vuedesktop

To view all installed Sharp Apps, run:

    $ app uninstall

#### Creating Windows Shortcuts

The `app:` URL Scheme is a convenient way to launch Apps if you already have a **Browser** or Windows **File Explorer** already open where you can quickly launch Apps by typing `CTRL+L` shortcut to go to the Command Bar then type  `app://<name>` to launch your App.

Although many users will prefer the familiar Windows Shortcut which they can create by going to the App's folder and running `app shortcut`

    $ cd %USERPROFILE%\.sharp-apps\vuedesktop
    $ app shortcut

This will create a Windows Shortcut for the App which can be copied to the Desktop or pinned to the Taskbar for easy access.

### Publishing Gist Apps

Publishing your App to a gist is our preferred option as you can use GitHub to host your App, built-in auto-updates with every each launch and if you publish to the Global App Registry users can download & install your App with a unique UX-friendly name like `app://vuedesktop`.

To create gists you'll need to generate a [GitHub Access Token](https://github.com/settings/tokens/new) with **gist** scope and add it to your `GITHUB_TOKEN` Environment Variable ([win](https://superuser.com/questions/949560/how-do-i-set-system-environment-variables-in-windows-10), [mac](https://apple.stackexchange.com/q/356441/12255), [linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux)). _(alternative: use `-token` arg in each publish command)_

Before publishing your App, its **app.settings** looks something like:

    debug true
    name vuedesktop
    CefConfig { width:1100, height:900 }

#### Publish to the Global App Registry

To maximize reach and accessibility of your App you can publish it to our [Global App Registry](https://gist.github.com/gistlyn/802daba52b6fe6e2ed1430348dc596cb) by including the following metadata about your App:

    appName     <app alias>    # required: alpha-numeric snake-case characters only, 30 chars max
    description <app summary>  # required: 20-150 chars
    tags        <app tags>     # optional: space delimited, alpha-numeric snake-case, 3 tags max

The `appName` is the globally unique short alias you want your App to be launched as, e.g:

    app://my-alias
    $ app open my-alias

If your app.settings contains the app metadata above, publishing the app will publish your App to a Gist & register your App's alias to the Global App Directory.

Now you can build, bundle and publish your App to a gist with its `publish-app` npm script:

    $ npm run publish-app

That returns the gist URL your app was published to:

    published to: https://gist.github.com/gistlyn/48b2dcf9bccacab62ec9d8a073d5edb8

Which can now be opened via an [URL scheme](https://sharpscript.net/sharp-apps/app-index#app-url-schemes): 

<h4><a href="app://48b2dcf9bccacab62ec9d8a073d5edb8">app://48b2dcf9bccacab62ec9d8a073d5edb8</a></h4>

Or via the command line:

    $ app open 48b2dcf9bccacab62ec9d8a073d5edb8

When your App is published the first time, the created gist URL will be saved in a local `.publish` text file & used for subsequent App publishes.

#### Local Aliases

If the Gist App isn't published to the Global Registry, users can create their own UX-friendly local alias with:

    $ app alias my-alias 48b2dcf9bccacab62ec9d8a073d5edb8

Where they'll be able to use their alias instead of the Gist Id:

    app://my-alias
    $ app open my-alias

### Publishing to a GitHub Repo

The same `/dist` folder that's published to Gists can also be published to a GitHub Repo like [github.com/mythz/vuedesktop](https://github.com/mythz/vuedesktop) which can be launched with the `<user>/<repo>` URL Scheme, e.g:

### [app://mythz/vuedesktop](app://mythz/vuedesktop)

> Need to copy + paste URL in browser as GitHub markdown doesn't allow custom URL links

Or launched from the command-line:

    $ app open mythz/vuedesktop

Users can also download and run a local copy launched with a Windows Shortcut with this 1-liner:

    $ app download mythz/vuedesktop && cd vuedesktop && app shortcut

This will download this repo and create a **Vue Desktop** Windows Shortcut you can use to launch this App:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-dist.png)

### Publish to .zip

The `/dist` folder can also be zipped and distributed that way, by running:

    $ npm run publish-zip

In which case it can be extracted and launched by running the `app` command in the App's folder:

    $ cd AppDir
    $ app

But if you're going to run from a local folder (where `app://` isn't available), you'll likely want to create a Windows Shortcut:

    $ app shortcut

That Users can copy to their Desktop or pin to their Taskbar for easy access.

### Publishing self-encapsulated .zip

By having the `app` tool installed, users benefit from ultra small (e.g. **15kb**) downloads whose tiny footprints allows for auto-updating with each App launch so they have access to new features as soon as they're available. Users will also be able to update to the Chromium version used to run all their Sharp Desktop Apps by updating the `app` tool:

    $ dotnet tool update -g app

But if preferred, App's can also bundled and distributed with the `app` tool so they can be run without needing the `app` tool installed and distributed Apps are pinned to a specific Chromium version.

You can create self-encapsulated bundles with the `publish-exe` script:

    $ npm run publish-exe

This will generate 2 files:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-publish-exe.png)

The `*.zip` contains both the `/dist` of your App and the `app` Chromium runtime as well as a convenience [install.ps1](https://github.com/NetCoreTemplates/vue-desktop/blob/master/scripts/install.ps1) script that users can use to effortlessly install the App with the `Win+R` shortcut to bring up Windows **Run** dialog then pasting this powershell cmd-let with the URL of your `install.ps1` script:

    powershell Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://org.example/install.ps1'))

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-run-install.png)

Here's a copy of `install.ps1` which downloads and extracts the App to the Users LocalApp Data and copies the Shortcut to the Desktop.
Before publishing you'll need to update `$zipUrl` to point to the URL with your `*.zip`:

```ps1
$zipUrl  = "https://org.example/MyApp.zip"
$appName = "MyApp"

$TempFile = New-TemporaryFile
Invoke-WebRequest $zipUrl -OutFile $TempFile

$Zip = "$(Join-Path $TempFile.Directory.FullName $TempFile.BaseName).zip"
Move-Item $TempFile $Zip

Remove-Item $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName) -Recurse -ErrorAction Ignore
Expand-Archive -Force $Zip $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName)

$AppDir = $(Get-ChildItem -Path $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName) | Select-Object -First 1)

Remove-Item "$env:LOCALAPPDATA\$appName" -Recurse -ErrorAction Ignore
Move-Item $AppDir.FullName "$env:LOCALAPPDATA\$appName"

# Copy Shortcut to Desktop
Copy-Item $env:LOCALAPPDATA\$appName\dist\*.lnk -Destination $env:USERPROFILE\Desktop 

# Clean up
Remove-Item $Zip -Recurse -ErrorAction Ignore
Remove-Item $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName) -Recurse -ErrorAction Ignore
```

Here's an example of an app we have published to our servers:

```ps1
powershell iwr files.sharpscript.net/VueDesktop/install.ps1 -useb | iex
```

