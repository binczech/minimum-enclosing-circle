/* eslint-disable no-undef */
/// <reference types="cypress" />

export {};
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('getByTestId', (testId: string) => cy.get(`[data-testid="${testId}"]`));
Cypress.Commands.add('findByTestId', { prevSubject: true }, (subject, testId: string) => subject
  .find(`[data-testid="${testId}"]`));
Cypress.Commands.add('getById', (id: string) => cy.get(`#${id}`));
Cypress.Commands.add('typeInInput', (inputTestId: string, value: string) => cy
  .getById(String(inputTestId))
  .clear()
  .type(value)
  .should('have.value', value));
Cypress.Commands.add('clickTestElement', (testId: string) => {
  cy.getByTestId(testId).click();
});
Cypress.Commands.add('submitForm', () => cy.getByTestId('submit-form').click());
Cypress.Commands.add('errorShouldExist', (errorText: string) => cy
  .get('.ant-form-item-explain-error')
  .contains(errorText)
  .should('exist'));
Cypress.Commands.add('inputShouldHaveValue', (inputTestId: string, value: string) => cy
  .getById(inputTestId)
  .should('have.value', value));
Cypress.Commands.add('getGraph', (countOfPoints: number) => {
  cy.inputShouldHaveValue('graphSetup_countOfPoints', '4');
  cy.submitForm();
  cy.getByTestId('graph-modal').should('be.visible');
});
Cypress.Commands.add('clickOutside', () => {
  cy.get('body').click(0, 0);
});

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Cypress {
    interface Chainable {
        getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        findByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        getById(id: string): Chainable<JQuery<HTMLElement>>;
        typeInInput(inputTestId: string, value: string): Chainable<JQuery<HTMLElement>>;
        clickTestElement(testId: string): void;
        submitForm(): void;
        errorShouldExist(errorText: string): void;
        inputShouldHaveValue(inputTestId: string, value: string): void;
        getGraph(countOfPoints: number): void;
        clickOutside(): void;
    }
  }
}
