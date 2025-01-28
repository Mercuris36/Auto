describe('Покупка аватара', function () {
 
    it('Тест на покупку аватара для тренера', function () {
      cy.visit('https://pokemonbattle.ru'); // Зашел на сайт
      cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввел логин
      cy.get('#password').type('USER_PASSWORD'); // Ввел пароль
      cy.get('.auth__button').click(); // Нажал ввойти
      cy.wait(2000);
      cy.get('.header__container > .header__id').click({ force: true }); // Зашел на страницу тренера
      cy.get('[href="/shop"]').click(); // Нажал Сменить Аватар
      cy.get('.available > button').first().click({ force: true }); // Кликнул купить у первого доступного аватара
      cy.get('.credit').type('4620869113632996'); // Номер карты
      cy.get('.k_input_ccv').type('125'); // CVV
      cy.get('.k_input_date').type('1225'); // Срок действия
      cy.get('.k_input_name').type('NAME');  // Имя
      cy.get('.pay-btn').click();  // Кнопка Оплатить
      cy.get('#cardnumber').type('56456'); // код СМС
      cy.get('.payment__submit-button').click(); // Кнопка Отправить
      cy.contains('Покупка прошла успешно').should('be.visible'); // Проверка Сообщения


    })
})
