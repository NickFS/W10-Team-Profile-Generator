const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "AUniversity";
    const e = new Intern("Nick", 1, "nick@fakemail.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Nick", 1, "nick@fakemail.com", "UCLA", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "AUniversity";
    const e = new Intern("Nick", 1, "nick@fakemail.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});