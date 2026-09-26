/**
 * Whether a freshly mounted field should steal focus.
 *
 * On a touch device autoFocus pops the soft keyboard the moment a panel or modal
 * opens, covering roughly half a short screen before the operator has read
 * anything - and several of these fields sit inside centred modals, so the modal
 * is pushed out of view too. A keyboard user still gets the focus.
 */
export function autoFocusOnDesktop(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return true;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}
