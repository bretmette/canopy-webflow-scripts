// Webflow Atomic Form Fields Enhancer (2026)
// Supports Text Input + Select

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll(
      'input[data-input-type], input[data-required], input[data-placeholder], input[data-name], ' +
      'select[data-required], select[data-name], select[data-select-options], select[data-multiple]'
    )
    .forEach((field) => {

      // ── INPUT FIELDS ─────────────────────────────────────
      if (field.tagName === 'INPUT') {
        // Type (email, password, tel, etc.)
        const inputType = field.getAttribute('data-input-type')
        if (inputType) field.type = inputType

        // Placeholder
        const placeholderText = field.getAttribute('data-placeholder')
        if (placeholderText !== null) field.placeholder = placeholderText
      }

      // ── SELECT FIELDS ────────────────────────────────────
      if (field.tagName === 'SELECT') {
        // Dynamic options from comma-separated list
        const optionsText = field.getAttribute('data-select-options')
        if (optionsText) {
          field.innerHTML = '' // clear existing options

          const optionsArray = optionsText.split(',').map(opt => opt.trim())

          optionsArray.forEach((text, index) => {
            const option = document.createElement('option')
            option.value = text
            option.textContent = text
            if (index === 0) option.value = '' // first option as placeholder
            field.appendChild(option)
          })
        }

        // Multiple select (Switch property)
        const multipleVal = field.getAttribute('data-multiple')
        if (multipleVal === 'true' || multipleVal === 'True') {
          field.multiple = true
        } else if (multipleVal === 'false' || multipleVal === 'False') {
          field.multiple = false
        }
      }

      // ── COMMON ──────────────────
      // Required (Switch property)
      const requiredVal = field.getAttribute('data-required')
      if (requiredVal === 'true' || requiredVal === 'True') {
        field.required = true
      } else if (requiredVal === 'false' || requiredVal === 'False') {
        field.required = false
      }

      // Field name (for form submissions)
      const fieldName = field.getAttribute('data-name')
      if (fieldName) field.name = fieldName
    })
})
