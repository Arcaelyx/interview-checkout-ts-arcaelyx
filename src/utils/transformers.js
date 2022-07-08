export const formatCentsToDollars = cents => {
  if (cents < 10) {
    return `$0.0${cents}`;
  }

  const d = (cents / 100) >> 0;
  const c = cents % 100;

  return `$${d}.${c}`;
};