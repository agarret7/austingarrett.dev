---
title: Importance Sampling over Discrete Structures
description: A short proof of the consistency of importance sampling when a model contains discrete choices over structures with different sets of parameters.
date: March 13th 2020
---


Importance sampling offers a highly general method for performing inference tasks over arbitrary distributions. While its validity in $\mathbb{R}^n$ is intuitive, when considering discrete structural choices with different sets of continuous parameters associated with them, we may question if the importance weighted approximation over their different measures is valid.

Let's define a generative model under which we sample a discrete structure $k \sample p(\cdot)$ and a corresponding set of continous parameters, $\bm{\theta} \sample p(\cdot | k)$ of length $N_k$, under which we generate an observation $\mathcal{D} \sample p(\cdot | k, \bm{\theta})$. The full joint distribution is then
$$
  p(k,\bm{\theta},\mathcal{D}) = p(k)p(\bm{\theta} | k)p(\mathcal{D} | k, \bm{\theta})
$$

We may wish to recover the posterior, or compute expectations of test functions of the latent parameters, but because of the intractability of the marginal
$$
  p(\mathcal{D}) = \sum_k p(k) \int_\Theta p(\bm{\theta}|k)p(\mathcal{D}|k,\bm{\theta})\ d\bm{\theta}
$$

it's not feasible to do so. We might then choose to use importance sampling to form an estimate of the marginal. We sample a set of $N$ latent parameters $\brace{(\bm{\theta}_i,k_i)}_i \sample q(\cdot,\cdot)$ from some proposal distribution $q$, and assign a corresponding weight
$$
  w(k, \bm{\theta}) = \frac{p(k)p(\bm{\theta}|k)p(\mathcal{D}|k,\bm{\theta})}{q(k, \bm{\theta})}
$$

**Theorem 1.** _The expected value of the importance weights is the marginal likelihood._

_Proof._ It sufficies to show
$$
  \E_q\bracket{w(k, \bm{\theta})} = p(\mathcal{D})
$$

$$
\begin{aligned}
  \sum_k \int_\Theta w(k, \bm{\theta})q(k, \bm{\theta})\ d\bm{\theta} &= \sum_k \int_\Theta \frac{p(k)p(\bm{\theta}|k)p(\mathcal{D}|k,\bm{\theta})}{q(k, \bm{\theta})}q(k, \bm{\theta})\ d\bm{\theta} \\
  &= \sum_k p(k) \int_\Theta p(\bm{\theta}|k)p(\mathcal{D}|k,\bm{\theta})\ d\bm{\theta} \\
  &= p(\mathcal{D})
\end{aligned}
$$

$\Box$

If we have an consistent estimator of the marginal likelihood, we can also show how the weights also allow us to form an consistent estimator of any test function under the posterior distribution. To do this, we introduce a quantity called the self-normalized importance sampling estimator.
$$
  \tilde{\mu}_f = \frac{\E_q\bracket{w(k, \bm{\theta})f(k, \bm{\theta})}}{\E_q\bracket{w(k, \bm{\theta})}}
$$
**Theorem 2.** _The self-normalized importance sampling estimator is an consistent estimator of the expected value of the test function under the posterior._

_Proof._ It sufficies to show
$$
  \tilde{\mu}_f = \E_{(k, \bm{\theta}) \sample p(\cdot, \cdot | \mathcal{D})}\bracket{f(k, \bm{\theta})} = p(\mathcal{D}) \cdot \E_{(k, \bm{\theta}) \sample p(\cdot, \cdot | \mathcal{D})}\bracket{f(k, \bm{\theta})}
$$

$$
\begin{aligned}
  \sum_k \int_\Theta w(k, \bm{\theta})q(k, \bm{\theta})f(k, \bm{\theta})\ d\bm{\theta} &= \sum_k \int_\Theta \frac{p(k)p(\bm{\theta}|k)p(\mathcal{D}|k,\bm{\theta})}{q(k, \bm{\theta})}q(k, \bm{\theta})\ d\bm{\theta} \\
  &= \sum_k \int_\Theta p(k, \bm{\theta}, \mathcal{D}) f(k, \bm{\theta})\ d\bm{\theta} \\
  &= p(\mathcal{D})\sum_k \int_\Theta p(k, \bm{\theta} | \mathcal{D})f(k, \bm{\theta})\ d\bm{\theta} \\
\end{aligned}
$$

$\Box$

We were able to avoid a measure-theoertic analysis by exploiting the factorization of the distribution. If the continous parameters are independent given a discrete structure choice, all we need to do is consider the expectations of the relevant distributions. Looks like we can rest easy using importance sampling for a simple branching model.