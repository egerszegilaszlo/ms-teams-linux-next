# Microsoft Teams Capsule - unofficial Microsoft Teams app for Linux

## Latest release
**1.2.0** - 23 Apr 2019

## Description
Microsoft Teams Capsule is unofficial Microsoft Teams application for Linux, which uses [electron framework](http://electron.atom.io/) to wrap web version of [Microsoft Teams](https://teams.microsoft.com/).

With this app you will be able to launch web version as an application with no need to keep the browser tap always open.

Application also offers notifications for unread messages.

## Installation
Applications is distributed in the AppImage format and should run on all common Linux distributions.

1. Download installation file
  * using direct link: [AppImage](https://github.com/grzego69/ms-teams-linux-next/releases/download/1.2.0/ms-teams-capsule-next-1.1.0-x86_64.AppImage)
  * using wget: `$ wget https://github.com/grzego69/ms-teams-linux-next/releases/download/1.2.0/ms-teams-capsule-next-1.1.0-x86_64.AppImage`

2. Make it executable
  * `$ chmod a+x ms-teams-capsule*.AppImage`

3. Run the app!
  * `$ ./ms-teams-capsule*.AppImage`

You can also get more information about AppImage on the [official website](http://appimage.org/).

## Uninstalling

1. Delete the "ms-teams-capsule-next-\<version>\-x86_64.AppImage" file from your system.

2. Remove shortcuts from the system. You can use this script (run with "sudo"): [DeleteShortcutsSH](https://github.com/grzego69/ms-teams-linux-next/releases/download/1.0.1/delete_app_shortcuts_run_with_sudo.sh)

## Usage
Install the application and launch it. After logging in you will be able to use Microsoft Teams.
If you have something unread in chats, you will receive push notification and the icon will change with one with big red dot.

### Known issues

## Frozen application
If you are stucked with blank white, blue or purple screen, just click "Menu -> Reload", there is no need to relaunch the application.

## Other
If you have a different problem or "Reload" didn't help, click  "Menu -> Delete cache and config". This should help :)


### If you don't see tray icon
On Linux distributions that only have app indicator support, you have to install libappindicator1 to make the tray icon work.

`$ apt-get install libappindicator1`

## Development
This project is based on https://github.com/karmainside/ms-teams-linux

## License
MIT
