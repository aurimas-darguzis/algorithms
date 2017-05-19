class ArrayList {
  constructor () {
    this.length = 0
    this.data = {}
  }

  push (value) {
  	// this would put to the end
  	this.data[this.length] = value
  	this.length++
  }

  pop () {
  	// get the last thing in the array
  	// const ans = this.data[this.length-1]
  	// delete this.data[this.length-1]
  	// this.length--
  	// return ans
  	return this.delete(this.length-1)

  }

  get (index) {
  	return this.data[index]

  }

  delete (index) {
  	const ans = this.data[index]
  	this._collapseTo(index)
  	return ans
  }

  _collapseTo(index) {
  	for (let i = index; i < this.length; i++) {
  		this.data[i] = this.data[i+1]
  	}
  	delete this.data[this.length-1]
  	this.length--
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