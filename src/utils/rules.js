export function required(value) {
  return (value !== undefined && value !== null) || 'This field is required'
}
