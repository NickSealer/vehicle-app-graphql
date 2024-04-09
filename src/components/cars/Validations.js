class Validations {
  static validateString(string) {
    const validateString = /^[\w\s\-]{3,40}$/;
    let result = validateString.test(string);
    return result;
  }

  static validateYear(year) {
    const validateYear = /^[\d]{4}$/;
    let result = validateYear.test(year);
    return result;
  }

  static validateTransmission(transmission) {
    const transmissions = ['0', '1'];
    const validateTransmission = RegExp(`^(${transmissions.join('|')})$`);
    let result = validateTransmission.test(transmission);
    return result;
  }

  static validateCategory(category) {
    const categories = [
      '0', '1', '2', '3', '4', '5',
      '6','7', '8', '9', '10', '11'
    ];
    const validateCategory = RegExp(`^(${categories.join('|')})$`);
    let result = validateCategory.test(category);
    return result;
  }
}

export default Validations;
