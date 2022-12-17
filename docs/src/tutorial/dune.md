# Installation of DUNE Numerics [v2.9.0](https://dune-project.org/releases/2.9.0)

Is pretty straightforward on [GNU/Linux](https://www.gnu.org/gnu/linux-and-gnu.html)
[(I use Arch btw)](https://wiki.archlinux.org/title/arch_is_the_best),
[macOS](https://github.com/dune-copasi/homebrew-tap) or
[FreeBSD](https://www.freebsd.org).
The full list is [here](https://repology.org/project/dune-common/packages).

## For Arch Linux

The first way, install some [AUR helper](https://wiki.archlinux.org/title/AUR_helpers)
like [`yay`](https://github.com/Jguer/yay#installation).

```console
$ yay -Syu dumux gmsh qtcreator --needed --noconfirm # compile from sources
```

The second way, download the binaries from Arch Linux for Education a.k.a.
[`arch4edu`](https://wiki.archlinux.org/title/unofficial_user_repositories#arch4edu)
repository.

```console
$ sudo pacman -Syu dumux gmsh qtcreator --needed --noconfirm # with arch4edu
```

## For Debian 12 or later

```console
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install libdune-{<insert name module here without dune prefix>}-dev
```

## For FreeBSD 13.1

```console
$ pkg update
$ pkg upgrade
$ portsnap fetch
$ portsnap upgrade
$ pkg install autoconf automake hdf5 # for psurface
$ pkg install gsed opendx gcc10 gmake pkgconf binutils libtool xorgproto libXt libXpm libltdl libglvnd open-motif # for alberta
$ pkg install openmpi doxygen bash vc tex-formats py38-sphinx cmake pkgconf python38 openblas onetbb # for dune-common
$ cd /usr/ports/math/psurface/ && make install clean
$ cd /usr/ports/math/alberta/ && make install clean
$ cd /usr/ports/math/dune-common/ && make install clean
$ cd /usr/ports/math/dune-geometry/ && make install clean
$ cd /usr/ports/math/dune-uggrid/ && make install clean
$ cd /usr/ports/math/dune-grid/ && make install clean # and so for more modules like dune-fem
```
