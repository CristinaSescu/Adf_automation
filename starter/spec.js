// spec.js

describe('Alfresco ADF automation QA exercise', function() {

 it('test', function() {
	 
	 browser.get('http://qaexercise.envalfresco.com/settings');
	 element(by.id('adf-provider-selector')).click();
	 element(by.id('mat-option-1')).click();
	 element(by.id('host-button')).click();
	 element(by.id('username')).sendKeys('guest@example.com');
	 element(by.id('password')).sendKeys('Password');
	 element(by.id('login-button')).click();
	 element(by.css('[data-automation-id="Content Services"]')).click();
	 element(by.css('[data-automation-id="create-new-folder"]')).click();
	 
	 expect(element(by.id('mat-dialog-0')).isPresent()).toBe(true);
	 
	 element(by.id('adf-folder-name-input')).sendKeys('Cristina');
	 element(by.id('adf-folder-create-button')).click();
	 
	 expect(element(by.id('mat-dialog-0')).isPresent()).toBe(false);
	 expect(element(by.id('document-list-container')).getText()).toContain('Cristina');
	 
	 element(by.css('[data-automation-id="create-new-folder"]')).click();
	 element(by.id('adf-folder-name-input')).sendKeys('Cristina');
	 element(by.id('adf-folder-create-button')).click();
	 
	 expect(element(by.tagName('simple-snack-bar')).getText()).toContain("There's already a folder with this name. Try a different name.");
	 
	 element(by.id('adf-folder-cancel-button')).click();
	
	 let dataAutomationId = element(by.css('[aria-label="Cristina"]')).getAttribute('data-automation-id').then(function(resultText){
		 let index = resultText.split('-')[2];
		 let buttonId = 'action_menu_right_' + index;
		 element(by.id(buttonId)).click();
		 element(by.css('[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]')).click();
		 
		 expect(element(by.css('[aria-label="Cristina"]')).isPresent()).toBe(false);
	});
	 
  });

});