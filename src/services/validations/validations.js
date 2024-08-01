export const checkEmail = (email) => {
  const emailRequirements = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  return emailRequirements.test(email)
}
