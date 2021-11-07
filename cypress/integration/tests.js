describe('Tests Page', () => {
  describe('calculator', () => {
    beforeEach(() => {
      cy.visit('/tests');
    });
    it('should type numbers correctly', () => {
      cy.contains('1').click();
      cy.get('input').should('have.value', '1');
      cy.contains('2').click();
      cy.get('input').should('have.value', '12');
    });
    it('should type operations correctly', () => {
      cy.contains('1').click();
      cy.contains('+').click();
      cy.get('input').should('have.value', '');
      cy.get('[aria-label="results"] li')
        .should('have.length', 1)
        .first()
        .should('have.text', '1');
      cy.get('[aria-label="operation"]').should('have.text', '+');
    });
    it('should update the operation correctly', () => {
      cy.contains('1').click();
      cy.contains('+').click();
      cy.get('[aria-label="operation"]').should('have.text', '+');
      cy.get('[aria-label="results"] li').should('have.length', 1);
      cy.contains('-').click();
      cy.get('[aria-label="operation"]').should('have.text', '-');
      cy.get('[aria-label="results"] li').should('have.length', 1);
    });
    describe.only('should do the operations correctly', () => {
      it('addition', () => {
        cy.contains('1').click();
        cy.contains('+').click();
        cy.contains('2').click();
        cy.contains('=').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=3');
      });
      it('can do simple subtraction', () => {
        cy.log('subtraction with a positive result');
        cy.get('[data-value="3"]').click();
        cy.get('[data-operation="-"]').click();
        cy.get('[data-value="2"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=1');

        cy.log('subtraction with a negative result');
        cy.get('[data-value="2"]').click();
        cy.get('[data-operation="-"]').click();
        cy.get('[data-value="3"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=-1');
      });
      it('can do subtraction with decimals', () => {
        cy.log('subtraction with a positive result');
        cy.get('[data-value="3"]').click();
        cy.get('[data-value="."]').click();
        cy.get('[data-value="5"]').click();
        cy.get('[data-operation="-"]').click();
        cy.get('[data-value="2"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=1.5');

        cy.log('subtraction with a negative result');
        cy.get('[data-value="2"]').click();
        cy.get('[data-operation="-"]').click();
        cy.get('[data-value="3"]').click();
        cy.get('[data-value="."]').click();
        cy.get('[data-value="5"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=-1.5');
      });
      it('can do simple multiplication', () => {
        cy.contains('3').click();
        cy.contains('x').click();
        cy.contains('4').click();
        cy.contains('=').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=12');
      });
      it('can multiply a decimal', () => {
        cy.contains('3').click();
        cy.contains('.').click();
        cy.contains('5').click();
        cy.contains('x').click();
        cy.contains('4').click();
        cy.contains('=').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=14');
      });
      it('can multiply by a decimal', () => {
        cy.contains('4').click();
        cy.contains('x').click();
        cy.contains('3').click();
        cy.contains('.').click();
        cy.contains('2').click();
        cy.contains('5').click();
        cy.contains('=').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=13');
      });
      it.only('can multiply with negatives', () => {
        cy.log('multiply a negative');
        cy.get('[data-value="-"]').click();
        cy.get('[data-value="2"]').click();
        cy.get('[data-operation="x"]').click();
        cy.get('[data-value="3"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=-6');

        cy.log('multiply by a negative');
        cy.get('[data-value="2"]').click();
        cy.get('[data-operation="x"]').click();
        cy.get('[data-value="-"]').click();
        cy.get('[data-value="3"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=-6');

        cy.log('multiply a negative by a negative');
        cy.get('[data-value="-"]').click();
        cy.get('[data-value="2"]').click();
        cy.get('[data-operation="x"]').click();
        cy.get('[data-value="-"]').click();
        cy.get('[data-value="3"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=6');
      });
      it('can multiply with negatives and decimals', () => {
        cy.log('multiply a negative');
        cy.get('[data-value="-"]').click();
        cy.get('[data-value="2"]').click();
        cy.get('[data-value="."]').click();
        cy.get('[data-value="5"]').click();
        cy.get('[data-operation="x"]').click();
        cy.get('[data-value="3"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=-7.5');

        cy.log('multiply by a negative');
        cy.get('[data-value="2"]').click();
        cy.get('[data-value="."]').click();
        cy.get('[data-value="5"]').click();
        cy.get('[data-operation="x"]').click();
        cy.get('[data-value="-"]').click();
        cy.get('[data-value="3"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=-7.5');

        cy.log('multiply by a negative');
        cy.get('[data-value="2"]').click();
        cy.get('[data-value="."]').click();
        cy.get('[data-value="5"]').click();
        cy.get('[data-operation="x"]').click();
        cy.get('[data-value="-"]').click();
        cy.get('[data-value="3"]').click();
        cy.get('[data-value="."]').click();
        cy.get('[data-value="5"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li')
          .last()
          .should('have.text', '=-8.75');
      });
      it('can do simple division', () => {
        cy.get('[data-value="6"]').click();
        cy.get('[data-operation="/"]').click();
        cy.get('[data-value="2"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=3');
      });
      it('can divide a decimal', () => {
        cy.get('[data-value="6"]').click();
        cy.get('[data-value="."]').click();
        cy.get('[data-value="6"]').click();
        cy.get('[data-operation="/"]').click();
        cy.get('[data-value="3"]').click();
        cy.get('[data-operation="="]').click();
        cy.get('[aria-label="results"] li').last().should('have.text', '=2.2');
      });
    });
  });
});
