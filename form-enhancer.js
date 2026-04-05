// Webflow Atomic Form Fields Enhancer
// Handles dynamic type, required, placeholder, and name

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll(
      'input[data-input-type], input[data-required], input[data-placeholder], input[data-name]'
    )
    .forEach((input) => {
      // Dynamic type (email, password, tel, etc.)
      const inputType = input.getAttribute('data-input-type')
      if (inputType) input.type = inputType

      // Required
      const requiredVal = input.getAttribute('data-required')
      if (requiredVal === 'true' || requiredVal === '1') input.required = true
      else if (requiredVal === 'false' || requiredVal === '0') input.required = false

      // Placeholder
      const placeholderText = input.getAttribute('data-placeholder')
      if (placeholderText !== null) input.placeholder = placeholderText

      // Name
      const fieldName = input.getAttribute('data-name')
      if (fieldName) input.name = fieldName
    })
})
