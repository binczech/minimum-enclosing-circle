/// <reference types="cypress" />

describe('Circle Calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should show error for invalid input', () => {
    cy.inputShouldHaveValue('graphSetup_countOfPoints', '4');
    // try to input value < 4
    cy.typeInInput('graphSetup_countOfPoints', '1').should('have.value', '1');
    cy.errorShouldExist('Count of points must be greater than 3');
    cy.submitForm();
    cy.getByTestId('graph-modal').should('not.exist');
    // try to input invalid value
    cy.typeInInput('graphSetup_countOfPoints', 'aaa').should('have.value', 'aaa');
    cy.errorShouldExist('Please input Count of points!');
    cy.getByTestId('submit-form').should('be.disabled');
    // try to input value > 100
    cy.typeInInput('graphSetup_countOfPoints', '101').should('have.value', '101');
    cy.errorShouldExist('Count of points must be less than 101');
    cy.submitForm();
    cy.getByTestId('graph-modal').should('not.exist');
  });
  it('should show graph for valid input', () => {
    cy.getGraph(4);
    // try to close modal by close button in top right corner
    cy.get('.ant-modal-close').click();
    cy.getByTestId('graph-modal').should('not.exist');
    // try to close modal by click outside of modal
    cy.getGraph(6);
    cy.clickOutside();
    cy.getByTestId('graph-modal').should('not.exist');
    // try to close modal by ESC
    cy.getGraph(10);
    cy.getByTestId('graph-modal').type('{esc}');
    cy.getByTestId('graph-modal').should('not.exist');
  });
});
