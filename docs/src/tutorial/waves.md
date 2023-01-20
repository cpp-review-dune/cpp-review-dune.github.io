# [Métodos analíticos de resolución de la Ecuación de Onda (1D, 2D y 3D) 🌊](https://departamento.pucp.edu.pe/ciencias/evento/minicursos-virtuales-de-matematicas)

## Sesión 1 (05.12.2022)

Se resuelve el _problema de valor inicial_ de la ecuación de la onda
1D

$$
\begin{aligned}
	u_{tt}                & =
	c^{2}u_{xx},\quad
	-\infty <x<\infty,\quad t>0,                         \\
	u\left(x,0\right)     & =\varphi\left(x\right),\quad
	-\infty <x<\infty,                                   \\
	u_{t}\left(x,0\right) & =\psi\left(x\right),\quad
	-\infty <x<\infty.
\end{aligned}
$$

y se deduce la fórmula de D'Alembert

$$
u\left(x,t\right)=
\frac{1}{2}
\left[
    \varphi\left(x+ct\right)+
    \varphi\left(x-ct\right)
\right]+
\frac{1}{2c}\int_{x-ct}^{x+ct}
\psi(s)\mathrm{d}s.
$$

### Grabación

<iframe width="610" height="350"
  sandbox="allow-same-origin allow-scripts allow-popups"
  src="https://www.youtube-nocookie.com/embed/JQtlF3X_Ugw"
  frameborder="0" allowfullscreen>
</iframe>

- [Diapositiva](https://murena.io/s/Xz4QAQExaBNmb2P)

<details>
  <summary>
  Los programas los puede encontrar en modo de snippets expandiendo aquí.
  </summary>

#### MATLAB / Octave

```matlab
#!/usr/bin/env -S octave -qf

% mifi.m
function y = mifi(x)

    if (-1 <= x) && (x <= 1)
        y = 2 -2 * abs(x);
    else
        y = 0;
    end

end
```

```matlab
#!/usr/bin/env -S octave -qf

% SolDAlambert.m
clc, close all

x = -5.0:0.01:5;
u = zeros(1, 1001);
conta = 1;
figure(1)

for t = 0:0.5:3
    x1 = x + t;
    x2 = x - t;

    for i = 1:1001
        u(i) = 0.5 * (mifi(x1(i)) + mifi(x2(i)));
    end

    subplot(7, 1, conta)
    plot(x, u), grid on
    axis([-5, 5, -1, 3])
    conta = conta + 1;
end

%% animación
clear x t u
x = -5.0:0.01:5; u = zeros(1, length(x));
figure(2)

for t = 0:0.1:3
    clf
    x1 = x + t;
    x2 = x - t;

    for i = 1:1001
        u(i) = 0.5 * (mifi(x1(i)) + mifi(x2(i)));
    end

    plot(x, u), hold on
    plot(x, zeros(1, length(x)), 'k')% añade un eje central a cada ploteo
    axis([-5, 5, -1, 3]), hold off
    pause(0.4)
end
```

#### Python

Tomado de [`cpp-review-dune/python`](https://github.com/cpp-review-dune/python/blob/main/src/wave-equation/wave1d_class.py).

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation


class Wave1D:
    def __init__(self) -> None:
        self.X = np.linspace(start=-5, stop=5, num=1001)
        self.T = np.linspace(start=0, stop=3, num=7)
        varphi = lambda X: np.piecewise(
            x=X,
            condlist=[abs(X) <= 1, abs(X) >= 1],
            funclist=[lambda t: 2 - 2 * abs(t), 0],
        )
        self.u = lambda X, t: 0.5 * (varphi(X + t) + varphi(X - t))
        self.fig, self.ax = plt.subplots()
        self.yy = [self.u(t, self.X) for t in self.T]

    def make_plot(self):
        fig, axs = plt.subplots(
            nrows=self.T.size,
            ncols=1,
            clear=True,
            constrained_layout=True,
        )
        for ax, t in zip(axs, self.T):
            ax.plot(self.X, self.u(self.X, t), lw=1)

        plt.savefig("wave.png", dpi=300)
        plt.close()

    def update(self, t):
        self.ax.clear()
        self.ax.plot(self.X, self.yy[t])
        self.ax.set_xlim((self.X[0], self.X[-1]))
        self.ax.set_ylim((np.min(self.yy), np.max(self.yy)))
        self.ax.set_title(f"t = {self.T[t]:.2f}")
        self.ax.grid(True)

    def make_animation(self):
        anim = FuncAnimation(
            fig=self.fig, func=self.update, frames=self.T.size, interval=4000
        )
        anim.save(filename="wave1d.mp4", writer="ffmpeg", fps=60, dpi=300)


if __name__ == "__main__":
    Wave1D().make_plot()
    Wave1D().make_animation()
```

![photo_2022-12-14_20-04-41](https://user-images.githubusercontent.com/21283014/207748238-9f8ac171-704b-46fa-a101-a3933464fc3b.jpg)

<iframe width="610" height="350"
  sandbox="allow-same-origin allow-scripts allow-popups"
  src="https://user-images.githubusercontent.com/21283014/207748261-2f58ff58-89b0-44dc-bb1b-922811462338.mp4"
  frameborder="0" allowfullscreen>
</iframe>

</details>


## Sesión 2 (12.12.2022)

Se define el _dominio de dependencia_ e _intervalo de dependencia_.

Se exhibe que la energía total de un sistema se conserva, es decir,
$\forall t\geq 0: K\left(t\right)=-P\left(t\right)$,
donde

$$
K\left(t\right)=
\frac{1}{2}
\int_{-\infty}^{\infty}
\rho u_{t}^{2}\mathrm{d}x,\quad
P\left(t\right)=
\frac{T}{2}
\int_{-\infty}^{\infty}
u_{x}^{2}\mathrm{d}x.
$$

El _problema de valor inicial_ de la ecuación de la onda en el caso
no homogéneo es

$$
\begin{cases}
u_{tt}-c^{2}u_{xx}=
f\left(x,t\right), & x\in\mathbb{R},t>0 \\
u\left(x,0\right)=
\varphi\left(x\right), & x\in\mathbb{R},\\
u_{t}\left(x,0\right)=
\psi\left(x\right), & x\in\mathbb{R}.
\end{cases}
$$
Donde $c^{2}=\frac{T}{\rho}$ y su solución es
$$
u\left(x,t\right)=
\frac{1}{2}
\left[
    \varphi\left(x+ct\right)+
    \varphi\left(x-ct\right)
    \right]+
\frac{1}{2c}
\int_{x-ct}^{x+ct}
\psi(s)\mathrm{d}s+
\frac{1}{2c}
\iint_{D}
f\left(y,\tau\right)\mathrm{d}y\mathrm{d}\tau.
$$

Se estudia el _principio de Duhamel_ que establece

$$
u\left(x,t\right)=
\int_{0}^{t}
w\left(x,t;\tau\right)\mathrm{d}\tau=
\frac{1}{2c}
\int_{0}^{t}
\int_{x-c\left(t-\tau\right)}^{x+c\left(t-\tau\right)}
f\left(y,\tau\right)\mathrm{d}y\mathrm{d}\tau.
$$

### Grabación

<iframe width="610" height="350"
  sandbox="allow-same-origin allow-scripts allow-popups"
  src="https://www.youtube-nocookie.com/embed/sJNpwU0Pu3w"
  frameborder="0" allowfullscreen>
</iframe>

- [Diapositiva](https://murena.io/s/KcQ5YsKdNGdziLq)

## Sesión 3 (16.12.2022)

### Grabación

<iframe width="610" height="350"
  sandbox="allow-same-origin allow-scripts allow-popups"
  src="https://www.youtube-nocookie.com/embed/jbvStYo0pA4"
  frameborder="0" allowfullscreen>
</iframe>

- [Diapositiva 1](https://murena.io/s/izcPso2ac9QeX9i)
- [Diapositiva 2](https://murena.io/s/fzNrdFGGHjbsjqF)
- [Diapositiva 3](https://murena.io/s/yGRzQ37dfbtqDEq)

### Referencias

- [Partial Differential Equations: Second Edition by Lawrence C. Evans](http://home.ustc.edu.cn/~xushijie/pdf/textbooks/pde-evans.pdf)
- [Advanced Modern Engineering Mathematics by Glyn James](https://sv.20file.org/up1/692_0.pdf)
- [Advanced Engineering Mathematics by Dennis Zill](https://elasticbeanstalk-us-east-2-344375731421.s3.us-east-2.amazonaws.com/StudyChat/Dennis-G.-Zill-Advanced-Engineering-Mathematics-2016-Jones-Bartlett.pdf)
- [Advanced Engineering Mathematics by Peter V. O'Neil](https://drspmaths.files.wordpress.com/2020/01/advanced-engineering-mathematics-peter-v.-o-neil.pdf)
- [Advanced Engineering Mathematics by Erwin Kreyszig](https://www.bau.edu.jo/UserPortal/UserProfile/PostsAttach/59003_3812_1.pdf)
- [Partial Differential Equations: A First Course by Rustum Choksi](https://murena.io/s/zjZRGH9ffpMWXZD)
- [Partial Differential Equations: An Accessible Route through Theory and Applications by András Vasy](https://murena.io/s/F5ixAHSpKmegCfY)
- [Introduction to Partial Differential Equations with MATLAB](https://murena.io/s/fHRGKbbtjx538Lm)
- [An Introduction to Partial Differential Equations with MATLAB by Matthew P. Coleman](https://perhuaman.files.wordpress.com/2014/07/ecuaciones-diferenciales-matlab-matthew-p-coleman.pdf). Páginas 54-58, 62-65, 138-146, 155, 157, 159-160, 195-201, 250, 378-380, 390-397, 414-421, 439-455, 556, 588, 593, 596-597.
- [Lecture notes based on L.C.Evans’s textbook, by Baisheng Yan](https://users.math.msu.edu/users/yanb/847full-note.pdf). Páginas 65-82.
- Math 124A/215A by Viktor Grigoryan. Páginas [1-7](https://web.math.ucsb.edu/~grigoryan/124A/lecs/lec6.pdf), [1-4](https://web.math.ucsb.edu/~grigoryan/124A/lecs/lec11.pdf), [1-4](https://web.math.ucsb.edu/~grigoryan/124A/lecs/lec13.pdf), [1-4](https://web.math.ucsb.edu/~grigoryan/124A/lecs/lec14.pdf), [1-4](https://web.math.ucsb.edu/~grigoryan/124A/lecs/lec16.pdf), [1-4](https://web.math.ucsb.edu/~grigoryan/124A/lecs/lec16A.pdf), [1-4](https://web.math.ucsb.edu/~grigoryan/124A/lecs/lec17.pdf), [1-4](https://web.math.ucsb.edu/~grigoryan/124A/lecs/lec18.pdf).
- [Vector Analysis and an introduction to tensor analysis by Murray R. Spiegel](http://www.uop.edu.pk/ocontents/Vector%20Analysis%20Schaum.pdf)
- [A first course in partial differential equations](http://people.uncw.edu/hermanr/pde2/PDE2notes/PDE1_Main.pdf)
- [Applied Partial Differential Equations](https://murena.io/s/iS2cPpoPJf99dAp)
- [Fundamentals of Differential Equations](https://murena.io/s/R2XijBkejPH82EY)

<details>
  <summary>
  Vídeos acerca de la interpretación física de las leyes de
  conservación de la energía y del movimiento ondulatorio.
  </summary>
  <iframe width="610" height="350"
  sandbox="allow-same-origin allow-scripts allow-popups"
  src="https://www.youtube-nocookie.com/embed/dE8uotwV2RM"
  frameborder="0" allowfullscreen>
  </iframe>

  <iframe width="610" height="350"
  sandbox="allow-same-origin allow-scripts allow-popups"
  src="https://www.youtube-nocookie.com/embed/aEJWAgiSLMc"
  frameborder="0" allowfullscreen>
  </iframe>
</details>

<iframe width="610" height="350"
  sandbox="allow-same-origin allow-scripts allow-popups"
  src="https://www.youtube-nocookie.com/embed/rB83DpBJQsE"
  frameborder="0" allowfullscreen>
</iframe>