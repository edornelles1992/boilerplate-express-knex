class Constants {
  // API KEY
  static get APISecretKey() {
    return "Esta é uma chave secreta para a autenticação de tokens. Use uma string aleatória.";
  }

  // API CODES
  static get successCode() {
    return 0;
  }
  static get errorCodeDatabase() {
    return 1;
  }
  static get errorCodeAuth() {
    return 2;
  }
  static get notFound() {
    return 3;
  }
  static get invalidFields() {
    return 4;
  }
  static get invalidUser() {
    return 5;
  }
  static get duplicateKey() {
    return 11000;
  }

  // GENERAL CONSTANTS
  static get minRandomNumber() {
    return 100000000000;
  }
  static get maxRandomNumber() {
    return 999999999999;
  }
  static get sessionTime() {
    return "1h";
  }

  // API DESCRIPTION CODES
  static get successDesc() {
    return "Sucesso";
  }
  static get genericErrorDesc() {
    return "Erro Inesperado.";
  }
  static get notFoundDesc() {
    return "Registro não encontrado";
  }
  static get invalidPassCode() {
    return "Código informado inválido.";
  }
  static get authenticationFailed() {
    return "E-mail ou senha inválidos";
  }
  static get invalidToken() {
    return "Token inválido";
  }
  static get tokenNotFound() {
    return "Token não encontrado";
  }
  static get invalidCpf() {
    return "CPF inválido";
  }
  static get invalidCnpj() {
    return "CNPJ inválido";
  }
  static get invalidPassword() {
    return "Senha deve conter de 6 a 11 caracteres";
  }
  static get invalidName() {
    return "Nome inválido";
  }
  static get invalidFullName() {
    return "Sobrenome inválido";
  }
  static get invalidEmail() {
    return "E-mail inválido";
  }
  static get emailAlreadyRegistered() {
    return "E-mail já cadastrado";
  }
  //EMAIL SENDER DATA
  static get returnEmailSender() {
    return "testeteste@gmail.com";
  }

  static get returnPasswordSender() {
    return "123123123";
  }

  static get returnSMTPProvider() {
    return "Gmail";
  }

  static get genericError() {
    return { code: Constants.errorCodeDatabase, desc: Constants.genericErrorDesc }
  }

  static get invalidSession() {
    return { code: Constants.errorCodeAuth , desc: Constants.invalidToken }
  }
}

module.exports = Constants;