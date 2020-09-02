class Constants {
  // API KEY
  static get APISecretKey() {
    return "Esta é uma chave secreta para a autenticação de tokens. Use uma string aleatória.";
  }

  // API CODES
  static get successCode() {
    return 0;
  }
  static get errorCodeMongoose() {
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

  // API DESCRIPTION CODES
  static get successDesc() {
    return "Sucesso";
  }
  static get notFoundDesc() {
    return "Registro não encontrado";
  }
  static get invalidPassCode() {
    return "Código informado inválido.";
  }
  static get authenticationFailed() {
    return "Usuário ou senha inválidos";
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
}

module.exports = Constants;