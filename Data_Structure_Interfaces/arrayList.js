class ArrayList {
  constructor () {
    this.length = 0
    this.data = {}
  }

  push (value) {

  }

  pop () {

  }

  get (index) {

  }

  delete (index) {

  }

  _collapseTo(index) {

  }
}

// unit test
describe('ArrayList', function () {
	const range = length => Array.apply(null, {length: length}).map(Number.call, Number)
	const abcRange = length => range(length).map(num => String.fromCharCode(97 + num))
	let list;

	beforeEach( () => {
		list = new ArrayList()
	})

	it('constructor', () => {
		expect(list).toEqual(jasmine.any(ArrayList))
	})
})