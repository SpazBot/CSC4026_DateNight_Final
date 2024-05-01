//Simple function to check if the form is empty
export const isFormInvalid = err => {
  if (Object.keys(err).length > 0) return true
  return false
}