import { useCallback, useEffect, useMemo, useRef } from 'react';

// requires atleast 3 slides
export function use3DCarousel() {
	const c_ref = useRef(null);
	const ready = useCallback(() => !!c_ref.current, []);

	const getVisibleSlides = useCallback(
		() =>
			['__l__', '__c__', '__r__'].map(
				cn => c_ref.current.getElementsByClassName(cn)[0]
			),
		[]
	);

	const next = useCallback(() => {
		if (!ready()) return;
		const [l, c, r] = getVisibleSlides();

		l.className = '__slide__';
		c.className = '__slide__ __l__';
		r.className = '__slide__ __c__';

		const new_r = r.nextElementSibling || c_ref.current.firstElementChild;
		new_r.classList.add('__r__');
	}, []);

	const prev = useCallback(() => {
		if (!ready()) return;
		const [l, c, r] = getVisibleSlides();

		l.className = '__slide__ __c__';
		c.className = '__slide__ __r__';
		r.className = '__slide__';

		const new_l = l.previousElementSibling || c_ref.current.lastElementChild;
		new_l.classList.add('__l__');
	}, []);

	const c_api = useMemo(() => ({ next, prev, ready }), []);

	useEffect(() => {
		if (!ready()) return;
		['__l__', '__c__', '__r__'].forEach((cn, i) =>
			c_ref.current.children[i].classList.add(cn)
		);

		for (let slide of c_ref.current.children)
			slide.classList.add('__slide__');
	}, []);

	return [c_ref, c_api];
}
