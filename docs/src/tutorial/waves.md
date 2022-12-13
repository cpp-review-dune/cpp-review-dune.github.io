# [Métodos analíticos de resolución de la Ecuación de Onda (1D, 2D y 3D) 🌊](https://departamento.pucp.edu.pe/ciencias/evento/minicursos-virtuales-de-matematicas)

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

## Sesión 1 (05.12.2022)

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
</details>


## Sesión 2 (12.12.2022)

### Grabación

<iframe width="610" height="350"
  sandbox="allow-same-origin allow-scripts allow-popups"
  src="https://www.youtube-nocookie.com/embed/sJNpwU0Pu3w"
  frameborder="0" allowfullscreen>
</iframe>

- [Diapositiva](https://murena.io/s/KcQ5YsKdNGdziLq)