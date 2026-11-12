export function isValidPhone(value: string) {
  if (!/^\+?[\d\s().-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, '');
  const national = digits.length > 11 && digits.startsWith('55') ? digits.slice(2) : digits;
  return /^([1-9]\d)([2-5]\d{7}|9\d{8})$/.test(national) && !/^(\d)\1+$/.test(national);
}

export function validateContactForm(form: HTMLFormElement) {
  const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input:not([type="hidden"]), textarea, select');
  fields.forEach(field => {
    field.setCustomValidity('');
    const value = field.value.trim();
    if (field.required && !value) field.setCustomValidity('Preencha este campo.');
    else if (field instanceof HTMLInputElement && field.type === 'tel' && value && !isValidPhone(value)) {
      field.setCustomValidity('Informe um telefone com DDD, por exemplo (21) 99999-9999.');
    }
    field.setAttribute('aria-invalid', String(!field.validity.valid));
  });
  return form.reportValidity();
}

export function clearFieldError(event: React.FormEvent<HTMLFormElement>) {
  const field = event.target;
  if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) {
    field.setCustomValidity('');
    field.removeAttribute('aria-invalid');
  }
}

export function markInvalidField(event: React.FormEvent<HTMLFormElement>) {
  (event.target as HTMLElement).setAttribute('aria-invalid', 'true');
}

export function formText(data: FormData, key: string) {
  return String(data.get(key) ?? '').trim();
}
