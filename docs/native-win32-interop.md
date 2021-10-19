---
title: Native Win32 API Interop
---

As [#Script](https://sharpscript.net/) is a scripting language utilizing JS syntax to invoke .NET APIs, the 
[Win 32 support](https://sharpscript.net/sharp-apps/win32) ends up being both simple & intuitive.

Where it calls the [CustomMethods.cs](https://github.com/NetCoreTemplates/vue-desktop/blob/master/CustomMethods.cs) .NET Win 32 APIs
(wrapped in a [#Script method](https://sharpscript.net/docs/methods)) directly from JS as done in 
[App.ts](https://github.com/NetCoreTemplates/vue-desktop/blob/master/src/App.ts) which can be invoked using JS syntax
using the `evaluateCode` TypeScript API, e.g:

```ts
import { evaluateCode } from '@servicestack/desktop';

await evaluateCode(`chooseColor()`);
await evaluateCode(`chooseColor('#336699')`);
```

The `app` dotnet tool already includes these [dotnet/pinvoke](https://github.com/dotnet/pinvoke) .NET Wrapper API NuGet packages
below so they can be used within your App without needing to distribute them with your App:

```xml
<PackageReference Include="PInvoke.AdvApi32" Version="0.7.78" />
<PackageReference Include="PInvoke.BCrypt" Version="0.7.78" />
<PackageReference Include="PInvoke.Crypt32" Version="0.7.78" />
<PackageReference Include="PInvoke.DwmApi" Version="0.7.78" />
<PackageReference Include="PInvoke.Gdi32" Version="0.7.78" />
<PackageReference Include="PInvoke.Hid" Version="0.7.78" />
<PackageReference Include="PInvoke.Kernel32" Version="0.7.78" />
<PackageReference Include="PInvoke.Magnification" Version="0.7.78" />
<PackageReference Include="PInvoke.MSCorEE" Version="0.7.78" />
<PackageReference Include="PInvoke.Msi" Version="0.7.78" />
<PackageReference Include="PInvoke.Fusion" Version="0.7.78" />
<PackageReference Include="PInvoke.NCrypt" Version="0.7.78" />
<PackageReference Include="PInvoke.NetApi32" Version="0.7.78" />
<PackageReference Include="PInvoke.NTDll" Version="0.7.78" />
<PackageReference Include="PInvoke.Psapi" Version="0.7.78" />
<PackageReference Include="PInvoke.SetupApi" Version="0.7.78" />
<PackageReference Include="PInvoke.Shell32" Version="0.7.78" />
<PackageReference Include="PInvoke.SHCore" Version="0.7.78" />
<PackageReference Include="PInvoke.User32" Version="0.7.78" />
<PackageReference Include="PInvoke.Userenv" Version="0.7.78" />
<PackageReference Include="PInvoke.UxTheme" Version="0.7.78" />
<PackageReference Include="PInvoke.WtsApi32" Version="0.7.78" />
```

See [Win32 App](https://sharpscript.net/sharp-apps/win32) for more info & examples on Win32 integration.

<h3><a href="app://win32">app://win32</a></h3>

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/win32.png)
