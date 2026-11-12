'use client';

import { useEffect, type RefObject } from 'react';

/** Native dialog makes the background inert; explicit cycling keeps Tab inside the content. */
export function useModalDialog(open: boolean, ref: RefObject<HTMLDialogElement>) {
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !open) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    dialog.querySelector<HTMLElement>('[data-initial-focus]')?.focus();
    const keepFocusInside = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const controls = Array.from(dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(element => element.tabIndex >= 0 && element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!first || !last) { event.preventDefault(); dialog.focus(); return; }
      const outside = !dialog.contains(document.activeElement);
      if (event.shiftKey && (document.activeElement === first || outside)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || outside)) {
        event.preventDefault(); first.focus();
      }
    };
    dialog.addEventListener('keydown', keepFocusInside);
    return () => {
      dialog.removeEventListener('keydown', keepFocusInside);
      dialog.close();
      document.body.style.overflow = overflow;
      if (previous?.isConnected) previous.focus({ preventScroll: true });
    };
  }, [open, ref]);
}
