# Using Gitpod

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

[por qué usar gitpod]()

| Lectura | Tópico                  |    Diapositivas    |          Tutoriales           |     Ejercicios      |  Soluciones   | Lecturas sugereridas |
| ------- | ----------------------- | :----------------: | :---------------------------: | :-----------------: | :-----------: | -------------------: |
| 0       | `gitpod-intro`          | [lectura-0](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) | right-aligned |                      |
| 1       | `bash`, `linux`         | [lectura-1](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) | right-aligned |                      |
| 2       | `g++`, `gnuplot`        | [lectura-2](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) | right-aligned |                      |
| 3       | `make`, `cmake`         | [lectura-3](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) |   centered    |                      |
| 4       | `git`, `markdown`       | [lectura-4](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) | right-aligned |                      |
| 5       | `doxygen`               | [lectura-5](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) |               |                      |
| 6       | `docker`, `gitpod.io`   | [lectura-6](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) |               |                      |
| 7       | `C++17`                 | [lectura-7](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) |               |                      |
| 8       | `gmsh`                  | [lectura-8](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) |               |                      |
| 9       | `paraview`              | [lectura-9](.pdf)  | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) |               |                      |
| 10      | `dune-pdelab-tutorials` | [lectura-10](.pdf) | [](cpp-review-dune.github.io) | [ejercicio-1](.pdf) |               |                      |

- Consideraremos python si usamos dune-fem-python

### HTML

La energía promedio de los neutrinos $\langle E \rangle$ emitida durante la explosión es del orden de $10MeV$, y la luminosidad de los neutrinos es de aproximadamente $10^{52}\mathrm{ergs\cdot s^{-1}}$.
Así, la densidad del número de neutrinos de radio $R$ es:

$$
n \sim  10^{18} \mathrm{cm^{-3}} \left(\frac{100\mathrm{km}}{R}\right)^2 \left(\frac{10\mathrm{MeV}}{\langle E \rangle}\right).
$$

Comandos GNU/Linux
Paso a paso de cómo ejecutar un programa

## Requisitos

- [x] Cuenta activa en [GitHub](http://github.com) (debe tener acceso a ella).
- [x] Dado de alta en [Gitpod](https://www.gitpod.io) y habilitar [`write publics repos`](https://gitpod.io/access-control).

```console
[user@host ~]$ git
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone             Clone a repository into a new directory
   init              Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add               Add file contents to the index
   mv                Move or rename a file, a directory, or a symlink
   restore           Restore working tree files
   rm                Remove files from the working tree and from the index
   sparse-checkout   Initialize and modify the sparse-checkout

examine the history and state (see also: git help revisions)
   bisect            Use binary search to find the commit that introduced a bug
   diff              Show changes between commits, commit and working tree, etc
   grep              Print lines matching a pattern
   log               Show commit logs
   show              Show various types of objects
   status            Show the working tree status

grow, mark and tweak your common history
   branch            List, create, or delete branches
   commit            Record changes to the repository
   merge             Join two or more development histories together
   rebase            Reapply commits on top of another base tip
   reset             Reset current HEAD to the specified state
   switch            Switch branches
   tag               Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch             Download objects and refs from another repository
   pull              Fetch from and integrate with another repository or a local branch
   push              Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
```

Creo que la mejor forma de aprender a resolver los ejercicios es seguir la metodología de [George Pólya](https://de.wikipedia.org/wiki/George_P%C3%B3lya).

1. Comprender el problema.
2. Concebir un plan.
3. Ejecución del plan.
4. Examinar la solución obtenida.

Nuestro plan consiste en lo siguiente:

> **Situación:** No contamos con un ordenador que tenga la memoria RAM suficiente para emular un sistema operativo y estamos estudiando la administración de un sistema GNU/Linux.
>
> **Solución:** Dado que un sistema Unix está dividido en dos componentes primarios, el espacio del núcleo y el espacio de usuario. Practicaremos los ejercicios en un servicio en la nube basado en contenedores que nos otorga una parte del espacio de usuario de un sistema operativo Linux, incluidos los programas, las configuraciones personalizadas y el entorno.
