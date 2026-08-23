import type { ObjectDirective } from 'vue';

export type RevealOptions = {
  delay?: number;
  x?: number;
  y?: number;
};

const revealedClass = 'is-revealed';
let observer: IntersectionObserver | undefined;

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        entry.target.classList.add(revealedClass);
        observer?.unobserve(entry.target);
      }
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -7% 0px',
    },
  );

  return observer;
}

function applyOptions(element: HTMLElement, options: RevealOptions = {}) {
  element.classList.add('scroll-reveal');
  element.style.setProperty('--reveal-delay', `${Math.max(0, options.delay ?? 0)}ms`);
  element.style.setProperty('--reveal-x', `${options.x ?? 0}px`);
  element.style.setProperty('--reveal-y', `${options.y ?? 30}px`);
}

export const revealDirective: ObjectDirective<HTMLElement, RevealOptions | undefined> = {
  beforeMount(element, binding) {
    applyOptions(element, binding.value);
  },
  mounted(element) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      element.classList.add(revealedClass);
      return;
    }

    getObserver().observe(element);
  },
  beforeUnmount(element) {
    observer?.unobserve(element);
  },
  getSSRProps() {
    return {};
  },
};
