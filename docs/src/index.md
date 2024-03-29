---
home: true
title: Home
heroImage: https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.svg?sanitize=true
tagline: Un repositorio de notas acerca de C++ escritos en LaTeX
actions:
  - text: Empezar →
    link: /tutorial/
    type: primary
  - text: Introducción
    link: /blog/
    type: secondary
features:
  - title: 🎥 en español 🇲🇽 🇨🇴 🇵🇪
    details: Cada sesión grupal es subido al canal cpp-review-dune de modo no listado, diode.zone está basado en PeerTube. Ahora en YouTube, ya que eliminó la cuenta sin alguna explicación.
  - title: Sobre contenedores 🐳
    details: Utilizamos Gitpod como el espacio de trabajo en su plan open source de 50 horas/mes junto con las imágenes, que cuentan con los comandos dune-ctest, duneproject, dunecontrol y dune-git-whitespace-hook fuera de la caja.
  - title: Corre sobre Arch Linux 🐧
    details: Una distribución GNU/Linux comunitaria que se adhiere a los principios de simplicidad, modernidad, pragmatismo, centrado a las usuarias y usuarios; y versatilidad.
footer: Made by C++ Review Dune with ❤️
---

### Tan fácil como 1, 2, 3

<CodeGroup>
  <CodeGroupItem title="Arch Linux" active>

```bash
$ # Suggestion: Use the binaries from arch4edu repository
$ # Hint: curl -s https://gitlab.com/dune-archiso/dune-archiso.gitlab.io/-/raw/main/templates/add_arch4edu.sh | bash
$ # See for more details: https://github.com/arch4edu/arch4edu/wiki/Add-arch4edu-to-your-Archlinux
$ sudo pacman -Syu --noconfirm dumux
```

```bash
$ # Make sure you have the base-devel package group
$ # See: https://wiki.archlinux.org/title/Arch_User_Repository
$ sudo pacman -Syu --needed git base-devel
# use any AUR helper and install a metapackage
$ yay -S dumux --noconfirm
```

  </CodeGroupItem>

  <CodeGroupItem title="FreeBSD">
  
```bash
# refresh binary repositories
$ doas pkg update
# upgrade the packages
$ doas pkg upgrade
# pull database changes from FreshPorts
$ doas portsnap fetch
# upgrade the packages from FreshPorts
$ doas portsnap upgrade
# install
$ cd /usr/ports/math/dune-common/ && doas make install clean
```

  </CodeGroupItem>

  <CodeGroupItem title="NixOS">
  
```bash
# Working in progress, coming soon, by PrinceMachiavell
```

  </CodeGroupItem>

  <CodeGroupItem title="openSUSE Tumbleweed">
  
```bash
$ sudo zypper ar -f https://download.opensuse.org/repositories/science/openSUSE_Tumbleweed/science.repo
$ sudo zypper --gpg-auto-import-keys ref
$ sudo zypper install -y dune-common-devel dune-common-doc dune-common-openmpi
```

  </CodeGroupItem>

  <CodeGroupItem title="Plan 9">
  
```bash
# someday, yes
```

  </CodeGroupItem>
</CodeGroup>
