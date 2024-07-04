describe('Encorp website tests', () => {

    it('should load the Encorp website', async () => {
        
        let res = await fetch("https://encorp.io");
        let responseStatus = await res.status;
        let responseStatusText = await res.statusText;
        
        expect(responseStatus).toEqual(200);
        expect(responseStatusText).toEqual('OK');
    });

    it('should have What we do section', async () => {
        
        let res = await fetch("https://encorp.io");
        let bodyText = await res.text();
        
        expect(bodyText).toContain("What we do");
    });
});