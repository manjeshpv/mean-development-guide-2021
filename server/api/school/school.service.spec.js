// async function and business logic


describe('School Service', () => {
  it('create', () => {
    const school = service.create({ name: 'ameriacan' });
    expect(school.id).to.be.equal(1);
  });
});
