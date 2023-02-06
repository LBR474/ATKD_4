describe("Protractor Testing", function () {
  it("to check the page title", function () {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:4200/");
    browser.driver.getTitle().then(function (pageTitle) {
      expect(pageTitle).toEqual("TKD basic poomsae game");
    });
  });
});
