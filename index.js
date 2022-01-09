const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo(".hero-grid", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=0.5");
