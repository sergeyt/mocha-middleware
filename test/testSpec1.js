describe('first fixture', () => {
	it('should run in browser', () => {
		const isBrowser = typeof window !== undefined;
		console.log('running inside browser:', isBrowser ? 'yes' : 'no');
	});
});
