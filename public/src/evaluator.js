export class PasswordEvaluator {
  evaluate(password) {
    if (!password) return 0;
    if (password.length < 6) return 1;
    if (password.length < 10) return 2;
    if (
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[\W]/.test(password)
    ) {
      return 4;
    }
    return 3;
  }
}
