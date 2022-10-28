# [Python para computación científica 🐍](https://cpp-review-dune.github.io/python/2022-10-28.pdf)

![telegram logo](https://user-images.githubusercontent.com/21283014/197436896-5e3288d3-fa4d-4bcb-8e4b-82e77654e5c9.jpg)

## Bienvenido(a) al taller de Python para computación científica

Python es un lenguaje de programación útil para la resolución de
problemas de ciencias e ingeniería.
Es común que los software escritos en lenguajes de bajo nivel
posean bindings para diversos propósitos como la
[creación de mallas de elementos finitos](https://pypi.org/project/pygmsh),
[simulaciones de dinámica de fluidos](https://tum-pbs.github.io/PhiFlow/Math_Introduction.html)
o [visualización](https://kitware.github.io/vtk-examples/site/Python),
exportación a formatos de archivos como [HDF5](https://docs.h5py.org/en/stable),
[paralelización](https://mpi4py.readthedocs.io).
Para detalles de Python o alguna una biblioteca,
vea la [documentación oficial](https://docs.python.org/es).

### Acerca de Python

Este taller tiene los siguientes objetivos:

* Enseñar la implementación de *funciones*, *clases*,
*manejo de excepciones* y *archivos* en Python.
* Al término del taller, estará listos para explorar otros módulos de Python como
[DUNE](https://www.dune-project.org),
[FEniCS](https://fenicsproject.org) o
[deal.II](https://www.dealii.org) para la
*resolución numérica de ecuaciones diferenciales*.

## Fechas 📅

El taller se llevará a cabo en línea por
[Zoom Meetings](https://aur.archlinux.org/packages/zoom) y serán
cuatro sesiones de 08:00 - 09:50 a.m

* 06.11.2022
* 13.11.2022
* 20.11.2022
* 27.11.2022

La sala virtual **estará abierta desde las 07:40 a.m.**

## Inscripción

La inscripción está disponible hasta el **miércoles 2 de noviembre**
a través del [formulario de inscripción]().
El límite es de **25 participantes**.
En caso de llegar al límite, el registro se cerrará anticipadamente.

## Prerrequisitos

Para los ejercicios prácticos, necesitarás una instalación de
* un [navegador web](https://wiki.archlinux.org/title/List_of_applications#Graphical)
para ingresar a [Google Colaboratory](https://colab.research.google.com),
* un cliente de [Zoom Meetings](https://aur.archlinux.org/packages/zoom)
para atender.

Opcionalmente
* una cuenta en GitHub para [GitHub Discussions](https://github.com/features/discussions),
* un [cliente de mensajería instantánea](https://wiki.archlinux.org/title/List_of_applications#Other_IM_clients)
como Telegram Desktop para preguntar en el canal del taller.

## Cronograma

### Sesión 1 (06.11.2022)

| Hora        | Charla / tarea                                                      |
| ----------- | ------------------------------------------------------------------- |
| 8:00 - 8:50 | Comunicación: NumPy, aspectos del cálculo del arreglo N-dimensional |
| 8:50 - 9:00 | Descanso                                                            |
| 9:00 - 9:50 | Práctica: Exploring bash                                            |

### Sesión 2 (13.11.2022)

| Hora        | Charla / tarea                                                               |
| ----------- | ---------------------------------------------------------------------------- |
| 8:00 - 8:50 | Comunicación: Matplotlib, biblioteca para crear visualizaciones interactivas |
| 8:50 - 9:00 | Descanso                                                                     |
| 9:00 - 9:50 | Práctica: Proyectos                                                          |

### Sesión 3 (20.11.2022)

| Hora        | Charla / tarea                                                              |
| ----------- | --------------------------------------------------------------------------- |
| 8:00 - 8:50 | Comunicación: SciPy, algoritmos para optimización, ecuaciones diferenciales |
| 8:50 - 9:00 | Descanso                                                                    |
| 9:00 - 9:50 | Práctica: Exploring bash                                                    |

### Sesión 4 (27.11.2022)

| Hora        | Charla / tarea                                                     |
| ----------- | ------------------------------------------------------------------ |
| 8:00 - 8:50 | Comunicación: PyTorch, aspectos de los tensores multidimensionales |
| 8:50 - 9:00 | Descanso                                                           |
| 9:00 - 9:50 | Práctica: Exploring bash                                           |

## Instalación

### Arch Linux o derivadas

Instale los paquetes [`python-pytorch`](https://archlinux.org/packages/community/x86_64/python-pytorch),
[`python-matplotlib`](https://archlinux.org/packages/community/x86_64/python-matplotlib) y
[`python-scipy`](https://archlinux.org/packages/community/x86_64/python-scipy)
del repositorio `[community]`.
Además de un [editor de código](https://wiki.archlinux.org/title/List_of_applications#Python_IDEs).

```console
$ sudo pacman -Syu
$ sudo pacman -S python-pytorch python-matplotlib python-scipy --noconfirm
```

Para el sistema Windows o macOS vea [aquí](https://scientificpython.readthedocs.io/es/latest/installation.html).

## Soporte o Contacto

¿Tiene problemas para configurar sus máquinas?
Únase a nuestro canal de Telegram: [Repaso de Python PeC3](https://t.me/+Cs5iwhdtPLM2MDkx)
y lo ayudaremos a resolverlo.

## Organizadores

* Carlos Aznarán [caznaranl@uni.pe](mailto:caznaranl@uni.pe) (instructor)
* Alessandri Canchoa [canchoa@lamolina.edu.pe](mailto:canchoa@lamolina.edu.pe) (coordinador)