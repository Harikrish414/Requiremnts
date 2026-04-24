/**
 * Email validation
 * Checks if email contains @ and has a domain
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Password validation
 * Checks if password is at least 6 characters
 */
export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

/**
 * Get email error message
 */
export const getEmailError = (email: string): string | null => {
  if (!email) {
    return "Email is required";
  }
  if (!validateEmail(email)) {
    return "Please enter a valid email address";
  }
  return null;
};

/**
 * Get password error message
 */
export const getPasswordError = (password: string): string | null => {
  if (!password) {
    return "Password is required";
  }
  if (!validatePassword(password)) {
    return "Password must be at least 6 characters";
  }
  return null;
};
