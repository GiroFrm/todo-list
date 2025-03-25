

export function toggleForm(formElement, isVisible=null) {
    if (!formElement) return;

    formElement.style.display = isVisible === null
    ? (formElement.style.display === 'none' ? 'block' : 'none')
    : (isVisible ? 'block' : 'none');
 }