describe('Проверка авторизации', function () {
 
   it('Верный пароль и верный логин', function () {
     cy.visit('https://login.qa.studio'); // Зашел на сайт
     cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки забыли пароль

     cy.get('#mail').type('german@dolnikov.ru'); // Ввел логин
     cy.get('#pass').type('iLoveqastudio1'); // Ввел пароль
     cy.get('#loginButton').click(); // Нажал войти

     cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка успешной авторизации
     cy.get('#messageHeader').should('be.visible'); // Видимое сообщение
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Видимый крестик
   })

   it('Логика востановления пароля', function () {
    cy.visit('https://login.qa.studio'); // Зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки забыли пароль

    cy.get('#forgotEmailButton').click(); // Нажал Забыли пароль?
    cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту
    cy.get('#restoreEmailButton').click() // Нажал Отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка Сообщения
    cy.get('#messageHeader').should('be.visible'); // Видимое сообщение
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Видимый крестик
  })

   it('Неверный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio'); // Зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки забыли пароль

    cy.get('#mail').type('german@dolnikov.ru'); // Ввел логин
    cy.get('#pass').type('QA12345'); // Ввел неверный пароль
    cy.get('#loginButton').click(); // Нажал войти
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка Сообщения
    cy.get('#messageHeader').should('be.visible'); // Видимое сообщение
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Видимый крестик
  })

  it('Верный пароль и неверный логин', function () {
    cy.visit('https://login.qa.studio'); // Зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки забыли пароль

    cy.get('#mail').type('german1@dolnikov.ru'); // Ввел логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввел неверный пароль
    cy.get('#loginButton').click(); // Нажал войти
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка Сообщения
    cy.get('#messageHeader').should('be.visible'); // Видимое сообщение
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Видимый крестик
  })

  it('Проверка что в логине есть @', function () {
    cy.visit('https://login.qa.studio'); // Зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки забыли пароль

    cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввел пароль
    cy.get('#loginButton').click(); // Нажал войти
    
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка Сообщения
    cy.get('#messageHeader').should('be.visible'); // Видимое сообщение
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Видимый крестик
  })

  it('Проверка на приведение к строчным буквам в логине ', function () {
    cy.visit('https://login.qa.studio'); // Зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки забыли пароль

    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввел пароль
    cy.get('#loginButton').click(); // Нажал войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка успешной авторизации
    cy.get('#messageHeader').should('be.visible'); // Видимое сообщение
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Видимый крестик
  })
})
